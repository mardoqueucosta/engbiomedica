import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Gestão de Parque Tecnológico — Equipamentos Hospitalares — Engenharia Biomédica',
  description: 'Guia técnico sobre gestão de parque tecnológico: planejamento, aquisição, vida útil e recursos para engenheiros clínicos e gestores hospitalares.',
  alternates: { canonical: '/equipamentos/gestao-parque-tecnologico' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Equipamentos"
      pillarHref="/equipamentos"
      sectionLabel="Gestão de Parque Tecnológico"
      thirdLink={{ label: 'Indicadores de Engenharia Clínica', href: '/equipamentos/indicadores-engenharia-clinica' }}
    />
  );
}
