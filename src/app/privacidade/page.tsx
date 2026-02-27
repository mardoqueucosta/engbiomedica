import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Engenharia Biomédica',
  description:
    'Política de Privacidade e proteção de dados pessoais do portal engenhariabiomedica.com, em conformidade com a LGPD.',
  alternates: { canonical: '/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader
        overline="Legal"
        title="Política de Privacidade"
        description="Como coletamos, usamos e protegemos seus dados pessoais."
        breadcrumbs={[{ label: 'Privacidade' }]}
        centered
      />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-sm text-slate-400 font-mono">
            Última atualização: 27 de fevereiro de 2026
          </p>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">1. Controlador dos dados</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              O portal <strong>engenhariabiomedica.com</strong> é mantido por Mardoqueu M Costa,
              inscrito no CPF sob responsabilidade própria, com sede no Brasil. Para fins da Lei Geral de
              Proteção de Dados (Lei n.º 13.709/2018), o controlador dos dados pessoais coletados por
              este portal é Mardoqueu M Costa.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">2. Encarregado de Proteção de Dados (DPO)</h2>
            <div className="card p-5">
              <p className="text-body text-slate-600 font-serif">
                <strong>Nome:</strong> Mardoqueu M Costa
              </p>
              <p className="text-body text-slate-600 font-serif mt-1">
                <strong>E-mail:</strong>{' '}
                <a href="mailto:privacidade@engenhariabiomedica.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                  privacidade@engenhariabiomedica.com
                </a>
              </p>
              <p className="text-body-sm text-slate-500 font-serif mt-2">
                O encarregado é o responsável por aceitar reclamações e comunicações dos titulares de dados
                pessoais, prestar esclarecimentos e adotar providências, conforme LGPD Art. 41.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">3. Dados coletados</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify mb-3">
              Coletamos apenas os dados estritamente necessários para as finalidades descritas abaixo:
            </p>
            <div className="space-y-3">
              <div className="card p-5">
                <h3 className="text-h4 text-slate-900 mb-1">Newsletter</h3>
                <p className="text-body-sm text-slate-500 font-serif text-justify">
                  <strong>Dados:</strong> endereço de e-mail e nome (opcional).{' '}
                  <strong>Finalidade:</strong> envio de conteúdo periódico sobre Engenharia Biomédica
                  (máximo 2 e-mails por mês).{' '}
                  <strong>Base legal:</strong> consentimento do titular (LGPD Art. 7°, I), obtido por
                  double opt-in (confirmação por e-mail).
                </p>
              </div>
              <div className="card p-5">
                <h3 className="text-h4 text-slate-900 mb-1">Dados de navegação</h3>
                <p className="text-body-sm text-slate-500 font-serif text-justify">
                  <strong>Dados:</strong> endereço IP, tipo de navegador, páginas visitadas e duração
                  da visita.{' '}
                  <strong>Finalidade:</strong> análise estatística e melhoria do portal.{' '}
                  <strong>Base legal:</strong> interesse legítimo do controlador (LGPD Art. 7°, IX).
                </p>
              </div>
              <div className="card p-5">
                <h3 className="text-h4 text-slate-900 mb-1">Logs de consentimento</h3>
                <p className="text-body-sm text-slate-500 font-serif text-justify">
                  <strong>Dados:</strong> e-mail, data/hora, IP e user-agent no momento da confirmação.{' '}
                  <strong>Finalidade:</strong> prova de consentimento para fins de auditoria (LGPD Art. 8°, §2°).{' '}
                  <strong>Base legal:</strong> cumprimento de obrigação legal (LGPD Art. 7°, II).
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">4. Compartilhamento de dados</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              Os dados pessoais podem ser compartilhados com os seguintes prestadores de serviço,
              exclusivamente para as finalidades descritas acima:
            </p>
            <ul className="mt-3 space-y-2 text-body-sm text-slate-600 font-serif">
              <li className="flex gap-2">
                <span className="text-teal-500 font-bold shrink-0">&bull;</span>
                <span><strong>Resend Inc.</strong> — plataforma de envio de e-mails (processamento nos EUA, com salvaguardas contratuais).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-500 font-bold shrink-0">&bull;</span>
                <span><strong>Upstash Inc.</strong> — serviço de rate limiting para proteção contra abuso (dados mínimos: endereço IP).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-500 font-bold shrink-0">&bull;</span>
                <span><strong>Railway Corp.</strong> — infraestrutura de hospedagem do portal.</span>
              </li>
            </ul>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify mt-3">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para
              fins de marketing.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">5. Retenção dos dados</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              Os dados da newsletter são mantidos enquanto a inscrição estiver ativa. Ao cancelar
              a inscrição, o e-mail é marcado como inativo na plataforma de envio. Logs de consentimento
              são mantidos por 5 anos para fins de auditoria e comprovação legal. Dados de navegação
              anonimizados são mantidos indefinidamente para fins estatísticos.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">6. Direitos do titular (LGPD Art. 18)</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify mb-3">
              Você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="space-y-2 text-body-sm text-slate-600 font-serif">
              {[
                'Confirmação da existência de tratamento de dados',
                'Acesso aos dados pessoais coletados',
                'Correção de dados incompletos, inexatos ou desatualizados',
                'Anonimização, bloqueio ou eliminação de dados desnecessários',
                'Portabilidade dos dados a outro fornecedor de serviço (em formato JSON ou CSV)',
                'Eliminação dos dados pessoais tratados com base no consentimento',
                'Informação sobre com quem seus dados foram compartilhados',
                'Revogação do consentimento a qualquer momento',
              ].map((direito) => (
                <li key={direito} className="flex gap-2">
                  <span className="text-teal-500 font-bold shrink-0">&bull;</span>
                  <span>{direito}</span>
                </li>
              ))}
            </ul>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify mt-3">
              Para exercer qualquer desses direitos, entre em contato com o Encarregado (DPO) pelo
              e-mail{' '}
              <a href="mailto:privacidade@engenhariabiomedica.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                privacidade@engenhariabiomedica.com
              </a>. Responderemos em até 15 dias úteis.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">7. Cancelamento da newsletter</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              Você pode cancelar sua inscrição na newsletter a qualquer momento clicando no link
              &ldquo;Cancelar inscrição&rdquo; presente no rodapé de todos os e-mails, ou acessando
              diretamente a{' '}
              <Link href="/unsubscribe" className="text-teal-600 hover:text-teal-700 transition-colors">
                página de cancelamento
              </Link>. O cancelamento é imediato e irreversível (a menos que você se inscreva novamente).
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">8. Segurança</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
              criptografia em trânsito (HTTPS/TLS), tokens HMAC-SHA256 para confirmação de inscrição,
              rate limiting para proteção contra abuso, e acesso restrito às credenciais de serviços
              terceiros.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">9. Cookies</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              Este portal utiliza apenas cookies essenciais para o funcionamento do site. Não
              utilizamos cookies de rastreamento publicitário. Cookies de análise estatística
              (quando presentes) são anonimizados e não permitem a identificação individual do
              visitante.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">10. Alterações nesta política</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              Esta política pode ser atualizada periodicamente. Alterações significativas serão
              comunicadas por e-mail aos inscritos na newsletter. A data da última atualização
              está indicada no topo desta página.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 text-center">
            <p className="text-body-sm text-slate-500 font-serif mb-4">
              Para dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato:
            </p>
            <a
              href="mailto:privacidade@engenhariabiomedica.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Contatar o DPO
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
