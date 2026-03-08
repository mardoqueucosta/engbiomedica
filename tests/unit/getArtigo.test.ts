import { describe, it, expect } from 'vitest';
import { getArtigo } from '@/data/artigos/getArtigo';
import { artigosMeta } from '@/data/artigos/metadata';

describe('getArtigo', () => {
  it('carrega um artigo existente por slug', async () => {
    const slug = artigosMeta[0].slug;
    const artigo = await getArtigo(slug);
    expect(artigo).not.toBeNull();
    expect(artigo!.titulo).toBeTruthy();
    expect(artigo!.resumo).toBeTruthy();
    expect(artigo!.categoria).toBeTruthy();
    expect(artigo!.data).toBeTruthy();
    expect(artigo!.leitura).toBeTruthy();
    expect(artigo!.conteudo).toBeTruthy();
  });

  it('retorna null para slug inexistente', async () => {
    const artigo = await getArtigo('artigo-que-nao-existe-xyz');
    expect(artigo).toBeNull();
  });

  it('conteúdo do artigo não está vazio', async () => {
    const slug = artigosMeta[0].slug;
    const artigo = await getArtigo(slug);
    expect(artigo).not.toBeNull();

    if (typeof artigo!.conteudo === 'string') {
      expect(artigo!.conteudo.length).toBeGreaterThan(100);
    } else {
      // Array de blocos
      expect(artigo!.conteudo.length).toBeGreaterThan(0);
    }
  });

  it('metadados do artigo batem com artigosMeta', async () => {
    const meta = artigosMeta[0];
    const artigo = await getArtigo(meta.slug);
    expect(artigo).not.toBeNull();
    expect(artigo!.titulo).toBe(meta.titulo);
    expect(artigo!.resumo).toBe(meta.resumo);
    expect(artigo!.categoria).toBe(meta.categoria);
    expect(artigo!.categoriaVariant).toBe(meta.categoriaVariant);
    expect(artigo!.data).toBe(meta.data);
  });

  it('carrega múltiplos artigos sem erro', async () => {
    // Testar 5 artigos aleatórios
    const sample = artigosMeta.slice(0, 5);
    for (const meta of sample) {
      const artigo = await getArtigo(meta.slug);
      expect(artigo, `Falha ao carregar ${meta.slug}`).not.toBeNull();
      expect(artigo!.titulo, `Título vazio em ${meta.slug}`).toBeTruthy();
    }
  });

  it('conteúdo contém tags HTML', async () => {
    const slug = artigosMeta[0].slug;
    const artigo = await getArtigo(slug);
    expect(artigo).not.toBeNull();

    const conteudo = typeof artigo!.conteudo === 'string'
      ? artigo!.conteudo
      : artigo!.conteudo.join('');

    // Artigos MDX contém HTML (h2, p, etc.)
    expect(conteudo).toMatch(/<[a-z]/i);
  });
});
