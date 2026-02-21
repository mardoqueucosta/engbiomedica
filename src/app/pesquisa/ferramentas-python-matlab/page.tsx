import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Python e MATLAB para Biomédica — Pesquisa — Engenharia Biomédica',
  description: 'Ferramentas computacionais para pesquisadores em Engenharia Biomédica: Python, MATLAB, processamento de sinais, análise de imagens e machine learning.',
  alternates: { canonical: '/pesquisa/ferramentas-python-matlab' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Pesquisa"
      pillarHref="/pesquisa"
      sectionLabel="Python e MATLAB para Biomédica"
      thirdLink={{ label: 'Repositórios Acadêmicos', href: '/internacional/repositorios' }}
    />
  );
}
