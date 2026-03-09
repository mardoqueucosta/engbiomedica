/**
 * Auditoria de links internos entre artigos.
 *
 * Analisa todos os .mdx e gera relatório com:
 *   1. Links internos enviados por artigo (outgoing)
 *   2. Links internos recebidos por artigo (incoming)
 *   3. Artigos órfãos (poucos ou nenhum link apontando para eles)
 *   4. Links quebrados (apontam para slugs que não existem)
 *   5. Sugestões de links baseadas em categoria
 *
 * Uso:
 *   npx tsx scripts/audit-internal-links.ts
 *   npx tsx scripts/audit-internal-links.ts --json     # saída JSON
 *   npx tsx scripts/audit-internal-links.ts --orphans   # apenas órfãos
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ── Tipos ────────────────────────────────────────────────────────────

interface ArticleData {
  slug: string;
  titulo: string;
  categoria: string;
  outgoing: string[];       // slugs para os quais este artigo linka
  incoming: string[];       // slugs que linkam para este artigo
  brokenLinks: string[];    // slugs referenciados que não existem
  externalCount: number;    // número de links externos
}

interface AuditReport {
  totalArticles: number;
  totalInternalLinks: number;
  totalExternalLinks: number;
  totalBrokenLinks: number;
  averageOutgoing: number;
  averageIncoming: number;
  articles: ArticleData[];
  orphans: ArticleData[];
  fewOutgoing: ArticleData[];
  brokenLinkDetails: { from: string; to: string }[];
  suggestions: { source: string; target: string; reason: string }[];
}

// ── Configuração ─────────────────────────────────────────────────────

const ARTICLES_DIR = path.join(process.cwd(), 'src/data/artigos');
const ORPHAN_THRESHOLD = 1;     // artigos com ≤ N links recebidos = órfão
const FEW_OUTGOING_THRESHOLD = 2; // artigos com < N links enviados = poucos

// ── Helpers ──────────────────────────────────────────────────────────

function extractInternalSlugs(html: string): string[] {
  const regex = /href="\/artigos\/([^"#?]+)"/g;
  const slugs: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    const slug = match[1].replace(/\/$/, ''); // remove trailing slash
    slugs.push(slug);
  }
  return slugs;
}

function countExternalLinks(html: string): number {
  const regex = /href="https?:\/\/[^"]+"/g;
  const matches = html.match(regex);
  return matches ? matches.length : 0;
}

function extractOtherInternalLinks(html: string): string[] {
  // Links internos que NÃO são para /artigos/ (ex: /carreira/, /formacao/)
  const regex = /href="(\/(?!artigos\/)[^"#?]+)"/g;
  const paths: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    paths.push(match[1]);
  }
  return paths;
}

// ── Carregar artigos ─────────────────────────────────────────────────

function loadArticles(): ArticleData[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.mdx'));

  return files.map(file => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    const slug = file.replace('.mdx', '');

    return {
      slug,
      titulo: data.titulo ?? slug,
      categoria: data.categoria ?? 'Sem categoria',
      outgoing: extractInternalSlugs(content),
      incoming: [],  // preenchido depois
      brokenLinks: [],
      externalCount: countExternalLinks(content),
    };
  });
}

// ── Análise ──────────────────────────────────────────────────────────

function analyze(articles: ArticleData[]): AuditReport {
  const slugSet = new Set(articles.map(a => a.slug));
  const brokenLinkDetails: { from: string; to: string }[] = [];

  // 1. Verificar links quebrados e calcular incoming
  for (const article of articles) {
    for (const targetSlug of article.outgoing) {
      if (!slugSet.has(targetSlug)) {
        article.brokenLinks.push(targetSlug);
        brokenLinkDetails.push({ from: article.slug, to: targetSlug });
      } else {
        const target = articles.find(a => a.slug === targetSlug);
        if (target) target.incoming.push(article.slug);
      }
    }
  }

  // 2. Calcular totais
  const totalInternalLinks = articles.reduce((sum, a) => sum + a.outgoing.length, 0);
  const totalExternalLinks = articles.reduce((sum, a) => sum + a.externalCount, 0);
  const totalBrokenLinks = brokenLinkDetails.length;

  // 3. Identificar órfãos e artigos com poucos links
  const orphans = articles
    .filter(a => a.incoming.length <= ORPHAN_THRESHOLD)
    .sort((a, b) => a.incoming.length - b.incoming.length);

  const fewOutgoing = articles
    .filter(a => a.outgoing.length < FEW_OUTGOING_THRESHOLD)
    .sort((a, b) => a.outgoing.length - b.outgoing.length);

  // 4. Gerar sugestões baseadas em categoria
  const suggestions = generateSuggestions(articles, slugSet);

  return {
    totalArticles: articles.length,
    totalInternalLinks,
    totalExternalLinks,
    totalBrokenLinks,
    averageOutgoing: +(totalInternalLinks / articles.length).toFixed(1),
    averageIncoming: +(totalInternalLinks / articles.length).toFixed(1),
    articles,
    orphans,
    fewOutgoing,
    brokenLinkDetails,
    suggestions,
  };
}

function generateSuggestions(
  articles: ArticleData[],
  slugSet: Set<string>
): { source: string; target: string; reason: string }[] {
  const suggestions: { source: string; target: string; reason: string }[] = [];

  // Agrupar artigos por categoria
  const byCategory = new Map<string, ArticleData[]>();
  for (const a of articles) {
    const list = byCategory.get(a.categoria) || [];
    list.push(a);
    byCategory.set(a.categoria, list);
  }

  // Para cada artigo órfão, sugerir links de artigos da mesma categoria
  for (const article of articles) {
    if (article.incoming.length > ORPHAN_THRESHOLD) continue;

    const sameCategory = byCategory.get(article.categoria) || [];
    for (const candidate of sameCategory) {
      if (candidate.slug === article.slug) continue;
      if (candidate.outgoing.includes(article.slug)) continue; // já linka

      suggestions.push({
        source: candidate.slug,
        target: article.slug,
        reason: `Mesma categoria "${article.categoria}" — ${article.titulo.slice(0, 60)}`,
      });

      // Máximo 3 sugestões por artigo órfão
      if (suggestions.filter(s => s.target === article.slug).length >= 3) break;
    }
  }

  return suggestions.slice(0, 50); // limitar a 50 sugestões
}

// ── Formatação do relatório ──────────────────────────────────────────

function printReport(report: AuditReport): void {
  const {
    totalArticles, totalInternalLinks, totalExternalLinks, totalBrokenLinks,
    averageOutgoing, orphans, fewOutgoing, brokenLinkDetails, suggestions, articles
  } = report;

  console.log('\n' + '═'.repeat(70));
  console.log('  📊 AUDITORIA DE LINKS INTERNOS — engenhariabiomedica.com');
  console.log('═'.repeat(70));

  // ── Resumo ──
  console.log('\n📈 RESUMO GERAL');
  console.log('─'.repeat(50));
  console.log(`  Total de artigos:          ${totalArticles}`);
  console.log(`  Links internos (artigos):  ${totalInternalLinks}`);
  console.log(`  Links externos:            ${totalExternalLinks}`);
  console.log(`  Links quebrados:           ${totalBrokenLinks}`);
  console.log(`  Média links enviados:      ${averageOutgoing} por artigo`);
  console.log(`  Média links recebidos:     ${averageOutgoing} por artigo`);

  // ── Distribuição ──
  console.log('\n📊 DISTRIBUIÇÃO DE LINKS ENVIADOS (outgoing)');
  console.log('─'.repeat(50));
  const buckets = [0, 1, 2, 3, 5, 10, 20, Infinity];
  for (let i = 0; i < buckets.length - 1; i++) {
    const min = buckets[i];
    const max = buckets[i + 1];
    const count = articles.filter(a => a.outgoing.length >= min && a.outgoing.length < max).length;
    const label = max === Infinity ? `${min}+` : `${min}-${max - 1}`;
    const bar = '█'.repeat(Math.min(count, 40));
    console.log(`  ${label.padStart(5)} links: ${bar} ${count}`);
  }

  // ── Top 10 mais linkados ──
  console.log('\n🏆 TOP 10 ARTIGOS MAIS LINKADOS (incoming)');
  console.log('─'.repeat(50));
  const topLinked = [...articles].sort((a, b) => b.incoming.length - a.incoming.length).slice(0, 10);
  for (const a of topLinked) {
    const title = a.titulo.slice(0, 55).padEnd(55);
    console.log(`  ${String(a.incoming.length).padStart(3)} ← ${title}`);
  }

  // ── Top 10 que mais linkam ──
  console.log('\n📤 TOP 10 ARTIGOS QUE MAIS LINKAM (outgoing)');
  console.log('─'.repeat(50));
  const topLinking = [...articles].sort((a, b) => b.outgoing.length - a.outgoing.length).slice(0, 10);
  for (const a of topLinking) {
    const title = a.titulo.slice(0, 55).padEnd(55);
    console.log(`  ${String(a.outgoing.length).padStart(3)} → ${title}`);
  }

  // ── Links quebrados ──
  if (brokenLinkDetails.length > 0) {
    console.log('\n❌ LINKS QUEBRADOS');
    console.log('─'.repeat(50));
    for (const { from, to } of brokenLinkDetails) {
      console.log(`  ${from}`);
      console.log(`    → /artigos/${to}  (não existe)`);
    }
  } else {
    console.log('\n✅ Nenhum link quebrado encontrado!');
  }

  // ── Artigos órfãos ──
  if (orphans.length > 0) {
    console.log(`\n⚠️  ARTIGOS ÓRFÃOS (≤ ${ORPHAN_THRESHOLD} link recebido): ${orphans.length} artigos`);
    console.log('─'.repeat(50));
    for (const a of orphans) {
      const status = a.incoming.length === 0 ? '🔴' : '🟡';
      const title = a.titulo.slice(0, 58).padEnd(58);
      console.log(`  ${status} ${String(a.incoming.length).padStart(2)} ← ${title} [${a.categoria}]`);
    }
  }

  // ── Artigos com poucos links enviados ──
  if (fewOutgoing.length > 0) {
    console.log(`\n⚠️  ARTIGOS COM POUCOS LINKS ENVIADOS (< ${FEW_OUTGOING_THRESHOLD}): ${fewOutgoing.length} artigos`);
    console.log('─'.repeat(50));
    for (const a of fewOutgoing) {
      const title = a.titulo.slice(0, 58).padEnd(58);
      console.log(`  ${String(a.outgoing.length).padStart(2)} → ${title} [${a.categoria}]`);
    }
  }

  // ── Sugestões ──
  if (suggestions.length > 0) {
    console.log(`\n💡 SUGESTÕES DE LINKS (top ${Math.min(suggestions.length, 20)})`);
    console.log('─'.repeat(50));
    const shown = suggestions.slice(0, 20);
    for (const s of shown) {
      console.log(`  Em: ${s.source}`);
      console.log(`  →  Adicionar link para: ${s.target}`);
      console.log(`     Motivo: ${s.reason}`);
      console.log('');
    }
  }

  console.log('═'.repeat(70));
  console.log(`  Relatório gerado em ${new Date().toISOString().slice(0, 19)}`);
  console.log('═'.repeat(70) + '\n');
}

// ── Main ─────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const jsonMode = args.includes('--json');
  const orphansOnly = args.includes('--orphans');

  console.log('🔍 Carregando artigos...');
  const articles = loadArticles();
  console.log(`   ${articles.length} artigos encontrados\n`);

  console.log('🔗 Analisando links...');
  const report = analyze(articles);

  if (jsonMode) {
    // Saída JSON para processamento programático
    const output = {
      generatedAt: new Date().toISOString(),
      summary: {
        totalArticles: report.totalArticles,
        totalInternalLinks: report.totalInternalLinks,
        totalExternalLinks: report.totalExternalLinks,
        totalBrokenLinks: report.totalBrokenLinks,
        averageOutgoing: report.averageOutgoing,
        orphanCount: report.orphans.length,
        fewOutgoingCount: report.fewOutgoing.length,
      },
      brokenLinks: report.brokenLinkDetails,
      orphans: report.orphans.map(a => ({
        slug: a.slug,
        titulo: a.titulo,
        categoria: a.categoria,
        incomingCount: a.incoming.length,
        outgoingCount: a.outgoing.length,
      })),
      suggestions: report.suggestions,
      articles: report.articles.map(a => ({
        slug: a.slug,
        categoria: a.categoria,
        outgoingCount: a.outgoing.length,
        incomingCount: a.incoming.length,
        externalCount: a.externalCount,
        brokenCount: a.brokenLinks.length,
      })),
    };
    console.log(JSON.stringify(output, null, 2));
    return;
  }

  if (orphansOnly) {
    console.log(`\n⚠️  ARTIGOS ÓRFÃOS (≤ ${ORPHAN_THRESHOLD} link recebido): ${report.orphans.length}\n`);
    for (const a of report.orphans) {
      const status = a.incoming.length === 0 ? '🔴' : '🟡';
      console.log(`  ${status} ${a.incoming.length} ← ${a.slug} [${a.categoria}]`);
    }
    console.log('');
    return;
  }

  printReport(report);
}

main();
