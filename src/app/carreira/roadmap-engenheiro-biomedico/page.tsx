import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Roadmap: Do Estágio à Diretoria — Carreira em Engenharia Biomédica',
  description: 'Mapa completo da evolução profissional do engenheiro biomédico: marcos, competências e faixas salariais em cada nível da carreira.',
  alternates: { canonical: '/carreira/roadmap-engenheiro-biomedico' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Carreira"
      pillarHref="/carreira"
      sectionLabel="Roadmap: Do Estágio à Diretoria"
      thirdLink={{ label: 'Salários do Engenheiro Biomédico', href: '/artigos/salario-engenheiro-biomedico' }}
    />
  );
}
