import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Glossário — Engenharia Biomédica',
  description:
    'Glossário de termos técnicos de Engenharia Biomédica: regulamentação (ANVISA, CREA), dispositivos médicos, certificações, normas e mercado.',
};

const termos = [
  { termo: 'ABET', def: 'Accreditation Board for Engineering and Technology — organização que acredita programas de engenharia, incluindo Engenharia Biomédica, nos EUA e internacionalmente.' },
  { termo: 'ANVISA', def: 'Agência Nacional de Vigilância Sanitária — responsável pela regulação de dispositivos médicos no Brasil, incluindo registro, Boas Práticas de Fabricação e tecnovigilância.' },
  { termo: 'ART', def: 'Anotação de Responsabilidade Técnica — documento emitido pelo CREA que vincula o profissional de engenharia à obra ou serviço técnico prestado.' },
  { termo: 'BPF', def: 'Boas Práticas de Fabricação — conjunto de normas (RDC 665/2022) que garantem a qualidade e segurança na produção de dispositivos médicos.' },
  { termo: 'CAPES', def: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior — avalia programas de pós-graduação stricto sensu no Brasil com conceitos de 1 a 7.' },
  { termo: 'CBO', def: 'Classificação Brasileira de Ocupações — sistema do Ministério do Trabalho. O Engenheiro Biomédico é classificado como CBO 2143-80.' },
  { termo: 'CONFEA/CREA', def: 'Conselho Federal e Conselhos Regionais de Engenharia e Agronomia — regulamenta e fiscaliza o exercício da engenharia no Brasil, incluindo Engenharia Biomédica desde 2008.' },
  { termo: 'Engenharia Clínica', def: 'Área da Engenharia Biomédica dedicada à gestão de tecnologia em saúde dentro de hospitais — aquisição, manutenção, calibração e descarte de equipamentos médicos.' },
  { termo: 'FDA', def: 'Food and Drug Administration — agência reguladora dos EUA responsável pela aprovação de dispositivos médicos via vias 510(k), PMA e De Novo.' },
  { termo: 'Healthtech', def: 'Startup que utiliza tecnologia para resolver problemas do setor de saúde. O Brasil possui 1.919 healthtechs mapeadas, 64,8% da América Latina.' },
  { termo: 'IEC 60601', def: 'Família de normas internacionais da IEC que define requisitos de segurança e desempenho essencial para equipamentos eletromédicos.' },
  { termo: 'ISO 13485', def: 'Norma internacional de sistema de gestão da qualidade para a indústria de dispositivos médicos. Requisito para certificação e registro em múltiplos mercados.' },
  { termo: 'ISO 14971', def: 'Norma internacional para aplicação de gerenciamento de risco a dispositivos médicos ao longo de todo o ciclo de vida do produto.' },
  { termo: 'ISR', def: 'Incremental Static Regeneration — funcionalidade do Next.js que permite atualizar páginas estáticas sem redeploy completo, útil para dados de mercado e salários.' },
  { termo: 'Medtech', def: 'Abreviação de Medical Technology — refere-se a dispositivos, equipamentos e soluções tecnológicas para o setor de saúde.' },
  { termo: 'PMA', def: 'Premarket Approval — via regulatória da FDA para dispositivos médicos de Classe III (alto risco), exigindo evidência científica de segurança e eficácia.' },
  { termo: 'RDC 751/2022', def: 'Resolução da ANVISA que classifica dispositivos médicos em quatro classes de risco (I a IV) e define as vias de registro no Brasil.' },
  { termo: 'SaMD', def: 'Software as a Medical Device — software com finalidade médica própria, regulado pela ANVISA (RDC 657/2022) e pela FDA.' },
  { termo: 'Tecnovigilância', def: 'Sistema de monitoramento pós-mercado de eventos adversos e queixas técnicas relacionados a dispositivos médicos, coordenado pela ANVISA.' },
  { termo: '510(k)', def: 'Via regulatória da FDA que permite a comercialização de dispositivos médicos demonstrando equivalência substancial a um dispositivo já aprovado.' },
];

export default function GlossarioPage() {
  return (
    <>
      <PageHeader
        overline="Referências"
        title="Glossário de Engenharia Biomédica"
        description="Termos técnicos da área: regulamentação, dispositivos médicos, certificações, normas e mercado."
        breadcrumbs={[{ label: 'Glossário' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="space-y-0 divide-y divide-slate-100">
          {termos
            .sort((a, b) => a.termo.localeCompare(b.termo))
            .map((t) => (
              <div key={t.termo} className="py-4 first:pt-0 last:pb-0">
                <dt className="text-h4 text-primary-700 mb-1">{t.termo}</dt>
                <dd className="text-body-sm text-slate-600 font-serif">
                  {t.def}
                </dd>
              </div>
            ))}
        </div>

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
