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
import { artigo as cursoEngBiomedicaOQueEsperar } from './curso-engenharia-biomedica-o-que-esperar';
import { artigo as gradeCurricularEngBiomedica } from './grade-curricular-engenharia-biomedica';
import { artigo as faculdadesEngBiomedicaBrasil } from './faculdades-engenharia-biomedica-brasil';
import { artigo as notaCorteSisu } from './nota-corte-engenharia-biomedica-sisu';
import { artigo as posGraduacaoEngBiomedica } from './pos-graduacao-engenharia-biomedica';
import { artigo as salarioEngenheiroBiomedico } from './salario-engenheiro-biomedico';
import { artigo as mercadoTrabalhoEngBiomedica } from './mercado-trabalho-engenharia-biomedica';
import { artigo as mercadoDispositivosMedicosBrasil } from './mercado-dispositivos-medicos-brasil';
import { artigo as empresasEngBiomedicaBrasil } from './empresas-engenharia-biomedica-brasil';
import { artigo as healthtechsBrasilEcossistema } from './healthtechs-brasil-ecossistema';
import { artigo as registroCreaBiomedico } from './registro-crea-engenheiro-biomedico';
import { artigo as anvisaDispositivosMedicos } from './anvisa-dispositivos-medicos-regulamentacao';
import { artigo as normasTecnicasEngBiomedica } from './normas-tecnicas-engenharia-biomedica';

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
  'curso-engenharia-biomedica-o-que-esperar': cursoEngBiomedicaOQueEsperar,
  'grade-curricular-engenharia-biomedica': gradeCurricularEngBiomedica,
  'faculdades-engenharia-biomedica-brasil': faculdadesEngBiomedicaBrasil,
  'nota-corte-engenharia-biomedica-sisu': notaCorteSisu,
  'pos-graduacao-engenharia-biomedica': posGraduacaoEngBiomedica,
  'salario-engenheiro-biomedico': salarioEngenheiroBiomedico,
  'mercado-trabalho-engenharia-biomedica': mercadoTrabalhoEngBiomedica,
  'mercado-dispositivos-medicos-brasil': mercadoDispositivosMedicosBrasil,
  'empresas-engenharia-biomedica-brasil': empresasEngBiomedicaBrasil,
  'healthtechs-brasil-ecossistema': healthtechsBrasilEcossistema,
  'registro-crea-engenheiro-biomedico': registroCreaBiomedico,
  'anvisa-dispositivos-medicos-regulamentacao': anvisaDispositivosMedicos,
  'normas-tecnicas-engenharia-biomedica': normasTecnicasEngBiomedica,
};

export const listaArtigos = Object.entries(artigos).map(([slug, artigo]) => ({
  slug,
  titulo: artigo.titulo,
  resumo: artigo.resumo,
  categoria: artigo.categoria,
  categoriaVariant: artigo.categoriaVariant,
  data: artigo.data,
}));
