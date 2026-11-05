import { CursoPage, cursoMetadata } from '@/components/ppgeb/CursoPage';

export const metadata = cursoMetadata(
  'mestrado',
  'Mestrado acadêmico em Engenharia Biomédica na Universidade Brasil (São Paulo), nota 4 na CAPES. 24 meses, disciplinas, regras de qualificação e defesa, linhas de pesquisa e orientadores.',
);

export default function Page() {
  return <CursoPage slug="mestrado" />;
}
