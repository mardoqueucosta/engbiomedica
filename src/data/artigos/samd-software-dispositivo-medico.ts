import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Software como Dispositivo Médico (SaMD): Guia Completo de Regulação no Brasil [2026]',
  resumo: 'Entenda o que é SaMD, como funciona a regulação ANVISA (RDC 657/2022), a matriz de risco IMDRF, comparação com FDA e EU MDR, e o caminho para aprovação de softwares médicos no Brasil.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '14 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Software como Dispositivo Médico (SaMD) é hoje um dos segmentos de maior crescimento em toda a cadeia de tecnologia em saúde.</strong> Aplicativos de diagnóstico por imagem, algoritmos de triagem clínica, sistemas de apoio à decisão baseados em inteligência artificial — todos esses produtos precisam passar por um processo regulatório específico antes de chegar ao mercado. No Brasil, a ANVISA publicou a RDC 657/2022, estabelecendo o marco regulatório nacional e alinhando o país ao framework internacional do IMDRF.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>O Que é Software como Dispositivo Médico (SaMD)?</h2>
<figure>
<img src="/artigos/samd-software-dispositivo-medico/image-1.webp" alt="Diagrama comparativo entre SaMD, SiMD e software acessório de dispositivo médico com exemplos e fronteiras regulatórias definidas pela ANVISA e IMDRF" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Distinção entre as três categorias de software em saúde: SaMD opera de forma independente, SiMD integra hardware médico, e o software acessório auxilia sem função médica autônoma.</figcaption>
</figure>


<p class="mb-6">A definição oficial adotada pela ANVISA, alinhada ao IMDRF (International Medical Device Regulators Forum), estabelece que SaMD é <em>"software destinado a ser usado para uma ou mais finalidades médicas sem fazer parte de um dispositivo médico de hardware"</em>. Em outras palavras, o software funciona de forma independente, não precisa de um equipamento físico específico para operar e, por si só, cumpre uma função diagnóstica, terapêutica, de monitoramento ou de previsão clínica.</p>

<p class="mb-6">Essa definição exclui dois tipos de software frequentemente confundidos com SaMD:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Software in Medical Device (SiMD):</strong> software que faz parte integrante de um dispositivo médico físico, como o firmware de um ventilador mecânico ou de um monitor de ECG. Esse tipo é regulado como parte do próprio equipamento.</li>
  <li><strong>Software acessório de dispositivo médico:</strong> software que auxilia na operação de um dispositivo já regulado, mas que não executa função médica autônoma — por exemplo, um aplicativo de transferência de dados de um glucômetro para o celular, sem interpretar os resultados.</li>
</ul>

<p class="mb-6">A fronteira entre essas categorias é o ponto mais crítico para o profissional de engenharia biomédica: um mesmo aplicativo pode ser SaMD, SiMD ou acessório dependendo da finalidade declarada e da relação com o hardware.</p>

<!-- IMG_SLOT_1 -->

<h2>RDC 657/2022: O Marco Regulatório Brasileiro</h2>

<p class="mb-6">Publicada em dezembro de 2022, a RDC 657 foi o passo decisivo da ANVISA para criar um regime regulatório específico para SaMD. Antes dessa resolução, softwares médicos eram enquadrados nas regras gerais de dispositivos médicos, sem considerar as particularidades do desenvolvimento ágil, das atualizações contínuas e dos modelos de machine learning.</p>

<p class="mb-6">Os principais pontos da RDC 657/2022 incluem:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>Adoção formal da definição IMDRF de SaMD</li>
  <li>Critérios para distinguir SaMD de software de bem-estar (wellness) não regulado</li>
  <li>Base para a matriz de risco e classificação por classes regulatórias</li>
  <li>Requisitos de ciclo de vida de software baseados nas normas IEC 62304 e IEC 82304</li>
  <li>Obrigações de pós-mercado, incluindo vigilância e atualização de versões</li>
</ul>

<p class="mb-6">A resolução está atualmente em processo de revisão pela ANVISA, com foco em dois temas emergentes: o tratamento de <strong>software adaptável</strong> (aquele que aprende e muda com o tempo, como modelos de IA) e a incorporação do conceito de <strong>PCCP — Predetermined Change Control Plan</strong>, já adotado pelo FDA americano para gerenciar atualizações de algoritmos sem exigir uma nova submissão regulatória a cada mudança.</p>

<p class="mb-6">Para aprofundar o entendimento sobre o ecossistema regulatório brasileiro, consulte nosso artigo sobre <a href="/artigos/anvisa-dispositivos-medicos-regulamentacao">regulamentação ANVISA para dispositivos médicos</a>.</p>

<h2>A Matriz de Risco IMDRF: Como Classificar um SaMD</h2>
<figure>
<img src="/artigos/samd-software-dispositivo-medico/image-2.webp" alt="Matriz de risco IMDRF 3x3 mostrando categorias I a IV para classificação de SaMD com base em natureza da informação gerada e gravidade da condição clínica" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>A matriz IMDRF cruza a natureza da informação produzida pelo SaMD com a gravidade da condição clínica, resultando em quatro categorias de risco que determinam o rigor regulatório exigido.</figcaption>
</figure>


<p class="mb-6">O framework IMDRF propõe uma matriz 3×3 para determinar o nível de risco de um SaMD. A combinação entre a <strong>natureza da informação produzida</strong> e a <strong>gravidade da condição do paciente</strong> resulta em quatro categorias (I a IV), onde IV representa o maior risco.</p>

<table class="mb-6 w-full border-collapse text-sm">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 px-4 py-2 text-left">Natureza da Informação / Gravidade da Condição</th>
      <th class="border border-gray-300 px-4 py-2 text-center">Não Grave</th>
      <th class="border border-gray-300 px-4 py-2 text-center">Grave</th>
      <th class="border border-gray-300 px-4 py-2 text-center">Crítica / Fatal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2"><strong>Informar</strong> (ex.: registrar dados)</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. I</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. I</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. II</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border border-gray-300 px-4 py-2"><strong>Direcionar</strong> (ex.: apoiar diagnóstico)</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. I</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. II</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. III</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2"><strong>Diagnosticar/Tratar</strong> (ex.: fechar diagnóstico automaticamente)</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. II</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. III</td>
      <td class="border border-gray-300 px-4 py-2 text-center">Cat. IV</td>
    </tr>
  </tbody>
</table>

<p class="mb-6">Um algoritmo que detecta automaticamente hemorragia craniana em tomografias e aciona o fluxo de emergência sem intervenção humana intermediária, por exemplo, estaria na Categoria IV: diagnóstico autônomo em condição crítica. Já um aplicativo que registra sintomas de uma condição não grave e sugere ao médico uma hipótese diagnóstica seria Categoria I ou II.</p>

<!-- IMG_SLOT_2 -->

<h2>Classificação ANVISA: Regra 11 e Classes I–IV</h2>

<p class="mb-6">No Brasil, a classificação de SaMD é feita pela <strong>Regra 11 da RDC 751/2022</strong>, que transpõe a lógica IMDRF para o sistema nacional de classes de risco (I a IV). As implicações práticas de cada classe são significativas:</p>

<table class="mb-6 w-full border-collapse text-sm">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 px-4 py-2 text-left">Classe</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Via Regulatória</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Requisitos Principais</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Prazo Estimado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2"><strong>Classe I</strong></td>
      <td class="border border-gray-300 px-4 py-2">Notificação simplificada</td>
      <td class="border border-gray-300 px-4 py-2">Cadastro básico, declaração de conformidade</td>
      <td class="border border-gray-300 px-4 py-2">30–60 dias</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border border-gray-300 px-4 py-2"><strong>Classe II</strong></td>
      <td class="border border-gray-300 px-4 py-2">Notificação simplificada</td>
      <td class="border border-gray-300 px-4 py-2">Documentação técnica, rotulagem, IEC 62304</td>
      <td class="border border-gray-300 px-4 py-2">60–120 dias</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2"><strong>Classe III</strong></td>
      <td class="border border-gray-300 px-4 py-2">Registro completo</td>
      <td class="border border-gray-300 px-4 py-2">Dossiê técnico completo, estudos clínicos, CBPF</td>
      <td class="border border-gray-300 px-4 py-2">12–24 meses</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border border-gray-300 px-4 py-2"><strong>Classe IV</strong></td>
      <td class="border border-gray-300 px-4 py-2">Registro completo</td>
      <td class="border border-gray-300 px-4 py-2">Dossiê técnico completo, evidências clínicas robustas, CBPF, auditorias</td>
      <td class="border border-gray-300 px-4 py-2">24–36 meses</td>
    </tr>
  </tbody>
</table>

<p class="mb-6">O <strong>CBPF (Certificado de Boas Práticas de Fabricação)</strong> exigido para as classes III e IV é um dos principais gargalos para startups de saúde digital no Brasil. Ele requer que o fabricante — ou o desenvolvedor de software, no caso de SaMD — demonstre conformidade com processos de qualidade auditáveis, equivalentes ao que a ISO 13485 estabelece para fabricantes de dispositivos físicos.</p>

<h2>Cenário Atual: Brasil vs. FDA vs. União Europeia</h2>
<figure>
<img src="/artigos/samd-software-dispositivo-medico/image-3.webp" alt="Comparação entre os sistemas regulatórios ANVISA, FDA e EU MDR para aprovação de SaMD mostrando volume de aprovações e principais marcos regulatórios de cada jurisdição" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>O Brasil possui cerca de 100 SaMDs aprovados frente a mais de 1.250 autorizados pelo FDA. A dupla conformidade MDR e EU AI Act exigida na Europa a partir de 2027 elevará ainda mais o rigor regulatório global.</figcaption>
</figure>


<p class="mb-6">O Brasil ainda apresenta um gap considerável em relação às autoridades regulatórias mais maduras. Enquanto a ANVISA soma aproximadamente <strong>100 softwares e soluções de IA aprovados</strong>, o FDA americano já autorizou mais de <strong>1.250 dispositivos de IA/ML</strong> — um número que cresce a uma taxa superior a 150 novos produtos por ano.</p>

<p class="mb-6">Cada jurisdição tem sua via regulatória específica:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>FDA (EUA):</strong> utiliza três vias principais — 510(k) para dispositivos com predicate device equivalente, De Novo para tecnologias sem precedente, e PMA (Premarket Approval) para dispositivos de alto risco. O FDA também lidera globalmente na regulação de IA/ML com o framework AI Action Plan.</li>
  <li><strong>União Europeia:</strong> o MDR (Medical Device Regulation) regula SaMD como dispositivos médicos convencionais. A partir de agosto de 2027, entra em vigor a dupla conformidade obrigatória com o <strong>EU AI Act</strong>, que impõe requisitos adicionais de transparência, explicabilidade e supervisão humana para sistemas de IA classificados como alto risco.</li>
  <li><strong>ANVISA:</strong> marco regulatório mais recente (RDC 657/2022), com processo de revisão em andamento e sandbox regulatório ainda em fase incipiente.</li>
</ul>

<p class="mb-6">Para desenvolvedores com ambições de mercado global, a estratégia mais eficiente costuma ser iniciar pela aprovação FDA ou CE Mark e depois adaptar o dossiê técnico para a ANVISA, aproveitando o reconhecimento mútuo parcial que o Brasil vem desenvolvendo com essas jurisdições.</p>

<!-- IMG_SLOT_3 -->

<h2>Exemplos Práticos de SaMD no Mercado</h2>

<p class="mb-6">Alguns casos reais ilustram bem o espectro de aplicações e o nível de risco regulatório envolvido:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Aidoc (hemorragia craniana):</strong> algoritmo de IA que analisa tomografias computadorizadas e detecta automaticamente sinais de hemorragia intracraniana, priorizando a fila de leitura radiológica. Aprovado pelo FDA como Classe II via 510(k). No contexto IMDRF, seria Categoria III ou IV por diagnosticar condição crítica.</li>
  <li><strong>Laura (deterioração clínica):</strong> sistema de monitoramento contínuo desenvolvido no Brasil que analisa sinais vitais de pacientes hospitalizados e alerta para risco de deterioração clínica. Exemplo de SaMD nacional que direcionou condição grave — Classe III pela Regra 11.</li>
  <li><strong>brain4care:</strong> empresa brasileira com tecnologia SaMD para monitoramento não invasivo de pressão intracraniana. Caso de sucesso de desenvolvimento regulatório nacional com expansão internacional.</li>
</ul>

<p class="mb-6">Esses exemplos mostram que o segmento de SaMD não se limita a grandes corporações — startups brasileiras já estão competindo globalmente, desde que naveguem corretamente o labirinto regulatório.</p>

<h2>LGPD e Proteção de Dados em SaMD</h2>

<p class="mb-6">Qualquer SaMD que processe dados de saúde está automaticamente sujeito à <strong>Lei Geral de Proteção de Dados (LGPD)</strong>. Dados de saúde são classificados como <em>dados pessoais sensíveis</em>, exigindo base legal específica para tratamento — em geral, o consentimento do titular ou o interesse legítimo em contexto de saúde pública.</p>

<p class="mb-6">O <strong>Art. 20 da LGPD</strong> estabelece o direito do titular de solicitar revisão de decisões tomadas unicamente com base em tratamento automatizado. Para SaMDs que produzem saídas diagnósticas ou terapêuticas sem intervenção humana, isso representa um requisito de design: o sistema precisa ser construído para viabilizar essa revisão, o que reforça a necessidade de explicabilidade dos algoritmos.</p>

<p class="mb-6">Além disso, o <strong>PL 2338/2023 — Marco Legal da IA</strong> classifica sistemas de IA aplicados à saúde como de <em>alto risco</em>, impondo obrigações adicionais de transparência, registro de logs, avaliação de impacto e supervisão humana. O alinhamento com esse projeto de lei — que caminha para aprovação — deve ser parte do planejamento regulatório de qualquer novo SaMD.</p>

<h2>Normas Técnicas Essenciais para Desenvolvimento de SaMD</h2>

<p class="mb-6">O desenvolvimento de um SaMD aprovável exige conformidade com um conjunto de normas técnicas internacionais. As principais são:</p>

<table class="mb-6 w-full border-collapse text-sm">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 px-4 py-2 text-left">Norma</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Escopo</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Aplicação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2"><strong>IEC 62304</strong></td>
      <td class="border border-gray-300 px-4 py-2">Ciclo de vida de software médico</td>
      <td class="border border-gray-300 px-4 py-2">Obrigatória para SaMD Classes II–IV</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border border-gray-300 px-4 py-2"><strong>IEC 82304-1</strong></td>
      <td class="border border-gray-300 px-4 py-2">Segurança de produtos de software de saúde</td>
      <td class="border border-gray-300 px-4 py-2">Complementar à IEC 62304, foco em app independente</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2"><strong>ISO 14971</strong></td>
      <td class="border border-gray-300 px-4 py-2">Gerenciamento de riscos</td>
      <td class="border border-gray-300 px-4 py-2">Exigida em todas as classes, inclui riscos de IA</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border border-gray-300 px-4 py-2"><strong>ISO 13485</strong></td>
      <td class="border border-gray-300 px-4 py-2">Sistema de gestão da qualidade</td>
      <td class="border border-gray-300 px-4 py-2">Base para o CBPF exigido nas classes III–IV</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2"><strong>IEC 81001-5-1</strong></td>
      <td class="border border-gray-300 px-4 py-2">Cibersegurança em software de saúde</td>
      <td class="border border-gray-300 px-4 py-2">Crescente exigência em mercados globais</td>
    </tr>
  </tbody>
</table>

<p class="mb-6">Para um panorama completo das normas aplicáveis ao setor, acesse nosso artigo sobre <a href="/artigos/normas-tecnicas-engenharia-biomedica">normas técnicas em engenharia biomédica</a>.</p>

<h2>DTx: Terapêuticas Digitais — A Próxima Fronteira</h2>

<p class="mb-6">As <strong>Terapêuticas Digitais (DTx)</strong> representam uma subclasse de SaMD ainda mais desafiadora do ponto de vista regulatório: são softwares que entregam intervenções terapêuticas baseadas em evidências diretamente ao paciente, sem necessariamente envolver um profissional de saúde como intermediário. Exemplos incluem aplicativos para tratamento de insônia (como o Somryst, aprovado pelo FDA), aplicativos de reabilitação cognitiva e programas digitais para dependência química.</p>

<p class="mb-6">No Brasil, as DTx ainda carecem de um caminho regulatório claro. A RDC 657/2022 cobre o aspecto de segurança e eficácia como SaMD, mas questões como reembolso pelo SUS, prescrição digital e integração com planos de saúde ainda não têm regulamentação consolidada. É um espaço de alta oportunidade e, simultaneamente, de alta incerteza regulatória.</p>

<p class="mb-6">Veja como as tendências emergentes, incluindo DTx, estão moldando o futuro da área em nosso artigo sobre <a href="/artigos/tendencias-futuro-engenharia-biomedica">tendências e futuro da engenharia biomédica</a>.</p>

<h2>Mercado de Saúde Digital no Brasil: Oportunidade e Desafio</h2>

<p class="mb-6">O mercado de saúde digital no Brasil foi avaliado em <strong>US\$ 6,35 bilhões</strong> e cresce a uma taxa anual composta (CAGR) de aproximadamente 23%, impulsionado pela pandemia de COVID-19, pelo avanço da telemedicina regulada e pelo crescente investimento em startups de healthtech. Esse crescimento cria uma pressão direta sobre a capacidade regulatória da ANVISA e sobre a formação de engenheiros biomédicos com expertise em regulação de software.</p>

<p class="mb-6">O sandbox regulatório — mecanismo que permite testar produtos inovadores em ambiente controlado antes do registro formal — ainda está em fase incipiente na ANVISA, ao contrário do que ocorre na MHRA britânica e na própria FDA. A expectativa do setor é que a revisão da RDC 657 inclua um programa estruturado de sandbox para SaMD, reduzindo o tempo de aprovação para produtos de baixo risco e estimulando a inovação nacional.</p>

<h2>Perguntas Frequentes sobre SaMD</h2>

<h3>Um aplicativo de calculadora de dose de medicamento é SaMD?</h3>
<p class="mb-6">Depende da finalidade declarada. Se o aplicativo apenas exibe uma fórmula de cálculo sem interpretar o resultado ou recomendar conduta clínica, pode ser considerado uma ferramenta de referência não regulada. Se ele calcula a dose individualizada com base em parâmetros do paciente e recomenda a dose específica ao prescritor, passa a ser SaMD — provavelmente Classe II ou III, dependendo da gravidade da medicação envolvida.</p>

<h3>A ANVISA exige estudos clínicos para aprovar SaMD?</h3>
<p class="mb-6">Para classes I e II, evidências clínicas podem ser baseadas em literatura científica existente e dados de desempenho do software. Para classes III e IV, a ANVISA exige estudos clínicos com metodologia robusta — podendo ser estudos retrospectivos em bases de dados reais ou prospectivos — que demonstrem segurança e desempenho clínico do algoritmo no contexto de uso pretendido.</p>

<h3>Como tratar atualizações de algoritmo de IA após a aprovação?</h3>
<p class="mb-6">Atualmente, qualquer alteração significativa em um SaMD aprovado exige nova submissão à ANVISA. O conceito de PCCP — Predetermined Change Control Plan — em discussão na revisão da RDC 657 permitiria ao fabricante descrever, antecipadamente, as mudanças esperadas no algoritmo e os critérios para validá-las sem precisar de uma nova aprovação a cada atualização, desde que dentro dos limites pré-definidos e aprovados.</p>

<h3>Qual é a diferença entre SaMD e software de bem-estar (wellness)?</h3>
<p class="mb-6">Software de bem-estar não possui finalidade médica declarada — monitora passos, sono ou nutrição sem vincular os dados a diagnóstico ou tratamento de condições de saúde. A linha divisória é a <em>intended use</em> (finalidade de uso): se o fabricante declara ou implica finalidade diagnóstica, terapêutica ou de monitoramento de condição médica, o software é SaMD e está sujeito à regulação. A ANVISA avalia tanto a bula/rotulagem quanto o material de marketing para determinar a finalidade real.</p>

<h3>Uma startup sem CBPF pode vender SaMD Classe III no Brasil?</h3>
<p class="mb-6">Não. O CBPF é pré-requisito para registro de dispositivos das classes III e IV. Uma startup pode, entretanto, contratar um fabricante parceiro que possua o CBPF — o chamado "modelo de contrato de fabricação" — ou iniciar o processo de obtenção do certificado paralelamente ao desenvolvimento do produto. O CBPF é auditado pela ANVISA e tem validade de três anos, exigindo manutenção contínua do sistema de qualidade.</p>

<hr class="my-8 border-gray-200">

<p class="mb-6">A regulação de SaMD no Brasil está em rápida evolução. A RDC 657/2022 estabeleceu as bases, mas a revisão em curso e o avanço do Marco Legal da IA indicam que o ambiente regulatório continuará se transformando nos próximos anos. Para engenheiros biomédicos e empreendedores de healthtech, dominar essa estrutura é uma vantagem competitiva real — e uma responsabilidade ética fundamental, dado o impacto direto desses produtos na segurança dos pacientes.</p>

<p class="mb-6">Para continuar aprofundando seu conhecimento em regulação e inovação em saúde, explore o <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a> — um recurso completo para profissionais e estudantes da área.</p>

<h2>Referências e Recursos Externos</h2>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><a href="https://www.gov.br/anvisa" target="_blank" rel="noopener noreferrer">ANVISA — Agência Nacional de Vigilância Sanitária</a>: portal oficial com RDC 657/2022, guias de submissão e consultas públicas sobre SaMD.</li>
  <li><a href="https://www.fda.gov/medical-devices" target="_blank" rel="noopener noreferrer">FDA — Medical Devices</a>: banco de dados de dispositivos autorizados, guidance documents sobre IA/ML e o AI Action Plan.</li>
  <li><a href="https://www.aami.org" target="_blank" rel="noopener noreferrer">AAMI — Association for the Advancement of Medical Instrumentation</a>: normas e recursos técnicos, incluindo publicações sobre IEC 62304 e cibersegurança em software médico.</li>
</ul>
`,
};
