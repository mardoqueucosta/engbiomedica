/**
 * Imagens da capa azul (PageHeader) tiradas dos próprios artigos do site.
 * Roda no servidor/build (lê o disco para escolher a versão reduzida da imagem).
 */
import fs from 'fs';
import path from 'path';
import { mainNavigation } from '@/data/navigation';
import { artigosMeta, artigosMetaMap } from '@/data/artigos/metadata';
import { docentes } from '@/data/ppgeb';
import type { ImagemPalco } from '@/components/ui/PalcoImagens';

/** Versão reduzida da imagem (`-640.webp`/`-768.webp`), quando existe em public/. */
function versaoReduzida(src: string, largura: 640 | 768): string {
  if (!src.endsWith('.webp')) return src;
  const reduzida = src.replace(/\.webp$/, `-${largura}.webp`);
  return fs.existsSync(path.join(process.cwd(), 'public', reduzida)) ? reduzida : src;
}

function primeiraImagem(slug: string, largura: 640 | 768): ImagemPalco | null {
  const img = artigosMetaMap[slug]?.imagens?.[0];
  if (!img?.src) return null;
  return { src: versaoReduzida(img.src, largura), alt: img.alt };
}

/** A imagem principal de um artigo, para a capa do próprio artigo. */
export function imagemDoArtigo(slug: string): ImagemPalco[] {
  const img = primeiraImagem(slug, 768);
  return img ? [img] : [];
}

/** Até 3 imagens dos artigos do submenu de uma seção do menu (ex.: '/formacao'). */
export function imagensDaSecao(hrefSecao: string, quantidade = 3): ImagemPalco[] {
  const secao = mainNavigation.find((item) => item.href === hrefSecao);
  const slugs = (secao?.children ?? [])
    .map((c) => c.href)
    .filter((h) => h.startsWith('/artigos/'))
    .map((h) => h.replace('/artigos/', ''));
  const imagens: ImagemPalco[] = [];
  for (const slug of slugs) {
    const img = primeiraImagem(slug, 640);
    if (img) imagens.push(img);
    if (imagens.length === quantidade) break;
  }
  return imagens;
}

/** Imagens dos artigos mais recentes (lista de artigos, página inicial). */
export function imagensRecentes(quantidade = 3): ImagemPalco[] {
  const imagens: ImagemPalco[] = [];
  for (const a of artigosMeta) {
    const img = primeiraImagem(a.slug, 640);
    if (img) imagens.push(img);
    if (imagens.length === quantidade) break;
  }
  return imagens;
}

/** Fotos dos docentes do PPGEB (até 10), para a capa das páginas do programa. */
export function fotosDocentes(quantidade = 10): ImagemPalco[] {
  return docentes.slice(0, quantidade).map((d) => ({ src: d.foto, alt: d.nome }));
}
