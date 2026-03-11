/**
 * Gera variantes responsivas (640px, 768px) e AVIF de todas as imagens dos artigos.
 * Entrada: public/artigos/{slug}/*.webp (1024px originais)
 * Saída:   mesma pasta — {name}-640.webp, {name}-640.avif, {name}-768.webp, {name}-768.avif, {name}.avif
 *
 * Uso: npx tsx scripts/generate-responsive.ts
 *      npx tsx scripts/generate-responsive.ts --dry-run
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const DRY_RUN = process.argv.includes('--dry-run');

const WIDTHS = [640, 768] as const;

async function processImage(filePath: string): Promise<{ generated: number; skipped: number }> {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  let generated = 0;
  let skipped = 0;

  // Skip if this is already a responsive variant
  if (/-(640|768)$/.test(base)) {
    return { generated: 0, skipped: 0 };
  }

  const variants: { outPath: string; width: number | null; format: 'webp' | 'avif' }[] = [
    // AVIF at original size (1024)
    { outPath: path.join(dir, `${base}.avif`), width: null, format: 'avif' },
    // Responsive WebP + AVIF
    ...WIDTHS.flatMap((w) => [
      { outPath: path.join(dir, `${base}-${w}.webp`), width: w, format: 'webp' as const },
      { outPath: path.join(dir, `${base}-${w}.avif`), width: w, format: 'avif' as const },
    ]),
  ];

  for (const variant of variants) {
    if (fs.existsSync(variant.outPath)) {
      skipped++;
      continue;
    }

    if (DRY_RUN) {
      generated++;
      continue;
    }

    let pipeline = sharp(filePath);

    if (variant.width) {
      pipeline = pipeline.resize(variant.width, undefined, { withoutEnlargement: true });
    }

    if (variant.format === 'avif') {
      pipeline = pipeline.avif({ quality: 50, effort: 4 });
    } else {
      pipeline = pipeline.webp({ quality: 80 });
    }

    await pipeline.toFile(variant.outPath);
    generated++;
  }

  return { generated, skipped };
}

async function main() {
  const artigosDir = path.join(PUBLIC_DIR, 'artigos');
  if (!fs.existsSync(artigosDir)) {
    console.error('Diretório public/artigos não encontrado');
    process.exit(1);
  }

  const slugDirs = fs.readdirSync(artigosDir).filter((f) => {
    const full = path.join(artigosDir, f);
    return fs.statSync(full).isDirectory();
  });

  let totalGenerated = 0;
  let totalSkipped = 0;
  let totalImages = 0;

  for (const slug of slugDirs) {
    const dir = path.join(artigosDir, slug);
    const originals = fs.readdirSync(dir).filter((f) =>
      /\.webp$/i.test(f) && !/-(640|768)\.webp$/i.test(f)
    );

    for (const img of originals) {
      totalImages++;
      const result = await processImage(path.join(dir, img));
      totalGenerated += result.generated;
      totalSkipped += result.skipped;
    }
  }

  const prefix = DRY_RUN ? '[DRY RUN] ' : '';
  console.log(`${prefix}${totalImages} imagens originais processadas`);
  console.log(`${prefix}${totalGenerated} variantes geradas, ${totalSkipped} já existentes`);
}

main();
