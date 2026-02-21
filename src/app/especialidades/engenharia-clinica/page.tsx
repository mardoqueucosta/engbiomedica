import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Engenharia Clínica — Engenharia Biomédica',
  description: 'Tudo sobre engenharia clínica: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/engenharia-clinica' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="Engenharia Clínica"
      thirdLink={{ label: 'Equipamentos e Tecnologia Hospitalar', href: '/equipamentos' }}
    />
  );
}
