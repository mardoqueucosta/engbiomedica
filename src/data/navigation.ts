import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  Scale,
  HeartPulse,
  Microscope,
  TrendingUp,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Formação',
    href: '/formacao',
    icon: GraduationCap,
    description: 'Cursos, salários e áreas de atuação',
    children: [
      { label: 'Visão Geral', href: '/formacao' },
      { label: 'Graduação', href: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking' },
      { label: 'Pós-Graduação', href: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica' },
      { label: 'Grade Curricular', href: '/artigos/grade-curricular-engenharia-biomedica-5-anos' },
      { label: 'Áreas de Atuação', href: '/artigos/areas-atuacao-engenharia-biomedica' },
      { label: 'Salários', href: '/artigos/quanto-ganha-engenheiro-biomedico-2026' },
    ],
  },
  {
    label: 'Especialidades',
    href: '/especialidades',
    icon: Stethoscope,
    description: 'Áreas de especialização em Engenharia Biomédica',
    children: [
      { label: 'Visão Geral', href: '/especialidades' },
      { label: 'Engenharia Clínica', href: '/especialidades/engenharia-clinica' },
      { label: 'Instrumentação Biomédica', href: '/especialidades/instrumentacao-biomedica' },
      { label: 'Processamento de Sinais e Imagens', href: '/especialidades/processamento-sinais-imagens' },
      { label: 'Biomecânica e Reabilitação', href: '/especialidades/biomecanica-reabilitacao' },
      { label: 'Biomateriais e Eng. de Tecidos', href: '/especialidades/biomateriais-engenharia-tecidos' },
      { label: 'Informática em Saúde', href: '/especialidades/informatica-saude' },
      { label: 'IA em Saúde', href: '/especialidades/inteligencia-artificial-saude' },
      { label: 'Neuroengenharia', href: '/especialidades/neuroengenharia' },
    ],
  },
  {
    label: 'Mercado',
    href: '/mercado',
    icon: Briefcase,
    description: 'Empresas, salários, eventos e panorama internacional',
    children: [
      { label: 'Visão Geral', href: '/mercado' },
      { label: 'Empresas e Empregadores', href: '/mercado/empresas' },
      { label: 'Healthtechs e Startups', href: '/artigos/healthtechs-mapa-brasil' },
      { label: 'Salários', href: '/artigos/quanto-ganha-engenheiro-biomedico-2026' },
      { label: 'Eventos', href: '/artigos/calendario-eventos-engbiomedica-saude-digital' },
      { label: 'Panorama Internacional', href: '/artigos/engenharia-biomedica-eua-comparativo' },
    ],
  },
  {
    label: 'Regulamentação',
    href: '/regulamentacao',
    icon: Scale,
    description: 'ANVISA, CREA, normas técnicas e certificações',
    children: [
      { label: 'Visão Geral', href: '/regulamentacao' },
      { label: 'ANVISA e Dispositivos Médicos', href: '/artigos/anvisa-dispositivos-medicos-guia-2026' },
      { label: 'CONFEA/CREA', href: '/artigos/registro-crea-engenheiro-biomedico-guia' },
      { label: 'Normas Técnicas', href: '/artigos/normas-tecnicas-engenharia-biomedica' },
      { label: 'Certificação INMETRO', href: '/regulamentacao/certificacao-inmetro' },
      { label: 'SaMD — Software como Disp. Médico', href: '/regulamentacao/software-dispositivo-medico-samd' },
    ],
  },
  {
    label: 'Equipamentos',
    href: '/equipamentos',
    icon: HeartPulse,
    description: 'Tecnologia hospitalar, manutenção e gestão',
    children: [
      { label: 'Visão Geral', href: '/equipamentos' },
      { label: 'Centro Cirúrgico', href: '/equipamentos/centro-cirurgico' },
      { label: 'UTI', href: '/equipamentos/uti' },
      { label: 'Diagnóstico por Imagem', href: '/equipamentos/diagnostico-imagem' },
      { label: 'Manutenção Hospitalar', href: '/equipamentos/manutencao-hospitalar' },
      { label: 'Gestão de Parque Tecnológico', href: '/equipamentos/gestao-parque-tecnologico' },
      { label: 'Indicadores de Eng. Clínica', href: '/equipamentos/indicadores-engenharia-clinica' },
    ],
  },
  {
    label: 'Pesquisa',
    href: '/pesquisa',
    icon: Microscope,
    description: 'Centros, financiamento, publicação e ferramentas',
    children: [
      { label: 'Visão Geral', href: '/pesquisa' },
      { label: 'Centros de Pesquisa', href: '/artigos/centros-pesquisa-engbiomedica-mapa' },
      { label: 'Financiamento', href: '/pesquisa/financiamento' },
      { label: 'Publicação Científica', href: '/pesquisa/publicacao-cientifica' },
      { label: 'Python e MATLAB para Biomédica', href: '/pesquisa/ferramentas-python-matlab' },
      { label: 'Repositórios Acadêmicos', href: '/internacional/repositorios' },
    ],
  },
  {
    label: 'Carreira',
    href: '/carreira',
    icon: TrendingUp,
    description: 'Roadmap, certificações, cursos e recursos profissionais',
    children: [
      { label: 'Visão Geral', href: '/carreira' },
      { label: 'Roadmap: Estágio à Diretoria', href: '/carreira/roadmap-engenheiro-biomedico' },
      { label: 'Certificações Profissionais', href: '/carreira/certificacoes' },
      { label: 'Cursos e Especializações', href: '/carreira/cursos-especializacoes' },
      { label: 'Estágio e Primeiro Emprego', href: '/carreira/estagio-primeiro-emprego' },
      { label: 'Transição de Carreira', href: '/carreira/transicao-carreira' },
      { label: 'Livros Essenciais', href: '/carreira/livros-engenharia-biomedica' },
    ],
  },
  {
    label: 'Artigos',
    href: '/artigos',
    icon: FileText,
    description: 'Artigos e análises',
  },
];

export const footerNavigation = {
  portal: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
    { label: 'Glossário', href: '/glossario' },
    { label: 'Recursos', href: '/recursos' },
  ],
  formacao: [
    { label: 'Graduação', href: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking' },
    { label: 'Pós-Graduação', href: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica' },
    { label: 'Grade Curricular', href: '/artigos/grade-curricular-engenharia-biomedica-5-anos' },
  ],
  especialidades: [
    { label: 'Eng. Clínica', href: '/especialidades/engenharia-clinica' },
    { label: 'Biomateriais', href: '/especialidades/biomateriais-engenharia-tecidos' },
    { label: 'IA em Saúde', href: '/especialidades/inteligencia-artificial-saude' },
    { label: 'Processamento de Sinais', href: '/especialidades/processamento-sinais-imagens' },
  ],
  mercado: [
    { label: 'Panorama', href: '/mercado' },
    { label: 'Empresas', href: '/mercado/empresas' },
    { label: 'Healthtechs', href: '/artigos/healthtechs-mapa-brasil' },
    { label: 'Salários', href: '/artigos/quanto-ganha-engenheiro-biomedico-2026' },
    { label: 'Eventos', href: '/artigos/calendario-eventos-engbiomedica-saude-digital' },
  ],
  regulamentacao: [
    { label: 'ANVISA', href: '/artigos/anvisa-dispositivos-medicos-guia-2026' },
    { label: 'CREA', href: '/artigos/registro-crea-engenheiro-biomedico-guia' },
    { label: 'Normas Técnicas', href: '/artigos/normas-tecnicas-engenharia-biomedica' },
    { label: 'INMETRO', href: '/regulamentacao/certificacao-inmetro' },
    { label: 'SaMD', href: '/regulamentacao/software-dispositivo-medico-samd' },
  ],
  equipamentos: [
    { label: 'Centro Cirúrgico', href: '/equipamentos/centro-cirurgico' },
    { label: 'UTI', href: '/equipamentos/uti' },
    { label: 'Manutenção', href: '/equipamentos/manutencao-hospitalar' },
    { label: 'Diagnóstico por Imagem', href: '/equipamentos/diagnostico-imagem' },
  ],
  pesquisa: [
    { label: 'Centros de Pesquisa', href: '/artigos/centros-pesquisa-engbiomedica-mapa' },
    { label: 'Financiamento', href: '/pesquisa/financiamento' },
    { label: 'Python/MATLAB', href: '/pesquisa/ferramentas-python-matlab' },
    { label: 'Publicação Científica', href: '/pesquisa/publicacao-cientifica' },
  ],
  carreira: [
    { label: 'Certificações', href: '/carreira/certificacoes' },
    { label: 'Cursos', href: '/carreira/cursos-especializacoes' },
    { label: 'Roadmap', href: '/carreira/roadmap-engenheiro-biomedico' },
    { label: 'Livros', href: '/carreira/livros-engenharia-biomedica' },
    { label: 'Estágio', href: '/carreira/estagio-primeiro-emprego' },
  ],
};
