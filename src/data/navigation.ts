import {
  GraduationCap,
  Briefcase,
  Scale,
  Microscope,
  FileText,
  Calendar,
  Globe,
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
    description: 'Cursos, grades e pós-graduação',
    children: [
      { label: 'Visão Geral', href: '/formacao' },
      { label: 'Graduação', href: '/artigos/faculdades-engenharia-biomedica-brasil' },
      { label: 'Pós-Graduação', href: '/artigos/pos-graduacao-engenharia-biomedica' },
      { label: 'Grade Curricular', href: '/artigos/grade-curricular-engenharia-biomedica' },
    ],
  },
  {
    label: 'Mercado',
    href: '/mercado',
    icon: Briefcase,
    description: 'Salários, empresas e startups',
    children: [
      { label: 'Visão Geral', href: '/mercado' },
      { label: 'Salários', href: '/artigos/salario-engenheiro-biomedico' },
      { label: 'Áreas de Atuação', href: '/artigos/areas-atuacao-engenharia-biomedica' },
      { label: 'Empresas', href: '/mercado/empresas' },
      { label: 'Healthtechs', href: '/artigos/healthtechs-brasil-ecossistema' },
      { label: 'Hubs e Aceleradoras', href: '/startups/hubs' },
    ],
  },
  {
    label: 'Regulamentação',
    href: '/regulamentacao',
    icon: Scale,
    description: 'CREA, ANVISA e normas',
    children: [
      { label: 'Visão Geral', href: '/regulamentacao' },
      { label: 'CONFEA/CREA', href: '/artigos/registro-crea-engenheiro-biomedico' },
      { label: 'ANVISA', href: '/artigos/anvisa-dispositivos-medicos-regulamentacao' },
      { label: 'Normas Técnicas', href: '/artigos/normas-tecnicas-engenharia-biomedica' },
    ],
  },
  {
    label: 'Pesquisa',
    href: '/pesquisa',
    icon: Microscope,
    description: 'Centros, financiamento e patentes',
    children: [
      { label: 'Visão Geral', href: '/pesquisa' },
      { label: 'Centros de Pesquisa', href: '/artigos/centros-pesquisa-engenharia-biomedica' },
      { label: 'Financiamento', href: '/pesquisa/financiamento' },
    ],
  },
  {
    label: 'Artigos',
    href: '/artigos',
    icon: FileText,
    description: 'Artigos e análises',
  },
  {
    label: 'Eventos',
    href: '/artigos/calendario-eventos-engenharia-biomedica-2026',
    icon: Calendar,
    description: 'CBEB, feiras e congressos',
  },
  {
    label: 'Internacional',
    href: '/internacional',
    icon: Globe,
    description: 'EUA, rankings e repositórios',
    children: [
      { label: 'Visão Geral', href: '/internacional' },
      { label: 'Panorama EUA', href: '/artigos/engenharia-biomedica-eua-vs-brasil' },
      { label: 'Repositórios Acadêmicos', href: '/internacional/repositorios' },
    ],
  },
];

export const footerNavigation = {
  portal: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
    { label: 'Recursos', href: '/recursos' },
    { label: 'Glossário', href: '/glossario' },
  ],
  formacao: [
    { label: 'Cursos de Graduação', href: '/artigos/faculdades-engenharia-biomedica-brasil' },
    { label: 'Pós-Graduação', href: '/artigos/pos-graduacao-engenharia-biomedica' },
    { label: 'Grade Curricular', href: '/artigos/grade-curricular-engenharia-biomedica' },
  ],
  profissional: [
    { label: 'Salários', href: '/artigos/salario-engenheiro-biomedico' },
    { label: 'Empresas', href: '/mercado/empresas' },
    { label: 'Regulamentação', href: '/regulamentacao' },
    { label: 'Healthtechs', href: '/artigos/healthtechs-brasil-ecossistema' },
  ],
};
