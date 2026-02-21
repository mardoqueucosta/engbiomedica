import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Indicadores de Engenharia Clínica — Equipamentos Hospitalares — Engenharia Biomédica',
  description: 'Guia técnico sobre indicadores de engenharia clínica: KPIs, MTBF, disponibilidade e recursos para engenheiros clínicos e gestores hospitalares.',
  alternates: { canonical: '/equipamentos/indicadores-engenharia-clinica' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Equipamentos"
      pillarHref="/equipamentos"
      sectionLabel="Indicadores de Engenharia Clínica"
      thirdLink={{ label: 'Manutenção Hospitalar', href: '/equipamentos/manutencao-hospitalar' }}
    />
  );
}
