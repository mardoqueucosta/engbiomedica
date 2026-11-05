import Link from 'next/link';
import { ExternalLink, FileDown, Mail, ArrowRight } from 'lucide-react';
import {
  areasConcentracao,
  PPGEB_EMAIL,
  PPGEB_INSCRICAO_URL,
  type LinkDocumento,
} from '@/data/ppgeb';

/** As 3 áreas de concentração com as linhas de pesquisa de cada uma. */
export function AreasLinhas() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 mb-12">
      {areasConcentracao.map((area, i) => (
        <div key={area.slug} className="card p-5">
          <span className="text-overline uppercase text-teal-700 tracking-[0.12em] block mb-1">
            Área {i + 1}
          </span>
          <h3 className="text-h3 text-slate-900 mb-2 leading-tight">{area.nome}</h3>
          <p className="text-body-sm text-slate-500 font-serif mb-4 leading-relaxed">{area.resumo}</p>
          <ul className="space-y-3">
            {area.linhas.map((linha) => (
              <li key={linha.nome} className="border-l-2 border-teal-200 pl-3">
                <span className="block text-body-sm font-semibold text-slate-800">{linha.nome}</span>
                <span className="block text-body-sm text-slate-500 font-serif">{linha.descricao}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Lista de documentos e links externos (regulamento, modelos, repositórios). */
export function DocumentosLista({ documentos }: { documentos: LinkDocumento[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
      {documentos.map((doc) => (
        <a
          key={doc.href + doc.titulo}
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card p-5 group block text-center"
        >
          <div className="w-10 h-10 rounded-lg bg-coral-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-coral-100 transition-colors">
            {doc.formato === 'PDF' || doc.formato === 'DOCX' ? (
              <FileDown className="w-5 h-5 text-coral-500" />
            ) : (
              <ExternalLink className="w-5 h-5 text-coral-500" />
            )}
          </div>
          <h3 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">{doc.titulo}</h3>
          <p className="text-body-sm text-slate-400 font-mono">{doc.formato}</p>
        </a>
      ))}
    </div>
  );
}

/** Chamada final: inscrição no sistema da UB e contato do programa. */
export function CtaInscricao({ titulo, texto, ubUrl }: { titulo: string; texto: string; ubUrl?: string }) {
  return (
    <div className="card p-6 lg:p-8 bg-primary-50 border-primary-100 text-center">
      <h2 className="text-h2 text-primary-800 mb-2">{titulo}</h2>
      <p className="text-body text-slate-600 font-serif mb-6 max-w-xl mx-auto">{texto}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={PPGEB_INSCRICAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          Inscreva-se na Universidade Brasil
        </a>
        {ubUrl && (
          <a
            href={ubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-200 text-primary-700 hover:bg-white font-semibold rounded-lg transition-colors"
          >
            Valores e bolsas na UB
          </a>
        )}
      </div>
      <p className="text-body-sm text-slate-500 mt-5">
        Dúvidas sobre o programa:{' '}
        <a href={`mailto:${PPGEB_EMAIL}`} className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700">
          <Mail className="w-3.5 h-3.5" />
          {PPGEB_EMAIL}
        </a>
      </p>
    </div>
  );
}

/** Atalho para uma seção da página do programa, usado nas páginas de curso. */
export function LinkPrograma({ href, titulo, texto }: { href: string; titulo: string; texto: string }) {
  return (
    <Link
      href={href}
      className="card p-5 group flex items-center justify-between gap-4 hover:border-primary-200 transition-colors"
    >
      <div>
        <h3 className="text-h3 text-slate-900 group-hover:text-primary-700 transition-colors">{titulo}</h3>
        <p className="text-body-sm text-slate-500 font-serif mt-1">{texto}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors flex-shrink-0" />
    </Link>
  );
}
