import { Artigo } from './types';
import { artigo as oQueEEngenhariaBiomedica } from './o-que-e-engenharia-biomedica';
import { artigo as iaSaudeBrasil2025 } from './ia-saude-brasil-2025';
import { artigo as diferencaEngenheiroBiomedico } from './diferenca-engenheiro-biomedico-biomedico';
import { artigo as comoRegistrarCrea } from './como-registrar-crea';
import { artigo as healthtechsLatam2024 } from './healthtechs-latam-2024';
import { artigo as guiaEngenhariaBiomedica } from './guia-engenharia-biomedica';
import { artigo as historiaEngenhariaBiomedicaBrasil } from './historia-engenharia-biomedica-brasil';
import { artigo as oQueFazEngenheiroBiomedico } from './o-que-faz-engenheiro-biomedico';
import { artigo as areasAtuacaoEngenhariaBiomedica } from './areas-atuacao-engenharia-biomedica';
import { artigo as diferencaEngBiomedicaBiomedicina } from './diferenca-engenharia-biomedica-biomedicina';

export type { Artigo };

export const artigos: Record<string, Artigo> = {
  'o-que-e-engenharia-biomedica': oQueEEngenhariaBiomedica,
  'ia-saude-brasil-2025': iaSaudeBrasil2025,
  'diferenca-engenheiro-biomedico-biomedico': diferencaEngenheiroBiomedico,
  'como-registrar-crea': comoRegistrarCrea,
  'healthtechs-latam-2024': healthtechsLatam2024,
  'guia-engenharia-biomedica': guiaEngenhariaBiomedica,
  'historia-engenharia-biomedica-brasil': historiaEngenhariaBiomedicaBrasil,
  'o-que-faz-engenheiro-biomedico': oQueFazEngenheiroBiomedico,
  'areas-atuacao-engenharia-biomedica': areasAtuacaoEngenhariaBiomedica,
  'diferenca-engenharia-biomedica-biomedicina': diferencaEngBiomedicaBiomedicina,
};

export const listaArtigos = Object.entries(artigos).map(([slug, artigo]) => ({
  slug,
  titulo: artigo.titulo,
  resumo: artigo.resumo,
  categoria: artigo.categoria,
  categoriaVariant: artigo.categoriaVariant,
  data: artigo.data,
}));
