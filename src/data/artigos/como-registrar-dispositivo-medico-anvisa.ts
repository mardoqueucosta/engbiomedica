import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Como Registrar um Dispositivo Médico na ANVISA: Roteiro Prático para Startups e Fabricantes',
  resumo: 'Guia completo do processo de registro de dispositivos médicos na ANVISA: classificação, CBPF, ensaios técnicos, submissão no sistema SOLICITA e acompanhamento. Prazos reais, custos atualizados e erros mais comuns a evitar.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '14 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6">
Registrar um dispositivo médico na ANVISA é um dos processos mais exigentes que uma startup ou fabricante pode enfrentar no mercado brasileiro. <strong>O caminho correto depende fundamentalmente da classe de risco do produto</strong>: enquanto dispositivos de baixo risco (Classe I e II) podem ser notificados em cerca de 30 dias, equipamentos de alta complexidade (Classe III e IV) exigem certificação de Boas Práticas de Fabricação (CBPF), ensaios técnicos rigorosos e podem levar até quatro anos para obter autorização de comercialização. Conhecer cada etapa antes de começar evita retrabalho custoso e atrasos que comprometem o plano de negócios.
</p>

<p>
Este artigo integra nosso <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">Guia Completo de Dispositivos Médicos na ANVISA 2026</a> e detalha o workflow operacional do registro, da classificação à pós-comercialização. Para entender a base legal que estrutura todo este processo, consulte também nossa análise da <a href="/artigos/rdc-751-2022-classificacao-registro">RDC 751/2022</a>.
</p>

<h2>Visão Geral do Processo: Notificação ou Registro?</h2>

<p>A primeira decisão estratégica é identificar qual via regulatória se aplica ao seu produto. A RDC 751/2022 estabelece quatro classes de risco, e a via de autorização varia conforme a classe:</p>

<table>
  <thead>
    <tr>
      <th>Classe</th>
      <th>Risco</th>
      <th>Via</th>
      <th>Prazo estimado</th>
      <th>CBPF obrigatório?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>I</td>
      <td>Mínimo</td>
      <td>Notificação</td>
      <td>~30 dias</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>II</td>
      <td>Baixo</td>
      <td>Notificação</td>
      <td>~30 dias</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>III</td>
      <td>Médio-alto</td>
      <td>Registro</td>
      <td>12–24 meses</td>
      <td>Sim</td>
    </tr>
    <tr>
      <td>IV</td>
      <td>Alto</td>
      <td>Registro</td>
      <td>18–48 meses</td>
      <td>Sim</td>
    </tr>
  </tbody>
</table>

<p>A notificação funciona como um ato declaratório: a empresa apresenta a documentação e, salvo irregularidades identificadas no prazo de análise, o produto fica automaticamente autorizado. O registro, por outro lado, envolve análise ativa pela ANVISA, que pode formular exigências técnicas durante o processo.</p>
<figure>
<img src="/artigos/como-registrar-dispositivo-medico-anvisa/image-1.webp" alt="Fluxograma com dois caminhos de registro na ANVISA: Notificação para dispositivos Classe I e II e Registro para Classe III e IV, com etapas, prazos e requisitos de CBPF para cada via regulatória." width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Os dois caminhos regulatórios na ANVISA diferem drasticamente em prazo e custo. Identifique a classe do seu dispositivo antes de qualquer outra ação.</figcaption>
</figure>


<h2>Pré-Requisitos Antes de Qualquer Submissão</h2>

<p>Independentemente da classe do dispositivo, quatro habilitações precisam estar em ordem antes de protocolar qualquer pedido no sistema SOLICITA:</p>

<h3>1. Autorização de Funcionamento de Empresa (AFE)</h3>
<p>A AFE é concedida pela ANVISA e habilita a empresa a fabricar, importar, exportar ou distribuir produtos regulados. Para obtê-la, é necessário cadastro no sistema Gov.br, pagamento da TFVS de AFE e designação de Responsável Técnico (RT) com formação compatível com os produtos da empresa. A AFE deve estar ativa e válida durante todo o processo de registro.</p>

<h3>2. Cadastro no Gov.br e no Sistema SOLICITA</h3>
<p>O sistema SOLICITA é a plataforma eletrônica da ANVISA para submissão e acompanhamento de petições. O acesso requer conta Gov.br com nível de autenticação "Prata" ou "Ouro". Orientamos que o Responsável Técnico e os representantes legais realizem esse cadastro com antecedência, pois a validação pode levar dias úteis.</p>

<h3>3. Certificado de Boas Práticas de Fabricação (CBPF)</h3>
<p>Obrigatório para Classe III e IV. O CBPF atesta que o fabricante — nacional ou estrangeiro — cumpre os requisitos da <a href="/artigos/rdc-665-2022-boas-praticas">RDC 665/2022 de Boas Práticas de Fabricação</a>. Para fabricantes nacionais, a inspeção é conduzida pela própria ANVISA. Para fabricantes estrangeiros, o CBPF pode ser obtido por inspeção direta da ANVISA (prazo de cerca de 2 anos) ou por reconhecimento de certificação MDSAP (Medical Device Single Audit Program), o que reduz o prazo para cerca de 4 anos em média, conforme a RDC 850/2024.</p>

<h3>4. Responsável Técnico (RT)</h3>
<p>O RT deve ser um profissional habilitado pelo conselho de classe correspondente à natureza do dispositivo (engenheiro, médico, farmacêutico, fisioterapeuta, entre outros). Ele assina tecnicamente todas as petições e é pessoalmente responsável pelas informações declaradas.</p>

<h2>Etapa 1: Classificação do Dispositivo</h2>

<p>A classificação correta é o alicerce de todo o processo. Erros nessa etapa costumam ser descobertos apenas na análise pela ANVISA, gerando arquivamento ou exigências que reiniciam prazos. A RDC 751/2022 define regras de classificação baseadas em critérios como:</p>

<ul>
  <li>Duração do contato com o paciente (transitório, curta duração, longa duração)</li>
  <li>Invasividade (não invasivo, invasivo, implantável)</li>
  <li>Dependência de fonte de energia (ativo ou não ativo)</li>
  <li>Finalidade de uso (diagnóstico, terapêutico, monitoramento)</li>
  <li>Contato com sistema nervoso central, circulação central ou coração</li>
</ul>

<p>Softwares como Aplicativos de Saúde seguem regras específicas de classificação definidas para <a href="/artigos/samd-software-dispositivo-medico">SaMD (Software as a Medical Device)</a>, que consideram a gravidade das decisões clínicas apoiadas pelo software.</p>

<p>Dica prática: consulte as listas de produtos exemplificados na RDC 751/2022 e, em caso de dúvida, utilize o serviço de <strong>Consulta Prévia</strong> da ANVISA (petição específica no SOLICITA), que fornece orientação formal sobre classificação e via regulatória aplicável.</p>

<h2>Etapa 2: Ensaios Técnicos e Documentação Pré-Submissão</h2>

<p>Para dispositivos de Classe III e IV, a preparação do dossiê técnico é a fase mais demorada e custosa. Os ensaios devem ser realizados em laboratórios acreditados pelo INMETRO ou equivalentes internacionais reconhecidos.</p>

<h3>Ensaios de segurança elétrica</h3>
<p>Equipamentos eletromédicos precisam atender à norma IEC 60601-1 (segurança básica e desempenho essencial) e às normas colaterais aplicáveis (IEC 60601-1-2 para compatibilidade eletromagnética, IEC 60601-1-6 para usabilidade, entre outras). Os testes incluem resistência de isolação, correntes de fuga, resistência ao fogo e EMC.</p>

<h3>Biocompatibilidade</h3>
<p>Dispositivos com contato com o corpo humano — mesmo indireto — precisam de avaliação de biocompatibilidade conforme a série ISO 10993. O escopo dos testes depende da natureza e duração do contato: citotoxicidade, sensibilização, irritação, pirogenicidade e genotoxicidade são os mais comuns.</p>

<h3>Gerenciamento de riscos</h3>
<p>O dossiê deve conter o arquivo de gerenciamento de riscos completo conforme ISO 14971:2019, incluindo plano de gerenciamento de riscos, análise de riscos, avaliação de riscos, controles implementados e relatório de gerenciamento de riscos residuais.</p>

<h3>Evidências clínicas</h3>
<p>A RDC 848/2024 regulamenta os requisitos de evidência clínica para dispositivos médicos no Brasil. Para Classe III e IV, geralmente é exigida avaliação clínica estruturada, que pode ser baseada em literatura científica existente, dados clínicos pré-clínicos ou estudos clínicos prospectivos quando não houver dados suficientes disponíveis na literatura.</p>

<h2>O Dossiê Técnico: Estrutura IMDRF e Evidências Clínicas</h2>

<p>A ANVISA adota a estrutura de Sumário Técnico de Submissão (STS) definida pelo International Medical Device Regulators Forum (IMDRF). O dossiê é organizado em seções padronizadas que facilitam a análise regulatória:</p>

<table>
  <thead>
    <tr>
      <th>Seção IMDRF</th>
      <th>Conteúdo principal</th>
      <th>Normas de referência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 – Sumário do Dispositivo</td>
      <td>Descrição, finalidade de uso, população-alvo</td>
      <td>RDC 751/2022</td>
    </tr>
    <tr>
      <td>2 – Informações de Segurança e Desempenho</td>
      <td>Dados pré-clínicos, clínicos, benef./risco</td>
      <td>RDC 848/2024, ISO 14971</td>
    </tr>
    <tr>
      <td>3 – Fabricação e Controle de Qualidade</td>
      <td>Processo produtivo, controles, embalagem</td>
      <td>RDC 665/2022</td>
    </tr>
    <tr>
      <td>4 – Estudos de Segurança</td>
      <td>Biocompatibilidade, esterilização, estabilidade</td>
      <td>ISO 10993, ISO 11135</td>
    </tr>
    <tr>
      <td>5 – Estudos de Desempenho Elétrico</td>
      <td>Segurança elétrica, EMC, usabilidade</td>
      <td>IEC 60601-1, IEC 62366</td>
    </tr>
    <tr>
      <td>6 – Rotulagem</td>
      <td>Rótulo, IFU, embalagem</td>
      <td>RDC 751/2022, Annex IV</td>
    </tr>
  </tbody>
</table>

<p>Toda a documentação deve ser apresentada em português. Documentos originalmente em inglês precisam de tradução juramentada, salvo exceções previstas em norma específica. O dossiê é submetido integralmente em formato eletrônico pelo SOLICITA, com cada seção em arquivo PDF separado e tamanho máximo definido pela plataforma.</p>
<figure>
<img src="/artigos/como-registrar-dispositivo-medico-anvisa/image-2.webp" alt="Especialista em assuntos regulatórios revisando dossiê técnico de dispositivo médico com documentação IMDRF e sistema SOLICITA da ANVISA aberto no computador em escritório profissional." width="1024" height="571" loading="lazy" decoding="async">
<figcaption>A qualidade do dossiê técnico é o principal fator que determina o prazo de análise pela ANVISA. Documentação incompleta gera exigências que podem atrasar meses o processo.</figcaption>
</figure>


<h2>Etapa 3: Submissão no Sistema SOLICITA</h2>

<p>O sistema SOLICITA é o portal único de peticionamento eletrônico da ANVISA. A submissão de um pedido de registro envolve as seguintes ações:</p>

<ol>
  <li><strong>Seleção do tipo de petição</strong>: Notificação de DM, Registro de DM, Alteração Pós-Registro ou CBPF, conforme aplicável</li>
  <li><strong>Preenchimento do formulário eletrônico</strong>: dados do produto, classificação, fabricante, RT, finalidade de uso e declarações regulatórias</li>
  <li><strong>Upload dos documentos</strong>: dossiê técnico completo em PDFs organizados por seção IMDRF</li>
  <li><strong>Emissão do GRU</strong>: guia de recolhimento da TFVS, que deve ser paga antes da efetivação da petição</li>
  <li><strong>Protocolo da petição</strong>: após o pagamento, o sistema registra o número de protocolo e a petição entra na fila de análise</li>
</ol>

<p>Atenção: a petição somente é considerada protocolada após a confirmação do pagamento da TFVS. Petições com documentação incompleta podem ser arquivadas sumariamente, sendo necessário novo protocolo com pagamento de nova taxa.</p>

<h3>Via AREE: Aprovação com Base em Autoridade Regulatória Estrangeira Equivalente</h3>
<p>A Instrução Normativa 290/2024 regulamenta a via AREE, que permite à ANVISA basear-se em decisões de autoridades reconhecidas como FDA (EUA), Health Canada, TGA (Austrália) e PMDA (Japão) para aprovação de dispositivos Classe III e IV. Empresas que já possuem aprovação nessas jurisdições podem protocolar via AREE e obter redução de prazo de análise de aproximadamente 30% em relação à via convencional. A documentação exigida inclui cópia da autorização estrangeira, relatório de análise da autoridade de referência e declaração de equivalência regulatória.</p>

<h2>Custos e Descontos: TFVS Atualizada para 2026</h2>

<p>A Taxa de Fiscalização de Vigilância Sanitária (TFVS) é o principal custo regulatório direto, mas está longe de representar o custo total do processo. Os valores de referência para 2026 são:</p>

<table>
  <thead>
    <tr>
      <th>Petição</th>
      <th>Valor integral</th>
      <th>Desconto &lt;R$6M</th>
      <th>Desconto ~90%</th>
      <th>Desconto ~95%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Notificação (I/II)</td>
      <td>R$ 1.406</td>
      <td>R$ 562</td>
      <td>R$ 141</td>
      <td>R$ 70</td>
    </tr>
    <tr>
      <td>Registro Classe III</td>
      <td>R$ 8.510</td>
      <td>R$ 3.404</td>
      <td>R$ 851</td>
      <td>R$ 426</td>
    </tr>
    <tr>
      <td>Registro Classe IV</td>
      <td>R$ 19.856</td>
      <td>R$ 7.942</td>
      <td>R$ 1.986</td>
      <td>R$ 993</td>
    </tr>
    <tr>
      <td>CBPF Estrangeiro</td>
      <td>R$ 72.805</td>
      <td>R$ 29.122</td>
      <td>R$ 7.281</td>
      <td>R$ 3.640</td>
    </tr>
  </tbody>
</table>

<p>Os descontos são aplicados automaticamente com base no porte da empresa declarado na Receita Federal. MEIs são isentos de TFVS, mas as obrigações regulatórias permanecem integrais. Empresas com faturamento bruto abaixo de R$ 6 milhões obtêm 60% de desconto; pequenas empresas (EPP), cerca de 90%; microempresas (ME), cerca de 95%.</p>
<figure>
<img src="/artigos/como-registrar-dispositivo-medico-anvisa/image-3.webp" alt="Comparativo de custos de TFVS da ANVISA para registro de dispositivos médicos por classe e porte de empresa, com descontos de até 95% para micro e pequenas empresas em 2026." width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Os descontos de TFVS podem reduzir drasticamente o custo regulatório. Startups com receita abaixo de R$ 6 milhões já obtêm 60% de desconto automaticamente.</figcaption>
</figure>


<p>Além da TFVS, o custo total de um processo de registro de Classe IV pode incluir:</p>
<ul>
  <li>Ensaios laboratoriais: R$ 50.000 – R$ 300.000</li>
  <li>Consultoria regulatória especializada: R$ 30.000 – R$ 150.000</li>
  <li>Tradução juramentada de documentos: R$ 5.000 – R$ 30.000</li>
  <li>CBPF do fabricante estrangeiro (inspeção ANVISA): R$ 72.805 (taxa) + despesas de missão</li>
  <li>Estudos clínicos (quando necessários): variável, podendo ultrapassar R$ 1 milhão</li>
</ul>

<p>O custo total realístico para Classe IV com fabricante estrangeiro sem certificação MDSAP situa-se entre R$ 300.000 e R$ 500.000 ao longo de todo o processo.</p>

<h2>Prazos Realistas por Classe</h2>

<p>Os prazos legais de análise pela ANVISA são contados em dias úteis e podem ser suspensos durante períodos de exigência. O que os fabricantes experienciam na prática é frequentemente superior aos prazos nominais:</p>

<table>
  <thead>
    <tr>
      <th>Classe</th>
      <th>Prazo legal (dias úteis)</th>
      <th>Prazo real (meses)</th>
      <th>Principal gargalo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>I / II (Notificação)</td>
      <td>30</td>
      <td>1–6</td>
      <td>Documentação incompleta</td>
    </tr>
    <tr>
      <td>III (Registro)</td>
      <td>365</td>
      <td>12–24</td>
      <td>Exigências técnicas, CBPF</td>
    </tr>
    <tr>
      <td>IV (Registro)</td>
      <td>730</td>
      <td>18–48</td>
      <td>Ensaios clínicos, CBPF estrangeiro</td>
    </tr>
    <tr>
      <td>Via AREE (III/IV)</td>
      <td>365</td>
      <td>10–30</td>
      <td>Equivalência regulatória</td>
    </tr>
  </tbody>
</table>

<p>O prazo de análise pode ser suspenso por até 60 dias úteis em cada exigência técnica formulada pela ANVISA. Empresas que respondem às exigências de forma completa e ágil na primeira oportunidade reduzem significativamente o prazo total.</p>

<h2>Acompanhamento, Exigências e Pós-Registro</h2>

<h3>Monitoramento no SOLICITA</h3>
<p>Após o protocolo, todas as movimentações da petição são disponibilizadas no sistema SOLICITA. É fundamental verificar periodicamente o status, pois exigências técnicas têm prazo de resposta definido e o não atendimento implica o arquivamento da petição sem restituição da taxa.</p>

<h3>Resposta a Exigências</h3>
<p>Exigências técnicas são notificações formais em que a ANVISA solicita documentos adicionais, esclarecimentos ou correções no dossiê. A resposta deve ser protocolada no prazo estipulado (geralmente 60 dias úteis), diretamente no SOLICITA, com todos os documentos solicitados devidamente assinados pelo RT.</p>

<h3>Alterações Pós-Registro</h3>
<p>Após a concessão do registro (validade de 10 anos), qualquer modificação no produto, processo ou rotulagem deve ser comunicada à ANVISA conforme a tipologia de alteração:</p>
<ul>
  <li><strong>Com petição de aprovação prévia</strong>: mudanças que afetam segurança, desempenho ou finalidade de uso</li>
  <li><strong>Com petição de notificação imediata</strong>: mudanças administrativas de menor impacto</li>
  <li><strong>Não reportáveis</strong>: melhorias sem impacto em segurança ou desempenho, documentadas internamente</li>
</ul>

<h3>Revalidação do Registro</h3>
<p>O registro tem validade de 10 anos e deve ser revalidado no primeiro semestre do último ano de vigência. A não revalidação no prazo implica o cancelamento automático do registro e a necessidade de novo processo completo.</p>

<h2>Erros Mais Comuns e Como Evitá-los</h2>

<p>Com base em processos analisados e na experiência de profissionais de assuntos regulatórios, estes são os erros que mais frequentemente atrasam ou inviabilizam registros na ANVISA:</p>

<h3>1. Classificação incorreta do dispositivo</h3>
<p>Classificar o produto em classe inferior à correta é o erro mais grave: além do arquivamento da petição, pode configurar infração sanitária. Use a Consulta Prévia da ANVISA sempre que houver dúvida fundada.</p>

<h3>2. CBPF vencido ou com escopo inadequado</h3>
<p>O CBPF deve ter escopo que cubra exatamente o produto sendo registrado. Um CBPF válido para "equipamentos de monitorização" não cobre automaticamente "bombas de infusão implantáveis". Verifique o escopo antes de submeter.</p>

<h3>3. Documentação sem assinatura do Responsável Técnico</h3>
<p>Todos os documentos técnicos, declarações e formulários da petição precisam de assinatura eletrônica qualificada do RT. Documentos sem assinatura válida geram exigência imediata.</p>

<h3>4. Laudos de ensaios fora da validade ou emitidos por laboratório sem acreditação</h3>
<p>A ANVISA exige que os ensaios sejam realizados por laboratórios acreditados pelo INMETRO (RBLE/RNLA) ou equivalentes. Laudos com mais de 5 anos podem não ser aceitos dependendo do tipo de ensaio.</p>

<h3>5. Tradução juramentada ausente ou com tradutor sem habilitação</h3>
<p>Documentos em idioma estrangeiro precisam de tradução juramentada por tradutor público juramentado registrado na Junta Comercial do estado. Traduções não juramentadas, mesmo de alta qualidade técnica, não são aceitas.</p>

<h2>Perguntas Frequentes sobre Registro na ANVISA</h2>

<h3>Startups em fase pré-receita podem se qualificar para descontos na TFVS?</h3>
<p>Sim. O desconto de TFVS é calculado com base no faturamento bruto declarado à Receita Federal no último exercício. Uma startup sem faturamento ou com faturamento abaixo de R$ 6 milhões se qualifica automaticamente para 60% de desconto. MEIs são isentos da TFVS. O importante é que a empresa esteja regularmente constituída e o CNPJ ativo.</p>

<h3>É possível comercializar o dispositivo enquanto o registro está em análise?</h3>
<p>Não, para Classe III e IV. Para Classe I e II na via de Notificação, a comercialização pode ocorrer após o protocolo, mas antes da análise, o que representa um risco regulatório caso irregularidades sejam identificadas posteriormente. Em caráter excepcional, a ANVISA pode conceder autorização especial temporária em situações de emergência em saúde pública.</p>

<h3>Qual é a diferença prática entre MDSAP e a inspeção direta da ANVISA para obter o CBPF?</h3>
<p>A inspeção direta da ANVISA para CBPF de fabricante estrangeiro leva em média 2 anos, considerando o agendamento, a própria inspeção e a emissão do certificado. O MDSAP é um programa de auditoria única que é reconhecido por Brasil, EUA, Canadá, Austrália e Japão simultaneamente. Para o CBPF via MDSAP, a RDC 850/2024 estabelece prazo de análise de 120 dias úteis após a submissão dos relatórios do MDSAP. Para fabricantes que já possuem ou planejam obter aprovação em múltiplas jurisdições, o MDSAP representa uma economia significativa de tempo e custo.</p>

<h3>O que acontece se minha petição for arquivada?</h3>
<p>O arquivamento ocorre por não atendimento de exigência no prazo, pagamento de TFVS insuficiente ou documentação fundamentalmente inadequada. A TFVS não é restituída. O fabricante pode protocoliar nova petição a qualquer momento, com pagamento de nova taxa. Em alguns casos, os documentos previamente submetidos podem ser reaproveitados, desde que ainda estejam dentro do prazo de validade.</p>

<h3>Existe um caminho mais rápido para dispositivos já aprovados nos EUA ou Europa?</h3>
<p>Sim. A via AREE (IN 290/2024) permite que a ANVISA utilize como referência a análise técnica de autoridades como FDA, Health Canada, TGA e PMDA. Para Classe III e IV com aprovação nessas jurisdições, a AREE pode reduzir o prazo de análise em até 30%. A documentação exigida inclui a autorização estrangeira vigente, o relatório de avaliação da autoridade de referência e o dossiê técnico na estrutura IMDRF. Certificação CE europeia isoladamente não é aceita como referência na via AREE, mas pode compor evidências no dossiê técnico convencional.</p>

<p>Para aprofundar seu entendimento sobre o ecossistema regulatório de dispositivos médicos no Brasil, acesse nosso <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">guia completo atualizado para 2026</a> e acompanhe as publicações da <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa" target="_blank" rel="noopener noreferrer">ANVISA</a> para estar sempre informado sobre mudanças regulatórias que impactem seu produto. Para dúvidas específicas sobre seu dispositivo, a <a href="https://www.gov.br/anvisa/pt-br/acessoainformacao/perguntas-frequentes" target="_blank" rel="noopener noreferrer">seção de perguntas frequentes da ANVISA</a> e a modalidade de Consulta Prévia são os canais oficiais recomendados. A <a href="https://imdrf.org/documents" target="_blank" rel="noopener noreferrer">biblioteca de documentos do IMDRF</a> disponibiliza gratuitamente todos os guias de estrutura de dossiê técnico adotados como referência no Brasil.</p>
`,
};
