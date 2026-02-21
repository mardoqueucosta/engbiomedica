import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Biomecânica e Reabilitação — Engenharia Biomédica',
  description: 'Tudo sobre biomecânica e reabilitação: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/biomecanica-reabilitacao' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="Biomecânica e Reabilitação"
    />
  );
}
