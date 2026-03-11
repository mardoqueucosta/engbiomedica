/**
 * Renames generic article images (image-1.webp, image-2.webp) to SEO-friendly
 * descriptive names based on their alt text in the MDX file.
 *
 * Usage: npx tsx scripts/rename-images-seo.ts [--dry-run]
 */

import fs from 'fs';
import path from 'path';

const ARTICLES_DIR = path.join(__dirname, '..', 'src', 'data', 'artigos');
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'artigos');
const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Convert alt text to a SEO-friendly filename.
 * - Lowercase, remove accents, replace spaces with hyphens
 * - Max 60 chars, append original index number
 */
function altToFilename(alt: string, index: number): string {
  const slug = alt
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9\s-]/g, '')   // remove special chars
    .replace(/\s+/g, '-')           // spaces to hyphens
    .replace(/-+/g, '-')            // collapse multiple hyphens
    .replace(/^-|-$/g, '')          // trim hyphens
    .slice(0, 55);                  // leave room for -N.webp

  return `${slug}-${index}.webp`;
}

interface RenameEntry {
  articleSlug: string;
  oldName: string;
  newName: string;
  oldPath: string;
  newPath: string;
}

function processArticle(mdxPath: string): RenameEntry[] {
  const content = fs.readFileSync(mdxPath, 'utf-8');
  const slug = path.basename(mdxPath, '.mdx');
  const imgDir = path.join(PUBLIC_DIR, slug);

  if (!fs.existsSync(imgDir)) return [];

  const entries: RenameEntry[] = [];

  // Find all <img> tags with generic names and their alt text
  const imgRegex = /<img\s[^>]*src="\/artigos\/[^"]*\/(image-(\d+)\.webp)"[^>]*alt="([^"]*)"[^>]*>/g;
  // Also try alt before src
  const imgRegex2 = /<img\s[^>]*alt="([^"]*)"[^>]*src="\/artigos\/[^"]*\/(image-(\d+)\.webp)"[^>]*>/g;

  const matches: Array<{ fullMatch: string; oldFile: string; index: number; alt: string }> = [];

  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      oldFile: match[1],
      index: parseInt(match[2]),
      alt: match[3],
    });
  }
  while ((match = imgRegex2.exec(content)) !== null) {
    // Avoid duplicates
    if (!matches.some(m => m.oldFile === match![2])) {
      matches.push({
        fullMatch: match[0],
        oldFile: match[2],
        index: parseInt(match[3]),
        alt: match[1],
      });
    }
  }

  for (const m of matches) {
    if (!m.alt || m.alt.length < 10) continue; // Skip empty/short alt text

    const newName = altToFilename(m.alt, m.index);
    if (newName === m.oldFile) continue; // Already has good name

    const oldPath = path.join(imgDir, m.oldFile);
    const newPath = path.join(imgDir, newName);

    if (!fs.existsSync(oldPath)) continue;

    entries.push({
      articleSlug: slug,
      oldName: m.oldFile,
      newName,
      oldPath,
      newPath,
    });
  }

  return entries;
}

function updateMdxReferences(mdxPath: string, entries: RenameEntry[]): void {
  let content = fs.readFileSync(mdxPath, 'utf-8');

  for (const entry of entries) {
    content = content.replace(
      new RegExp(entry.oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      entry.newName
    );
  }

  fs.writeFileSync(mdxPath, content, 'utf-8');
}

// Main
const mdxFiles = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.mdx'));
let totalRenamed = 0;
let totalArticles = 0;

console.log(DRY_RUN ? '=== DRY RUN (no changes) ===' : '=== RENAMING IMAGES ===');
console.log();

for (const file of mdxFiles) {
  const mdxPath = path.join(ARTICLES_DIR, file);
  const entries = processArticle(mdxPath);

  if (entries.length === 0) continue;

  totalArticles++;
  console.log(`📁 ${path.basename(file, '.mdx')} (${entries.length} images)`);

  for (const entry of entries) {
    console.log(`   ${entry.oldName} → ${entry.newName}`);

    if (!DRY_RUN) {
      // Rename file
      fs.renameSync(entry.oldPath, entry.newPath);
      totalRenamed++;
    }
  }

  if (!DRY_RUN) {
    // Update MDX references
    updateMdxReferences(mdxPath, entries);
  }

  console.log();
}

console.log('---');
console.log(`${totalArticles} articles, ${DRY_RUN ? entries_count() : totalRenamed} images ${DRY_RUN ? 'would be' : ''} renamed`);

function entries_count(): number {
  let count = 0;
  for (const file of mdxFiles) {
    count += processArticle(path.join(ARTICLES_DIR, file)).length;
  }
  return count;
}
