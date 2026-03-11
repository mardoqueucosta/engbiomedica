/**
 * Adiciona aria-details + <details>/<summary> em imagens de diagramas técnicos nos MDX.
 * Identifica diagramas via palavras-chave no alt text.
 *
 * Uso: npx tsx scripts/add-aria-details.ts
 *      npx tsx scripts/add-aria-details.ts --dry-run
 */
import fs from 'fs';
import path from 'path';

const ARTICLES_DIR = path.join(process.cwd(), 'src/data/artigos');
const DRY_RUN = process.argv.includes('--dry-run');

const DIAGRAM_KEYWORDS = [
  'diagrama',
  'infográfico',
  'fluxograma',
  'esquema',
  'classificação',
  'comparação',
  'pipeline',
  'arquitetura',
  'mapa mental',
  'ciclo de vida',
  'cadeia de valor',
  'tabela comparativa',
  'hierarquia',
  'taxonomia',
  'evolução temporal',
  'timeline',
  'organograma',
];

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 40);
}

function isDiagram(altText: string): boolean {
  const lower = altText.toLowerCase();
  return DIAGRAM_KEYWORDS.some((kw) => lower.includes(kw));
}

function processFile(filePath: string): { modified: boolean; count: number } {
  let content = fs.readFileSync(filePath, 'utf-8');
  const slug = path.basename(filePath, '.mdx');
  let count = 0;

  // Skip files that already have aria-details
  if (content.includes('aria-details=')) {
    return { modified: false, count: 0 };
  }

  // Match <figure> blocks with <img> and <figcaption>
  const figureRegex = /<figure>\s*\n<img\s([^>]*?)alt="([^"]+)"([^>]*)>\s*\n<figcaption>([^<]+)<\/figcaption>\s*\n<\/figure>/g;

  content = content.replace(figureRegex, (full, beforeAlt, alt, afterAlt, caption) => {
    if (!isDiagram(alt)) return full;

    count++;
    const detailsId = `desc-${slugify(slug)}-${count}`;

    return `<figure>
<img ${beforeAlt}alt="${alt}"${afterAlt} aria-details="${detailsId}">
<figcaption>${caption}
<details id="${detailsId}">
<summary>Descrição completa da imagem</summary>
<p>${alt}.</p>
</details>
</figcaption>
</figure>`;
  });

  if (count > 0 && !DRY_RUN) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return { modified: count > 0, count };
}

function main() {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.mdx'));
  let totalImages = 0;
  let totalFiles = 0;

  for (const file of files) {
    const result = processFile(path.join(ARTICLES_DIR, file));
    if (result.count > 0) {
      totalFiles++;
      totalImages += result.count;
      console.log(`  ${file}: ${result.count} diagrama(s)`);
    }
  }

  const prefix = DRY_RUN ? '[DRY RUN] ' : '';
  console.log(`\n${prefix}${totalImages} diagramas em ${totalFiles} arquivos`);
}

main();
