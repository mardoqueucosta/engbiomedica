/**
 * Re-exporta metadados leves e a função de carregamento individual.
 * Nenhuma página precisa mais importar todos os artigos completos de uma vez.
 */
export type { Artigo } from './types';
export type { ArtigoMeta } from './metadata';
export { artigosMeta, artigosMetaMap } from './metadata';
export { getArtigo } from './getArtigo';

/** Lista formatada para a página /artigos (retrocompatível com listaArtigos) */
export { artigosMeta as listaArtigos } from './metadata';

/** Slugs disponíveis para generateStaticParams — lidos dinamicamente dos .mdx */
export { artigosMeta as _meta } from './metadata';
import { artigosMeta as _metaSlugs } from './metadata';
export const slugs = _metaSlugs.map(a => a.slug);
