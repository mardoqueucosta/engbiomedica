import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Manutenção Hospitalar — Equipamentos Hospitalares — Engenharia Biomédica',
  description: 'Guia técnico sobre manutenção hospitalar: especificações, boas práticas, protocolos e recursos para engenheiros clínicos e gestores hospitalares.',
  alternates: { canonical: '/equipamentos/manutencao-hospitalar' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Equipamentos"
      pillarHref="/equipamentos"
      sectionLabel="Manutenção Hospitalar"
      thirdLink={{ label: 'Indicadores de Engenharia Clínica', href: '/equipamentos/indicadores-engenharia-clinica' }}
    />
  );
}
