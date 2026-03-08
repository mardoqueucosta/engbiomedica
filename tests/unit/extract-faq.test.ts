import { describe, it, expect } from 'vitest';
import { extractFaqItems } from '@/lib/extract-faq';

describe('extractFaqItems', () => {
  describe('retorna array vazio quando não há FAQ', () => {
    it('HTML sem seção de FAQ', () => {
      const html = '<h2>Introdução</h2><p>Texto qualquer</p>';
      expect(extractFaqItems(html)).toEqual([]);
    });

    it('HTML vazio', () => {
      expect(extractFaqItems('')).toEqual([]);
    });

    it('HTML com h2 diferente', () => {
      const html = '<h2>Conclusão</h2><p>Texto final</p>';
      expect(extractFaqItems(html)).toEqual([]);
    });
  });

  describe('Formato A: h3 + p', () => {
    it('extrai uma pergunta e resposta', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <h3>O que é engenharia biomédica?</h3>
        <p>É a aplicação de princípios de engenharia à medicina.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
      expect(result[0].question).toBe('O que é engenharia biomédica?');
      expect(result[0].answer).toBe('É a aplicação de princípios de engenharia à medicina.');
    });

    it('extrai múltiplas perguntas e respostas', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <h3>Pergunta 1?</h3>
        <p>Resposta 1.</p>
        <h3>Pergunta 2?</h3>
        <p>Resposta 2.</p>
        <h3>Pergunta 3?</h3>
        <p>Resposta 3.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(3);
      expect(result[0].question).toBe('Pergunta 1?');
      expect(result[2].answer).toBe('Resposta 3.');
    });

    it('para de extrair ao encontrar próximo h2', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <h3>Pergunta FAQ?</h3>
        <p>Resposta FAQ.</p>
        <h2>Conclusão</h2>
        <h3>Não é FAQ</h3>
        <p>Não deveria aparecer.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
      expect(result[0].question).toBe('Pergunta FAQ?');
    });

    it('remove tags HTML das respostas', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <h3>Pergunta com <em>ênfase</em>?</h3>
        <p>Resposta com <a href="#">link</a> e <strong>negrito</strong>.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
      expect(result[0].question).toBe('Pergunta com ênfase?');
      expect(result[0].answer).toBe('Resposta com link e negrito.');
    });
  });

  describe('Formato B: p>strong + p', () => {
    it('extrai perguntas no formato strong', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <p><strong>Qual a duração do curso?</strong></p>
        <p>O curso tem duração de 5 anos.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
      expect(result[0].question).toBe('Qual a duração do curso?');
      expect(result[0].answer).toBe('O curso tem duração de 5 anos.');
    });

    it('extrai múltiplas perguntas no formato strong', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <p><strong>Pergunta A?</strong></p>
        <p>Resposta A.</p>
        <p><strong>Pergunta B?</strong></p>
        <p>Resposta B.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(2);
    });
  });

  describe('case insensitive na detecção do título', () => {
    it('encontra FAQ com maiúsculas diferentes', () => {
      const html = `
        <h2>PERGUNTAS FREQUENTES</h2>
        <h3>Pergunta?</h3>
        <p>Resposta.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
    });

    it('encontra FAQ com maiúsculas mistas', () => {
      const html = `
        <h2>Perguntas Frequentes</h2>
        <h3>Pergunta?</h3>
        <p>Resposta.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
    });
  });

  describe('edge cases', () => {
    it('ignora pares com pergunta vazia', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <h3></h3>
        <p>Resposta sem pergunta.</p>
        <h3>Pergunta válida?</h3>
        <p>Resposta válida.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
      expect(result[0].question).toBe('Pergunta válida?');
    });

    it('ignora pares com resposta vazia', () => {
      const html = `
        <h2>Perguntas frequentes</h2>
        <h3>Pergunta sem resposta?</h3>
        <p></p>
        <h3>Pergunta com resposta?</h3>
        <p>Esta tem resposta.</p>
      `;
      const result = extractFaqItems(html);
      expect(result).toHaveLength(1);
      expect(result[0].question).toBe('Pergunta com resposta?');
    });

    it('prefere formato A (h3) sobre formato B (strong)', () => {
      // Se formato A encontra resultados, formato B não é processado
      const html = `
        <h2>Perguntas frequentes</h2>
        <h3>Via H3?</h3>
        <p>Resposta H3.</p>
        <p><strong>Via Strong?</strong></p>
        <p>Resposta Strong.</p>
      `;
      const result = extractFaqItems(html);
      // Formato A encontrou resultado, então formato B não é usado
      expect(result).toHaveLength(1);
      expect(result[0].question).toBe('Via H3?');
    });
  });
});
