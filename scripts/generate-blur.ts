/**
 * Gera blur placeholders (LQIP) para todas as imagens dos artigos.
 * Saída: src/data/blur-data.json  — { "/artigos/slug/img.webp": "data:image/webp;base64,..." }
 *
 * Uso: npx tsx scripts/generate-blur.ts
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/blur-data.json');

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

  const blurData: Record<string, string> = {};
  let total = 0;
  let errors = 0;

  for (const slug of slugDirs) {
    const dir = path.join(artigosDir, slug);
    const images = fs.readdirSync(dir).filter((f) => /\.(webp|png|jpg|jpeg|avif)$/i.test(f));

    for (const img of images) {
      const filePath = path.join(dir, img);
      const publicPath = `/artigos/${slug}/${img}`;

      try {
        const buffer = await sharp(filePath)
          .resize(20, undefined, { withoutEnlargement: true })
          .webp({ quality: 20 })
          .toBuffer();

        blurData[publicPath] = `data:image/webp;base64,${buffer.toString('base64')}`;
        total++;
      } catch (err) {
        console.error(`Erro ao processar ${publicPath}:`, err);
        errors++;
      }
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blurData, null, 2), 'utf-8');
  console.log(`✓ ${total} blur placeholders gerados em ${path.relative(process.cwd(), OUTPUT_FILE)}`);
  if (errors > 0) console.warn(`⚠ ${errors} erros`);
}

main();
