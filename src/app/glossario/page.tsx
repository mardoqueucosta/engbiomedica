import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { breadcrumbJsonLd } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Glossário',
  description:
    'Glossário com 85+ termos técnicos de Engenharia Biomédica: regulamentação (ANVISA, CREA, FDA), dispositivos médicos, normas (ISO, IEC), áreas técnicas, informática em saúde e mercado.',
  alternates: { canonical: '/glossario' },
  openGraph: {
    images: [{ url: '/api/og?title=Gloss%C3%A1rio%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Gloss%C3%A1rio', width: 1200, height: 630 }],
  },
};

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const termos = [
  // ─── Regulamentação e institucional ────────────────────────────
  { termo: 'ABET', def: 'Accreditation Board for Engineering and Technology — organização que acredita programas de engenharia, incluindo Engenharia Biomédica, nos EUA e internacionalmente.' },
  { termo: 'ABECLIN', def: 'Associação Brasileira de Engenharia Clínica — entidade que promove o desenvolvimento da engenharia clínica no Brasil por meio de eventos, certificações e networking profissional.' },
  { termo: 'ANVISA', def: 'Agência Nacional de Vigilância Sanitária — responsável pela regulação de dispositivos médicos no Brasil, incluindo registro, Boas Práticas de Fabricação e tecnovigilância.' },
  { termo: 'ART', def: 'Anotação de Responsabilidade Técnica — documento emitido pelo CREA que vincula o profissional de engenharia à obra ou serviço técnico prestado.' },
  { termo: 'BPF', def: 'Boas Práticas de Fabricação — conjunto de normas (RDC 665/2022) que garantem a qualidade e segurança na produção de dispositivos médicos.' },
  { termo: 'CAPES', def: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior — avalia programas de pós-graduação stricto sensu no Brasil com conceitos de 1 a 7.' },
  { termo: 'CBO', def: 'Classificação Brasileira de Ocupações — sistema do Ministério do Trabalho. O Engenheiro Biomédico é classificado como CBO 2143-80.' },
  { termo: 'CCE', def: 'Certified Clinical Engineer — certificação internacional concedida pela ACCE (American College of Clinical Engineering) que atesta competência em engenharia clínica.' },
  { termo: 'CONFEA/CREA', def: 'Conselho Federal e Conselhos Regionais de Engenharia e Agronomia — regulamenta e fiscaliza o exercício da engenharia no Brasil, incluindo Engenharia Biomédica desde 2008.' },
  { termo: 'ENADE', def: 'Exame Nacional de Desempenho dos Estudantes — avaliação obrigatória do MEC que mede a qualidade dos cursos de graduação, incluindo Engenharia Biomédica.' },
  { termo: 'FDA', def: 'Food and Drug Administration — agência reguladora dos EUA responsável pela aprovação de dispositivos médicos via vias 510(k), PMA e De Novo.' },
  { termo: 'INMETRO', def: 'Instituto Nacional de Metrologia, Qualidade e Tecnologia — responsável pela certificação de equipamentos médicos no Brasil, incluindo ensaios de segurança elétrica e compatibilidade eletromagnética.' },
  { termo: 'Marcação CE', def: 'Conformité Européenne — certificação obrigatória para comercializar dispositivos médicos na União Europeia, atestando conformidade com o MDR (EU) 2017/745.' },
  { termo: 'MDR (EU)', def: 'Medical Device Regulation — regulamento europeu 2017/745 que substituiu as Diretivas de Dispositivos Médicos, com requisitos mais rigorosos de evidência clínica e rastreabilidade.' },
  { termo: 'PMA', def: 'Premarket Approval — via regulatória da FDA para dispositivos médicos de Classe III (alto risco), exigindo evidência científica de segurança e eficácia.' },
  { termo: 'RDC 751/2022', def: 'Resolução da ANVISA que classifica dispositivos médicos em quatro classes de risco (I a IV) e define as vias de registro no Brasil.' },
  { termo: 'SBEB', def: 'Sociedade Brasileira de Engenharia Biomédica — principal entidade científica da área no Brasil, organizadora do CBEB (Congresso Brasileiro de Engenharia Biomédica).' },
  { termo: 'SINAES', def: 'Sistema Nacional de Avaliação da Educação Superior — sistema do MEC que integra ENADE, avaliação institucional e de cursos para garantir a qualidade do ensino superior.' },
  { termo: 'Tecnovigilância', def: 'Sistema de monitoramento pós-mercado de eventos adversos e queixas técnicas relacionados a dispositivos médicos, coordenado pela ANVISA.' },
  { termo: 'UDI', def: 'Unique Device Identification — sistema global de identificação única de dispositivos médicos que permite rastreabilidade ao longo de toda a cadeia, exigido pela ANVISA (RDC 591/2021) e FDA.' },
  { termo: '510(k)', def: 'Via regulatória da FDA que permite a comercialização de dispositivos médicos demonstrando equivalência substancial a um dispositivo já aprovado.' },

  // ─── Normas técnicas ───────────────────────────────────────────
  { termo: 'IEC 60601', def: 'Família de normas internacionais da IEC que define requisitos de segurança e desempenho essencial para equipamentos eletromédicos.' },
  { termo: 'IEC 62304', def: 'Norma internacional para ciclo de vida de desenvolvimento de software em dispositivos médicos, definindo classes de segurança e requisitos de documentação.' },
  { termo: 'ISO 13485', def: 'Norma internacional de sistema de gestão da qualidade para a indústria de dispositivos médicos. Requisito para certificação e registro em múltiplos mercados.' },
  { termo: 'ISO 14971', def: 'Norma internacional para aplicação de gerenciamento de risco a dispositivos médicos ao longo de todo o ciclo de vida do produto.' },

  // ─── Áreas técnicas ────────────────────────────────────────────
  { termo: 'BCI', def: 'Brain-Computer Interface (Interface Cérebro-Computador) — sistema que traduz sinais cerebrais em comandos para dispositivos externos, usado em reabilitação e comunicação assistiva.' },
  { termo: 'Biocompatibilidade', def: 'Capacidade de um material ou dispositivo de interagir com tecidos biológicos sem causar reações adversas. Avaliada conforme a ISO 10993.' },
  { termo: 'Bioimpressão 3D', def: 'Tecnologia de fabricação aditiva que utiliza biotintas contendo células vivas para construir estruturas teciduais camada a camada, aplicada em engenharia de tecidos e medicina regenerativa.' },
  { termo: 'Bioinstrumentação', def: 'Subárea da engenharia biomédica dedicada ao projeto e desenvolvimento de sensores, circuitos e sistemas para medir sinais biológicos como ECG, EEG e EMG.' },
  { termo: 'Biomateriais', def: 'Materiais naturais ou sintéticos projetados para interagir com sistemas biológicos — incluem metais (titânio), cerâmicas (hidroxiapatita), polímeros (PEEK) e compósitos usados em implantes e próteses.' },
  { termo: 'Biomecânica', def: 'Estudo das forças mecânicas que atuam sobre o corpo humano e seus efeitos, aplicado no projeto de próteses, órteses, implantes ortopédicos e análise de movimento.' },
  { termo: 'Engenharia Clínica', def: 'Área da Engenharia Biomédica dedicada à gestão de tecnologia em saúde dentro de hospitais — aquisição, manutenção, calibração e descarte de equipamentos médicos.' },
  { termo: 'Engenharia de Tecidos', def: 'Campo interdisciplinar que combina células, biomateriais e fatores bioquímicos para restaurar, manter ou melhorar tecidos biológicos danificados.' },
  { termo: 'Nanotecnologia Biomédica', def: 'Aplicação de materiais e dispositivos em escala nanométrica (1-100 nm) na medicina — inclui nanopartículas para drug delivery, nanosensores e nanorrobôs para diagnóstico e terapia.' },
  { termo: 'Neuroengenharia', def: 'Subárea que aplica princípios de engenharia ao sistema nervoso — inclui interfaces neurais, estimulação cerebral profunda, neuroimagem e neuroproteção.' },
  { termo: 'Processamento de Sinais Biomédicos', def: 'Aplicação de técnicas matemáticas e computacionais para extrair informações clínicas de sinais biológicos como ECG, EEG, EMG e sinais de imagem médica.' },
  { termo: 'SaMD', def: 'Software as a Medical Device — software com finalidade médica própria, regulado pela ANVISA (RDC 657/2022) e pela FDA.' },

  // ─── Sinais e exames ───────────────────────────────────────────
  { termo: 'ECG', def: 'Eletrocardiograma — registro gráfico da atividade elétrica do coração captada por eletrodos na superfície corporal, fundamental para diagnóstico de arritmias e isquemias.' },
  { termo: 'EEG', def: 'Eletroencefalograma — registro da atividade elétrica cerebral captada por eletrodos no escalpo, usado no diagnóstico de epilepsia, distúrbios do sono e em interfaces cérebro-computador.' },
  { termo: 'EMG', def: 'Eletromiografia — registro da atividade elétrica dos músculos, usado em diagnóstico neuromuscular, reabilitação e controle de próteses mioelétricas.' },

  // ─── Equipamentos médicos ─────────────────────────────────────
  { termo: 'Desfibrilador', def: 'Equipamento que aplica pulso elétrico controlado ao coração para reverter arritmias graves (fibrilação ventricular). Pode ser externo automático (DEA) ou cardioversor-desfibrilador implantável (CDI).' },
  { termo: 'Ressonância Magnética (RM)', def: 'Técnica de diagnóstico por imagem que utiliza campos magnéticos e radiofrequência para gerar imagens detalhadas de tecidos moles, sem radiação ionizante.' },
  { termo: 'Tomografia Computadorizada (TC)', def: 'Técnica de imagem que combina múltiplas projeções de raios-X processadas computacionalmente para gerar imagens transversais detalhadas do corpo.' },
  { termo: 'Ventilador Mecânico', def: 'Equipamento que fornece suporte ventilatório a pacientes com insuficiência respiratória, controlando volume, pressão e frequência da ventilação pulmonar.' },

  // ─── Informática em saúde ──────────────────────────────────────
  { termo: 'DICOM', def: 'Digital Imaging and Communications in Medicine — padrão internacional para armazenamento e transmissão de imagens médicas (radiografias, tomografias, ressonâncias) entre sistemas.' },
  { termo: 'HL7/FHIR', def: 'Health Level Seven / Fast Healthcare Interoperability Resources — padrões de interoperabilidade para troca de dados clínicos entre sistemas de saúde (HIS, PEP, laboratórios).' },
  { termo: 'IoMT', def: 'Internet of Medical Things — ecossistema de dispositivos médicos conectados (wearables, monitores remotos, sensores) que coletam e transmitem dados de saúde em tempo real.' },
  { termo: 'PACS', def: 'Picture Archiving and Communication System — sistema para armazenamento, recuperação e distribuição de imagens médicas digitais em formato DICOM dentro de hospitais e redes de saúde.' },
  { termo: 'PEP', def: 'Prontuário Eletrônico do Paciente — sistema digital que centraliza o histórico clínico do paciente, substituindo prontuários em papel. Regulado pela SBIS e CFM no Brasil.' },
  { termo: 'Telemedicina', def: 'Prática médica mediada por tecnologia que permite consultas, diagnósticos e monitoramento remoto. Regulamentada no Brasil pela Lei 14.510/2022.' },

  // ─── Mercado e indústria ───────────────────────────────────────
  { termo: 'Ensaio Clínico', def: 'Estudo científico controlado em seres humanos para avaliar segurança e eficácia de dispositivos médicos ou terapias antes da aprovação regulatória.' },
  { termo: 'Healthtech', def: 'Startup que utiliza tecnologia para resolver problemas do setor de saúde. O Brasil possui 1.919 healthtechs mapeadas, 64,8% da América Latina.' },
  { termo: 'Medtech', def: 'Abreviação de Medical Technology — refere-se a dispositivos, equipamentos e soluções tecnológicas para o setor de saúde.' },

  // ─── Outros ────────────────────────────────────────────────────
  { termo: 'EMI', def: 'Electromagnetic Interference (Interferência Eletromagnética) — perturbação causada por campos eletromagnéticos que pode afetar o funcionamento de equipamentos médicos. A compatibilidade eletromagnética (EMC) é testada conforme IEC 60601-1-2.' },
  { termo: 'LGPD em Saúde', def: 'Aplicação da Lei Geral de Proteção de Dados (Lei 13.709/2018) ao setor de saúde — dados de saúde são classificados como sensíveis e exigem consentimento específico e medidas reforçadas de segurança.' },
];

const sortedTermos = [...termos].sort((a, b) => a.termo.localeCompare(b.termo));

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossário de Engenharia Biomédica',
  description:
    'Glossário com 85+ termos técnicos de Engenharia Biomédica: regulamentação, dispositivos médicos, normas, áreas técnicas e mercado.',
  url: 'https://engenhariabiomedica.com/glossario',
  definedTerm: sortedTermos.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.termo,
    description: t.def,
    url: `https://engenhariabiomedica.com/glossario#${slugify(t.termo)}`,
    inDefinedTermSet: 'https://engenhariabiomedica.com/glossario',
  })),
};

export default function GlossarioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Glossário', href: '/glossario' }])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      <PageHeader
        overline="Referências"
        title="Glossário de Engenharia Biomédica"
        description="Termos técnicos da área: regulamentação, dispositivos médicos, certificações, normas e mercado."
        breadcrumbs={[{ label: 'Glossário' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <dl className="space-y-0 divide-y divide-slate-100">
          {sortedTermos.map((t) => (
              <div key={t.termo} id={slugify(t.termo)} className="py-4 first:pt-0 last:pb-0">
                <dt className="text-h4 text-primary-700 mb-1">{t.termo}</dt>
                <dd className="text-body-sm text-slate-600 font-serif">
                  {t.def}
                </dd>
              </div>
            ))}
        </dl>

        <div className="mt-10 p-5 rounded-xl bg-teal-50 border border-teal-200">
          <h3 className="text-h4 text-teal-700 mb-2">
            Não encontrou o termo que procura?
          </h3>
          <p className="text-body-sm text-teal-800 font-serif">
            Este glossário é atualizado continuamente. Se você precisa de um
            termo específico que não está listado, entre em contato pelo nosso{' '}
            <a href="/contato" className="underline decoration-teal-400 underline-offset-2 hover:text-teal-900 transition-colors">
              formulário
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
