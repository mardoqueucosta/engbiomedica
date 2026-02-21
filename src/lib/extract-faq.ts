/**
 * Extrai pares pergunta/resposta da seção "Perguntas frequentes" do HTML dos artigos.
 * Suporta dois formatos usados pelo pipeline:
 *   Formato A: <h3>Pergunta?</h3> <p>Resposta</p>
 *   Formato B: <p><strong>Pergunta?</strong></p> <p>Resposta</p>
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export function extractFaqItems(html: string): FaqItem[] {
  // Localizar a seção FAQ — tudo após <h2>Perguntas frequentes</h2>
  const faqIdx = html.toLowerCase().indexOf('<h2>perguntas frequentes</h2>');
  if (faqIdx === -1) return [];

  const faqSection = html.slice(faqIdx);

  // Parar no próximo <h2> (outra seção) ou no final
  const nextH2 = faqSection.indexOf('<h2>', 10);
  const section = nextH2 !== -1 ? faqSection.slice(0, nextH2) : faqSection;

  const items: FaqItem[] = [];

  // Formato A: <h3>Pergunta?</h3> seguido de <p>Resposta</p>
  // Usa [\s\S] em vez de . com flag s para compatibilidade com ES2017
  const h3Pattern = /<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = h3Pattern.exec(section)) !== null) {
    const question = stripTags(match[1]).trim();
    const answer = stripTags(match[2]).trim();
    if (question && answer) {
      items.push({ question, answer });
    }
  }

  // Formato B: <p><strong>Pergunta?</strong></p> seguido de <p>Resposta</p>
  if (items.length === 0) {
    const strongPattern = /<p><strong>([\s\S]*?)<\/strong><\/p>\s*<p>([\s\S]*?)<\/p>/g;
    while ((match = strongPattern.exec(section)) !== null) {
      const question = stripTags(match[1]).trim();
      const answer = stripTags(match[2]).trim();
      if (question && answer) {
        items.push({ question, answer });
      }
    }
  }

  return items;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}
