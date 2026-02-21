import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Equipamentos de UTI — Equipamentos Hospitalares — Engenharia Biomédica',
  description: 'Guia técnico sobre equipamentos de UTI: especificações, manutenção, boas práticas e recursos para engenheiros clínicos e gestores hospitalares.',
  alternates: { canonical: '/equipamentos/uti' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Equipamentos"
      pillarHref="/equipamentos"
      sectionLabel="Equipamentos de UTI"
      thirdLink={{ label: 'Manutenção Hospitalar', href: '/equipamentos/manutencao-hospitalar' }}
    />
  );
}
