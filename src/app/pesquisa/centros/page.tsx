import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Centros de Pesquisa — Engenharia Biomédica',
  description: 'PEB/COPPE-UFRJ, CEB/UNICAMP, LEB/USP, UFPE e outros centros de excelência em pesquisa de Engenharia Biomédica no Brasil.',
};

const centros = [
  { nome: 'PEB/COPPE — UFRJ', local: 'Rio de Janeiro/RJ', destaque: 'Conceito CAPES 6 (Excelência)', desc: 'Programa-mãe da Engenharia Biomédica no Brasil, fundado em 1971. Linhas: processamento de sinais e imagens, engenharia pulmonar, ultrassom, instrumentação biomédica. 509 mestres e 165 doutores formados.' },
  { nome: 'CEB — UNICAMP', local: 'Campinas/SP', destaque: '40+ anos', desc: 'Centro de Engenharia Biomédica criado em 1982. Instrumentação, processamento de imagens, física médica. MICLab: aceleração de ressonância magnética em até 4x com IA (Profa. Letícia Rittner).' },
  { nome: 'LEB — USP Poli', local: 'São Paulo/SP', destaque: 'Desde 1981', desc: 'Laboratório de Engenharia Biomédica da Escola Politécnica, fundado por André Fábio Kohn e José Carlos T. Moraes. 8 linhas de pesquisa. Primeira Divisão de Ensaios e Normativos em universidade pública brasileira.' },
  { nome: 'PPGEB — UFPE', local: 'Recife/PE', destaque: 'Projeto R$ 14,7 mi', desc: 'Pesquisa interdisciplinar. Lidera o projeto Saúde Inteligente (R$ 14,7 milhões da FINEP para IA e IoT no HC-UFPE).' },
  { nome: 'CIIA-Saúde — UFMG', local: 'Belo Horizonte/MG', destaque: 'Nature Communications', desc: 'Centro de IA para Saúde liderado por Virgílio Almeida. 8 instituições. Publicação na Nature Communications sobre diagnóstico cardiovascular. Centro de Telessaúde: ~4.000 ECGs/dia com IA.' },
];

const outros = [
  { nome: 'NUTES-UEPB', desc: 'Unidade EMBRAPII — descrito como "o mais completo centro de inovação em tecnologias da saúde do Brasil".' },
  { nome: 'IFBA', desc: '19 patentes concedidas, incluindo o primeiro analisador nacional de unidades eletrocirúrgicas.' },
  { nome: 'SENAI CIMATEC', desc: 'Salvador/BA — pesquisa aplicada em parceria com a indústria.' },
  { nome: 'SUPERA Centro de Tecnologia', desc: 'Ribeirão Preto/SP — laboratórios acreditados INMETRO.' },
];

export default function CentrosPage() {
  return (
    <>
      <PageHeader
        overline="Pesquisa & Inovação"
        title="Centros de Pesquisa"
        description="Cinco centros de excelência lideram a pesquisa nacional em Engenharia Biomédica, com atuação que vai da instrumentação clássica à inteligência artificial."
        breadcrumbs={[{ label: 'Pesquisa', href: '/pesquisa' }, { label: 'Centros de Pesquisa' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="space-y-4 mb-12">
          {centros.map((c) => (
            <div key={c.nome} className="card p-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h2 className="text-h3 text-slate-900">{c.nome}</h2>
                <Badge variant="teal">{c.destaque}</Badge>
                <Badge variant="slate">{c.local}</Badge>
              </div>
              <p className="text-body-sm text-slate-500 font-serif">{c.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Outros Centros Relevantes</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {outros.map((o) => (
            <div key={o.nome} className="card p-5">
              <h3 className="text-h4 text-slate-900 mb-1">{o.nome}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
