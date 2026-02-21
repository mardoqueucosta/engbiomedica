import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Instrumentação Biomédica — Engenharia Biomédica',
  description: 'Tudo sobre instrumentação biomédica: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/instrumentacao-biomedica' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="Instrumentação Biomédica"
      thirdLink={{ label: 'Equipamentos e Tecnologia Hospitalar', href: '/equipamentos' }}
    />
  );
}
