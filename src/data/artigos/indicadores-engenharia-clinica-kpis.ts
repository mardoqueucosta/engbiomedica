import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Indicadores de Engenharia Clínica: KPIs para Gestão de Equipamentos',
  resumo: 'Guia completo sobre indicadores de engenharia clínica no Brasil: MTBF, MTTR, disponibilidade, TCO, taxa de conformidade com PM, benchmarks AAMI, requisitos ONA/JCI, CMMS, dashboards e uso de IoT e IA para monitoramento de KPIs em tempo real.',
  categoria: 'Profissão',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '14 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Um serviço de engenharia clínica sem indicadores é como uma UTI sem monitor multiparamétrico: opera no escuro, reagindo a crises em vez de preveni-las.</strong> No Brasil, a maioria dos hospitais ainda mede a performance de seus equipamentos médicos de forma intuitiva — registros em planilhas esparsas, relatórios mensais sem padronização e decisões de manutenção baseadas em percepção gerencial em vez de dados. Os KPIs de engenharia clínica mudam esse paradigma: transformam o serviço de manutenção em uma unidade estratégica com linguagem numérica capaz de dialogar com diretores financeiros, comitês de qualidade e auditores de acreditação da ONA e JCI.</p>

<p class="mb-6">Este artigo integra o <a href="/artigos/engenharia-clinica-guia-completo">Guia Completo de Engenharia Clínica</a> e se aprofunda nos indicadores que sustentam a <a href="/artigos/gestao-parque-tecnologico-hospitalar">Gestão do Parque Tecnológico Hospitalar</a> e o <a href="/artigos/plano-manutencao-preventiva-hospitalar">Plano de Manutenção Preventiva Hospitalar</a>.</p>

<h2>Por que indicadores são obrigatórios na engenharia clínica moderna</h2>

<p>A exigência formal de indicadores de desempenho para serviços de engenharia clínica no Brasil tem respaldo regulatório e normativo claro. A <strong>RDC 509/2021 da ANVISA</strong> determina que o Programa de Gerenciamento de Tecnologias em Saúde (PGTS) de todo Estabelecimento Assistencial de Saúde (EAS) deve incluir metodologia de avaliação de resultados com métricas mensuráveis. A <strong>ABNT NBR 15943:2011</strong> detalha as diretrizes técnicas para esse gerenciamento, reforçando a necessidade de registros rastreáveis e análise crítica periódica.</p>

<p>Do ponto de vista das acreditações, a <strong>ONA (Organização Nacional de Acreditação)</strong> avalia em seus manuais a existência de indicadores de manutenção e seu uso sistemático para melhoria contínua. A <strong>Joint Commission International (JCI)</strong>, no padrão FMS (Facility Management and Safety), exige que os hospitais demonstrem indicadores de confiabilidade de equipamentos como evidência de um programa de gestão eficaz. Sem KPIs formalizados, a instituição simplesmente não passa por essas avaliações nos níveis mais altos.</p>

<p>Além da conformidade regulatória, os indicadores cumprem função econômica direta. Um estudo publicado no <em>Journal of Clinical Engineering</em> estimou que hospitais com programas estruturados de indicadores de manutenção reduzem custos corretivos em 20 a 35% e aumentam a disponibilidade média dos equipamentos críticos em até 8 pontos percentuais. No contexto brasileiro, onde o custo de manutenção corretiva de um único tomógrafo pode superar R$ 200.000 por evento, a diferença é de milhões de reais anuais para hospitais de médio e grande porte.</p>

<!-- IMG_SLOT_1 -->
<!-- IMAGE_STYLE: technical -->
<!-- ALT: Dashboard de indicadores de engenharia clínica com gráficos de MTBF, MTTR e disponibilidade de equipamentos hospitalares -->

<h2>MTBF: Mean Time Between Failures e como calculá-lo</h2>

<p>O <strong>MTBF (Mean Time Between Failures)</strong>, ou Tempo Médio Entre Falhas, é o indicador primário de confiabilidade de um equipamento. Ele expressa, em horas, o tempo médio que um dispositivo opera sem apresentar falha que exija intervenção corretiva não planejada.</p>

<p>A fórmula é direta:</p>
<figure>
<img src="/artigos/indicadores-engenharia-clinica-kpis/image-1.webp" alt="Ilustração do conceito de MTBF para monitor multiparamétrico, mostrando tempo de operação e falhas." width="1024" height="571" loading="lazy" decoding="async">
<figcaption>O MTBF (Tempo Médio Entre Falhas) é um KPI essencial que quantifica a confiabilidade de equipamentos hospitalares, indicando o tempo médio de operação ininterrupta.</figcaption>
</figure>


<p><strong>MTBF = Total de horas de operação / Número de falhas no período</strong></p>

<p>Exemplo prático: um monitor multiparamétrico operou 720 horas em um mês (24h/dia × 30 dias) e apresentou 3 falhas corretivas. Seu MTBF no período é de 240 horas. Um segundo monitor idêntico operou as mesmas 720 horas com apenas 1 falha: MTBF de 720 horas. O segundo equipamento é 3 vezes mais confiável no período analisado.</p>

<p>O MTBF é mais significativo quando calculado em séries temporais longas — mínimo 12 meses — e comparado com a especificação do fabricante e com benchmarks do setor. A <strong>AAMI (Association for the Advancement of Medical Instrumentation)</strong> publica referências de MTBF para classes de equipamentos que servem como padrão internacional de comparação.</p>

<p>Aplicações estratégicas do MTBF incluem: priorização de equipamentos para substituição (MTBF em declínio acelerado sinaliza fim de vida útil), negociação de contratos de manutenção (MTBF real versus MTBF garantido pelo fabricante) e dimensionamento de estoque de peças sobressalentes para equipamentos com MTBF historicamente baixo.</p>

<h2>MTTR: Mean Time To Repair e o impacto na disponibilidade</h2>

<p>O <strong>MTTR (Mean Time To Repair)</strong>, ou Tempo Médio para Reparo, mede a eficiência do processo de manutenção corretiva. Expressa, em horas, o tempo médio transcorrido desde o registro da falha até a devolução do equipamento em plenas condições operacionais.</p>

<p><strong>MTTR = Total de horas de inatividade por manutenção corretiva / Número de reparos no período</strong></p>

<p>O MTTR captura múltiplos componentes do processo: tempo de resposta da equipe técnica (ou do prestador externo), tempo de diagnóstico, tempo de aguardo de peças, tempo efetivo de reparo, tempo de testes e comissionamento pós-reparo. Um MTTR alto frequentemente sinaliza gargalos em um desses componentes — e a análise desagregada permite identificar exatamente onde intervir.</p>

<p>Para equipamentos críticos (ventiladores mecânicos, monitores de UTI, bombas de infusão em uso), a maioria dos programas de acreditação estabelece SLAs (Service Level Agreements) de MTTR máximo, tipicamente de 4 a 8 horas para falhas de equipamentos de suporte à vida. O monitoramento do MTTR real versus o SLA contratado é um dos KPIs de fiscalização de contratos mais importantes da engenharia clínica.</p>

<table>
  <thead>
    <tr>
      <th>Equipamento</th>
      <th>MTTR Máximo Recomendado</th>
      <th>Criticidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ventilador mecânico (UTI)</td>
      <td>4 horas</td>
      <td>Alta — risco de vida</td>
    </tr>
    <tr>
      <td>Monitor multiparamétrico (UTI)</td>
      <td>4–6 horas</td>
      <td>Alta — suporte vital</td>
    </tr>
    <tr>
      <td>Bomba de infusão (uso ativo)</td>
      <td>4–8 horas</td>
      <td>Alta — risco medicamentoso</td>
    </tr>
    <tr>
      <td>Tomógrafo computadorizado</td>
      <td>24–48 horas</td>
      <td>Média — impacto diagnóstico</td>
    </tr>
    <tr>
      <td>Autoclave de esterilização</td>
      <td>8–24 horas</td>
      <td>Média — impacto cirúrgico</td>
    </tr>
    <tr>
      <td>Equipamento de fisioterapia</td>
      <td>48–72 horas</td>
      <td>Baixa — reserva disponível</td>
    </tr>
  </tbody>
</table>

<h2>Disponibilidade: o KPI síntese da engenharia clínica</h2>

<p>A <strong>Disponibilidade</strong> integra MTBF e MTTR em um único indicador percentual que expressa a fração do tempo em que um equipamento está operacional e pronto para uso assistencial.</p>

<p><strong>Disponibilidade = MTBF / (MTBF + MTTR) × 100</strong></p>
<figure>
<img src="/artigos/indicadores-engenharia-clinica-kpis/image-2.webp" alt="Infográfico da Disponibilidade de equipamentos, relacionando MTBF e MTTR para um ventilador mecânico." width="1024" height="571" loading="lazy" decoding="async">
<figcaption>A Disponibilidade é o KPI síntese que expressa a porcentagem de tempo em que um equipamento médico está pronto para uso, sendo calculada a partir do MTBF e MTTR.</figcaption>
</figure>


<p>Usando os valores do exemplo anterior: um monitor com MTBF de 240 horas e MTTR médio de 6 horas tem disponibilidade de 240 / (240 + 6) × 100 = <strong>97,6%</strong>. O segundo monitor, com MTBF de 720 horas e mesmo MTTR de 6 horas: 720 / (720 + 6) × 100 = <strong>99,2%</strong>.</p>

<p>O benchmark internacional estabelecido pela AAMI e adotado pela maioria dos programas de acreditação define:</p>

<table>
  <thead>
    <tr>
      <th>Categoria de Equipamento</th>
      <th>Disponibilidade Mínima</th>
      <th>Disponibilidade Alvo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Suporte de vida (ventiladores, monitores UTI)</td>
      <td>95%</td>
      <td>≥ 99%</td>
    </tr>
    <tr>
      <td>Diagnóstico de imagem (TC, RM, raio-X)</td>
      <td>90%</td>
      <td>≥ 95%</td>
    </tr>
    <tr>
      <td>Laboratório clínico (analisadores)</td>
      <td>92%</td>
      <td>≥ 97%</td>
    </tr>
    <tr>
      <td>Terapia e reabilitação</td>
      <td>85%</td>
      <td>≥ 92%</td>
    </tr>
    <tr>
      <td>Equipamentos de apoio geral</td>
      <td>80%</td>
      <td>≥ 90%</td>
    </tr>
  </tbody>
</table>

<p>A disponibilidade abaixo de 95% para equipamentos críticos deve acionar automaticamente um processo de investigação de causa raiz (análise de falha) e plano de ação corretiva com prazo e responsável definidos. Esse fluxo é o núcleo do ciclo PDCA aplicado à engenharia clínica.</p>

<!-- IMG_SLOT_2 -->
<!-- IMAGE_STYLE: technical -->
<!-- ALT: Diagrama técnico mostrando fórmulas de MTBF, MTTR e cálculo de disponibilidade de equipamentos médicos hospitalares -->

<h2>Indicadores financeiros: custo por equipamento, TCO e taxa de obsolescência</h2>

<p>Os KPIs técnicos de confiabilidade ganham maior poder de persuasão gerencial quando combinados com indicadores financeiros. A engenharia clínica moderna opera na intersecção entre a lógica assistencial e a lógica econômica — e os indicadores financeiros são o idioma do comitê executivo.</p>

<p><strong>Custo de manutenção sobre valor do equipamento:</strong> Expressa o percentual do valor patrimonial do equipamento gasto em manutenção no ano. O benchmark internacional (AAMI/ECRI) estabelece que um programa de manutenção saudável deve consumir entre 3% e 8% do valor de reposição do equipamento anualmente. Valores abaixo de 3% podem indicar subinvestimento em manutenção preventiva; valores acima de 8% sinalizam equipamento candidato à substituição.</p>

<p><strong>TCO (Total Cost of Ownership):</strong> O Custo Total de Propriedade agrega, ao longo de toda a vida útil do equipamento, os custos de aquisição, instalação, treinamento, manutenção preventiva e corretiva, insumos consumíveis, calibrações, atualizações de software, consumo de energia e descarte. O TCO é o indicador correto para decisões de substituição — um equipamento com custo de aquisição baixo pode ter TCO muito superior a um modelo mais caro, porém mais confiável e com melhor suporte do fabricante.</p>

<p><strong>Taxa de obsolescência do parque:</strong> Percentual de equipamentos que ultrapassaram sua vida útil esperada (definida pela NBR 15943:2011 e pelos parâmetros do fabricante). Uma taxa de obsolescência acima de 20% no parque total é considerada crítica e deve integrar o planejamento estratégico de investimentos. Para equipamentos de diagnóstico de imagem, a obsolescência tecnológica frequentemente precede o fim da vida útil física.</p>

<table>
  <thead>
    <tr>
      <th>Indicador Financeiro</th>
      <th>Fórmula</th>
      <th>Benchmark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Custo de manutenção / valor do equipamento</td>
      <td>Custo anual manutenção ÷ Valor de reposição × 100</td>
      <td>3–8% ao ano (AAMI)</td>
    </tr>
    <tr>
      <td>Custo corretivo / custo total manutenção</td>
      <td>Custo corretivo ÷ Custo total × 100</td>
      <td>&lt; 30% (programa maduro)</td>
    </tr>
    <tr>
      <td>Taxa de obsolescência</td>
      <td>Equipamentos além da vida útil ÷ Total do parque × 100</td>
      <td>&lt; 20% do parque</td>
    </tr>
    <tr>
      <td>ROI de manutenção preventiva</td>
      <td>(Custo corretivo evitado − Custo PM) ÷ Custo PM × 100</td>
      <td>&gt; 200% (referência setorial)</td>
    </tr>
  </tbody>
</table>

<h2>Indicadores de processo: PM compliance, backlog e tempo de resposta</h2>

<p>Os indicadores de processo medem a eficiência operacional interna do serviço de engenharia clínica — não o resultado final (confiabilidade do equipamento), mas a qualidade dos processos que geram esse resultado.</p>

<p><strong>PM Compliance Rate (Taxa de conformidade com manutenção preventiva):</strong> Percentual das manutenções preventivas planejadas que foram realizadas dentro do prazo programado. É calculado como o número de PMs executados no período dividido pelo número de PMs programados para o período, multiplicado por 100. O benchmark da AAMI estabelece 95% como meta para programas bem gerenciados. Uma taxa abaixo de 85% indica problemas sérios de planejamento, recursos humanos ou disponibilidade de equipamento para manutenção.</p>

<p><strong>Backlog ratio (Índice de pendências):</strong> Mede o volume de ordens de serviço abertas e ainda não concluídas em relação ao volume médio mensal de ordens. Um backlog ratio crescente é um sinal de alerta de capacidade inadequada da equipe ou de gestão ineficiente das prioridades. Backlog crônico em equipamentos críticos deve ser tratado como não-conformidade grave.</p>

<p><strong>Tempo de resposta a chamados:</strong> Tempo entre o registro formal de uma falha ou chamado de manutenção e o início efetivo do atendimento técnico. Esse indicador está frequentemente regulamentado nos contratos de terceirização de manutenção e é auditado em acreditações. Para equipamentos de suporte de vida, o benchmark é resposta em até 30 minutos; para equipamentos de diagnóstico crítico, até 2 horas.</p>

<p>Para aprofundar a estrutura de um programa de manutenção preventiva eficaz, consulte o artigo sobre <a href="/artigos/plano-manutencao-preventiva-hospitalar">Plano de Manutenção Preventiva Hospitalar</a>.</p>

<h2>CMMS: a base de dados dos KPIs de engenharia clínica</h2>

<p>Os KPIs de engenharia clínica não se calculam manualmente em planilhas — ou pelo menos não deveriam. O <strong>CMMS (Computerized Maintenance Management System)</strong>, ou Sistema Informatizado de Gestão de Manutenção, é a infraestrutura de dados que alimenta todos os indicadores descritos neste artigo.</p>

<p>Um CMMS adequado para engenharia clínica hospitalar deve registrar automaticamente: data e hora de abertura e fechamento de cada ordem de serviço (calculando MTTR), histórico de falhas por equipamento (calculando MTBF e disponibilidade), custos de peças e mão de obra por equipo (calculando custo/valor), programação e execução de PMs (calculando PM compliance) e inventário completo do parque com status de vida útil (calculando taxa de obsolescência).</p>

<p>No mercado brasileiro, as soluções mais utilizadas incluem sistemas nacionais desenvolvidos especificamente para o setor hospitalar e adaptações de plataformas internacionais como IBM Maximo, Infor EAM e UpKeep. A seleção do CMMS adequado deve considerar a integração com o sistema de prontuário eletrônico (HIS/PEP), capacidade de extração de relatórios em formatos exigidos pela ONA/JCI e conformidade com a LGPD para dados de pacientes que possam estar vinculados a registros de equipamentos. Para saber como o CMMS se integra ao programa de manutenção completo, acesse o artigo sobre <a href="/artigos/manutencao-equipamentos-hospitalares">Manutenção de Equipamentos Hospitalares</a>.</p>

<p>A extração automatizada de KPIs do CMMS para dashboards gerenciais é hoje uma exigência de maturidade dos programas de engenharia clínica. Ferramentas como Power BI, Tableau e Looker Studio são frequentemente integradas aos CMMS para criar painéis visuais de acompanhamento de indicadores em tempo real.</p>

<!-- IMG_SLOT_3 -->
<!-- IMAGE_STYLE: technical -->
<!-- ALT: Interface de CMMS hospitalar com painel de controle mostrando KPIs de manutenção de equipamentos médicos em tempo real -->

<h2>Design de dashboard de KPIs: o que monitorar e com que frequência</h2>

<p>Um dashboard eficaz de engenharia clínica não deve ser um catálogo de todos os indicadores possíveis — deve ser um painel focado nos KPIs com maior poder de decisão, organizados por nível hierárquico de uso.</p>

<p>O modelo de três camadas é o mais adotado em hospitais com programas maduros:</p>
<figure>
<img src="/artigos/indicadores-engenharia-clinica-kpis/image-3.webp" alt="Infográfico de um dashboard de KPIs de engenharia clínica em três camadas: operacional, tática e estratégica." width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Um dashboard de KPIs eficaz organiza os indicadores em camadas (operacional, tática, estratégica) para atender às necessidades de diferentes níveis gerenciais na engenharia clínica.</figcaption>
</figure>


<p><strong>Camada operacional (atualização diária — uso da equipe técnica):</strong> Ordens de serviço abertas e em andamento, equipamentos em downtime por área, chamados pendentes por prioridade, PM do dia e da semana.</p>

<p><strong>Camada tática (atualização semanal/mensal — uso da coordenação):</strong> MTBF e MTTR por categoria de equipamento, disponibilidade por setor (UTI, CC, emergência), PM compliance rate do mês, backlog ratio, custo corretivo versus preventivo do mês.</p>

<p><strong>Camada estratégica (atualização trimestral/anual — uso da diretoria):</strong> TCO por equipamento e por área, taxa de obsolescência do parque, evolução da disponibilidade média crítica, custo de manutenção como percentual do valor do parque, benchmark comparativo com hospitais de referência (dados AAMI, ECRI Institute).</p>

<table>
  <thead>
    <tr>
      <th>KPI</th>
      <th>Frequência</th>
      <th>Responsável</th>
      <th>Meta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Disponibilidade equipamentos críticos</td>
      <td>Diária</td>
      <td>Engenheiro clínico</td>
      <td>≥ 99%</td>
    </tr>
    <tr>
      <td>MTTR por categoria</td>
      <td>Mensal</td>
      <td>Coordenador EC</td>
      <td>Por SLA definido</td>
    </tr>
    <tr>
      <td>PM compliance rate</td>
      <td>Mensal</td>
      <td>Coordenador EC</td>
      <td>≥ 95%</td>
    </tr>
    <tr>
      <td>Backlog ratio</td>
      <td>Semanal</td>
      <td>Supervisor técnico</td>
      <td>&lt; 1,5×</td>
    </tr>
    <tr>
      <td>Custo manutenção / valor parque</td>
      <td>Trimestral</td>
      <td>Gerente EC</td>
      <td>3–8%</td>
    </tr>
    <tr>
      <td>Taxa de obsolescência</td>
      <td>Semestral</td>
      <td>Gerente EC</td>
      <td>&lt; 20%</td>
    </tr>
  </tbody>
</table>

<h2>Melhoria contínua e futuro dos KPIs: PDCA, IoT e IA na engenharia clínica</h2>

<p>Os indicadores só têm valor se forem usados para tomar decisões e gerar melhorias. O ciclo PDCA (Plan-Do-Check-Act) é o framework mais utilizado para transformar KPIs em ações concretas de melhoria contínua na engenharia clínica.</p>

<p><strong>Plan (Planejar):</strong> Definir metas para cada KPI com base em benchmarks do setor (AAMI, ECRI), nos requisitos de acreditação (ONA, JCI) e na realidade da instituição. Estabelecer o protocolo de coleta de dados no CMMS e a periodicidade de análise crítica.</p>

<p><strong>Do (Executar):</strong> Implementar o plano de manutenção preventiva, treinar a equipe técnica, negociar SLAs com prestadores, garantir estoque adequado de peças críticas. A execução gera os dados que alimentam os indicadores.</p>

<p><strong>Check (Verificar):</strong> Analisar os KPIs nos dashboards. Quando um indicador está fora da meta, aplicar análise de causa raiz (diagrama de Ishikawa, 5 Porquês, FMEA). Identificar os equipamentos, setores ou processos com pior desempenho.</p>

<p><strong>Act (Agir):</strong> Implementar as ações corretivas e preventivas derivadas da análise. Documentar os planos de ação com responsável e prazo. Monitorar o impacto das ações nos KPIs nos ciclos seguintes. Padronizar as boas práticas identificadas.</p>

<p>Para uma visão completa dos processos que sustentam esses KPIs, acesse o <a href="/artigos/manutencao-equipamentos-hospitalares">guia de Manutenção de Equipamentos Hospitalares</a> e o artigo sobre <a href="/artigos/engenharia-clinica-guia-completo">Engenharia Clínica: Guia Completo</a>.</p>

<p>A próxima fronteira da gestão de indicadores em engenharia clínica é a monitoração contínua e automatizada via Internet of Things (IoT) e análise preditiva por Inteligência Artificial. Em vez de calcular MTBF com base em falhas históricas — uma métrica retrospectiva — os sistemas IoT conectados a sensores nos equipamentos permitem monitorar em tempo real variáveis como temperatura interna, vibração, consumo de energia e parâmetros operacionais que precedem falhas.</p>

<p>Sistemas de <strong>manutenção preditiva baseada em condição</strong> (Condition-Based Maintenance — CBM) já estão em operação em hospitais de referência internacional. Eles calculam dinamicamente a probabilidade de falha de cada equipamento nas próximas horas ou dias, permitindo intervenções preventivas cirúrgicas — apenas quando e onde necessário — em vez de manutenções preventivas programadas em calendário fixo que consomem tempo da equipe em equipamentos que não precisariam de atenção. Esses sistemas representam a evolução natural do <a href="/artigos/plano-manutencao-preventiva-hospitalar">Plano de Manutenção Preventiva Hospitalar</a> e do inventário estruturado tratado no artigo sobre <a href="/artigos/gestao-parque-tecnologico-hospitalar">Gestão do Parque Tecnológico Hospitalar</a>.</p>

<p>No contexto brasileiro, iniciativas de hospitais ligados a sistemas como Albert Einstein, Sírio-Libanês e algumas Santas Casas de grande porte já experimentam módulos de IoT integrados ao CMMS. A <a href="https://www.aami.org" target="_blank" rel="noopener noreferrer">AAMI</a> publicou diretrizes específicas para gerenciamento de dispositivos conectados (HDO — Healthcare Delivery Organization) que orientam a implementação segura dessas tecnologias.</p>

<p>O <a href="https://www.ecri.org" target="_blank" rel="noopener noreferrer">ECRI Institute</a> mantém bancos de dados de performance de equipamentos médicos que permitem benchmarking externo dos KPIs internos de cada hospital — uma ferramenta essencial para calibrar metas realistas e identificar oportunidades de melhoria com base em dados de mercado.</p>

<p>Para referências regulatórias, a <a href="https://www.gov.br/anvisa/pt-br" target="_blank" rel="noopener noreferrer">ANVISA</a> disponibiliza a RDC 509/2021 completa em seu portal, com orientações sobre requisitos documentais do PGTS. A <a href="https://www.iec.ch/homepage" target="_blank" rel="noopener noreferrer">IEC</a> publica as normas da série 60601 que definem parâmetros de segurança relevantes para calibração de indicadores de equipamentos eletromédicos. O <a href="https://www.who.int/teams/health-product-policy-and-standards/medical-devices/medical-equipment" target="_blank" rel="noopener noreferrer">programa de tecnologias médicas da OMS</a> oferece orientações globais sobre gestão de desempenho de equipamentos em sistemas de saúde.</p>

<h2>Dúvidas frequentes sobre indicadores de engenharia clínica</h2>

<h3>Qual é a diferença entre MTBF e vida útil do equipamento?</h3>

<p>O MTBF mede o intervalo médio entre falhas em operação — é um indicador dinâmico que varia ao longo do tempo e depende de como o equipamento é usado e mantido. A vida útil é um parâmetro estático definido pelo fabricante e pela NBR 15943:2011, expressa em anos, que indica o horizonte temporal além do qual o equipamento não deve mais ser operado sem avaliação técnica específica. Um equipamento pode ter MTBF estável e ainda assim estar próximo do fim de sua vida útil por obsolescência tecnológica.</p>

<h3>Com que frequência devo recalcular os KPIs de equipamentos?</h3>

<p>KPIs operacionais como disponibilidade e ordens de serviço em aberto devem ser monitorados diariamente. MTBF e MTTR são mais significativos em séries mensais, com análise de tendência trimestral. Indicadores financeiros como custo/valor e TCO devem ser revistos trimestralmente e consolidados no planejamento anual. O importante é manter a consistência do período de análise para que comparações históricas sejam válidas.</p>

<h3>O que fazer quando a disponibilidade de um equipamento cai abaixo de 95%?</h3>

<p>A queda abaixo de 95% em equipamento crítico deve acionar um processo estruturado: (1) registrar não-conformidade formal no CMMS; (2) realizar análise de causa raiz da falha recorrente (5 Porquês ou FMEA); (3) elaborar plano de ação com responsável e prazo; (4) verificar se o equipamento deve entrar em lista de substituição prioritária; (5) notificar a gerência e, se aplicável, a comissão de qualidade. Em equipamentos de suporte de vida, a avaliação de equipamento reserva disponível é mandatória.</p>

<h3>Os KPIs de engenharia clínica precisam ser auditados pela ONA?</h3>

<p>Sim. O Manual das Organizações Prestadoras de Serviços de Saúde da ONA, em seus padrões de gestão de infraestrutura e tecnologia, requer que os indicadores de manutenção sejam formalmente documentados, analisados criticamente em periodicidade definida e que evidências dessa análise estejam disponíveis para auditores. Hospitais em busca do Nível 2 (Acreditado) e Nível 3 (Acreditado com Excelência) da ONA precisam demonstrar maturidade no uso de KPIs para melhoria contínua.</p>

<h3>Posso usar planilhas Excel para gerenciar os KPIs de engenharia clínica?</h3>

<p>Tecnicamente sim, mas com limitações sérias. Planilhas não possuem controle de acesso robusto, versionamento confiável, integração com outros sistemas hospitalares nem capacidade de gerar alertas automáticos quando indicadores saem da meta. Para hospitais com menos de 500 equipamentos e em fase inicial de estruturação, planilhas bem desenhadas podem ser um ponto de partida aceitável. Acima desse volume, ou em hospitais sujeitos a acreditações de alto nível, a implantação de um CMMS específico é praticamente obrigatória para gestão eficaz de KPIs.</p>
`,
};
