import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'ISO 13485 para Dispositivos Médicos: Implementação Prática do Sistema de Gestão da Qualidade',
  resumo: 'Guia completo de implementação da ISO 13485:2016 com checklists por cláusula, templates de procedimentos, custos reais de certificação e estratégias para auditoria. Essencial para gestores de qualidade e consultores do setor de dispositivos médicos no Brasil.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '16 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6">A <strong>ISO 13485:2016</strong> é a norma internacional que define os requisitos do Sistema de Gestão da Qualidade (SGQ) para fabricantes e fornecedores de dispositivos médicos — e desde 2 de fevereiro de 2026, passou a ser referência obrigatória também para o mercado norte-americano, após o FDA incorporar seus requisitos ao novo <em>Quality Management System Regulation</em> (QMSR). Para as mais de 1.200 empresas brasileiras do setor, que exportaram US$ 1,17 bilhão em 2024, entender e implementar corretamente essa norma é a diferença entre acessar ou perder mercados globais.</p>

<p>Este guia cobre cada cláusula da ISO 13485, traz checklists práticos de implementação, orienta sobre custos reais de certificação no Brasil e explica como integrar a norma com a <a href="/artigos/rdc-665-2022-boas-praticas">RDC 665/2022</a> e o programa MDSAP. Para aprofundar a gestão de riscos exigida pela cláusula 7.1, consulte também nosso artigo sobre <a href="/artigos/iso-14971-gestao-risco">ISO 14971</a>.</p>
<h2>ISO 13485 x ISO 9001: Diferenças Fundamentais que Gestores Precisam Conhecer</h2>

<p>A ISO 13485:2016 (3ª edição) é frequentemente confundida com a ISO 9001:2015, mas as diferenças são substanciais e impactam diretamente a estratégia de implementação. Enquanto a ISO 9001 adota a estrutura de alto nível Annex SL (10 cláusulas) e enfatiza a <em>melhoria contínua</em>, a ISO 13485 mantém suas 8 cláusulas próprias e foca em <strong>manter a eficácia do SGQ</strong> — não apenas melhorá-lo.</p>

<table>
  <caption>Comparativo ISO 13485:2016 vs ISO 9001:2015</caption>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>ISO 13485:2016</th>
      <th>ISO 9001:2015</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Estrutura</td>
      <td>8 cláusulas (estrutura própria)</td>
      <td>10 cláusulas (Annex SL)</td>
    </tr>
    <tr>
      <td>Foco</td>
      <td>Manter eficácia do SGQ</td>
      <td>Melhoria contínua</td>
    </tr>
    <tr>
      <td>Rastreabilidade</td>
      <td>Obrigatória e extensiva</td>
      <td>Conforme aplicável</td>
    </tr>
    <tr>
      <td>Ambiente limpo</td>
      <td>Requisitos específicos (7.5.2)</td>
      <td>Não abordado</td>
    </tr>
    <tr>
      <td>Validação de software</td>
      <td>Cláusula 4.1.6 explícita</td>
      <td>Controle de mudanças genérico</td>
    </tr>
    <tr>
      <td>Gestão de risco</td>
      <td>Integrada em todo o produto</td>
      <td>Abordagem baseada em risco geral</td>
    </tr>
    <tr>
      <td>Registros</td>
      <td>Vida útil do dispositivo</td>
      <td>Período definido pela organização</td>
    </tr>
    <tr>
      <td>Mercados-alvo</td>
      <td>Dispositivos médicos (global)</td>
      <td>Qualquer setor</td>
    </tr>
  </tbody>
</table>

<p>Outro ponto crítico: a ISO 13485 exige entre <strong>25 e 48 procedimentos documentados</strong>, dependendo do escopo e complexidade dos produtos. Empresas que migram de um SGQ baseado em ISO 9001 geralmente precisam criar ou adaptar significativamente seus procedimentos de design e desenvolvimento, controle de produto não conforme, validação e rastreabilidade.</p>

<h2>Estrutura da ISO 13485: As 8 Cláusulas que Regem o SGQ</h2>

<p>Antes de iniciar a implementação, é fundamental compreender a lógica de cada cláusula e suas interdependências. A seguir, um mapa detalhado com os requisitos principais e os pontos de atenção mais frequentes em auditoria.</p>

<h3>Cláusula 4 — Sistema de Gestão da Qualidade</h3>

<p>A Cláusula 4 estabelece os fundamentos do SGQ, incluindo o escopo, os requisitos gerais e os requisitos de documentação. O item <strong>4.1.6</strong>, adicionado na versão 2016, trata especificamente da validação de software usado no SGQ — um dos requisitos mais frequentemente negligenciados em auditorias iniciais. Toda aplicação de software que afete a qualidade do produto deve ser validada antes do uso e revalidada após mudanças.</p>
<figure>
<img src="/artigos/iso-13485-dispositivos-medicos/image-1.webp" alt="Diagrama das 8 cláusulas da ISO 13485:2016 para sistemas de gestão da qualidade em dispositivos médicos, com destaque para cláusula 7" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Estrutura das 8 cláusulas da ISO 13485:2016. A Cláusula 7 (Realização do Produto) concentra a maior parte das não-conformidades em auditorias.</figcaption>
</figure>


<p>O <strong>Manual da Qualidade</strong> (4.2.2) deve definir o escopo do SGQ, incluindo ou justificando exclusões, e descrever a interação entre os processos. Diferente da ISO 9001:2015, a ISO 13485 mantém o Manual como documento obrigatório.</p>

<h3>Cláusula 5 — Responsabilidade da Direção</h3>

<p>A alta direção deve demonstrar comprometimento estabelecendo a política da qualidade, definindo objetivos mensuráveis, conduzindo análises críticas periódicas do SGQ e garantindo disponibilidade de recursos. Em auditorias de certificação, os auditores frequentemente entrevistam diretores para verificar se o compromisso é real ou apenas documental. A <strong>análise crítica pela direção</strong> (5.6) deve cobrir resultados de auditorias, feedback de clientes, desempenho de processos, status de ações corretivas e preventivas, além de mudanças que possam afetar o SGQ.</p>

<h3>Cláusula 6 — Gestão de Recursos</h3>

<p>Abrange recursos humanos, infraestrutura e ambiente de trabalho. Para dispositivos médicos, o ambiente de trabalho (6.4) inclui requisitos específicos para controle de contaminação em produtos estéreis ou que necessitem de ambiente limpo. Há exigência de procedimentos documentados para controle de saúde de funcionários que possam afetar a qualidade do produto — um requisito frequentemente subestimado em implementações iniciais.</p>

<h3>Cláusula 7 — Realização do Produto (A Mais Crítica)</h3>

<p>Com suas 14 subcláusulas, a Cláusula 7 é de longe a mais extensa e a que concentra o maior número de não-conformidades em auditorias. A subcláusula <strong>7.3 (Projeto e Desenvolvimento)</strong>, com 10 sub-itens, é especialmente crítica para fabricantes que desenvolvem seus próprios dispositivos.</p>

<table>
  <caption>Subcláusulas da Cláusula 7 e Principais Requisitos</caption>
  <thead>
    <tr>
      <th>Subcláusula</th>
      <th>Tema</th>
      <th>Documentos Obrigatórios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1</td>
      <td>Planejamento da realização do produto</td>
      <td>Planos de qualidade, critérios de aceitação</td>
    </tr>
    <tr>
      <td>7.2</td>
      <td>Processos relacionados ao cliente</td>
      <td>Requisitos do cliente, requisitos regulatórios</td>
    </tr>
    <tr>
      <td>7.3</td>
      <td>Projeto e Desenvolvimento</td>
      <td>Plano P&D, inputs, outputs, revisões, verificação, validação, transferência, controle de mudanças, arquivo do DHF</td>
    </tr>
    <tr>
      <td>7.4</td>
      <td>Aquisição</td>
      <td>Avaliação de fornecedores, especificações de compra</td>
    </tr>
    <tr>
      <td>7.5</td>
      <td>Produção e fornecimento de serviço</td>
      <td>Instruções de trabalho, planos de controle, rastreabilidade, embalagem</td>
    </tr>
    <tr>
      <td>7.6</td>
      <td>Controle de equipamentos de monitoramento e medição</td>
      <td>Registros de calibração, periodicidade</td>
    </tr>
  </tbody>
</table>

<p>O <strong>Device History File (DHF)</strong> — ou Arquivo de Histórico do Dispositivo — deve conter evidências de que o projeto foi executado conforme o plano aprovado. O <strong>Device Master Record (DMR)</strong> é o conjunto de registros que define o produto finalizado: especificações, métodos de fabricação, procedimentos de controle de qualidade e embalagem. Ambos são verificados detalhadamente em auditorias de certificação e regulatórias.</p>

<h3>Cláusula 8 — Medição, Análise e Melhoria</h3>

<p>Abrange monitoramento da satisfação do cliente, auditorias internas, monitoramento de processos e produtos, controle de produto não conforme, análise de dados, ações corretivas e preventivas (CAPA) e melhoria. O sistema de <strong>CAPA (Corrective and Preventive Action)</strong> é um dos processos mais auditados e frequentemente o mais problemático em implementações imaturas. A ISO 13485 exige investigação de causa raiz documentada, implementação de ações e verificação de eficácia.</p>
<h2>Cronograma de Implementação: 12 a 18 Meses na Prática</h2>

<p>A maioria das empresas leva entre 12 e 18 meses para implementar a ISO 13485 do zero. O tempo varia conforme o tamanho da empresa, complexidade dos produtos, maturidade do SGQ existente e disponibilidade de recursos dedicados. Abaixo, um cronograma realista dividido em quatro fases.</p>

<table>
  <caption>Cronograma Típico de Implementação ISO 13485</caption>
  <thead>
    <tr>
      <th>Fase</th>
      <th>Período</th>
      <th>Atividades Principais</th>
      <th>Entregáveis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 — Diagnóstico e Planejamento</td>
      <td>Meses 1-2</td>
      <td>Gap analysis, mapeamento de processos, definição do escopo, formação da equipe</td>
      <td>Relatório de lacunas, plano de implementação, matriz de responsabilidades</td>
    </tr>
    <tr>
      <td>2 — Desenvolvimento do SGQ</td>
      <td>Meses 3-7</td>
      <td>Elaboração de procedimentos, instruções de trabalho, formulários; treinamento de equipes</td>
      <td>Manual da Qualidade, 25-48 procedimentos documentados, registros de treinamento</td>
    </tr>
    <tr>
      <td>3 — Implementação e Operação</td>
      <td>Meses 8-12</td>
      <td>Operação do SGQ, coleta de evidências, auditorias internas, análise crítica pela direção</td>
      <td>Registros de CAPA, relatórios de auditoria interna, ata de análise crítica</td>
    </tr>
    <tr>
      <td>4 — Certificação</td>
      <td>Meses 13-18</td>
      <td>Auditoria de estágio 1 (documentação), auditoria de estágio 2 (in loco), resolução de não-conformidades</td>
      <td>Certificado ISO 13485, relatório de auditoria, plano de ações corretivas</td>
    </tr>
  </tbody>
</table>

<h3>Checklist de Pré-Auditoria (Gap Analysis)</h3>

<p>Antes de contratar um organismo certificador, realize uma análise de lacunas interna ou com consultoria especializada. Os pontos mais críticos a verificar:</p>
<figure>
<img src="/artigos/iso-13485-dispositivos-medicos/image-2.webp" alt="Engenheiro de qualidade analisando documentação do sistema de gestão da qualidade ISO 13485 para dispositivos médicos em ambiente industrial" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>A implementação da ISO 13485 requer dedicação de uma equipe multidisciplinar durante 12 a 18 meses, com envolvimento ativo da alta direção.</figcaption>
</figure>


<ul>
  <li><strong>Documentação:</strong> Manual da Qualidade completo, todos os procedimentos obrigatórios redigidos e aprovados, sistema de controle de documentos operacional</li>
  <li><strong>Projeto e Desenvolvimento (7.3):</strong> DHF completo para cada dispositivo no escopo, evidências de verificação e validação, controle de mudanças documentado</li>
  <li><strong>Validação de Software (4.1.6):</strong> Inventário de softwares do SGQ, planos e relatórios de validação para cada sistema</li>
  <li><strong>Gestão de Fornecedores (7.4):</strong> Lista aprovada de fornecedores críticos, critérios de avaliação documentados, acordos de qualidade com fornecedores de componentes críticos</li>
  <li><strong>Rastreabilidade (7.5.9):</strong> Sistema capaz de identificar lotes, componentes e status de inspeção em todas as etapas</li>
  <li><strong>CAPA (8.5.2/8.5.3):</strong> Pelo menos 3 ciclos completos de CAPA com investigação de causa raiz e verificação de eficácia documentados</li>
  <li><strong>Auditoria Interna (8.2.4):</strong> Programa completo executado, todas as cláusulas auditadas, relatórios e ações corretivas registrados</li>
  <li><strong>Gestão de Risco:</strong> Evidências de integração com <a href="/artigos/iso-14971-gestao-risco">ISO 14971</a> ao longo do ciclo de vida do produto</li>
</ul>

<h2>Custos Reais de Certificação no Brasil</h2>

<p>O custo total de certificação ISO 13485 para empresas de pequeno e médio porte no Brasil varia entre <strong>R$ 80.000 e R$ 250.000</strong>, considerando todos os componentes. Abaixo, um detalhamento realista dos principais itens de custo.</p>

<table>
  <caption>Estimativa de Custos de Implementação e Certificação ISO 13485 (Brasil, 2026)</caption>
  <thead>
    <tr>
      <th>Item</th>
      <th>Custo Estimado</th>
      <th>Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Consultoria de implementação</td>
      <td>R$ 40.000 – R$ 120.000</td>
      <td>Depende do escopo e maturidade do SGQ existente</td>
    </tr>
    <tr>
      <td>Treinamentos (equipe interna)</td>
      <td>R$ 8.000 – R$ 25.000</td>
      <td>Interpretação da norma, auditor interno, ferramentas de qualidade</td>
    </tr>
    <tr>
      <td>Software de gestão do SGQ</td>
      <td>R$ 5.000 – R$ 30.000/ano</td>
      <td>eQMS como MasterControl, Qualio ou soluções nacionais</td>
    </tr>
    <tr>
      <td>Calibração de equipamentos</td>
      <td>R$ 3.000 – R$ 15.000</td>
      <td>Dependente do parque de equipamentos de medição</td>
    </tr>
    <tr>
      <td>Auditoria de certificação (OC)</td>
      <td>R$ 15.000 – R$ 45.000</td>
      <td>BSI, Bureau Veritas, SGS, TÜV, RINA — valores variam por OC</td>
    </tr>
    <tr>
      <td>Auditorias de manutenção (anuais)</td>
      <td>R$ 8.000 – R$ 20.000/ano</td>
      <td>Obrigatórias para manutenção do certificado</td>
    </tr>
    <tr>
      <td><strong>Total implementação inicial</strong></td>
      <td><strong>R$ 80.000 – R$ 250.000</strong></td>
      <td>Empresas pequenas: extremo inferior; médias: extremo superior</td>
    </tr>
  </tbody>
</table>

<p>Empresas que já possuem ISO 9001 certificada podem reduzir significativamente esses custos — tipicamente 30% a 40% — pois já possuem estrutura documental básica, cultura de auditorias e processos de CAPA estabelecidos. O principal esforço de migração concentra-se nas cláusulas específicas de dispositivos médicos: rastreabilidade extensiva, gestão de risco integrada, validação de processos e controles de projeto e desenvolvimento.</p>

<h2>ISO 13485 e MDSAP: A Estratégia para Múltiplos Mercados</h2>

<p>O <strong>Medical Device Single Audit Program (MDSAP)</strong> representa uma das maiores vantagens competitivas disponíveis para fabricantes brasileiros com ambições de exportação. Com um único ciclo de auditoria, a empresa obtém reconhecimento em cinco jurisdições: Brasil (ANVISA), Estados Unidos (FDA), Canadá (Health Canada), Austrália (TGA) e Japão (MHLW/PMDA).</p>

<p>A adoção do MDSAP no Brasil cresceu de forma expressiva: de apenas 4,7% das empresas em 2017 para 59,1% em 2023. Esse salto reflete tanto os incentivos regulatórios da ANVISA — que reconhece relatórios MDSAP como equivalente ao relatório de inspeção para fins de CBPF — quanto a crescente pressão dos mercados exportadores, especialmente o Canadá, que tornou o MDSAP obrigatório para fabricantes estrangeiros.</p>

<p>A estratégia ideal para empresas que almejam exportação é implementar a ISO 13485, buscar certificação inicial com um organismo credenciado pelo MDSAP, e usar o primeiro ciclo de auditoria MDSAP para consolidar o acesso simultâneo a múltiplos mercados. Para orientação sobre o cenário regulatório brasileiro, consulte nosso <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">guia ANVISA de dispositivos médicos 2026</a>.</p>
<h2>ISO 13485 e a RDC 665/2022: Integração dos Sistemas</h2>

<p>A <a href="/artigos/rdc-665-2022-boas-praticas">RDC 665/2022</a>, que estabelece as Boas Práticas de Fabricação (BPF) para dispositivos médicos no Brasil, é amplamente harmonizada com a ISO 13485. Isso significa que uma empresa devidamente certificada na norma internacional já atende a maior parte dos requisitos regulatórios da ANVISA — mas não todos.</p>

<p>As principais áreas de complementaridade e diferenças incluem:</p>
<figure>
<img src="/artigos/iso-13485-dispositivos-medicos/image-3.webp" alt="Fluxograma de integração entre ISO 13485, RDC 665/2022 Boas Práticas de Fabricação, MDSAP e CBPF para dispositivos médicos no Brasil" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>A ISO 13485 serve como espinha dorsal do SGQ que sustenta tanto a certificação MDSAP quanto a conformidade com a RDC 665/2022 e o CBPF da ANVISA.</figcaption>
</figure>


<ul>
  <li><strong>Convergências:</strong> Controle de documentos e registros, gestão de fornecedores, rastreabilidade, controle de produto não conforme, CAPA, auditorias internas e análise crítica pela direção são praticamente idênticos entre as duas normas.</li>
  <li><strong>Requisitos adicionais da RDC 665/2022:</strong> Notificação de eventos adversos à ANVISA, requisitos específicos para validação de processos de esterilização, e exigências de rotulagem em português conforme normas ABNT.</li>
  <li><strong>CBPF (Certificado de Boas Práticas de Fabricação):</strong> Emitido pela ANVISA após inspeção. Para empresas com MDSAP, a ANVISA pode usar o relatório de auditoria MDSAP, reduzindo significativamente o esforço de inspeção.</li>
</ul>

<p>A recomendação prática para gestores é tratar a ISO 13485 como a espinha dorsal do SGQ e mapear os requisitos adicionais da RDC 665/2022 como complementos específicos do contexto regulatório brasileiro. Uma matriz de correlação entre cláusulas da norma e artigos da resolução é um documento de gestão essencial nesse processo.</p>

<h2>Cláusula 7.3 em Detalhe: Projeto e Desenvolvimento</h2>

<p>A Cláusula 7.3 é consistentemente a fonte do maior número de não-conformidades em auditorias ISO 13485, especialmente para fabricantes que desenvolvem produtos próprios. Seus 10 sub-itens cobrem todo o ciclo de vida do desenvolvimento:</p>

<h3>7.3.1 — Planejamento</h3>
<p>Requer um plano de P&D documentado que defina as etapas do projeto, as revisões necessárias, as responsabilidades e as interfaces organizacionais e técnicas. O plano deve ser atualizado conforme o projeto evolui.</p>

<h3>7.3.2 e 7.3.3 — Entradas e Saídas</h3>
<p>As <em>entradas</em> do projeto (7.3.2) devem incluir requisitos de desempenho e segurança, requisitos legais e regulatórios aplicáveis, informações de projetos anteriores similares e requisitos de gestão de risco. As <em>saídas</em> (7.3.3) devem ser verificáveis em relação às entradas e devem especificar características do produto críticas para sua segurança e uso correto.</p>

<h3>7.3.4, 7.3.5 e 7.3.6 — Revisão, Verificação e Validação</h3>
<p>Esses três elementos formam o coração da garantia da qualidade no desenvolvimento. A <em>revisão</em> avalia se o projeto atende aos requisitos. A <em>verificação</em> confirma que as saídas do projeto atendem às entradas (o produto foi feito certo?). A <em>validação</em> confirma que o produto atende às necessidades do usuário e à aplicação pretendida (o produto certo foi feito?). Para softwares de dispositivos médicos, a IEC 62304 define os processos de ciclo de vida complementares.</p>

<h3>7.3.9 — Arquivo do Projeto (DHF)</h3>
<p>O Device History File deve conter ou referenciar todos os registros de projeto e desenvolvimento, demonstrando que o processo foi executado conforme planejado. É a principal evidência auditada para verificar conformidade da cláusula 7.3 como um todo.</p>

<h2>Preparando-se para a Próxima Edição da Norma</h2>

<p>A ISO 13485:2025+ (nome provisório) está em desenvolvimento e deve ser publicada entre 2027 e 2028. As principais mudanças antecipadas incluem requisitos explícitos para dispositivos com componentes de <strong>Inteligência Artificial e Aprendizado de Máquina (AI/ML)</strong>, diretrizes de <strong>cibersegurança</strong> para dispositivos conectados, maior alinhamento com o Regulamento de Dispositivos Médicos da União Europeia (MDR 2017/745) e integração de requisitos de sustentabilidade.</p>

<p>Para empresas que implementam ou renovam sua certificação agora, a recomendação é estruturar o SGQ de forma modular, documentando adequadamente os processos relacionados a software, conectividade e gerenciamento de dados — áreas que certamente serão endereçadas na próxima edição. Engenheiros biomédicos interessados em desenvolver competências nessa área podem verificar as <a href="/artigos/certificacoes-engenheiros-biomedicos">certificações disponíveis para a área regulatória</a>.</p>

<h2>Perguntas Frequentes sobre ISO 13485</h2>

<h3>A ISO 13485 é obrigatória para vender dispositivos médicos no Brasil?</h3>
<p>A ISO 13485 não é legalmente obrigatória no Brasil, mas a RDC 665/2022 exige que fabricantes de dispositivos médicos possuam um sistema de gestão da qualidade com requisitos equivalentes. Na prática, a certificação ISO 13485 é o caminho mais eficiente e reconhecido para demonstrar conformidade. Para exportação aos EUA, a partir de fevereiro de 2026, o QMSR do FDA incorpora os requisitos da ISO 13485 por referência, tornando-a essencial para o mercado norte-americano.</p>

<h3>Qual a validade do certificado ISO 13485?</h3>
<p>O certificado ISO 13485 tem validade de 3 anos, mas está condicionado à realização de auditorias de manutenção anuais (ou semestrais, dependendo do organismo certificador e do risco associado aos produtos). Uma não-conformidade grave identificada em auditoria de manutenção pode resultar em suspensão ou cancelamento do certificado antes do prazo de 3 anos.</p>

<h3>Distribuidores e importadores precisam de ISO 13485?</h3>
<p>Distribuidores e importadores que apenas comercializam produtos sem alterá-los podem implementar um escopo limitado do SGQ, excluindo as cláusulas de projeto e desenvolvimento (7.3) e partes da realização do produto. Porém, importadores que realizam atividades de rotulagem, embalagem ou armazenamento regulado têm escopo obrigatoriamente mais amplo. A ANVISA exige que importadores registrados possuam seus próprios controles de qualidade documentados.</p>

<h3>Quanto tempo leva uma auditoria de certificação ISO 13485?</h3>
<p>A duração da auditoria de certificação varia conforme o número de funcionários e a complexidade dos produtos, seguindo diretrizes de cálculo de dias de auditoria definidas pelo IAF (International Accreditation Forum). Para uma empresa de 50 a 200 funcionários com produtos de médio risco, uma auditoria típica de estágio 2 dura entre 4 e 8 dias de auditoria in loco, distribuídos por 2 auditores especializados. Empresas maiores ou com linha de produtos diversificada demandam mais tempo.</p>

<h3>Como selecionar um organismo de certificação (OC) para ISO 13485?</h3>
<p>O OC deve ser acreditado pelo INMETRO (para certificação com validade no Brasil) ou por um organismo de acreditação signatário do IAF MLA para o escopo de dispositivos médicos. Para certificação MDSAP, apenas organismos aprovados pelo programa são aceitos: BSI, Bureau Veritas, Dekra, SGS, TÜV SÜD e RINA são os principais atuando no Brasil. Solicite proposta de pelo menos três organismos, compare não apenas preço mas também experiência setorial específica com seus tipos de produtos e tempo de atendimento a respostas.</p>

<p>Para aprofundar sua compreensão do ecossistema regulatório de dispositivos médicos, explore nosso <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">guia completo ANVISA 2026</a> e o artigo sobre <a href="/artigos/iso-14971-gestao-risco">gestão de riscos com ISO 14971</a>, norma complementar e igualmente fundamental para qualquer fabricante de dispositivos médicos.</p>

<h2>Referências e Recursos Oficiais</h2>

<ul>
  <li><a href="https://www.iso.org/standard/59752.html" target="_blank" rel="noopener noreferrer">ISO 13485:2016 — Página oficial ISO</a></li>
  <li><a href="https://www.fda.gov/medical-devices/quality-system-qs-regulationmedical-device-good-manufacturing-practices/quality-management-system-regulation" target="_blank" rel="noopener noreferrer">FDA — Quality Management System Regulation (QMSR)</a></li>
  <li><a href="https://www.gov.br/anvisa/pt-br/setorregulado/regularizacao/dispositivos-medicos" target="_blank" rel="noopener noreferrer">ANVISA — Dispositivos Médicos: Regularização</a></li>
  <li><a href="https://www.access.fda.gov/orun/mdsap/" target="_blank" rel="noopener noreferrer">Medical Device Single Audit Program (MDSAP) — Informações Oficiais</a></li>
  <li><a href="https://www.inmetro.gov.br/qualidade/cbpq/certificacao-iso-13485.asp" target="_blank" rel="noopener noreferrer">INMETRO — Certificação ISO 13485 no Brasil</a></li>
</ul>
`,
};
