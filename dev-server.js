/**
 * Launcher para preview_start — garante CWD correto para Next.js.
 * Chamado via .claude/launch.json com: node dev-server.js dev
 */
const path = require('path');
const fs = require('fs');

const projectDir = __dirname;
const nextBin = path.join(projectDir, 'node_modules', 'next', 'dist', 'bin', 'next');

// Verificar se dependências estão instaladas
if (!fs.existsSync(nextBin)) {
  console.error(`[dev-server] next não encontrado. Rode: npm install --prefix ${projectDir}`);
  process.exit(1);
}

// Garantir CWD no diretório do projeto (resolve o "Couldn't find app directory")
process.chdir(projectDir);

// Iniciar Next.js
require(nextBin);
