import { Artigo } from './types';

export const artigo: Artigo = {
  titulo:
    'ANVISA e Dispositivos Medicos: Guia Completo de Regulamentacao [2026]',
  resumo:
    'Guia completo sobre a regulamentacao de dispositivos medicos pela ANVISA: classes de risco (RDC 751/2022), dossie tecnico, Boas Praticas de Fabricacao, Software como Dispositivo Medico (SaMD), tecnovigilancia, certificacao INMETRO e harmonizacao internacional.',
  categoria: 'Regulamentacao',
  categoriaVariant: 'primary',
  data: '2026-02-17',
  leitura: '13 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Todo dispositivo medico comercializado no Brasil — de um estetoscopio a um robo cirurgico — precisa passar pela ANVISA.</strong> A Agencia Nacional de Vigilancia Sanitaria regula todo o ciclo de vida dos dispositivos medicos: da fabricacao ao descarte, passando por registro, comercializacao, vigilancia pos-mercado e recall. Para o engenheiro biomedico que atua na industria, no regulatorio ou em engenharia clinica, dominar esse arcabouco e competencia essencial.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomedica</a>.</p>

<h2>O que e a ANVISA</h2>

<p>A Agencia Nacional de Vigilancia Sanitaria foi criada pela <strong>Lei 9.782/1999</strong> como autarquia vinculada ao Ministerio da Saude. Sua missao e proteger a saude da populacao por meio do controle sanitario de produtos e servicos, incluindo dispositivos medicos, medicamentos, alimentos e cosmeticos.</p>

<p>No contexto da engenharia biomedica, a ANVISA e responsavel por:</p>

<ul>
<li>Definir regras para registro e notificacao de dispositivos medicos</li>
<li>Classificar dispositivos por classe de risco</li>
<li>Fiscalizar fabricantes (Boas Praticas de Fabricacao)</li>
<li>Monitorar eventos adversos (tecnovigilancia)</li>
<li>Certificar conformidade com requisitos de seguranca e desempenho</li>
<li>Regular software como dispositivo medico (SaMD)</li>
</ul>

<h2>Classificacao por classe de risco</h2>

<p>A <strong>RDC 751/2022</strong> (que substituiu a antiga RDC 185/2001) e o marco regulatorio principal para registro e notificacao de dispositivos medicos. Define quatro classes de risco:</p>

<h3>Classe I — Baixo risco</h3>

<p><strong>Processo:</strong> Notificacao simplificada (mais rapido e menos oneroso).</p>

<p><strong>Exemplos:</strong> Luvas cirurgicas, curativos, estetoscopios, termometros clinicos, espatulas, compressas, mobiliario hospitalar basico.</p>

<p><strong>Prazo tipico:</strong> 30 a 60 dias.</p>

<h3>Classe II — Medio-baixo risco</h3>

<p><strong>Processo:</strong> Notificacao.</p>

<p><strong>Exemplos:</strong> Agulhas hipodermicas, seringas, equipamentos de fisioterapia, lampadas cirurgicas, aparelhos auditivos, seringas de infusao.</p>

<p><strong>Prazo tipico:</strong> 60 a 120 dias.</p>

<h3>Classe III — Medio-alto risco</h3>

<p><strong>Processo:</strong> Registro (exige dossie tecnico mais completo).</p>

<p><strong>Exemplos:</strong> Ventiladores pulmonares, implantes ortopedicos, monitores de paciente, hemodialisadores, endoscopios, equipamentos de ultrassom diagnostico.</p>

<p><strong>Prazo tipico:</strong> 120 a 365 dias.</p>

<h3>Classe IV — Alto risco</h3>

<p><strong>Processo:</strong> Registro (dossie tecnico completo, com maior escrutinio).</p>

<p><strong>Exemplos:</strong> Stents coronarianos, marcapassos cardiacos, valvulas cardiacas artificiais, desfibriladores implantaveis, proteses de quadril, dispositivos para terapia celular.</p>

<p><strong>Prazo tipico:</strong> 180 a 365+ dias.</p>

<p>O registro tem validade de <strong>10 anos</strong> e segue a estrutura do <strong>IMDRF</strong> (International Medical Device Regulators Forum), facilitando a harmonizacao com reguladores de outros paises.</p>

<h2>O dossie tecnico: o que a ANVISA exige</h2>

<p>Para registrar um dispositivo Classe III ou IV, o fabricante deve submeter um dossie tecnico que geralmente inclui:</p>

<p><strong>Informacoes do fabricante:</strong> Razao social, certificado de BPF (Boas Praticas de Fabricacao), autorizacao de funcionamento (AFE).</p>

<p><strong>Descricao do dispositivo:</strong> Finalidade, indicacoes de uso, descricao tecnica detalhada, principio de funcionamento, materiais utilizados, acessorios e software embarcado.</p>

<p><strong>Relatorio de analise de risco (ISO 14971):</strong> Identificacao de perigos, estimativa de probabilidade e severidade, medidas de controle de risco, avaliacao do risco residual.</p>

<p><strong>Relatorio de testes de seguranca e desempenho:</strong> Para equipamentos eletromedicos, testes conforme IEC 60601-1 (requisitos gerais) e normas particulares aplicaveis (IEC 60601-2-xx). Ensaios de seguranca eletrica, compatibilidade eletromagnetica (EMC), desempenho essencial.</p>

<p><strong>Dados de biocompatibilidade (quando aplicavel):</strong> Conforme ISO 10993, para dispositivos que entram em contato com tecidos ou fluidos corporais.</p>

<p><strong>Rotulagem:</strong> Conforme RDC 751/2022, incluindo nome do produto, fabricante, classe de risco, numero de registro/notificacao, instrucoes de uso, advertencias.</p>

<p><strong>Manual do usuario/operador:</strong> Em portugues, com instrucoes de uso, manutencao, limpeza e esterilizacao (quando aplicavel).</p>

<p><strong>Validade e estabilidade:</strong> Para dispositivos com prazo de validade (implantes, materiais estereis).</p>

<h2>Boas Praticas de Fabricacao (BPF)</h2>

<p>A <strong>RDC 665/2022</strong> (que substituiu a RDC 16/2013) estabelece os requisitos de Boas Praticas de Fabricacao para dispositivos medicos, baseada na Resolucao Mercosul GMC 20/2011.</p>

<p>A BPF e uma certificacao obrigatoria para fabricantes. A ANVISA realiza inspecoes nas unidades fabris para verificar:</p>

<ul>
<li>Sistema de gestao da qualidade (alinhado a ISO 13485)</li>
<li>Controle de projeto (design controls)</li>
<li>Controle de producao e processos</li>
<li>Rastreabilidade de materiais e componentes</li>
<li>Validacao de processos (especialmente esterilizacao)</li>
<li>Tratamento de nao conformidades e acoes corretivas</li>
<li>Gestao de fornecedores</li>
<li>Condicoes de armazenamento e transporte</li>
</ul>

<p>O <strong>Certificado de Boas Praticas de Fabricacao (CBPF)</strong> tem validade de 2 anos para fabricantes nacionais e internacionais.</p>

<h2>Software como Dispositivo Medico (SaMD)</h2>

<p>A <strong>RDC 657/2022</strong> regulamenta especificamente o Software como Dispositivo Medico (SaMD) — softwares que, por si so, funcionam como dispositivos medicos, sem serem parte integrante de um hardware.</p>

<p>Exemplos de SaMD:</p>

<ul>
<li>Aplicativos de diagnostico por imagem com IA</li>
<li>Software de planejamento cirurgico</li>
<li>Algoritmos de triagem que classificam risco clinico</li>
<li>Plataformas de telemedicina que realizam diagnostico</li>
<li>Software de monitoramento que gera alertas clinicos</li>
</ul>

<p>A classificacao de risco do SaMD depende da <strong>significancia da informacao fornecida</strong> e do <strong>estado de saude ou condicao do paciente</strong>. Um SaMD que ajuda no diagnostico de cancer sera classificado diferentemente de um que ajuda no controle de peso.</p>

<p>A RDC 657/2022 tambem se aplica ao ciclo de vida do software: atualizacoes significativas podem exigir nova avaliacao regulatoria. A norma IEC 62304 (processos de ciclo de vida de software medico) e referencia para desenvolvimento.</p>

<p>Esta e uma das areas de maior crescimento regulatorio — e de maior demanda por engenheiros biomedicos que combinem competencia em software com conhecimento regulatorio.</p>

<h2>Tecnovigilancia: monitoramento pos-mercado</h2>

<p>A tecnovigilancia e o sistema de vigilancia de eventos adversos e queixas tecnicas relacionadas a dispositivos medicos apos sua comercializacao. O marco regulatorio e a <strong>RDC 67/2009</strong>.</p>

<p>O sistema opera por dois canais:</p>

<p><strong>e-NOTIVISA</strong> — Para profissionais de saude e instituicoes. Permite notificar eventos adversos, queixas tecnicas e desvios de qualidade de dispositivos medicos.</p>

<p><strong>SISTEC</strong> — Para cidadaos. Canal aberto para qualquer pessoa reportar problemas com dispositivos medicos.</p>

<p>Em <strong>2024</strong>, a ANVISA lancou um novo modulo de IA para deteccao automatizada de sinais — padroes de notificacoes que indicam problemas sistematicos com determinados produtos ou fabricantes.</p>

<p>O engenheiro biomedico atua na tecnovigilancia em dois lados: no hospital (engenharia clinica), identificando e notificando eventos adversos; e na industria, investigando notificacoes, determinando causas raiz e implementando acoes corretivas (CAPA — Corrective and Preventive Actions).</p>

<h2>Requisitos essenciais de seguranca e desempenho</h2>

<p>A <strong>RDC 848/2024</strong> estabelece os requisitos essenciais de seguranca e desempenho que todos os dispositivos medicos devem cumprir, alinhada com as melhores praticas internacionais (IMDRF, EU MDR).</p>

<p>Os requisitos cobrem:</p>

<ul>
<li>Seguranca geral (o dispositivo nao deve representar risco inaceitavel ao paciente ou operador)</li>
<li>Desempenho pretendido (o dispositivo deve atingir o desempenho especificado pelo fabricante)</li>
<li>Informacoes do fabricante (rotulagem, manual, treinamento)</li>
<li>Caracteristicas relativas a fabricacao (reprodutibilidade, rastreabilidade)</li>
<li>Propriedades quimicas, fisicas e biologicas (biocompatibilidade, esterilidade)</li>
<li>Protecao contra riscos mecanicos, eletricos, termicos e de radiacao</li>
<li>Requisitos para softwares</li>
<li>Requisitos para dispositivos com funcao de medicao</li>
</ul>

<h2>Certificacao compulsoria (INMETRO)</h2>

<p>Alguns dispositivos medicos estao sujeitos a <strong>certificacao compulsoria pelo INMETRO</strong>, alem do registro na ANVISA. Equipamentos eletromedicos que se enquadram na IEC 60601-1 sao os principais alvos.</p>

<p>A certificacao INMETRO e realizada por Organismos de Certificacao de Produto (OCPs) acreditados e inclui ensaios de seguranca eletrica, compatibilidade eletromagnetica e desempenho.</p>

<p>O <strong>SUPERA Parque</strong> (Ribeirao Preto/SP) e laboratorios como o IEE/USP possuem infraestrutura acreditada pelo INMETRO para realizar esses ensaios.</p>

<h2>Processo de registro: fluxo resumido</h2>

<ul>
<li><strong>1. Classificacao de risco</strong> — Determine a classe do dispositivo (I, II, III ou IV) conforme Regras de Classificacao da RDC 751/2022</li>
<li><strong>2. Preparacao do dossie</strong> — Monte toda documentacao tecnica exigida</li>
<li><strong>3. BPF</strong> — Obtenha o Certificado de Boas Praticas de Fabricacao (se fabricante)</li>
<li><strong>4. Submissao</strong> — Protocole o pedido de registro/notificacao no portal da ANVISA</li>
<li><strong>5. Analise</strong> — A GERPS (Gerencia de Tecnologia em Equipamentos) ou GETPS analisa o dossie</li>
<li><strong>6. Exigencias</strong> — A ANVISA pode solicitar informacoes complementares (comum)</li>
<li><strong>7. Publicacao</strong> — Registro publicado no DOU (Diario Oficial da Uniao)</li>
<li><strong>8. Comercializacao</strong> — Dispositivo liberado para venda no Brasil</li>
<li><strong>9. Pos-mercado</strong> — Tecnovigilancia continua, relatorios periodicos de seguranca</li>
</ul>

<h2>Harmonizacao internacional</h2>

<p>O Brasil participa do <strong>IMDRF</strong> (International Medical Device Regulators Forum) e do <strong>GHTF</strong> (Global Harmonization Task Force), buscando alinhamento regulatorio com EUA (FDA), Europa (MDR), Japao (PMDA) e outros mercados.</p>

<p>Para o engenheiro biomedico, isso significa que conhecer a regulacao da ANVISA e um passo para entender regulacoes internacionais — e vice-versa. A estrutura de classes de risco, a abordagem baseada em analise de risco (ISO 14971) e os requisitos de gestao da qualidade (ISO 13485) sao harmonizados globalmente.</p>

<h2>Perguntas frequentes</h2>

<p><strong>Qual a diferenca entre registro e notificacao?</strong></p>
<p>Notificacao e para dispositivos de baixo risco (Classe I e II) — processo mais simples e rapido. Registro e para dispositivos de risco medio-alto e alto (Classe III e IV) — dossie mais completo e prazo mais longo.</p>

<p><strong>Quanto custa registrar um dispositivo na ANVISA?</strong></p>
<p>As taxas variam conforme o tipo de peticao. Para registro de Classe III/IV, as taxas podem somar R$ 15.000 a R$ 40.000 (incluindo analise e BPF). Para notificacao, valores menores.</p>

<p><strong>Engenheiro biomedico pode assinar dossie regulatorio?</strong></p>
<p>Sim, na funcao de responsavel tecnico da empresa (registro no CREA). Em muitas empresas, o profissional que coordena o dossie e o especialista em assuntos regulatorios, que pode ou nao ser engenheiro.</p>

<p><strong>O que e o Sandbox Regulatorio da ANVISA?</strong></p>
<p>Ambiente regulatorio experimental que permite testar inovacoes sob supervisao da ANVISA antes da regulamentacao definitiva. Voltado especialmente para IA em saude e dispositivos inovadores. Criado pelo Marco Legal das Startups (LC 182/2021).</p>

<p>Volte ao <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomedica</a> para explorar todas as secoes.</p>

<p><em>Publicado por <a href="https://engenhariabiomedica.com">engenhariabiomedica.com</a></em></p>
`,
};
