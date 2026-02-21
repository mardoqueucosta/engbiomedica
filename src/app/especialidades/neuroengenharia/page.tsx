import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Neuroengenharia — Engenharia Biomédica',
  description: 'Tudo sobre neuroengenharia: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/neuroengenharia' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="Neuroengenharia"
    />
  );
}
