import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Robótica Médica — Engenharia Biomédica',
  description: 'Tudo sobre robótica médica: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/robotica-medica' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="Robótica Médica"
    />
  );
}
