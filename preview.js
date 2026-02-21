#!/usr/bin/env node
/**
 * Preview de artigo — inicia dev server e exibe link direto.
 *
 * Uso:
 *   node preview.js <slug>
 *   node preview.js                  (lista artigos disponíveis)
 */
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');

const PORT = 3000;
const slug = process.argv[2];

// ── Cores ────────────────────────────────────────────────
const G = '\x1b[32m', C = '\x1b[36m', Y = '\x1b[33m';
const B = '\x1b[1m', D = '\x1b[90m', R = '\x1b[0m';

// ── Sem slug: listar artigos disponíveis ─────────────────
if (!slug) {
  const metaPath = path.join(__dirname, 'src/data/artigos/metadata.ts');
  const content = fs.readFileSync(metaPath, 'utf-8');
  const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

  console.log(`\n${B}${C}Artigos disponíveis (${slugs.length}):${R}\n`);
  slugs.forEach(s => console.log(`  ${D}npm run preview${R} ${B}${s}${R}`));
  console.log();
  process.exit(0);
}

// ── Verificar se o artigo existe ─────────────────────────
const artigoFile = path.join(__dirname, `src/data/artigos/${slug}.ts`);
if (!fs.existsSync(artigoFile)) {
  console.log(`\n${Y}Artigo "${slug}" não encontrado em src/data/artigos/${R}`);
  process.exit(1);
}

// ── Verificar se server já está rodando ──────────────────
function checkServer(port, cb) {
  const req = http.get(`http://localhost:${port}`, (res) => {
    res.resume();
    cb(true);
  });
  req.on('error', () => cb(false));
  req.setTimeout(1500, () => { req.destroy(); cb(false); });
}

checkServer(PORT, (running) => {
  if (running) {
    const url = `http://localhost:${PORT}/artigos/${slug}`;
    console.log(`\n${G}Server já rodando na porta ${PORT}${R}`);
    console.log(`\n${B}${C}Preview:${R} ${url}\n`);
    return;
  }

  console.log(`${C}Iniciando dev server...${R}`);

  const child = spawn('node', ['node_modules/next/dist/bin/next', 'dev'], {
    cwd: __dirname,
    stdio: 'pipe',
  });

  let urlPrinted = false;

  child.stdout.on('data', (data) => {
    const text = data.toString();
    process.stdout.write(D + text + R);

    // Capturar a porta real (Next.js pode usar outra se 3000 está ocupada)
    if (!urlPrinted && text.includes('Ready')) {
      const portMatch = text.match(/localhost:(\d+)/) || [null, PORT];
      const actualPort = portMatch[1] || PORT;
      const url = `http://localhost:${actualPort}/artigos/${slug}`;

      console.log(`\n${G}${B}Server pronto!${R}`);
      console.log(`\n${B}${C}Preview:${R} ${url}\n`);
      urlPrinted = true;
    }
  });

  // Next.js 14 imprime no stderr
  child.stderr.on('data', (data) => {
    const text = data.toString();
    process.stderr.write(D + text + R);

    if (!urlPrinted && text.includes('Ready')) {
      const portMatch = text.match(/localhost:(\d+)/) || [null, PORT];
      const actualPort = portMatch[1] || PORT;
      const url = `http://localhost:${actualPort}/artigos/${slug}`;

      console.log(`\n${G}${B}Server pronto!${R}`);
      console.log(`\n${B}${C}Preview:${R} ${url}\n`);
      urlPrinted = true;
    }
  });

  process.on('SIGINT', () => {
    child.kill();
    process.exit(0);
  });
});
