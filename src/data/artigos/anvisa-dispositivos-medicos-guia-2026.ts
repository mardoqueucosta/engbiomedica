import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'ANVISA e Dispositivos Médicos: Guia Completo de Regulamentação [Atualizado 2026]',
  resumo: 'Guia completo sobre regulamentação de dispositivos médicos pela ANVISA: classes de risco I-IV, fluxo de registro, documentação exigida, prazos, custos e as principais RDCs de 2022 a 2025. Conteúdo atualizado para profissionais de regulatory affairs, startups e fabricantes.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '13 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>O Brasil é um dos dez maiores mercados de dispositivos médicos do mundo</strong>, movimentando entre US$ 15 e US$ 16 bilhões anuais, com projeção de crescimento de 6 a 7% ao ano até 2030. Esse setor emprega mais de 85 mil pessoas diretamente e conta com mais de 1.200 fabricantes nacionais. Para operar nesse mercado, fabricantes, importadores e representantes precisam navegar por um marco regulatório que passou por profunda reformulação entre 2022 e 2025, liderada pela ANVISA com alinhamento crescente às normas internacionais.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>Marco Regulatório Reformulado: As Principais RDCs</h2>

<p>O arcabouço regulatório brasileiro para dispositivos médicos foi completamente renovado a partir de 2022. A pedra angular dessa reforma é a <strong>RDC 751/2022</strong>, que substituiu a RDC 185/2001 e trouxe 22 regras de classificação alinhadas ao regulamento europeu EU MDR. Além dela, um conjunto de resoluções complementares estrutura todo o ciclo de vida regulatório dos produtos.</p>

<table>
  <thead>
    <tr>
      <th>RDC</th>
      <th>Ano</th>
      <th>Tema</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RDC 751</td>
      <td>2022</td>
      <td>Norma-pilar: classificação e registro de dispositivos médicos</td>
    </tr>
    <tr>
      <td>RDC 665</td>
      <td>2022</td>
      <td>Boas Práticas de Fabricação (BPF), alinhamento à ISO 13485</td>
    </tr>
    <tr>
      <td>RDC 657</td>
      <td>2022</td>
      <td>SaMD — Software como Dispositivo Médico</td>
    </tr>
    <tr>
      <td>RDC 830</td>
      <td>2023</td>
      <td>Dispositivos para diagnóstico in vitro (IVDs)</td>
    </tr>
    <tr>
      <td>RDC 837</td>
      <td>2023</td>
      <td>Investigações clínicas com dispositivos médicos</td>
    </tr>
    <tr>
      <td>RDC 848</td>
      <td>2024</td>
      <td>Requisitos Essenciais de Segurança e Desempenho (RESD)</td>
    </tr>
    <tr>
      <td>RDC 850</td>
      <td>2024</td>
      <td>CBPF via MDSAP: validade ampliada de 2 para 4 anos</td>
    </tr>
    <tr>
      <td>RDC 982</td>
      <td>2025</td>
      <td>Inteligência artificial na certificação de BPF</td>
    </tr>
  </tbody>
</table>

<p>Esse conjunto normativo posiciona o Brasil como uma das agências regulatórias mais estruturadas para dispositivos médicos entre países em desenvolvimento, com crescente harmonização com FDA, Health Canada, TGA e MHLW.</p>

<h2>As 4 Classes de Risco e as 22 Regras de Classificação</h2>

<p>A <a href="/artigos/rdc-751-2022-classificacao-registro">RDC 751/2022</a> organiza os dispositivos médicos em quatro classes de risco, determinadas pela aplicação de 22 regras de classificação distribuídas em quatro grupos temáticos.</p>

<h3>Grupos de regras de classificação</h3>

<ul>
  <li><strong>Regras 1 a 4:</strong> dispositivos não invasivos (contato com pele, mucosas, feridas)</li>
  <li><strong>Regras 5 a 8:</strong> dispositivos invasivos (cirúrgicos, de longa duração, implantáveis)</li>
  <li><strong>Regras 9 a 13:</strong> dispositivos ativos (elétricos, emissão de radiação, diagnóstico ativo)</li>
  <li><strong>Regras 14 a 22:</strong> regras especiais (contracepção, desinfecção, nanomateriais, SaMD, IA)</li>
</ul>

<p>Três regras especiais merecem atenção específica para o contexto atual:</p>
<figure>
<img src="/artigos/anvisa-dispositivos-medicos-guia-2026/image-1.webp" alt="Diagrama das 4 classes de risco de dispositivos médicos ANVISA com exemplos por categoria regulatória brasileira" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Sistema de classificação de risco da ANVISA: das 22 regras da RDC 751/2022 às quatro classes que determinam a via regulatória de cada dispositivo médico</figcaption>
</figure>


<ul>
  <li><strong>Regra 11 (SaMD):</strong> classifica softwares como dispositivos médicos em Classes I a IV conforme a gravidade do dano potencial ao paciente</li>
  <li><strong>Regra 19 (Nanomateriais):</strong> determina classificação em Classe III ou IV para dispositivos que utilizam nanotecnologia</li>
  <li><strong>Regra 22:</strong> aplica-se a dispositivos terapêuticos ativos com diagnóstico integrado, como sistemas combinados de monitoramento e terapia</li>
</ul>

<h3>Tabela resumo das classes</h3>

<table>
  <thead>
    <tr>
      <th>Classe</th>
      <th>Nível de Risco</th>
      <th>Via Regulatória</th>
      <th>Validade</th>
      <th>CBPF Obrigatório</th>
      <th>Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>I</strong></td>
      <td>Baixo</td>
      <td>Notificação</td>
      <td>Indefinida</td>
      <td>Não</td>
      <td>Instrumentos cirúrgicos simples, luvas de procedimento</td>
    </tr>
    <tr>
      <td><strong>II</strong></td>
      <td>Médio</td>
      <td>Notificação</td>
      <td>Indefinida</td>
      <td>Não</td>
      <td>Bombas de infusão, cadeiras de rodas, curativos avançados</td>
    </tr>
    <tr>
      <td><strong>III</strong></td>
      <td>Alto</td>
      <td>Registro</td>
      <td>10 anos</td>
      <td>Sim</td>
      <td>Dialisadores, ventiladores pulmonares, implantes ortopédicos</td>
    </tr>
    <tr>
      <td><strong>IV</strong></td>
      <td>Máximo</td>
      <td>Registro</td>
      <td>10 anos</td>
      <td>Sim</td>
      <td>Stents coronarianos, marca-passos, próteses articulares</td>
    </tr>
  </tbody>
</table>

<p>A classificação correta é o ponto de partida de toda a estratégia regulatória. Um erro de classificação — mesmo que involuntário — pode resultar em embargo do produto, multas e necessidade de refazer todo o processo de registro.</p>

<h2>Fluxo de Registro: Do Protocolo à Concessão</h2>

<p>O processo regulatório para dispositivos médicos no Brasil se divide em duas vias principais: <strong>notificação</strong> (Classes I e II) e <strong>registro</strong> (Classes III e IV). Cada via tem requisitos, prazos e custos distintos.</p>

<h3>Via de Notificação (Classes I e II)</h3>

<p>A notificação é um processo simplificado, adequado para produtos de menor risco. O fabricante ou importador cadastra o produto no sistema DATAVISA da ANVISA, comprova conformidade com os requisitos técnicos e obtém a notificação, que tem validade por prazo indefinido enquanto o produto mantiver conformidade regulatória.</p>
<figure>
<img src="/artigos/anvisa-dispositivos-medicos-guia-2026/image-3.webp" alt="Fluxograma do processo de registro de dispositivos médicos na ANVISA com etapas de notificação e registro por classe de risco" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Fluxo regulatório ANVISA para dispositivos médicos: a escolha entre notificação e registro depende da classe de risco determinada pelas 22 regras da RDC 751/2022</figcaption>
</figure>


<p>O prazo estimado para conclusão é de aproximadamente <strong>30 dias corridos</strong>, e o custo é de cerca de <strong>R$ 1.406</strong> em taxas ANVISA (Taxa de Fiscalização de Vigilância Sanitária — TFVS).</p>

<h3>Via de Registro (Classes III e IV)</h3>

<p>O registro é o processo mais rigoroso, exigido para produtos de alto e máximo risco. Inclui análise técnica detalhada pela ANVISA, exigência de Certificado de Boas Práticas de Fabricação (CBPF) e, para determinadas categorias, dados clínicos do produto.</p>

<p>Os documentos centralmente exigidos incluem:</p>

<ul>
  <li>Dossiê técnico completo (sumário técnico, especificações, rotulagem)</li>
  <li>Relatório de avaliação de desempenho clínico ou equivalência técnica</li>
  <li>Relatório de gestão de riscos (ISO 14971)</li>
  <li>Certificado de Boas Práticas de Fabricação (CBPF) válido</li>
  <li>Autorização de Funcionamento de Empresa (AFE) para fabricantes nacionais</li>
  <li>Laudos de ensaios de segurança e desempenho conforme normas aplicáveis</li>
</ul>

<p>Os prazos e custos para registro variam conforme a classe:</p>

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Classe III</th>
      <th>Classe IV</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Prazo estimado</td>
      <td>4 a 12 meses</td>
      <td>9 a 20 meses</td>
    </tr>
    <tr>
      <td>Taxa ANVISA (TFVS)</td>
      <td>R$ 8.510 a R$ 14.800</td>
      <td>R$ 14.800 a R$ 19.856</td>
    </tr>
    <tr>
      <td>CBPF estrangeiro</td>
      <td>~R$ 72.805</td>
      <td>~R$ 72.805</td>
    </tr>
    <tr>
      <td>Validade do registro</td>
      <td>10 anos</td>
      <td>10 anos</td>
    </tr>
  </tbody>
</table>

<p>Para mais detalhes sobre o processo passo a passo, consulte o artigo <a href="/artigos/como-registrar-dispositivo-medico-anvisa">Como Registrar um Dispositivo Médico na ANVISA</a>.</p>

<h2>Via AREE: Análise Otimizada para Produtos Aprovados Internacionalmente</h2>

<p>A <strong>Via AREE (Avaliação de Registro em Economias Equivalentes)</strong>, estabelecida pela RDC 741/2022 e atualizada pela IN 290/2024, permite que fabricantes de dispositivos Classe III e IV já aprovados em mercados de referência obtenham registro no Brasil com análise regulatória otimizada.</p>

<p>Os mercados reconhecidos como economias equivalentes são:</p>

<ul>
  <li><strong>FDA</strong> (Estados Unidos) — para produtos com 510(k) ou PMA aprovados</li>
  <li><strong>Health Canada</strong> (Canadá)</li>
  <li><strong>TGA</strong> (Austrália)</li>
  <li><strong>MHLW</strong> (Japão)</li>
</ul>

<p>A principal vantagem da Via AREE é a <strong>redução de aproximadamente 30% no tempo de análise</strong>, já que a ANVISA reconhece parcialmente a avaliação técnica realizada pela agência de origem, focando sua análise nos aspectos específicos do mercado brasileiro (rotulagem em português, conformidade com normas locais, dados de desempenho pós-mercado).</p>

<p>Para fabricantes com aprovação prévia em um desses mercados, a Via AREE deve ser considerada prioritariamente na estratégia regulatória brasileira.</p>

<h2>Boas Práticas de Fabricação: CBPF e MDSAP</h2>

<p>O <strong>Certificado de Boas Práticas de Fabricação (CBPF)</strong> é obrigatório para dispositivos Classe III e IV. Ele atesta que o fabricante opera conforme os requisitos da <a href="/artigos/rdc-665-2022-boas-praticas">RDC 665/2022</a>, que está alinhada à norma internacional <strong>ISO 13485</strong>.</p>

<p>Existem duas vias para obtenção do CBPF:</p>
<figure>
<img src="/artigos/anvisa-dispositivos-medicos-guia-2026/image-2.webp" alt="Auditores de boas práticas de fabricação inspecionando linha de produção de dispositivos médicos em ambiente industrial regulamentado" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Auditoria de Boas Práticas de Fabricação: o CBPF obtido via MDSAP tem validade de 4 anos e é aceito por Brasil, EUA, Canadá, Austrália e Japão</figcaption>
</figure>


<h3>Via Direta — Inspeção ANVISA</h3>

<p>O fabricante solicita inspeção à ANVISA, que realiza auditoria presencial no local de fabricação. O CBPF emitido tem validade de <strong>2 anos</strong>. Essa via é obrigatória para fabricantes nacionais e opcional para estrangeiros.</p>

<h3>Via MDSAP — Medical Device Single Audit Program</h3>

<p>O MDSAP é um programa de auditoria única reconhecido por cinco países: Brasil, Estados Unidos, Canadá, Austrália e Japão. A auditoria é realizada por <strong>Organizações Auditoras (OAs) credenciadas</strong> pelo programa, e o relatório resultante é aceito pela ANVISA como base para emissão do CBPF, com validade ampliada para <strong>4 anos</strong> (conforme RDC 850/2024).</p>

<p>A adoção do MDSAP por fabricantes que operam no Brasil cresceu de forma expressiva: de apenas 4,7% em 2017 para <strong>59,1% em 2023</strong>, refletindo as vantagens operacionais e de custo do modelo de auditoria integrada. Em 2023, foram emitidos 659 CBPFs por meio do MDSAP.</p>

<p>Adicionalmente, a <strong>RDC 982/2025</strong> introduziu o uso de inteligência artificial nos processos de certificação de BPF, sinalizando a modernização contínua do sistema de vigilância de boas práticas.</p>

<h2>SaMD: Software como Dispositivo Médico</h2>

<p>A <a href="/artigos/samd-software-dispositivo-medico">RDC 657/2022</a> estabeleceu o primeiro marco regulatório brasileiro dedicado exclusivamente a <strong>Software como Dispositivo Médico (SaMD)</strong>. Essa regulamentação é fundamental para startups de healthtech, desenvolvedores de aplicativos clínicos e fornecedores de soluções de inteligência artificial em saúde.</p>

<p>A classificação de SaMD segue a <strong>Regra 11</strong> da RDC 751/2022, com quatro níveis baseados na gravidade do dano potencial ao paciente e no impacto da informação gerada pelo software na decisão clínica:</p>

<table>
  <thead>
    <tr>
      <th>Classe SaMD</th>
      <th>Situação Clínica</th>
      <th>Significado da Informação</th>
      <th>Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>I</strong></td>
      <td>Não grave / rotineira</td>
      <td>Informar o clínico</td>
      <td>Apps de registro de sintomas, calculadoras de IMC</td>
    </tr>
    <tr>
      <td><strong>II</strong></td>
      <td>Grave ou rotineira</td>
      <td>Auxiliar na decisão clínica</td>
      <td>Software de triagem hospitalar, monitoramento remoto</td>
    </tr>
    <tr>
      <td><strong>III</strong></td>
      <td>Grave</td>
      <td>Orientar o diagnóstico ou tratamento</td>
      <td>Detecção de arritmias por IA, diagnóstico por imagem assistido</td>
    </tr>
    <tr>
      <td><strong>IV</strong></td>
      <td>Crítica ou grave</td>
      <td>Decisão autônoma de tratamento</td>
      <td>Software de dosagem automatizada em UTI, sistemas de cirurgia robótica</td>
    </tr>
  </tbody>
</table>

<p>O mercado brasileiro já conta com aproximadamente <strong>500 softwares registrados como SaMD</strong>, dos quais cerca de 100 incorporam algum componente de inteligência artificial. A ANVISA está em processo de revisão da RDC 657/2022 para incorporar conceitos específicos de IA/ML, incluindo <em>software adaptável</em>, <em>Predetermined Change Control Plan (PCCP)</em> e requisitos de cibersegurança baseados na <strong>IEC 81001-5-1</strong>.</p>

<h2>Certificação INMETRO para Equipamentos Eletromédicos</h2>

<p>Além do registro ANVISA, equipamentos eletromédicos estão sujeitos à certificação compulsória do <strong>INMETRO</strong>, regulada pela Portaria 384/2020. Essa exigência se aplica a equipamentos que utilizam energia elétrica e têm contato direto ou indireto com o paciente.</p>

<p>O processo segue o <strong>Modelo 5</strong>, que combina:</p>

<ul>
  <li>Ensaios de laboratório acreditado conforme <strong>IEC 60601-1</strong> (segurança básica de equipamentos eletromédicos)</li>
  <li>Auditorias periódicas do sistema de qualidade do fabricante</li>
  <li>Vigilância de mercado contínua</li>
</ul>

<p>O certificado INMETRO tem validade de <strong>5 anos</strong> e deve ser mantido em conjunto com o registro ANVISA para comercialização legal no território nacional. Fabricantes devem planejar essas duas certificações de forma integrada, pois os ensaios exigidos frequentemente se sobrepõem.</p>

<h2>Tecnovigilância e Pós-Mercado</h2>

<p>O sistema de <a href="/artigos/tecnovigilancia-brasil">tecnovigilância brasileiro</a> é operado por meio de duas plataformas principais: o <strong>NOTIVISA</strong> (Sistema de Notificações em Vigilância Sanitária) e o <strong>SISTEC</strong> (Sistema de Informações e Notificações em Tecnovigilância). Juntos, esses sistemas registram mais de <strong>5.060 alertas</strong> ativos de dispositivos médicos.</p>

<p>Os prazos para notificação de eventos adversos são determinados pela gravidade:</p>

<table>
  <thead>
    <tr>
      <th>Tipo de Evento</th>
      <th>Prazo de Notificação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Óbito do paciente</td>
      <td>72 horas</td>
    </tr>
    <tr>
      <td>Evento grave (hospitalização, sequela)</td>
      <td>10 dias corridos</td>
    </tr>
    <tr>
      <td>Mau funcionamento sem dano grave</td>
      <td>30 dias corridos</td>
    </tr>
  </tbody>
</table>

<p>O não cumprimento dos prazos de notificação pode resultar em sanções administrativas, incluindo advertências, multas e suspensão do registro do produto. A estruturação de um processo interno robusto de vigilância pós-comercialização é, portanto, parte indissociável da estratégia regulatória.</p>

<h2>Normas Técnicas Aplicáveis</h2>

<p>O cumprimento das normas técnicas internacionais é a base para demonstração de conformidade com os Requisitos Essenciais de Segurança e Desempenho (RESD) da RDC 848/2024. As principais normas aplicáveis ao setor são:</p>

<table>
  <thead>
    <tr>
      <th>Norma</th>
      <th>Escopo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>IEC 60601-1</strong></td>
      <td>Segurança básica e desempenho essencial de equipamentos eletromédicos</td>
    </tr>
    <tr>
      <td><strong>ISO 13485</strong></td>
      <td>Sistemas de gestão da qualidade para dispositivos médicos</td>
    </tr>
    <tr>
      <td><strong>ISO 14971</strong></td>
      <td>Gestão de riscos para dispositivos médicos</td>
    </tr>
    <tr>
      <td><strong>IEC 62304</strong></td>
      <td>Ciclo de vida de software para dispositivos médicos</td>
    </tr>
    <tr>
      <td><strong>IEC 62366-1</strong></td>
      <td>Engenharia de usabilidade para dispositivos médicos</td>
    </tr>
    <tr>
      <td><strong>IEC 81001-5-1</strong></td>
      <td>Cibersegurança para software de saúde e dispositivos médicos</td>
    </tr>
  </tbody>
</table>

<p>A cibersegurança merece destaque especial: a RDC 848/2024 incluiu requisitos explícitos de proteção contra ameaças cibernéticas, especialmente relevantes para dispositivos conectados (IoMT — Internet of Medical Things) e SaMDs com comunicação de rede.</p>

<h2>Brasil no Cenário Regulatório Internacional</h2>

<p>O Brasil é membro fundador do <strong>IMDRF (International Medical Device Regulators Forum)</strong> desde 2011, e participa do MDSAP junto a EUA, Canadá, Austrália e Japão. Essa posição confere ao país um papel ativo na harmonização regulatória global.</p>

<p>Uma comparação objetiva com outros mercados relevantes ajuda a dimensionar a competitividade regulatória brasileira para o acesso ao <a href="/artigos/mercado-dispositivos-medicos-brasil-dados">mercado brasileiro</a>:</p>

<table>
  <thead>
    <tr>
      <th>Critério</th>
      <th>ANVISA (Brasil)</th>
      <th>FDA (EUA)</th>
      <th>EU MDR (Europa)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Custo máximo para alto risco</td>
      <td>~R$ 90 mil</td>
      <td>~US$ 350 mil (PMA)</td>
      <td>€ 50-150 mil (ON)</td>
    </tr>
    <tr>
      <td>Prazo para alto risco</td>
      <td>9 a 20 meses</td>
      <td>12 a 36 meses</td>
      <td>12 a 24 meses</td>
    </tr>
    <tr>
      <td>Reconhecimento mútuo</td>
      <td>Via AREE (4 mercados)</td>
      <td>Limitado</td>
      <td>Organismos notificados</td>
    </tr>
    <tr>
      <td>Alinhamento às normas ISO/IEC</td>
      <td>Alto (pós-2022)</td>
      <td>Parcial</td>
      <td>Total (EU MDR 2017/745)</td>
    </tr>
  </tbody>
</table>

<p>Para fabricantes com aprovação FDA, a combinação da Via AREE com o MDSAP representa o caminho mais eficiente para o mercado brasileiro, reduzindo tanto o tempo quanto os custos regulatórios.</p>

<h2>Tendências e Inovações Regulatórias para 2026 e Além</h2>

<p>O ambiente regulatório brasileiro para dispositivos médicos segue em evolução acelerada. As principais tendências a monitorar são:</p>

<ul>
  <li><strong>UDI/SIUD:</strong> o cronograma de implantação do Sistema de Identificação Única de Dispositivos está em vigor com datas por classe entre 2025 e 2028, seguindo o modelo do UDI europeu e americano</li>
  <li><strong>Impressão 3D:</strong> regulamentação específica em desenvolvimento para dispositivos fabricados por manufatura aditiva, com foco em implantes personalizados</li>
  <li><strong>Sandbox Regulatório ANVISA:</strong> programa de ambiente controlado para inovações tecnológicas, permitindo testes com supervisão regulatória antes da submissão formal</li>
  <li><strong>Marco Legal da IA (PL 2.338/2023):</strong> em tramitação no Congresso, com impacto direto sobre SaMDs com inteligência artificial e responsabilidade civil</li>
  <li><strong>IoMT e cibersegurança:</strong> exigências crescentes da RDC 848/2024 para dispositivos conectados à internet ou a redes hospitalares</li>
</ul>

<p>Fabricantes e startups que anteciparem esses requisitos em suas estratégias de desenvolvimento de produto terão vantagem competitiva significativa no momento da submissão regulatória.</p>

<h2>Perguntas Frequentes</h2>

<h3>Qual é a diferença entre notificação e registro na ANVISA para dispositivos médicos?</h3>

<p>Notificação é o processo aplicável a dispositivos de Classe I e II (risco baixo e médio). É mais simples, mais rápido (cerca de 30 dias) e tem custo menor (aproximadamente R$ 1.406). Registro é exigido para dispositivos de Classe III e IV (alto e máximo risco), exige CBPF obrigatório, dossiê técnico completo, e tem prazos de 4 a 20 meses e custos significativamente maiores. O registro tem validade de 10 anos, enquanto a notificação é por prazo indefinido.</p>

<h3>O que é o CBPF e quem é obrigado a tê-lo?</h3>

<p>O Certificado de Boas Práticas de Fabricação (CBPF) é o documento que atesta que o fabricante opera conforme os requisitos da RDC 665/2022 e da ISO 13485. É obrigatório para todos os fabricantes — nacionais e estrangeiros — de dispositivos médicos Classe III e IV. Pode ser obtido por inspeção direta da ANVISA (validade 2 anos) ou por auditoria MDSAP reconhecida (validade 4 anos, conforme RDC 850/2024).</p>

<h3>Um aplicativo de saúde precisa de registro na ANVISA?</h3>

<p>Depende da finalidade do software. Se o aplicativo for utilizado para diagnóstico, tratamento, monitoramento ou prevenção de doenças, ele provavelmente se enquadra na definição de SaMD da RDC 657/2022 e precisa de registro ou notificação conforme sua classe de risco (determinada pela Regra 11 da RDC 751/2022). Apps puramente educacionais ou de bem-estar sem finalidade diagnóstica ou terapêutica geralmente ficam fora do escopo regulatório. Em caso de dúvida, a consulta prévia à ANVISA é recomendada.</p>

<h3>Como a Via AREE pode acelerar o registro no Brasil para fabricantes estrangeiros?</h3>

<p>A Via AREE (RDC 741/2022, atualizada pela IN 290/2024) permite que fabricantes com aprovação prévia pela FDA, Health Canada, TGA ou MHLW utilizem a avaliação técnica daquelas agências como base para o registro brasileiro, reduzindo aproximadamente 30% do tempo de análise pela ANVISA. O fabricante ainda precisa apresentar documentação complementar (rotulagem em português, dados de vigilância pós-mercado locais), mas evita a análise técnica completa do zero.</p>

<h3>Quais são os prazos obrigatórios para notificar eventos adversos à ANVISA?</h3>

<p>Os prazos são determinados pela gravidade do evento: óbito deve ser notificado em até 72 horas; eventos graves (hospitalização não prevista, sequelas permanentes) em até 10 dias corridos; e mau funcionamento sem dano grave em até 30 dias corridos. O canal oficial para essas notificações é o sistema NOTIVISA da ANVISA. Fabricantes e importadores são igualmente responsáveis pelas notificações de tecnovigilância.</p>

<hr>

<p>Este guia é atualizado periodicamente para refletir as mudanças no marco regulatório da ANVISA. Para aprofundamento em temas específicos, consulte os artigos relacionados: <a href="/artigos/rdc-751-2022-classificacao-registro">RDC 751/2022 — Classificação e Registro</a>, <a href="/artigos/rdc-665-2022-boas-praticas">RDC 665/2022 — Boas Práticas de Fabricação</a> e <a href="/artigos/samd-software-dispositivo-medico">SaMD — Software como Dispositivo Médico</a>. Para dados de mercado atualizados, veja <a href="/artigos/mercado-dispositivos-medicos-brasil-dados">Mercado de Dispositivos Médicos no Brasil</a>. Fontes oficiais: <a href="https://www.gov.br/anvisa/pt-br/setores-regulados/tecnologia-medica/dispositivos-medicos" target="_blank" rel="noopener noreferrer">Portal ANVISA — Dispositivos Médicos</a>, <a href="https://www.abimo.org.br" target="_blank" rel="noopener noreferrer">ABIMO — Associação Brasileira da Indústria de Artigos e Equipamentos Médicos</a> e <a href="https://www.imdrf.org" target="_blank" rel="noopener noreferrer">IMDRF — International Medical Device Regulators Forum</a>.</p>

<p>Conteúdo elaborado pela equipe editorial do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>, com base nas publicações oficiais da ANVISA e nas normas ISO/IEC aplicáveis. Atualizado em fevereiro de 2026.</p>
`,
};
