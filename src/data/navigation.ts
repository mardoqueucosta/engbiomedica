import {
  GraduationCap,
  Briefcase,
  Scale,
  Microscope,
  Rocket,
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
      { label: 'Graduação', href: '/formacao/graduacao' },
      { label: 'Pós-Graduação', href: '/formacao/pos-graduacao' },
      { label: 'Grade Curricular', href: '/formacao/grade-curricular' },
    ],
  },
  {
    label: 'Mercado',
    href: '/mercado',
    icon: Briefcase,
    description: 'Salários, vagas e empresas',
    children: [
      { label: 'Visão Geral', href: '/mercado' },
      { label: 'Salários', href: '/mercado/salarios' },
      { label: 'Áreas de Atuação', href: '/mercado/areas-de-atuacao' },
      { label: 'Empresas', href: '/mercado/empresas' },
    ],
  },
  {
    label: 'Regulamentação',
    href: '/regulamentacao',
    icon: Scale,
    description: 'CREA, ANVISA e normas',
    children: [
      { label: 'Visão Geral', href: '/regulamentacao' },
      { label: 'CONFEA/CREA', href: '/regulamentacao/confea-crea' },
      { label: 'ANVISA', href: '/regulamentacao/anvisa' },
      { label: 'Normas Técnicas', href: '/regulamentacao/normas' },
    ],
  },
  {
    label: 'Pesquisa',
    href: '/pesquisa',
    icon: Microscope,
    description: 'Centros, financiamento e patentes',
    children: [
      { label: 'Visão Geral', href: '/pesquisa' },
      { label: 'Centros de Pesquisa', href: '/pesquisa/centros' },
      { label: 'Financiamento', href: '/pesquisa/financiamento' },
    ],
  },
  {
    label: 'Startups',
    href: '/startups',
    icon: Rocket,
    description: '1.919 healthtechs mapeadas',
    children: [
      { label: 'Ecossistema', href: '/startups' },
      { label: 'Hubs e Aceleradoras', href: '/startups/hubs' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: FileText,
    description: 'Artigos e análises',
  },
  {
    label: 'Eventos',
    href: '/eventos',
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
      { label: 'Panorama EUA', href: '/internacional/eua' },
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
    { label: 'Cursos de Graduação', href: '/formacao/graduacao' },
    { label: 'Pós-Graduação', href: '/formacao/pos-graduacao' },
    { label: 'Grade Curricular', href: '/formacao/grade-curricular' },
  ],
  profissional: [
    { label: 'Salários', href: '/mercado/salarios' },
    { label: 'Empresas', href: '/mercado/empresas' },
    { label: 'Regulamentação', href: '/regulamentacao' },
    { label: 'Startups', href: '/startups' },
  ],
};
