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
      { label: 'Engenharia Clínica', href: '/artigos/engenharia-clinica-guia-completo' },
      { label: 'Instrumentação Biomédica', href: '/artigos/instrumentacao-biomedica' },
      { label: 'Processamento de Sinais e Imagens', href: '/artigos/processamento-sinais-biomedicos-python' },
      { label: 'Biomecânica e Reabilitação', href: '/artigos/biomecanica-movimento-proteses' },
      { label: 'Biomateriais e Eng. de Tecidos', href: '/artigos/biomateriais-implantes-bioimpressao' },
      { label: 'Informática em Saúde', href: '/artigos/informatica-saude-his-prontuario' },
      { label: 'IA em Saúde', href: '/artigos/ia-saude-brasil' },
      { label: 'Neuroengenharia', href: '/artigos/neuroengenharia-bci' },
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
      { label: 'Certificação INMETRO', href: '/artigos/certificacao-inmetro-equipamentos-medicos' },
      { label: 'SaMD — Software como Disp. Médico', href: '/artigos/samd-software-dispositivo-medico' },
    ],
  },
  {
    label: 'Equipamentos',
    href: '/equipamentos',
    icon: HeartPulse,
    description: 'Tecnologia hospitalar, manutenção e gestão',
    children: [
      { label: 'Visão Geral', href: '/equipamentos' },
      { label: 'Centro Cirúrgico', href: '/artigos/equipamentos-centro-cirurgico' },
      { label: 'UTI', href: '/artigos/equipamentos-uti-guia' },
      { label: 'Diagnóstico por Imagem', href: '/artigos/equipamentos-diagnostico-imagem' },
      { label: 'Manutenção Hospitalar', href: '/artigos/manutencao-equipamentos-hospitalares' },
      { label: 'Gestão de Parque Tecnológico', href: '/artigos/gestao-parque-tecnologico-hospitalar' },
      { label: 'Indicadores de Eng. Clínica', href: '/artigos/indicadores-engenharia-clinica-kpis' },
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
      { label: 'Financiamento', href: '/artigos/editais-financiamento-pesquisa-saude' },
      { label: 'Publicação Científica', href: '/artigos/como-publicar-artigos-engenharia-biomedica' },
      { label: 'Python e MATLAB para Biomédica', href: '/artigos/python-matlab-engenharia-biomedica' },
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
      { label: 'Roadmap: Estágio à Diretoria', href: '/artigos/roadmap-carreira-engenheiro-biomedico' },
      { label: 'Certificações Profissionais', href: '/artigos/certificacoes-engenheiros-biomedicos' },
      { label: 'Cursos e Especializações', href: '/artigos/melhores-cursos-online-engenharia-clinica' },
      { label: 'Estágio e Primeiro Emprego', href: '/artigos/estagio-engenharia-biomedica-guia' },
      { label: 'Transição de Carreira', href: '/artigos/transicao-engenharia-biomedica' },
      { label: 'Livros Essenciais', href: '/artigos/livros-engenharia-biomedica' },
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
    { label: 'Eng. Clínica', href: '/artigos/engenharia-clinica-guia-completo' },
    { label: 'Biomateriais', href: '/artigos/biomateriais-implantes-bioimpressao' },
    { label: 'IA em Saúde', href: '/artigos/ia-saude-brasil' },
    { label: 'Processamento de Sinais', href: '/artigos/processamento-sinais-biomedicos-python' },
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
    { label: 'INMETRO', href: '/artigos/certificacao-inmetro-equipamentos-medicos' },
    { label: 'SaMD', href: '/artigos/samd-software-dispositivo-medico' },
  ],
  equipamentos: [
    { label: 'Centro Cirúrgico', href: '/artigos/equipamentos-centro-cirurgico' },
    { label: 'UTI', href: '/artigos/equipamentos-uti-guia' },
    { label: 'Manutenção', href: '/artigos/manutencao-equipamentos-hospitalares' },
    { label: 'Diagnóstico por Imagem', href: '/artigos/equipamentos-diagnostico-imagem' },
  ],
  pesquisa: [
    { label: 'Centros de Pesquisa', href: '/artigos/centros-pesquisa-engbiomedica-mapa' },
    { label: 'Financiamento', href: '/artigos/editais-financiamento-pesquisa-saude' },
    { label: 'Python/MATLAB', href: '/artigos/python-matlab-engenharia-biomedica' },
    { label: 'Publicação Científica', href: '/artigos/como-publicar-artigos-engenharia-biomedica' },
  ],
  carreira: [
    { label: 'Certificações', href: '/artigos/certificacoes-engenheiros-biomedicos' },
    { label: 'Cursos', href: '/artigos/melhores-cursos-online-engenharia-clinica' },
    { label: 'Roadmap', href: '/artigos/roadmap-carreira-engenheiro-biomedico' },
    { label: 'Livros', href: '/artigos/livros-engenharia-biomedica' },
    { label: 'Estágio', href: '/artigos/estagio-engenharia-biomedica-guia' },
  ],
};
