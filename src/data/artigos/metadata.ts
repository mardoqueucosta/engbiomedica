/**
 * Metadados leves dos artigos — lidos dinamicamente dos frontmatter .mdx.
 * Usado por: /artigos (lista), sitemap.ts, image-sitemap, newsletter.
 * Isso evita carregar ~400 KB de HTML no bundle de páginas que não precisam do conteúdo.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArtigoImagem {
  src: string;
  alt: string;
  caption: string;
}

export interface ArtigoMeta {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
  data: string;
  dataModificacao?: string;
  leitura: string;
  imagens?: ArtigoImagem[];
}

const articlesDir = path.join(process.cwd(), 'src/data/artigos');

function loadArtigosMeta(): ArtigoMeta[] {
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.mdx'));

  return files.map(file => {
    const raw = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
    const { data } = matter(raw);
    const slug = file.replace('.mdx', '');

    return {
      slug,
      titulo: data.titulo ?? '',
      resumo: data.resumo ?? '',
      categoria: data.categoria ?? 'Inovação',
      categoriaVariant: data.categoriaVariant ?? 'primary',
      data: data.data ?? '',
      dataModificacao: data.dataModificacao,
      leitura: data.leitura ?? '',
      imagens: data.imagens,
    } as ArtigoMeta;
  }).sort((a, b) => b.data.localeCompare(a.data));
}

export const artigosMeta: ArtigoMeta[] = loadArtigosMeta();

export const artigosMetaMap: Record<string, ArtigoMeta> = Object.fromEntries(
  artigosMeta.map(a => [a.slug, a])
);
