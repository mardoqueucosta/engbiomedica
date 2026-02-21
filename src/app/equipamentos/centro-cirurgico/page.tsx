import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Equipamentos de Centro Cirúrgico — Equipamentos Hospitalares — Engenharia Biomédica',
  description: 'Guia técnico sobre equipamentos de centro cirúrgico: especificações, manutenção, boas práticas e recursos para engenheiros clínicos e gestores hospitalares.',
  alternates: { canonical: '/equipamentos/centro-cirurgico' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Equipamentos"
      pillarHref="/equipamentos"
      sectionLabel="Equipamentos de Centro Cirúrgico"
      thirdLink={{ label: 'Manutenção Hospitalar', href: '/equipamentos/manutencao-hospitalar' }}
    />
  );
}
