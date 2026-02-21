import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Inteligência Artificial em Saúde — Engenharia Biomédica',
  description: 'Tudo sobre IA em saúde: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/inteligencia-artificial-saude' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="IA em Saúde"
      thirdLink={{ label: 'Python e MATLAB para Biomédica', href: '/pesquisa/ferramentas-python-matlab' }}
    />
  );
}
