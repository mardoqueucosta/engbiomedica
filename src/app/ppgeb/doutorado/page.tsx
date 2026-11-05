import { CursoPage, cursoMetadata } from '@/components/ppgeb/CursoPage';

export const metadata = cursoMetadata(
  'doutorado',
  'Doutorado acadêmico em Engenharia Biomédica na Universidade Brasil (São Paulo), nota 4 na CAPES. 48 meses, doutorado direto, disciplinas, regras de qualificação e defesa, linhas de pesquisa e orientadores.',
);

export default function Page() {
  return <CursoPage slug="doutorado" />;
}
