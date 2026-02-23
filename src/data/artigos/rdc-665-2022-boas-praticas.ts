import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'RDC 665/2022: Boas Práticas de Fabricação de Produtos Médicos',
  resumo: 'Guia completo sobre a RDC 665/2022, que consolida os requisitos de Boas Práticas de Fabricação para dispositivos médicos no Brasil. Entenda os 138 artigos, documentos obrigatórios, certificação CBPF e auditorias MDSAP.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '14 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>A RDC 665/2022 é o marco regulatório central das Boas Práticas de Fabricação (BPF) de produtos médicos no Brasil.</strong> Publicada pela ANVISA em 30 de março de 2022 e vigente desde 2 de maio de 2022, ela consolidou e substituiu a RDC 16/2013 e a IN 8/2013, reunindo em um único instrumento todos os requisitos que fabricantes, importadores, distribuidores e armazenadores de dispositivos médicos devem cumprir para operar legalmente no país. Seu escopo abrange 138 artigos e incorpora a Resolução GMC 20/2011 do Mercosul, harmonizando o Brasil com o padrão regional e aproximando o arcabouço regulatório nacional da ISO 13485:2016.</p>

<p class="mb-6">Se você atua na gestão de qualidade ou na fabricação de dispositivos médicos, este artigo detalha cada pilar da norma, os documentos obrigatórios, os caminhos para obtenção do Certificado de Boas Práticas de Fabricação (CBPF) e um checklist prático de conformidade. Para contextualizar a RDC 665/2022 dentro do ecossistema regulatório mais amplo, consulte também nosso <a href="/artigos/anvisa-dispositivos-medicos-guia-2026" class="text-blue-600 hover:underline">Guia Completo ANVISA para Dispositivos Médicos 2026</a>.</p>

<h2 class="text-2xl font-bold mt-10 mb-4">O que Mudou com a RDC 665/2022 em Relação à RDC 16/2013</h2>

<p class="mb-4">A primeira informação crítica para gestores é: a RDC 665/2022 não introduziu requisitos substantivos novos em comparação com a RDC 16/2013. Seu principal propósito foi consolidação e reestruturação. Isso significa que empresas já em conformidade com a norma anterior não precisaram reformular seus sistemas de gestão da qualidade — o que foi necessário foi revisar a numeração dos artigos e atualizar as referências internas na documentação.</p>

<p class="mb-4">As principais diferenças formais incluem:</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Incorporação expressa da Resolução GMC 20/2011 do Mercosul, explicitando o alinhamento regional;</li>
  <li>Unificação do texto normativo anteriormente dividido entre a RDC 16/2013 e a IN 8/2013;</li>
  <li>Reestruturação da numeração dos artigos para maior clareza e navegabilidade;</li>
  <li>Atualização de definições para alinhamento com a ISO 13485:2016 e o MDSAP (Medical Device Single Audit Program).</li>
</ul>

<p class="mb-6">Para entender como a RDC 665/2022 se encaixa no processo de registro de produtos, veja nosso artigo sobre a <a href="/artigos/rdc-751-2022-classificacao-registro" class="text-blue-600 hover:underline">RDC 751/2022: Classificação e Registro de Dispositivos Médicos</a>.</p>

<h2 class="text-2xl font-bold mt-10 mb-4">Os 138 Artigos: Estrutura e Pilares da RDC 665/2022</h2>

<p class="mb-4">A norma está organizada em blocos temáticos que cobrem o ciclo de vida completo do dispositivo médico. A tabela abaixo apresenta os principais blocos e seus temas centrais:</p>

<div class="overflow-x-auto mb-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Bloco Temático</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Temas Principais</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Relevância para SGQ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Sistema de Gestão da Qualidade</td>
        <td class="border border-gray-300 px-4 py-2">Estrutura do SGQ, planejamento, controle de documentos e registros</td>
        <td class="border border-gray-300 px-4 py-2">Base de todo o sistema; alinhado à ISO 13485</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Responsabilidade da Direção</td>
        <td class="border border-gray-300 px-4 py-2">Comprometimento, política da qualidade, planejamento, autoridade e comunicação</td>
        <td class="border border-gray-300 px-4 py-2">Alta gestão deve demonstrar liderança ativa</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Gestão de Recursos</td>
        <td class="border border-gray-300 px-4 py-2">Recursos humanos, competência, infraestrutura e ambiente de trabalho</td>
        <td class="border border-gray-300 px-4 py-2">Treinamentos documentados e qualificação de pessoal</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Gestão de Riscos</td>
        <td class="border border-gray-300 px-4 py-2">Análise, avaliação, controle e verificação de eficácia ao longo do ciclo de vida</td>
        <td class="border border-gray-300 px-4 py-2">Processo contínuo; integrado ao projeto e produção</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Controles de Projeto e Desenvolvimento</td>
        <td class="border border-gray-300 px-4 py-2">Planejamento, entradas, saídas, revisões, verificação, validação, transferência e mudanças</td>
        <td class="border border-gray-300 px-4 py-2">Gate reviews e Registro Histórico do Projeto</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Controles de Compras</td>
        <td class="border border-gray-300 px-4 py-2">Qualificação e avaliação de fornecedores, requisitos de compra, verificação</td>
        <td class="border border-gray-300 px-4 py-2">Lista de fornecedores aprovados e auditorias</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Controles de Produção</td>
        <td class="border border-gray-300 px-4 py-2">Ambiente, equipamentos, validação de processos, identificação, rastreabilidade</td>
        <td class="border border-gray-300 px-4 py-2">Validação obrigatória onde outputs não são verificáveis</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Manuseio, Armazenamento e Distribuição</td>
        <td class="border border-gray-300 px-4 py-2">Rotulagem, embalagem, controle de estoque, distribuição e rastreabilidade</td>
        <td class="border border-gray-300 px-4 py-2">Cadeia de custódia e controle de lote</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Instalação e Serviço</td>
        <td class="border border-gray-300 px-4 py-2">Registros de instalação, serviço pós-venda, relatórios de serviço</td>
        <td class="border border-gray-300 px-4 py-2">Aplicável quando contratualmente acordado</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">CAPA e Reclamações</td>
        <td class="border border-gray-300 px-4 py-2">Tratamento de reclamações, investigação, ações corretivas/preventivas, recalls</td>
        <td class="border border-gray-300 px-4 py-2">Ciclo fechado com verificação de eficácia</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Técnicas Estatísticas</td>
        <td class="border border-gray-300 px-4 py-2">Amostragem, controle estatístico de processo, análise de dados</td>
        <td class="border border-gray-300 px-4 py-2">Procedimentos documentados obrigatórios</td>
      </tr>
    </tbody>
  </table>
</div>

<figure>
<img src="/artigos/rdc-665-2022-boas-praticas/image-1.webp" alt="Diagrama técnico mostrando a estrutura dos 138 artigos da RDC 665/2022 e os pilares do sistema de gestão da qualidade para dispositivos médicos" loading="lazy" />
<figcaption>Arquitetura do sistema de gestão da qualidade conforme a RDC 665/2022, com seus blocos temáticos interconectados</figcaption>
</figure>

<h2 class="text-2xl font-bold mt-10 mb-4">Documentos Obrigatórios: RMP, RHP e Registro Histórico do Projeto</h2>

<p class="mb-4">Um dos pontos mais fiscalizados em auditorias é a existência e integridade dos três documentos mestres exigidos pela RDC 665/2022. Compreender a distinção entre eles é fundamental:</p>

<h3 class="text-xl font-semibold mt-6 mb-3">Registro Mestre do Produto (RMP)</h3>
<p class="mb-4">O RMP é o conjunto de documentos que define como o produto deve ser fabricado. Ele contém as especificações do produto, procedimentos de fabricação, equipamentos necessários, métodos de inspeção e ensaio, e requisitos de embalagem e rotulagem. É o "como fazer" do produto — e deve estar disponível para todos os envolvidos na produção.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">Registro Histórico do Produto (RHP)</h3>
<p class="mb-4">O RHP é o conjunto de registros que demonstra que cada lote ou unidade foi fabricado em conformidade com o RMP. Inclui registros de produção, resultados de ensaios, dados de rastreabilidade de componentes, desvios documentados e ações tomadas. É o "como foi feito" — a evidência objetiva de conformidade por lote.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">Registro Histórico do Projeto</h3>
<p class="mb-4">Exclusivo para dispositivos com controles de projeto aplicáveis, este documento registra todo o processo de desenvolvimento: planejamento, entradas de projeto, revisões realizadas, resultados de verificação e validação, e mudanças de projeto com respectivas aprovações. É a trilha de auditoria do ciclo de desenvolvimento do produto.</p>

<div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
  <p class="font-semibold text-amber-800">Atenção para auditorias:</p>
  <p class="text-amber-700 mt-1">Auditores ANVISA e MDSAP verificam sistematicamente a rastreabilidade entre RMP, RHP e Registro Histórico do Projeto. Inconsistências entre esses documentos são uma das não conformidades mais frequentes em inspeções.</p>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4">Gestão de Riscos: Processo Contínuo ao Longo do Ciclo de Vida</h2>

<p class="mb-4">A RDC 665/2022 exige que a gestão de riscos seja um processo contínuo e não um evento pontual. Isso alinha o Brasil com os requisitos da ISO 14971 e com o entendimento internacional de que riscos devem ser monitorados durante toda a vida útil do produto no mercado.</p>

<p class="mb-4">O processo completo de gestão de riscos exigido pela norma compreende quatro etapas integradas:</p>

<div class="overflow-x-auto mb-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Etapa</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Atividades Requeridas</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Integração com outros requisitos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2 font-medium">Análise de Riscos</td>
        <td class="border border-gray-300 px-4 py-2">Identificação de hazards, estimativa de probabilidade e severidade</td>
        <td class="border border-gray-300 px-4 py-2">Entradas de projeto, especificações de uso pretendido</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2 font-medium">Avaliação de Riscos</td>
        <td class="border border-gray-300 px-4 py-2">Decisão sobre aceitabilidade com base em critérios pré-definidos</td>
        <td class="border border-gray-300 px-4 py-2">Política da qualidade, política de risco da empresa</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2 font-medium">Controle de Riscos</td>
        <td class="border border-gray-300 px-4 py-2">Implementação de medidas: design seguro, proteções, informações de segurança</td>
        <td class="border border-gray-300 px-4 py-2">Controles de projeto, rotulagem, IFU</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2 font-medium">Verificação de Eficácia</td>
        <td class="border border-gray-300 px-4 py-2">Confirmação de que controles reduziram riscos ao nível aceitável sem introduzir novos riscos</td>
        <td class="border border-gray-300 px-4 py-2">Dados pós-mercado, reclamações, CAPA</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="mb-6">A integração da gestão de riscos com dados pós-mercado é particularmente importante: reclamações e eventos adversos devem alimentar reanálises de risco, fechando o ciclo de melhoria contínua. Para dispositivos que utilizam inteligência artificial, a RDC 982/2025 estabeleceu diretrizes adicionais para a incorporação de IA na gestão de riscos dentro do contexto BPF.</p>


<h2 class="text-2xl font-bold mt-10 mb-4">Controles de Produção e Validação de Processos</h2>

<p class="mb-4">A RDC 665/2022 estabelece um princípio fundamental para controles de produção: qualquer processo cujo output não possa ser completamente verificado por inspeção ou ensaio subsequente deve ser validado. Isso inclui processos como esterilização, soldagem, selagem de embalagens, tratamentos superficiais e aplicação de revestimentos bioativos.</p>

<p class="mb-4">A validação de processos segue a lógica IQ/OQ/PQ (Qualificação de Instalação, Operação e Performance), devendo ser documentada antes do início da produção comercial. Mudanças em equipamentos, instalações ou processos validados exigem reavaliação do impacto e eventual revalidação.</p>

<p class="mb-4">Além da validação, a norma exige:</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Identificação e rastreabilidade:</strong> cada componente, subconjunto e produto acabado deve ser identificável ao longo de todas as etapas de produção;</li>
  <li><strong>Controle de produto não conforme:</strong> procedimentos documentados para identificar, segregar, avaliar e dispor de produtos que não atendam às especificações;</li>
  <li><strong>Controle ambiental:</strong> monitoramento e controle das condições ambientais de produção quando relevantes para a qualidade do produto (temperatura, umidade, partículas, etc.);</li>
  <li><strong>Calibração e manutenção de equipamentos:</strong> programa documentado de calibração e manutenção preventiva para todos os equipamentos de medição e produção críticos.</li>
</ul>

<figure>
<img src="/artigos/rdc-665-2022-boas-praticas/image-2.webp" alt="Cenário laboratorial de fabricação de dispositivos médicos com controles de processo conforme RDC 665/2022" loading="lazy" />
<figcaption>Ambiente controlado de fabricação de dispositivos médicos com operadores seguindo as Boas Práticas da RDC 665/2022</figcaption>
</figure>

<h2 class="text-2xl font-bold mt-10 mb-4">CBPF: Certificado de Boas Práticas de Fabricação</h2>

<p class="mb-4">O Certificado de Boas Práticas de Fabricação (CBPF) é obrigatório para o registro de dispositivos médicos das Classes III e IV — as de maior risco — junto à ANVISA. Sem o CBPF válido, o processo de registro não avança para estas classes.</p>

<p class="mb-4">A RDC 665/2022, combinada com as diretrizes subsequentes, prevê dois caminhos para obtenção do CBPF:</p>

<div class="overflow-x-auto mb-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Caminho</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Mecanismo</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Validade do CBPF</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Principais Vantagens</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2 font-medium">Inspeção Direta ANVISA</td>
        <td class="border border-gray-300 px-4 py-2">Inspeção presencial realizada por auditores da ANVISA na instalação do fabricante</td>
        <td class="border border-gray-300 px-4 py-2 text-center">2 anos</td>
        <td class="border border-gray-300 px-4 py-2">Não requer certificação por organismo externo; adequado para empresas nacionais menores</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2 font-medium">Relatórios MDSAP (RDC 850/2024)</td>
        <td class="border border-gray-300 px-4 py-2">Submissão de relatórios de auditoria MDSAP realizados por Organismo Auditor acreditado</td>
        <td class="border border-gray-300 px-4 py-2 text-center">4 anos</td>
        <td class="border border-gray-300 px-4 py-2">Validade maior; auditoria única reconhecida por múltiplas agências regulatórias internacionais</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4">MDSAP e ISO 13485: Alinhamento Internacional</h2>

<p class="mb-4">O MDSAP (Medical Device Single Audit Program) representa uma das mais significativas evoluções no cenário regulatório de dispositivos médicos dos últimos anos. O programa permite que uma única auditoria, realizada por um Organismo Auditor acreditado, satisfaça os requisitos de auditoria de múltiplas agências regulatórias — incluindo ANVISA (Brasil), FDA (EUA), Health Canada, TGA (Austrália) e PMDA (Japão).</p>

<p class="mb-4">A adoção do MDSAP no Brasil cresceu de forma expressiva: de apenas 4,7% das empresas participantes em 2017 para 59,1% em 2023. Em 2025, existem 13 Organismos Auditores acreditados para conduzir auditorias MDSAP globalmente.</p>

<p class="mb-4">A relação entre MDSAP e ISO 13485:2016 é de complementaridade: as auditorias MDSAP avaliam a conformidade do SGQ com a ISO 13485:2016 ao mesmo tempo em que verificam os requisitos regulatórios específicos de cada país participante. Para empresas que buscam certificação <a href="/artigos/iso-13485-dispositivos-medicos" class="text-blue-600 hover:underline">ISO 13485 para Dispositivos Médicos</a>, a auditoria MDSAP oferece dupla cobertura — eficiência operacional e conformidade regulatória simultânea.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
  <p class="font-semibold text-blue-800">Benefício estratégico do MDSAP:</p>
  <p class="text-blue-700 mt-1">Empresas com produto aprovado no Brasil que buscam expandir para o mercado norte-americano ou canadense encontram no MDSAP um atalho regulatório significativo, evitando auditorias redundantes por diferentes agências.</p>
</div>


<h2 class="text-2xl font-bold mt-10 mb-4">Checklist de Conformidade com a RDC 665/2022</h2>

<p class="mb-4">A implementação prática da RDC 665/2022 exige uma abordagem sistemática. O checklist abaixo organiza os requisitos essenciais por área, permitindo identificar gaps no sistema de gestão da qualidade:</p>

<div class="overflow-x-auto mb-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Área</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Requisito Essencial</th>
        <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Evidência Objetiva Necessária</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">SGQ</td>
        <td class="border border-gray-300 px-4 py-2">Manual da qualidade ou documento equivalente definindo escopo e exclusões justificadas</td>
        <td class="border border-gray-300 px-4 py-2">Manual aprovado pela direção, com data e versão</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Direção</td>
        <td class="border border-gray-300 px-4 py-2">Política da qualidade, objetivos mensuráveis e análise crítica pela direção</td>
        <td class="border border-gray-300 px-4 py-2">Atas de análise crítica com frequência mínima anual</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Pessoal</td>
        <td class="border border-gray-300 px-4 py-2">Matrizes de competência, treinamentos documentados e avaliação de eficácia</td>
        <td class="border border-gray-300 px-4 py-2">Registros de treinamento assinados e avaliações de eficácia</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Gestão de Riscos</td>
        <td class="border border-gray-300 px-4 py-2">Arquivo de gestão de riscos por produto, cobrindo todo o ciclo de vida</td>
        <td class="border border-gray-300 px-4 py-2">Plano de gestão de riscos, análise FMEA, relatório de gestão de riscos</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Projeto</td>
        <td class="border border-gray-300 px-4 py-2">Plano de projeto, revisões formais em gates, verificação e validação de projeto</td>
        <td class="border border-gray-300 px-4 py-2">Registro Histórico do Projeto completo e rastreável</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Fornecedores</td>
        <td class="border border-gray-300 px-4 py-2">Critérios de qualificação, lista de fornecedores aprovados, avaliação periódica</td>
        <td class="border border-gray-300 px-4 py-2">AVF aprovados, registros de avaliação anual ou por risco</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">Produção</td>
        <td class="border border-gray-300 px-4 py-2">Validação de processos especiais, controle ambiental, rastreabilidade de lote</td>
        <td class="border border-gray-300 px-4 py-2">Relatórios IQ/OQ/PQ, registros de lote (RHP), dados de monitoramento ambiental</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Calibração</td>
        <td class="border border-gray-300 px-4 py-2">Inventário de instrumentos, cronograma de calibração, rastreabilidade metrológica</td>
        <td class="border border-gray-300 px-4 py-2">Certificados de calibração rastreáveis ao INMETRO ou equivalente</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">CAPA</td>
        <td class="border border-gray-300 px-4 py-2">Processo documentado para reclamações, NC, CAPA e verificação de eficácia</td>
        <td class="border border-gray-300 px-4 py-2">Log de CAPA com status, prazos e registros de fechamento com eficácia verificada</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">Auditoria Interna</td>
        <td class="border border-gray-300 px-4 py-2">Programa anual de auditorias internas cobrindo todos os requisitos da norma</td>
        <td class="border border-gray-300 px-4 py-2">Relatórios de auditoria, planos de ação e evidências de closure</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="mb-6">Para equipamentos que também requerem certificação do INMETRO, consulte nosso artigo sobre <a href="/artigos/certificacao-inmetro-equipamentos-medicos" class="text-blue-600 hover:underline">Certificação INMETRO para Equipamentos Médicos</a>, que detalha como a conformidade BPF complementa os requisitos de certificação de produto.</p>

<figure>
<img src="/artigos/rdc-665-2022-boas-praticas/image-3.webp" alt="Fluxograma do processo de conformidade com a RDC 665/2022 desde implementação do SGQ até obtenção do CBPF" loading="lazy" />
<figcaption>Caminho de conformidade com a RDC 665/2022: do planejamento do SGQ à obtenção do CBPF via inspeção direta ou MDSAP</figcaption>
</figure>

<h2 class="text-2xl font-bold mt-10 mb-4">CAPA: O Motor da Melhoria Contínua</h2>

<p class="mb-4">O sistema de Ações Corretivas e Preventivas (CAPA) é frequentemente descrito como o coração de qualquer SGQ eficaz — e a RDC 665/2022 não é exceção. A norma exige um processo CAPA robusto que abranja:</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Reclamações de clientes:</strong> todas as reclamações devem ser registradas e avaliadas quanto ao potencial de representar um evento adverso reportável à ANVISA;</li>
  <li><strong>Investigação de causas raízes:</strong> uso de metodologias como 5-Why, Ishikawa (espinha de peixe) ou análise de árvore de falhas para identificar a causa fundamental do problema;</li>
  <li><strong>Ações corretivas:</strong> eliminação da causa de não conformidades existentes para prevenir reincidência;</li>
  <li><strong>Ações preventivas:</strong> eliminação de causas de não conformidades potenciais antes que ocorram;</li>
  <li><strong>Recalls:</strong> processo documentado para identificação de lotes afetados, notificação à ANVISA e recolhimento de produtos quando necessário.</li>
</ul>

<p class="mb-6">Um requisito frequentemente negligenciado é a verificação formal de eficácia das CAPA: após implementação da ação, a empresa deve demonstrar objetivamente que o problema foi resolvido e que a solução se mantém ao longo do tempo. CAPA sem verificação de eficácia é uma das não conformidades mais recorrentes em inspeções ANVISA.</p>

<h2 class="text-2xl font-bold mt-10 mb-4">RDC 982/2025: Inteligência Artificial e BPF</h2>

<p class="mb-4">Em 2025, a ANVISA publicou a RDC 982/2025, que introduziu diretrizes para a integração de inteligência artificial nos processos de gestão de riscos dentro do contexto das BPF. Esta norma é particularmente relevante para fabricantes que utilizam IA em sistemas de visão computacional para controle de qualidade, monitoramento preditivo de processos ou análise de dados de vigilância pós-mercado.</p>

<p class="mb-6">As exigências incluem validação dos algoritmos de IA, documentação de seus limites de performance, procedimentos para atualização de modelos e monitoramento contínuo de drift de performance. Embora complementar à RDC 665/2022, a RDC 982/2025 representa o próximo horizonte regulatório para empresas que incorporam tecnologias de IA em seus processos produtivos e de qualidade.</p>

<h2 class="text-2xl font-bold mt-10 mb-4">Perguntas Frequentes sobre a RDC 665/2022</h2>

<h3 class="text-xl font-semibold mt-6 mb-3">A RDC 665/2022 se aplica a distribuidores e importadores, ou apenas a fabricantes?</h3>
<p class="mb-4">A norma aplica-se a fabricantes, importadores, distribuidores e armazenadores de dispositivos médicos que atuam no mercado brasileiro. Os requisitos específicos variam conforme o papel da empresa na cadeia: fabricantes têm o maior escopo de requisitos aplicáveis, incluindo controles de projeto e produção. Importadores e distribuidores devem cumprir principalmente os requisitos de manuseio, armazenamento, distribuição, controle de documentos, CAPA e rastreabilidade.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">O CBPF é obrigatório para dispositivos médicos de Classe I e II?</h3>
<p class="mb-4">Não. O CBPF é exigência para o registro de dispositivos médicos das Classes III e IV. Para Classes I e II, a empresa deve igualmente cumprir com os requisitos de BPF da RDC 665/2022, mas não é necessário apresentar o CBPF como condição de registro. No entanto, estar em conformidade com as BPF é obrigatório independentemente da classe, e a ANVISA pode realizar inspeções em qualquer empresa fabricante, independentemente do porte ou classe dos produtos.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">Qual a diferença entre o caminho MDSAP e a inspeção direta ANVISA para o CBPF?</h3>
<p class="mb-4">Os dois caminhos levam ao mesmo resultado — o CBPF — mas diferem em validade e processo. A inspeção direta pela ANVISA resulta em CBPF com validade de 2 anos; o caminho via relatórios MDSAP, regulamentado pela RDC 850/2024, resulta em CBPF com validade de 4 anos. O MDSAP é especialmente vantajoso para empresas que exportam para múltiplos países participantes (EUA, Canadá, Austrália, Japão), pois uma única auditoria satisfaz os requisitos regulatórios de todos eles simultaneamente.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">Como a validação de processos deve ser documentada segundo a RDC 665/2022?</h3>
<p class="mb-4">A norma exige que a validação de processos especiais seja realizada e documentada antes do início da produção comercial. A documentação deve incluir: protocolo de validação com critérios de aceitação pré-definidos, resultados das qualificações IQ (Instalação), OQ (Operação) e PQ (Performance), relatório de validação com conclusão formal sobre aprovação ou rejeição, e programa de revalidação periódica ou por mudança. Mudanças nos equipamentos, instalações, pessoal ou parâmetros de processo devem ser avaliadas quanto ao impacto e podem exigir revalidação total ou parcial.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">Uma empresa certificada na ISO 13485:2016 já está em conformidade com a RDC 665/2022?</h3>
<p class="mb-4">A ISO 13485:2016 e a RDC 665/2022 têm alto grau de alinhamento, e uma empresa certificada na norma internacional certamente já atende grande parte dos requisitos da norma brasileira. No entanto, existem requisitos regulatórios específicos da ANVISA que vão além da ISO 13485, como exigências de rotulagem para o mercado brasileiro, procedimentos de notificação de eventos adversos à ANVISA, requisitos específicos do Mercosul e particularidades do CBPF. Portanto, a certificação ISO 13485 é uma excelente base, mas não substitui completamente a análise de conformidade com a RDC 665/2022.</p>

<h2 class="text-2xl font-bold mt-10 mb-4">Fontes e Referências Normativas</h2>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><a href="https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-665-de-30-de-marco-de-2022-390413553" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">RDC 665/2022 — Diário Oficial da União</a></li>
  <li><a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2024/anvisa-publica-resolucao-sobre-mdsap" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">RDC 850/2024 — MDSAP e CBPF (ANVISA)</a></li>
  <li><a href="https://www.imdrf.org/documents/medical-device-single-audit-program-mdsap" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">MDSAP — IMDRF (International Medical Device Regulators Forum)</a></li>
  <li><a href="https://www.iso.org/standard/59752.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">ISO 13485:2016 — Medical devices — Quality management systems (ISO)</a></li>
  <li><a href="https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/boas-praticas/dispositivos-medicos" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Portal BPF Dispositivos Médicos — ANVISA</a></li>
</ul>
`,
};
