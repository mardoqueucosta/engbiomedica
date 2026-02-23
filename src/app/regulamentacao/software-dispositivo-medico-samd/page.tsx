import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'SaMD — Software como Dispositivo Médico — Regulamentação — Engenharia Biomédica',
  description: 'Guia completo sobre Software como Dispositivo Médico (SaMD): classificação, requisitos regulatórios, processo ANVISA e boas práticas.',
  alternates: { canonical: '/regulamentacao/software-dispositivo-medico-samd' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Regulamentação"
      pillarHref="/regulamentacao"
      sectionLabel="SaMD — Software como Dispositivo Médico"
      thirdLink={{ label: 'ANVISA e Dispositivos Médicos', href: '/artigos/anvisa-dispositivos-medicos-guia-2026' }}
    />
  );
}
