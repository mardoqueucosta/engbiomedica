import { describe, it, expect } from 'vitest';
import { artigosMeta, artigosMetaMap } from '@/data/artigos/metadata';

describe('artigosMeta', () => {
  it('carrega artigos do diretório de MDX', () => {
    expect(artigosMeta.length).toBeGreaterThan(0);
  });

  it('contém pelo menos 80 artigos', () => {
    expect(artigosMeta.length).toBeGreaterThanOrEqual(80);
  });

  it('cada artigo tem os campos obrigatórios', () => {
    for (const artigo of artigosMeta) {
      expect(artigo.slug, `slug vazio em artigo`).toBeTruthy();
      expect(artigo.titulo, `titulo vazio em ${artigo.slug}`).toBeTruthy();
      expect(artigo.resumo, `resumo vazio em ${artigo.slug}`).toBeTruthy();
      expect(artigo.categoria, `categoria vazia em ${artigo.slug}`).toBeTruthy();
      expect(artigo.categoriaVariant, `categoriaVariant vazio em ${artigo.slug}`).toBeTruthy();
      expect(artigo.data, `data vazia em ${artigo.slug}`).toBeTruthy();
      expect(artigo.leitura, `leitura vazia em ${artigo.slug}`).toBeTruthy();
    }
  });

  it('categoriaVariant é um dos valores permitidos', () => {
    const allowedVariants = ['primary', 'teal', 'coral', 'amber'];
    for (const artigo of artigosMeta) {
      expect(
        allowedVariants,
        `categoriaVariant "${artigo.categoriaVariant}" inválido em ${artigo.slug}`
      ).toContain(artigo.categoriaVariant);
    }
  });

  it('data está no formato YYYY-MM-DD', () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    for (const artigo of artigosMeta) {
      expect(artigo.data, `data "${artigo.data}" inválida em ${artigo.slug}`).toMatch(datePattern);
    }
  });

  it('dataModificacao está no formato YYYY-MM-DD quando presente', () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    for (const artigo of artigosMeta) {
      if (artigo.dataModificacao) {
        expect(
          artigo.dataModificacao,
          `dataModificacao "${artigo.dataModificacao}" inválida em ${artigo.slug}`
        ).toMatch(datePattern);
      }
    }
  });

  it('leitura contém "min"', () => {
    for (const artigo of artigosMeta) {
      expect(artigo.leitura, `leitura "${artigo.leitura}" inválida em ${artigo.slug}`).toContain('min');
    }
  });

  it('slugs são únicos', () => {
    const slugs = artigosMeta.map(a => a.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('artigos estão ordenados por data decrescente', () => {
    for (let i = 1; i < artigosMeta.length; i++) {
      const prev = artigosMeta[i - 1].data;
      const curr = artigosMeta[i].data;
      expect(
        prev >= curr,
        `Artigo ${artigosMeta[i - 1].slug} (${prev}) deveria vir antes de ${artigosMeta[i].slug} (${curr})`
      ).toBe(true);
    }
  });

  it('imagens têm src, alt e caption quando presentes', () => {
    const comImagens = artigosMeta.filter(a => a.imagens && a.imagens.length > 0);
    expect(comImagens.length).toBeGreaterThan(0);

    for (const artigo of comImagens) {
      for (const img of artigo.imagens!) {
        expect(img.src, `src vazio em imagem de ${artigo.slug}`).toBeTruthy();
        expect(img.alt, `alt vazio em imagem de ${artigo.slug}`).toBeTruthy();
        expect(img.caption, `caption vazio em imagem de ${artigo.slug}`).toBeTruthy();
      }
    }
  });
});

describe('artigosMetaMap', () => {
  it('contém o mesmo número de entradas que artigosMeta', () => {
    expect(Object.keys(artigosMetaMap).length).toBe(artigosMeta.length);
  });

  it('permite lookup por slug', () => {
    const firstSlug = artigosMeta[0].slug;
    expect(artigosMetaMap[firstSlug]).toBeDefined();
    expect(artigosMetaMap[firstSlug].titulo).toBe(artigosMeta[0].titulo);
  });

  it('retorna undefined para slug inexistente', () => {
    expect(artigosMetaMap['slug-que-nao-existe']).toBeUndefined();
  });
});
