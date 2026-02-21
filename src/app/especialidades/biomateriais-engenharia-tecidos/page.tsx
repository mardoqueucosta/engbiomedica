import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Biomateriais e Engenharia de Tecidos — Engenharia Biomédica',
  description: 'Tudo sobre biomateriais e engenharia de tecidos: o que faz, mercado de trabalho, salários, formação e perspectivas futuras na Engenharia Biomédica.',
  alternates: { canonical: '/especialidades/biomateriais-engenharia-tecidos' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Especialidades"
      pillarHref="/especialidades"
      sectionLabel="Biomateriais e Engenharia de Tecidos"
    />
  );
}
