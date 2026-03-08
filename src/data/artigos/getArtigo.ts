/**
 * Carrega o conteúdo completo de um artigo por slug.
 * Usado apenas em [slug]/page.tsx — evita carregar todos os artigos no bundle.
 *
 * Lê arquivos .mdx com frontmatter YAML via gray-matter.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Artigo } from './types';

const articlesDir = path.join(process.cwd(), 'src/data/artigos');

export async function getArtigo(slug: string): Promise<Artigo | null> {
  const mdxPath = path.join(articlesDir, `${slug}.mdx`);

  if (!fs.existsSync(mdxPath)) return null;

  const raw = fs.readFileSync(mdxPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    titulo: data.titulo,
    resumo: data.resumo,
    categoria: data.categoria,
    categoriaVariant: data.categoriaVariant,
    data: data.data,
    leitura: data.leitura,
    conteudo: content.trim(),
  };
}
