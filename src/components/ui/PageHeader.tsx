import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { PalcoImagens, type ImagemPalco } from './PalcoImagens';

/** Preposições onde o título se divide entre a parte branca e a parte em destaque. */
const PREPOSICOES = new Set(['de', 'da', 'do', 'das', 'dos', 'em', 'na', 'no', 'nas', 'nos', 'com', 'para', 'e']);

/**
 * Divide o título em parte branca e parte em destaque (azul claro), como na Biopdi
 * ("Máquina Universal" + "de Ensaios"). Regra: depois de ":" se houver; senão, a partir
 * da última preposição do título (a partir da segunda palavra). Títulos curtos ficam inteiros.
 */
export function dividirTitulo(titulo: string): [string, string | null] {
  const doisPontos = titulo.indexOf(': ');
  if (doisPontos > 0) return [titulo.slice(0, doisPontos + 1), titulo.slice(doisPontos + 2)];

  const palavras = titulo.split(' ');
  if (palavras.length < 3) return [titulo, null];
  for (let i = palavras.length - 2; i >= 1; i--) {
    if (PREPOSICOES.has(palavras[i].toLowerCase())) {
      return [palavras.slice(0, i).join(' '), palavras.slice(i).join(' ')];
    }
  }
  return [titulo, null];
}

/**
 * Capa azul do topo das páginas: breadcrumb, título em duas cores, subtítulo, ações
 * e, à direita, imagens (`imagens`) ou outro conteúdo (`palco`). Sem imagens, fica numa coluna.
 * No celular as imagens vão abaixo do texto.
 */
export function PageHeader({
  overline,
  title,
  destaque,
  description,
  breadcrumbs,
  centered,
  colunaLarga,
  imagens,
  palco,
  acoes,
}: {
  overline?: string;
  title: string;
  /** Parte final do título em azul claro. Omitido: divisão automática; `false`: título inteiro em branco. */
  destaque?: string | false;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  /** Sem imagens, centraliza o texto numa coluna (artigos sem imagem, páginas institucionais). */
  centered?: boolean;
  /** Com `centered`: coluna de 1024 px em vez de 768 px (artigos, alinhados ao texto). */
  colunaLarga?: boolean;
  imagens?: ImagemPalco[];
  palco?: ReactNode;
  acoes?: ReactNode;
}) {
  let parteBranca = title;
  let parteDestaque: string | null = null;
  if (typeof destaque === 'string' && title.endsWith(destaque)) {
    parteBranca = title.slice(0, title.length - destaque.length).trimEnd();
    parteDestaque = destaque;
  } else if (destaque !== false) {
    [parteBranca, parteDestaque] = dividirTitulo(title);
  }

  const direita = palco ?? (imagens && imagens.length > 0 ? <PalcoImagens imagens={imagens} /> : null);
  const umaColuna = !direita;

  return (
    <section className="topo-azul overflow-hidden">
      <div
        className={`container-page grid gap-8 pt-8 pb-10 lg:pt-12 lg:pb-14 items-end ${
          umaColuna ? '' : 'lg:grid-cols-[minmax(0,600px)_1fr] lg:gap-10'
        }`}
      >
        <div className={umaColuna && centered ? `${colunaLarga ? 'max-w-5xl' : 'max-w-3xl'} mx-auto w-full` : 'min-w-0'}>
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="mb-4 text-xs font-mono topo-azul__suave">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li className="flex-shrink-0">
                  <Link href="/" className="hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                {breadcrumbs.map((crumb, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <li key={i} className={`flex items-center gap-1.5 min-w-0 ${isLast && !crumb.href ? 'hidden sm:flex' : 'flex-shrink-0'}`}>
                      <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                      {crumb.href ? (
                        <Link href={crumb.href} className="hover:text-white transition-colors">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-white truncate max-w-[220px] lg:max-w-[420px]" aria-current="page">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {overline && (
            <span className="text-overline uppercase text-teal-300 tracking-[0.14em] mb-3 block">{overline}</span>
          )}
          <h1
            className={`font-sans font-bold text-white leading-[1.08] tracking-[-0.025em] text-balance break-words ${
              title.length > 70 ? 'text-[1.75rem] lg:text-[2.5rem]' : 'text-[2rem] lg:text-[3.1rem]'
            }`}
          >
            {parteBranca}
            {parteDestaque && (
              <>
                {' '}
                <span className="topo-azul__destaque">{parteDestaque}</span>
              </>
            )}
          </h1>
          {description && (
            <p className={`mt-4 font-sans text-[17px] lg:text-[19px] leading-relaxed topo-azul__texto ${colunaLarga ? 'max-w-3xl' : 'max-w-[600px]'}`}>
              {description}
            </p>
          )}
          {acoes && <div className="mt-7 flex flex-wrap gap-3">{acoes}</div>}
        </div>

        {direita && <div className="min-w-0">{direita}</div>}
      </div>
    </section>
  );
}
