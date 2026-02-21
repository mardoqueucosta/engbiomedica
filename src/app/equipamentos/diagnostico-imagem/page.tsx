import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Diagnóstico por Imagem — Equipamentos Hospitalares — Engenharia Biomédica',
  description: 'Guia técnico sobre equipamentos de diagnóstico por imagem: especificações, manutenção, boas práticas e recursos para engenheiros clínicos e gestores hospitalares.',
  alternates: { canonical: '/equipamentos/diagnostico-imagem' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Equipamentos"
      pillarHref="/equipamentos"
      sectionLabel="Diagnóstico por Imagem"
      thirdLink={{ label: 'Processamento de Sinais e Imagens', href: '/especialidades/processamento-sinais-imagens' }}
    />
  );
}
