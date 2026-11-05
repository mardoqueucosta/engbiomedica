import { CursoPage, cursoMetadata } from '@/components/ppgeb/CursoPage';

export const metadata = cursoMetadata(
  'pos-doutorado',
  'Estágio de pós-doutorado em Engenharia Biomédica na Universidade Brasil (São Paulo). 24 meses, com supervisão de docentes do PPGEB em três áreas de concentração.',
);

export default function Page() {
  return <CursoPage slug="pos-doutorado" />;
}
