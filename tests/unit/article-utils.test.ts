import { describe, it, expect } from 'vitest';
import { getRecentArticles, getArticleImage, getLatestArticles } from '../../scripts/article-utils';

describe('getLatestArticles', () => {
  it('retorna artigos ordenados por data mais recente', () => {
    const articles = getLatestArticles(5);
    expect(articles.length).toBeLessThanOrEqual(5);
    expect(articles.length).toBeGreaterThan(0);

    for (let i = 1; i < articles.length; i++) {
      const prev = articles[i - 1].dataModificacao || articles[i - 1].data;
      const curr = articles[i].dataModificacao || articles[i].data;
      expect(prev >= curr).toBe(true);
    }
  });

  it('respeita o parâmetro count', () => {
    const three = getLatestArticles(3);
    const ten = getLatestArticles(10);
    expect(three.length).toBe(3);
    expect(ten.length).toBe(10);
  });

  it('retorna 5 artigos por padrão', () => {
    const articles = getLatestArticles();
    expect(articles.length).toBe(5);
  });
});

describe('getRecentArticles', () => {
  it('retorna array (pode ser vazio se não houver artigos recentes)', () => {
    const articles = getRecentArticles(14);
    expect(Array.isArray(articles)).toBe(true);
  });

  it('com janela grande (365 dias), retorna artigos', () => {
    const articles = getRecentArticles(365);
    expect(articles.length).toBeGreaterThan(0);
  });

  it('com janela de 0 dias, retorna apenas artigos de hoje', () => {
    const articles = getRecentArticles(0);
    const today = new Date().toISOString().split('T')[0];
    for (const a of articles) {
      const date = a.dataModificacao || a.data;
      expect(date >= today).toBe(true);
    }
  });

  it('artigos retornados estão ordenados do mais recente ao mais antigo', () => {
    const articles = getRecentArticles(365);
    for (let i = 1; i < articles.length; i++) {
      const prev = articles[i - 1].dataModificacao || articles[i - 1].data;
      const curr = articles[i].dataModificacao || articles[i].data;
      expect(prev >= curr).toBe(true);
    }
  });
});

describe('getArticleImage', () => {
  it('retorna URL completa para artigo com imagens', () => {
    const mockArticle = {
      slug: 'test',
      titulo: 'Test',
      resumo: 'Test',
      categoria: 'Test',
      categoriaVariant: 'primary' as const,
      data: '2026-01-01',
      leitura: '5 min',
      imagens: [
        { src: '/artigos/test/image1.webp', alt: 'Alt text', caption: 'Caption' },
      ],
    };
    const url = getArticleImage(mockArticle);
    expect(url).toBeTruthy();
    expect(url).toContain('/artigos/test/image1.webp');
  });

  it('retorna null para artigo sem imagens', () => {
    const mockArticle = {
      slug: 'test',
      titulo: 'Test',
      resumo: 'Test',
      categoria: 'Test',
      categoriaVariant: 'primary' as const,
      data: '2026-01-01',
      leitura: '5 min',
    };
    const url = getArticleImage(mockArticle);
    expect(url).toBeNull();
  });

  it('retorna null para artigo com array de imagens vazio', () => {
    const mockArticle = {
      slug: 'test',
      titulo: 'Test',
      resumo: 'Test',
      categoria: 'Test',
      categoriaVariant: 'primary' as const,
      data: '2026-01-01',
      leitura: '5 min',
      imagens: [],
    };
    const url = getArticleImage(mockArticle);
    expect(url).toBeNull();
  });

  it('retorna apenas a primeira imagem', () => {
    const mockArticle = {
      slug: 'test',
      titulo: 'Test',
      resumo: 'Test',
      categoria: 'Test',
      categoriaVariant: 'primary' as const,
      data: '2026-01-01',
      leitura: '5 min',
      imagens: [
        { src: '/artigos/test/first.webp', alt: 'First', caption: 'First' },
        { src: '/artigos/test/second.webp', alt: 'Second', caption: 'Second' },
      ],
    };
    const url = getArticleImage(mockArticle);
    expect(url).toContain('first.webp');
    expect(url).not.toContain('second.webp');
  });
});
