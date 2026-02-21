import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Processamento de Sinais e Imagens — Engenharia Biomédica',
  description: 'Tudo sobre processamento de sinais e imagens biomédicas: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/processamento-sinais-imagens' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="Processamento de Sinais e Imagens"
      thirdLink={{ label: 'Python e MATLAB para Biomédica', href: '/pesquisa/ferramentas-python-matlab' }}
    />
  );
}
