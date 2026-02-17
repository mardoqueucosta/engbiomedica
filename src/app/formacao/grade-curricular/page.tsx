import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Grade Curricular — Engenharia Biomédica',
  description: 'Disciplinas, ciclo básico, profissionalizante e áreas de concentração da graduação em Engenharia Biomédica no Brasil.',
};

const cicloBasico = [
  'Cálculo Diferencial e Integral (1 a 3)', 'Álgebra Linear', 'Geometria Analítica',
  'Probabilidade e Estatística', 'Física (mecânica, ondas, eletromagnetismo, óptica)',
  'Química Geral', 'Anatomia Humana', 'Bioquímica', 'Fisiologia',
  'Algoritmos e Programação', 'Desenho Técnico',
];

const profissionalizante = [
  'Circuitos Elétricos', 'Eletrônica Analógica e Digital', 'Sinais e Sistemas',
  'Microprocessadores', 'Biofísica', 'Fisiologia de Sistemas',
  'Instrumentação Biomédica', 'Biomecânica', 'Biomateriais e Biocompatibilidade',
  'Engenharia de Tecidos', 'Processamento Digital de Sinais Biomédicos',
  'Processamento de Imagens Médicas', 'Engenharia Clínica',
  'Informática em Saúde', 'Modelagem de Sistemas Biomédicos',
  'Dispositivos Implantáveis e Próteses', 'Metrologia Biomédica',
  'Regulação de Produtos para Saúde (ANVISA / IEC 60601)',
  'Inteligência Artificial Aplicada',
];

const eixos = [
  { nome: 'Sinais e Imagens', desc: 'Processamento digital de sinais biomédicos (ECG, EEG, EMG) e imagens médicas (ressonância, tomografia, ultrassom).' },
  { nome: 'Biomecânica e Biomateriais', desc: 'Propriedades mecânicas de tecidos biológicos, próteses, implantes e biocompatibilidade de materiais.' },
  { nome: 'Sistemas Inteligentes', desc: 'Inteligência artificial, aprendizado de máquina e sistemas de apoio à decisão clínica.' },
  { nome: 'Instrumentação para Diagnóstico e Terapia', desc: 'Projeto de equipamentos médicos, sensores, atuadores e sistemas eletromédicos.' },
];

export default function GradeCurricularPage() {
  return (
    <>
      <PageHeader
        overline="Formação Acadêmica"
        title="Grade Curricular"
        description="A formação do engenheiro biomédico é interdisciplinar, combinando bases sólidas em engenharia, ciências biológicas e ciências da saúde. Duração de 5 anos com carga mínima de 3.600 horas."
        breadcrumbs={[{ label: 'Formação', href: '/formacao' }, { label: 'Grade Curricular' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Ciclo Básico</h2>
            <p className="text-overline uppercase text-slate-400 mb-4">1º ao 4º Semestre</p>
            <div className="space-y-2">
              {cicloBasico.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                  <span className="text-body-sm text-slate-700">{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Disciplinas Profissionalizantes</h2>
            <p className="text-overline uppercase text-slate-400 mb-4">4º ao 8º Semestre</p>
            <div className="space-y-2">
              {profissionalizante.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span className="text-body-sm text-slate-700">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Áreas de Concentração</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-6">Exemplo baseado na organização da UFABC em quatro eixos temáticos.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {eixos.map((e) => (
            <div key={e.nome} className="card p-5">
              <h3 className="text-h4 text-slate-900 mb-1">{e.nome}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-primary-50 border border-primary-200">
          <h3 className="text-h4 text-primary-800 mb-2">Estágio Curricular Obrigatório</h3>
          <p className="text-body-sm text-primary-700 font-serif">
            Mínimo de 160 a 168 horas em ambiente hospitalar, industrial ou de pesquisa. Exige supervisão de profissional habilitado e integra o Trabalho de Conclusão de Curso (TCC).
          </p>
        </div>
      </section>
    </>
  );
}
