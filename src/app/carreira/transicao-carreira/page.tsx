import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Transição de Carreira — Carreira em Engenharia Biomédica',
  description: 'Roteiros para profissionais migrando de outras engenharias, da academia para a indústria ou do Brasil para o exterior.',
  alternates: { canonical: '/carreira/transicao-carreira' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Carreira"
      pillarHref="/carreira"
      sectionLabel="Transição de Carreira"
      thirdLink={{ label: 'Panorama Internacional', href: '/artigos/engenharia-biomedica-eua-comparativo' }}
    />
  );
}
