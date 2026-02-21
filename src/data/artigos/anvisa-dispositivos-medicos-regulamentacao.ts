import { Artigo } from './types';

export const artigo: Artigo = {
  titulo:
    'ANVISA e Dispositivos Médicos: Guia Completo de Regulamentação [2026]',
  resumo:
    'Guia completo sobre a regulamentação de dispositivos médicos pela ANVISA: classes de risco (RDC 751/2022), dossiê técnico, Boas Práticas de Fabricação, Software como Dispositivo Médico (SaMD), tecnovigilância, certificação INMETRO e harmonização internacional.',
  categoria: 'Regulamentação',
  categoriaVariant: 'primary',
  data: '2026-02-17',
  leitura: '13 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Todo dispositivo médico comercializado no Brasil — de um estetoscópio a um robô cirúrgico — precisa passar pela <a href="https://www.gov.br/anvisa">ANVISA</a>.</strong> A Agência Nacional de Vigilância Sanitária regula todo o ciclo de vida dos dispositivos médicos: da fabricação ao descarte, passando por registro, comercialização, vigilância pós-mercado e recall. Para o engenheiro biomédico que atua na indústria, no regulatório ou em engenharia clínica, dominar esse arcabouço é competência essencial.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>O que é a ANVISA</h2>

<p>A Agência Nacional de Vigilância Sanitária foi criada pela <strong>Lei 9.782/1999</strong> como autarquia vinculada ao Ministério da Saúde. Sua missão é proteger a saúde da população por meio do controle sanitário de produtos e serviços, incluindo dispositivos médicos, medicamentos, alimentos e cosméticos.</p>

<p>No contexto da engenharia biomédica, a ANVISA é responsável por:</p>

<ul>
<li>Definir regras para registro e notificação de dispositivos médicos</li>
<li>Classificar dispositivos por classe de risco</li>
<li>Fiscalizar fabricantes (Boas Práticas de Fabricação)</li>
<li>Monitorar eventos adversos (tecnovigilância)</li>
<li>Certificar conformidade com requisitos de segurança e desempenho</li>
<li>Regular software como dispositivo médico (SaMD)</li>
</ul>

<h2>Classificação por classe de risco</h2>

<p>A <strong>RDC 751/2022</strong> (que substituiu a antiga RDC 185/2001) é o marco regulatório principal para registro e notificação de dispositivos médicos. Define quatro classes de risco:</p>

<h3>Classe I — Baixo risco</h3>

<p><strong>Processo:</strong> Notificação simplificada (mais rápido e menos oneroso).</p>

<p><strong>Exemplos:</strong> Luvas cirúrgicas, curativos, estetoscópios, termômetros clínicos, espátulas, compressas, mobiliário hospitalar básico.</p>

<p><strong>Prazo típico:</strong> 30 a 60 dias.</p>

<h3>Classe II — Médio-baixo risco</h3>

<p><strong>Processo:</strong> Notificação.</p>

<p><strong>Exemplos:</strong> Agulhas hipodérmicas, seringas, equipamentos de fisioterapia, lâmpadas cirúrgicas, aparelhos auditivos, seringas de infusão.</p>

<p><strong>Prazo típico:</strong> 60 a 120 dias.</p>

<h3>Classe III — Médio-alto risco</h3>

<p><strong>Processo:</strong> Registro (exige dossiê técnico mais completo).</p>

<p><strong>Exemplos:</strong> Ventiladores pulmonares, implantes ortopédicos, monitores de paciente, hemodialisadores, endoscópios, equipamentos de ultrassom diagnóstico.</p>

<p><strong>Prazo típico:</strong> 120 a 365 dias.</p>

<h3>Classe IV — Alto risco</h3>

<p><strong>Processo:</strong> Registro (dossiê técnico completo, com maior escrutínio).</p>

<p><strong>Exemplos:</strong> Stents coronarianos, marca-passos cardíacos, válvulas cardíacas artificiais, desfibriladores implantáveis, próteses de quadril, dispositivos para terapia celular.</p>

<p><strong>Prazo típico:</strong> 180 a 365+ dias.</p>

<p>O registro tem validade de <strong>10 anos</strong> e segue a estrutura do <strong>IMDRF</strong> (International Medical Device Regulators Forum), facilitando a harmonização com reguladores de outros países.</p>

<h2>O dossiê técnico: o que a ANVISA exige</h2>

<p>Para registrar um dispositivo Classe III ou IV, o fabricante deve submeter um dossiê técnico que geralmente inclui:</p>

<p><strong>Informações do fabricante:</strong> Razão social, certificado de BPF (Boas Práticas de Fabricação), autorização de funcionamento (AFE).</p>

<p><strong>Descrição do dispositivo:</strong> Finalidade, indicações de uso, descrição técnica detalhada, princípio de funcionamento, materiais utilizados, acessórios e software embarcado.</p>

<p><strong>Relatório de análise de risco (ISO 14971):</strong> Identificação de perigos, estimativa de probabilidade e severidade, medidas de controle de risco, avaliação do risco residual.</p>

<p><strong>Relatório de testes de segurança e desempenho:</strong> Para equipamentos eletromédicos, testes conforme <a href="https://www.iec.ch">IEC</a> 60601-1 (requisitos gerais) e normas particulares aplicáveis (IEC 60601-2-xx). Ensaios de segurança elétrica, compatibilidade eletromagnética (EMC), desempenho essencial.</p>

<p><strong>Dados de biocompatibilidade (quando aplicável):</strong> Conforme ISO 10993, para dispositivos que entram em contato com tecidos ou fluidos corporais.</p>

<p><strong>Rotulagem:</strong> Conforme RDC 751/2022, incluindo nome do produto, fabricante, classe de risco, número de registro/notificação, instruções de uso, advertências.</p>

<p><strong>Manual do usuário/operador:</strong> Em português, com instruções de uso, manutenção, limpeza e esterilização (quando aplicável).</p>

<p><strong>Validade e estabilidade:</strong> Para dispositivos com prazo de validade (implantes, materiais estéreis).</p>

<h2>Boas Práticas de Fabricação (BPF)</h2>

<p>A <strong>RDC 665/2022</strong> (que substituiu a RDC 16/2013) estabelece os requisitos de Boas Práticas de Fabricação para dispositivos médicos, baseada na Resolução Mercosul GMC 20/2011.</p>

<p>A BPF é uma certificação obrigatória para fabricantes. A ANVISA realiza inspeções nas unidades fabris para verificar:</p>

<ul>
<li>Sistema de gestão da qualidade (alinhado à <a href="https://www.iso.org">ISO</a> 13485)</li>
<li>Controle de projeto (design controls)</li>
<li>Controle de produção e processos</li>
<li>Rastreabilidade de materiais e componentes</li>
<li>Validação de processos (especialmente esterilização)</li>
<li>Tratamento de não conformidades e ações corretivas</li>
<li>Gestão de fornecedores</li>
<li>Condições de armazenamento e transporte</li>
</ul>

<p>O <strong>Certificado de Boas Práticas de Fabricação (CBPF)</strong> tem validade de 2 anos para fabricantes nacionais e internacionais.</p>

<h2>Software como Dispositivo Médico (SaMD)</h2>

<p>A <strong>RDC 657/2022</strong> regulamenta especificamente o Software como Dispositivo Médico (SaMD) — softwares que, por si só, funcionam como dispositivos médicos, sem serem parte integrante de um hardware.</p>

<p>Exemplos de SaMD:</p>

<ul>
<li>Aplicativos de diagnóstico por imagem com IA</li>
<li>Software de planejamento cirúrgico</li>
<li>Algoritmos de triagem que classificam risco clínico</li>
<li>Plataformas de telemedicina que realizam diagnóstico</li>
<li>Software de monitoramento que gera alertas clínicos</li>
</ul>

<p>A classificação de risco do SaMD depende da <strong>significância da informação fornecida</strong> e do <strong>estado de saúde ou condição do paciente</strong>. Um SaMD que ajuda no diagnóstico de câncer será classificado diferentemente de um que ajuda no controle de peso.</p>

<p>A RDC 657/2022 também se aplica ao ciclo de vida do software: atualizações significativas podem exigir nova avaliação regulatória. A norma IEC 62304 (processos de ciclo de vida de software médico) é referência para desenvolvimento.</p>

<p>Esta é uma das áreas de maior crescimento regulatório — e de maior demanda por engenheiros biomédicos que combinem competência em software com conhecimento regulatório.</p>

<h2>Tecnovigilância: monitoramento pós-mercado</h2>

<p>A tecnovigilância é o sistema de vigilância de eventos adversos e queixas técnicas relacionadas a dispositivos médicos após sua comercialização. O marco regulatório é a <strong>RDC 67/2009</strong>.</p>

<p>O sistema opera por dois canais:</p>

<p><strong>e-NOTIVISA</strong> — Para profissionais de saúde e instituições. Permite notificar eventos adversos, queixas técnicas e desvios de qualidade de dispositivos médicos.</p>

<p><strong>SISTEC</strong> — Para cidadãos. Canal aberto para qualquer pessoa reportar problemas com dispositivos médicos.</p>

<p>Em <strong>2024</strong>, a ANVISA lançou um novo módulo de IA para detecção automatizada de sinais — padrões de notificações que indicam problemas sistemáticos com determinados produtos ou fabricantes.</p>

<p>O engenheiro biomédico atua na tecnovigilância em dois lados: no hospital (engenharia clínica), identificando e notificando eventos adversos; e na indústria, investigando notificações, determinando causas raiz e implementando ações corretivas (CAPA — Corrective and Preventive Actions).</p>

<h2>Requisitos essenciais de segurança e desempenho</h2>

<p>A <strong>RDC 848/2024</strong> estabelece os requisitos essenciais de segurança e desempenho que todos os dispositivos médicos devem cumprir, alinhada com as melhores práticas internacionais (IMDRF, EU MDR).</p>

<p>Os requisitos cobrem:</p>

<ul>
<li>Segurança geral (o dispositivo não deve representar risco inaceitável ao paciente ou operador)</li>
<li>Desempenho pretendido (o dispositivo deve atingir o desempenho especificado pelo fabricante)</li>
<li>Informações do fabricante (rotulagem, manual, treinamento)</li>
<li>Características relativas à fabricação (reprodutibilidade, rastreabilidade)</li>
<li>Propriedades químicas, físicas e biológicas (biocompatibilidade, esterilidade)</li>
<li>Proteção contra riscos mecânicos, elétricos, térmicos e de radiação</li>
<li>Requisitos para softwares</li>
<li>Requisitos para dispositivos com função de medição</li>
</ul>

<h2>Certificação compulsória (INMETRO)</h2>

<p>Alguns dispositivos médicos estão sujeitos à <strong>certificação compulsória pelo <a href="https://www.gov.br/inmetro">INMETRO</a></strong>, além do registro na ANVISA. Equipamentos eletromédicos que se enquadram na IEC 60601-1 são os principais alvos.</p>

<p>A certificação INMETRO é realizada por Organismos de Certificação de Produto (OCPs) acreditados e inclui ensaios de segurança elétrica, compatibilidade eletromagnética e desempenho.</p>

<p>O <strong>SUPERA Parque</strong> (Ribeirão Preto/SP) e laboratórios como o IEE/USP possuem infraestrutura acreditada pelo INMETRO para realizar esses ensaios.</p>

<h2>Processo de registro: fluxo resumido</h2>

<ul>
<li><strong>1. Classificação de risco</strong> — Determine a classe do dispositivo (I, II, III ou IV) conforme Regras de Classificação da RDC 751/2022</li>
<li><strong>2. Preparação do dossiê</strong> — Monte toda documentação técnica exigida</li>
<li><strong>3. BPF</strong> — Obtenha o Certificado de Boas Práticas de Fabricação (se fabricante)</li>
<li><strong>4. Submissão</strong> — Protocole o pedido de registro/notificação no portal da ANVISA</li>
<li><strong>5. Análise</strong> — A GERPS (Gerência de Tecnologia em Equipamentos) ou GETPS analisa o dossiê</li>
<li><strong>6. Exigências</strong> — A ANVISA pode solicitar informações complementares (comum)</li>
<li><strong>7. Publicação</strong> — Registro publicado no DOU (Diário Oficial da União)</li>
<li><strong>8. Comercialização</strong> — Dispositivo liberado para venda no Brasil</li>
<li><strong>9. Pós-mercado</strong> — Tecnovigilância contínua, relatórios periódicos de segurança</li>
</ul>

<h2>Harmonização internacional</h2>

<p>O Brasil participa do <strong>IMDRF</strong> (International Medical Device Regulators Forum) e do <strong>GHTF</strong> (Global Harmonization Task Force), buscando alinhamento regulatório com EUA (<a href="https://www.fda.gov/medical-devices">FDA</a>), Europa (MDR), Japão (PMDA) e outros mercados.</p>

<p>Para o engenheiro biomédico, isso significa que conhecer a regulação da ANVISA é um passo para entender regulações internacionais — e vice-versa. A estrutura de classes de risco, a abordagem baseada em análise de risco (ISO 14971) e os requisitos de gestão da qualidade (ISO 13485) são harmonizados globalmente.</p>

<h2>Perguntas frequentes</h2>

<p><strong>Qual a diferença entre registro e notificação?</strong></p>
<p>Notificação é para dispositivos de baixo risco (Classe I e II) — processo mais simples e rápido. Registro é para dispositivos de risco médio-alto e alto (Classe III e IV) — dossiê mais completo e prazo mais longo.</p>

<p><strong>Quanto custa registrar um dispositivo na ANVISA?</strong></p>
<p>As taxas variam conforme o tipo de petição. Para registro de Classe III/IV, as taxas podem somar R$ 15.000 a R$ 40.000 (incluindo análise e BPF). Para notificação, valores menores.</p>

<p><strong>Engenheiro biomédico pode assinar dossiê regulatório?</strong></p>
<p>Sim, na função de responsável técnico da empresa (registro no <a href="https://www.crea-sp.org.br">CREA</a>). Em muitas empresas, o profissional que coordena o dossiê é o especialista em assuntos regulatórios, que pode ou não ser engenheiro.</p>

<p><strong>O que é o Sandbox Regulatório da ANVISA?</strong></p>
<p>Ambiente regulatório experimental que permite testar inovações sob supervisão da ANVISA antes da regulamentação definitiva. Voltado especialmente para IA em saúde e dispositivos inovadores. Criado pelo Marco Legal das Startups (LC 182/2021).</p>

<p>Volte ao <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a> para explorar todas as seções.</p>

<p><em>Publicado por <a href="https://engenhariabiomedica.com">engenhariabiomedica.com</a></em></p>
`,
};
