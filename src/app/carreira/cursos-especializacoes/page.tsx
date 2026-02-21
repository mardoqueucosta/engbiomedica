import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Cursos e Especializações — Carreira em Engenharia Biomédica',
  description: 'Cursos e especializações para engenheiros biomédicos: pós-graduação lato sensu, MBAs e plataformas de educação continuada.',
  alternates: { canonical: '/carreira/cursos-especializacoes' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Carreira"
      pillarHref="/carreira"
      sectionLabel="Cursos e Especializações"
      thirdLink={{ label: 'Pós-Graduação em Engenharia Biomédica', href: '/artigos/pos-graduacao-engenharia-biomedica' }}
    />
  );
}
