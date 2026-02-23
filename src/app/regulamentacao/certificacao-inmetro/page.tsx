import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Certificação INMETRO — Regulamentação — Engenharia Biomédica',
  description: 'Guia completo sobre certificação INMETRO para dispositivos médicos: requisitos, processo, documentação e boas práticas.',
  alternates: { canonical: '/regulamentacao/certificacao-inmetro' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Regulamentação"
      pillarHref="/regulamentacao"
      sectionLabel="Certificação INMETRO"
      thirdLink={{ label: 'ANVISA e Dispositivos Médicos', href: '/artigos/anvisa-dispositivos-medicos-guia-2026' }}
    />
  );
}
