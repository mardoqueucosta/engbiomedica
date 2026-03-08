/**
 * Script de conversão: artigos .ts → .mdx
 * Uso: npx tsx scripts/convert-to-mdx.ts slug1 slug2 ...
 */
import fs from 'fs';
import path from 'path';

const ARTIGOS_DIR = path.join(process.cwd(), 'src/data/artigos');

// Slugs a converter (passados como argumentos ou hardcoded para piloto)
const slugs = process.argv.slice(2);

if (slugs.length === 0) {
  console.error('Uso: npx tsx scripts/convert-to-mdx.ts slug1 slug2 ...');
  process.exit(1);
}

// Importar metadata para buscar imagens e dataModificacao
import { artigosMeta } from '../src/data/artigos/metadata';

function extractField(raw: string, field: string): string {
  const patterns = [
    new RegExp(`${field}:\\s*'([^']*)'`),
    new RegExp(`${field}:\\s*"([^"]*)"`),
  ];
  for (const pat of patterns) {
    const match = raw.match(pat);
    if (match) return match[1];
  }
  return '';
}

function extractConteudo(raw: string): string {
  const match = raw.match(/conteudo:\s*`([\s\S]*?)`\s*,?\s*\n?\s*\}/);
  if (match) return match[1].trim();
  return '';
}

function escapeYamlValue(val: string): string {
  // Se contém caracteres especiais YAML, envolve em aspas simples
  // Escapa aspas simples internas duplicando-as
  if (val.includes("'") || val.includes('"') || val.includes(':') ||
      val.includes('#') || val.includes('[') || val.includes('{')) {
    return `'${val.replace(/'/g, "''")}'`;
  }
  return `'${val}'`;
}

async function convertArticle(slug: string) {
  const tsPath = path.join(ARTIGOS_DIR, `${slug}.ts`);
  const mdxPath = path.join(ARTIGOS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(tsPath)) {
    console.error(`[SKIP] ${slug}.ts não encontrado`);
    return false;
  }

  if (fs.existsSync(mdxPath)) {
    console.error(`[SKIP] ${slug}.mdx já existe`);
    return false;
  }

  const raw = fs.readFileSync(tsPath, 'utf-8');

  // Extrair campos do .ts
  const titulo = extractField(raw, 'titulo');
  const resumo = extractField(raw, 'resumo');
  const categoria = extractField(raw, 'categoria');
  const categoriaVariant = extractField(raw, 'categoriaVariant');
  const data = extractField(raw, 'data');
  const leitura = extractField(raw, 'leitura');
  const conteudo = extractConteudo(raw);

  if (!conteudo) {
    console.error(`[ERROR] Não foi possível extrair conteudo de ${slug}.ts`);
    return false;
  }

  // Buscar metadata extra (imagens, dataModificacao)
  const meta = artigosMeta.find(a => a.slug === slug);
  const dataModificacao = meta?.dataModificacao;
  const imagens = meta?.imagens;

  // Montar frontmatter
  let frontmatter = '---\n';
  frontmatter += `titulo: ${escapeYamlValue(titulo)}\n`;
  frontmatter += `resumo: ${escapeYamlValue(resumo)}\n`;
  frontmatter += `categoria: ${escapeYamlValue(categoria)}\n`;
  frontmatter += `categoriaVariant: '${categoriaVariant}'\n`;
  frontmatter += `data: '${data}'\n`;
  if (dataModificacao) {
    frontmatter += `dataModificacao: '${dataModificacao}'\n`;
  }
  frontmatter += `leitura: '${leitura}'\n`;

  if (imagens && imagens.length > 0) {
    frontmatter += 'imagens:\n';
    for (const img of imagens) {
      frontmatter += `  - src: '${img.src}'\n`;
      frontmatter += `    alt: ${escapeYamlValue(img.alt)}\n`;
      frontmatter += `    caption: ${escapeYamlValue(img.caption)}\n`;
    }
  }

  frontmatter += '---\n';

  // Escrever .mdx
  const mdxContent = `${frontmatter}\n${conteudo}\n`;
  fs.writeFileSync(mdxPath, mdxContent, 'utf-8');

  const stats = {
    slug,
    frontmatterLines: frontmatter.split('\n').length,
    conteudoChars: conteudo.length,
    temImagens: !!(imagens && imagens.length > 0),
    numImagens: imagens?.length ?? 0,
  };

  console.log(`[OK] ${slug}.mdx criado (${stats.conteudoChars} chars, ${stats.numImagens} imagens)`);
  return true;
}

async function main() {
  console.log(`\nConvertendo ${slugs.length} artigos para .mdx...\n`);

  let ok = 0;
  let fail = 0;

  for (const slug of slugs) {
    const success = await convertArticle(slug);
    if (success) ok++;
    else fail++;
  }

  console.log(`\n✅ ${ok} convertidos | ❌ ${fail} falharam\n`);
}

main();
