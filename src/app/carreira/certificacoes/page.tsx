import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Certificações Profissionais — Carreira em Engenharia Biomédica',
  description: 'Certificações profissionais para engenheiros biomédicos: CBET, PMP, Six Sigma e outras que agregam valor ao currículo.',
  alternates: { canonical: '/carreira/certificacoes' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Carreira"
      pillarHref="/carreira"
      sectionLabel="Certificações Profissionais"
      thirdLink={{ label: 'Cursos e Especializações', href: '/carreira/cursos-especializacoes' }}
    />
  );
}
