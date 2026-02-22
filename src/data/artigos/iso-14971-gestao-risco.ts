import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'ISO 14971: Gestão de Risco para Dispositivos Médicos Explicada',
  resumo: 'Guia técnico completo sobre a ISO 14971:2019 — o padrão internacional de gestão de risco para dispositivos médicos. Entenda o processo passo a passo, FMEA, análise de benefício-risco, rastreabilidade e integração com ANVISA, FDA e marcação CE.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '14 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6">
  A <strong>ISO 14971</strong> é o padrão internacional que define os requisitos para a gestão de risco de dispositivos médicos. Em sua terceira edição (2019), a norma estabelece um processo sistemático e documentado que os fabricantes devem seguir para identificar perigos, estimar e avaliar riscos, controlá-los e monitorar a eficácia dessas medidas ao longo de todo o ciclo de vida do produto. Reconhecida por reguladores como <strong>ANVISA, FDA, autoridades europeias (MDR/IVDR) e mais de 30 países</strong>, a ISO 14971 é requisito fundamental para qualquer empresa que desenvolva, fabrique ou comercialize dispositivos médicos no mercado global.
</p>

<p>
  Se você ainda não leu nosso guia sobre <a href="/artigos/iso-13485-dispositivos-medicos">ISO 13485 e o sistema de gestão da qualidade para dispositivos médicos</a>, recomendamos começar por ele — a gestão de risco segundo a ISO 14971 é um subsistema crítico dentro do SGQ exigido pela ISO 13485. Neste artigo, vamos detalhar o processo completo, as ferramentas analíticas como FMEA e FTA, e como estruturar a documentação de rastreabilidade que os auditores e reguladores vão verificar.
</p>

<h2>O que é a ISO 14971 e por que ela é obrigatória?</h2>

<p>
  A ISO 14971 não é uma norma de produto — ela não especifica qual nível de risco é aceitável para cada tipo de dispositivo. Em vez disso, ela define <strong>o processo</strong> que o fabricante deve seguir para tomar decisões fundamentadas sobre riscos, documentá-las e revisá-las continuamente. Isso é uma distinção fundamental: a norma exige que a empresa demonstre como chegou às suas conclusões, não apenas que o produto é seguro.
</p>

<p>
  A evolução histórica da norma ilustra bem seu crescimento em escopo:
</p>

<table>
  <thead>
    <tr>
      <th>Versão</th>
      <th>Ano</th>
      <th>Principal mudança</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EN 1441</td>
      <td>1997</td>
      <td>Primeira norma europeia de gestão de risco para DM</td>
    </tr>
    <tr>
      <td>ISO 14971:2000</td>
      <td>2000</td>
      <td>Primeira edição internacional</td>
    </tr>
    <tr>
      <td>ISO 14971:2007</td>
      <td>2007</td>
      <td>Expansão do escopo; reconhecimento global ampliado</td>
    </tr>
    <tr>
      <td>ISO 14971:2019</td>
      <td>2019</td>
      <td>Análise benefício-risco; cybersegurança; AFAP; "estado da arte" definido</td>
    </tr>
    <tr>
      <td>Confirmação sem alterações</td>
      <td>2025</td>
      <td>Revisão periódica ISO concluída sem mudanças (março/2025)</td>
    </tr>
  </tbody>
</table>

<p>
  As principais mudanças da edição 2007 para a 2019 são relevantes para quem mantém sistemas legados: (1) a análise de <em>risco-benefício</em> foi invertida para <em>benefício-risco</em>, colocando o benefício como ponto de partida da análise; (2) o conceito ALARP (<em>As Low As Reasonably Practicable</em>) foi substituído pelo AFAP (<em>As Far As Possible</em>), alinhando-se ao princípio europeu de que o fabricante deve reduzir o risco tanto quanto possível — sem o limitante "razoavelmente"; (3) o conceito de "dano" foi expandido para incluir dano a dados, propriedade e meio ambiente, além dos tradicionais danos físicos; (4) a cybersegurança foi explicitamente incluída no escopo; e (5) o conceito de "estado da arte" (<em>state of the art</em>) foi formalmente definido, impactando a determinação do risco residual aceitável.
</p>

<h2>O Processo de Gestão de Risco segundo a ISO 14971</h2>

<p>
  A norma organiza o processo em sete elementos principais, distribuídos nas cláusulas 4 a 10. É importante entender que não se trata de um fluxo linear — as atividades são iterativas e se retroalimentam ao longo do ciclo de vida do dispositivo.
</p>

<!-- IMG_SLOT_1 -->

<h3>Cláusula 4: Plano de Gestão de Risco</h3>

<p>
  Antes de iniciar qualquer análise, o fabricante deve elaborar um <strong>Plano de Gestão de Risco</strong> específico para o dispositivo (ou família de dispositivos). O plano documenta: o escopo das atividades de gestão de risco, a atribuição de responsabilidades, os critérios de aceitabilidade de risco (incluindo critérios para riscos que serão avaliados individualmente e em conjunto), as atividades planejadas e as referências às normas e métodos que serão utilizados.
</p>
<figure>
<img src="/artigos/iso-14971-gestao-risco/image-1.webp" alt="Fluxograma do processo de gestão de risco ISO 14971:2019 com as cláusulas 4 a 10 e suas interconexões no ciclo de vida do dispositivo médico" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Processo de gestão de risco segundo a ISO 14971:2019 — do planejamento ao monitoramento pós-mercado.</figcaption>
</figure>


<p>
  A definição dos <strong>critérios de aceitabilidade de risco</strong> no plano é uma das etapas mais críticas e frequentemente mal executadas. Muitas empresas copiam critérios genéricos de modelos, sem fundamentá-los em dados clínicos, literatura científica ou benchmarking com dispositivos similares. Os auditores do MDSAP (Medical Device Single Audit Program) — cuja Tarefa 4 é dedicada à gestão de risco — e os revisores da ANVISA identificam isso rapidamente. Os critérios devem ser justificados e rastreáveis ao "estado da arte" da área médica em questão.
</p>

<h3>Cláusula 5: Análise de Risco</h3>

<p>
  A análise de risco compreende três sub-etapas: (1) uso pretendido e identificação de uso indevido razoavelmente previsível, (2) identificação de características relacionadas à segurança, e (3) identificação de perigos e situações perigosas. A norma traz no Anexo C uma lista exemplificativa de questões a considerar — como características energéticas, biológicas, ambientais, de ergonomia e de software.
</p>

<p>
  A <strong>estimativa de risco</strong> combina probabilidade e severidade. A probabilidade de ocorrência de dano é calculada como P = P1 × P2, onde P1 é a probabilidade de ocorrência da situação perigosa e P2 é a probabilidade de a situação perigosa resultar em dano. A severidade é classificada em escala que geralmente vai de desprezível (S1) a catastrófica (S5). A ISO 14971 não impõe uma escala específica — o fabricante define suas escalas no plano, mas deve justificá-las.
</p>

<h3>Cláusulas 6 e 7: Avaliação e Controle de Risco</h3>

<p>
  Após estimar o risco, a empresa avalia se ele é aceitável conforme os critérios definidos no plano. Para riscos inaceitáveis (e, no espírito do AFAP, para todos os riscos), devem ser aplicadas medidas de controle em ordem de prioridade hierárquica estrita:
</p>

<ol>
  <li><strong>Segurança inerente por design</strong>: eliminar o perigo ou reduzir o risco modificando o projeto (ex.: usar tensão elétrica mais baixa, eliminar arestas cortantes, usar material biocompatível).</li>
  <li><strong>Medidas protetivas</strong>: proteções físicas, alarmes, sistemas de redundância, fusíveis, bloqueios de segurança.</li>
  <li><strong>Informações para a segurança</strong>: rotulagem, instruções de uso (IFU), treinamento — apenas como último recurso, nunca como primeira linha de controle.</li>
</ol>

<p>
  Essa hierarquia é inegociável. Um fabricante que tenta controlar um risco grave apenas com um aviso na IFU — sem avaliar medidas de design ou proteção — terá esse ponto questionado em qualquer auditoria regulatória, seja pela ANVISA conforme a <a href="/artigos/rdc-751-2022-classificacao-registro">RDC 751/2022</a>, pelo FDA ou pelo organismo notificado europeu.
</p>

<h3>Cláusula 8: Avaliação do Risco Residual Global</h3>

<p>
  Após a implementação e verificação das medidas de controle, o fabricante avalia o <strong>risco residual</strong> — o risco que permanece após todos os controles. Se o risco residual individual for aceitável, a empresa deve então avaliar o <strong>risco residual global</strong>: a combinação de todos os riscos residuais do dispositivo. Aqui entra a análise de benefício-risco: se o risco residual global não for aceitável pelos critérios definidos, o fabricante deve demonstrar que os benefícios clínicos superam os riscos. Caso contrário, o dispositivo não pode ser comercializado.
</p>

<p>
  Esta cláusula também exige que o fabricante determine quais informações sobre o risco residual devem ser incluídas nos materiais de comunicação com o usuário (IFU, rótulo, materiais de treinamento).
</p>

<h3>Cláusula 9: Revisão da Gestão de Risco</h3>

<p>
  Antes de liberar o dispositivo para produção ou comercialização, o fabricante realiza uma revisão formal da gestão de risco para garantir que: o plano foi executado, todos os riscos foram avaliados, as medidas de controle foram verificadas, e a análise de benefício-risco global é favorável. Esta revisão é documentada no Relatório de Gestão de Risco.
</p>

<h3>Cláusula 10: Atividades de Produção e Pós-Produção</h3>

<p>
  A ISO 14971:2019 expandiu significativamente os requisitos de monitoramento pós-comercialização em relação à edição 2007. O fabricante deve estabelecer um sistema para coletar e analisar informações de dispositivos em campo — reclamações, notificações de vigilância, literatura científica, dados de registros de saúde — e retroalimentar o processo de gestão de risco quando novas informações alteram a estimativa de riscos. Isso conecta diretamente a ISO 14971 ao sistema de vigilância pós-mercado exigido pela <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">ANVISA</a> e pelo Regulamento de Dispositivos Médicos europeu (MDR 2017/745).
</p>

<h2>Estimativa de Risco: Probabilidade e Severidade</h2>

<!-- IMG_SLOT_2 -->

<p>
  A matriz de risco é a ferramenta mais visível do processo, mas sua correta calibração é frequentemente subestimada. Os cinco níveis de probabilidade típicos (adaptáveis pelo fabricante) são: Improvável (P1), Remoto (P2), Ocasional (P3), Provável (P4) e Frequente (P5). Os cinco níveis de severidade típicos são: Desprezível (S1 — sem lesão ou lesão mínima), Menor (S2 — lesão leve, reversível), Moderado (S3 — lesão grave, reversível), Crítico (S4 — lesão grave, irreversível) e Catastrófico (S5 — morte).
</p>

<table>
  <thead>
    <tr>
      <th>Probabilidade</th>
      <th>S1 Desprezível</th>
      <th>S2 Menor</th>
      <th>S3 Moderado</th>
      <th>S4 Crítico</th>
      <th>S5 Catastrófico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>P5 Frequente</td>
      <td style="background:#fbbf24">Tolerável</td>
      <td style="background:#f87171">Inaceitável</td>
      <td style="background:#f87171">Inaceitável</td>
      <td style="background:#f87171">Inaceitável</td>
      <td style="background:#f87171">Inaceitável</td>
    </tr>
    <tr>
      <td>P4 Provável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#fbbf24">Tolerável</td>
      <td style="background:#f87171">Inaceitável</td>
      <td style="background:#f87171">Inaceitável</td>
      <td style="background:#f87171">Inaceitável</td>
    </tr>
    <tr>
      <td>P3 Ocasional</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#fbbf24">Tolerável</td>
      <td style="background:#f87171">Inaceitável</td>
      <td style="background:#f87171">Inaceitável</td>
    </tr>
    <tr>
      <td>P2 Remoto</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#fbbf24">Tolerável</td>
      <td style="background:#f87171">Inaceitável</td>
    </tr>
    <tr>
      <td>P1 Improvável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#86efac">Aceitável</td>
      <td style="background:#fbbf24">Tolerável</td>
    </tr>
  </tbody>
</table>

<p>
  Riscos classificados como "Toleráveis" devem ser reduzidos tanto quanto possível (princípio AFAP) e documentar por que não foi possível reduzi-los mais. Riscos "Inaceitáveis" exigem medidas de controle obrigatórias. Apenas riscos "Aceitáveis" podem ser mantidos sem ação adicional — mas ainda devem ser documentados no arquivo de gestão de risco.
</p>
<figure>
<img src="/artigos/iso-14971-gestao-risco/image-2.webp" alt="Matriz de risco 5x5 da ISO 14971 com níveis de probabilidade e severidade para classificação de riscos em dispositivos médicos segundo critérios ALAP/AFAP" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Matriz de risco 5×5: cruzamento de probabilidade e severidade para classificação e priorização de riscos em dispositivos médicos.</figcaption>
</figure>


<h2>Ferramentas de Análise de Risco: FMEA, FTA e HAZOP</h2>

<p>
  A ISO 14971 não prescreve ferramentas específicas de análise — o fabricante escolhe as mais adequadas ao tipo de dispositivo e ao nível de maturidade do projeto. O guia complementar <a href="https://www.iso.org/standard/74566.html" target="_blank" rel="noopener noreferrer">ISO/TR 24971:2020</a> traz orientações detalhadas e exemplos de aplicação de cada ferramenta.
</p>

<h3>FMEA (Failure Mode and Effects Analysis)</h3>

<p>
  O FMEA é a ferramenta mais amplamente utilizada na indústria de dispositivos médicos. Parte de uma abordagem <strong>bottom-up</strong>: para cada componente ou função do dispositivo, o analista identifica os modos de falha possíveis, seus efeitos sobre o usuário/paciente, as causas da falha e as medidas de controle existentes. O resultado é tipicamente apresentado em uma planilha com colunas padronizadas:
</p>

<table>
  <thead>
    <tr>
      <th>Coluna FMEA</th>
      <th>Descrição</th>
      <th>Exemplo (bomba de infusão)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Função/Item</td>
      <td>Componente ou função analisada</td>
      <td>Válvula de oclusão</td>
    </tr>
    <tr>
      <td>Modo de falha</td>
      <td>Como o item pode falhar</td>
      <td>Válvula não fecha completamente</td>
    </tr>
    <tr>
      <td>Efeito da falha</td>
      <td>Consequência para o paciente/usuário</td>
      <td>Sobredosagem do medicamento</td>
    </tr>
    <tr>
      <td>Causa da falha</td>
      <td>Por que o modo de falha ocorre</td>
      <td>Desgaste do elastômero; partículas no fluido</td>
    </tr>
    <tr>
      <td>Severidade (S)</td>
      <td>Nível de dano potencial</td>
      <td>S4 — Crítico (lesão grave)</td>
    </tr>
    <tr>
      <td>Probabilidade (P)</td>
      <td>P1 × P2 estimada</td>
      <td>P2 — Remoto</td>
    </tr>
    <tr>
      <td>Risco inicial</td>
      <td>Classificação antes dos controles</td>
      <td>Tolerável</td>
    </tr>
    <tr>
      <td>Medida de controle</td>
      <td>Ação de mitigação implementada</td>
      <td>Alarme de oclusão; filtro no tubo de entrada</td>
    </tr>
    <tr>
      <td>Risco residual</td>
      <td>Classificação após os controles</td>
      <td>Aceitável</td>
    </tr>
  </tbody>
</table>

<p>
  O FMEA pode ser aplicado no nível de sistema (sFMEA), subsistema, componente ou processo (pFMEA). Para dispositivos que envolvem <strong>software como dispositivo médico (SaMD)</strong>, o FMEA de software deve ser integrado à classificação de segurança de software segundo a <a href="/artigos/samd-software-dispositivo-medico">IEC 62304</a> — classes A, B e C correspondem a diferentes níveis de rigor de desenvolvimento e testes, diretamente vinculados à severidade dos riscos identificados na ISO 14971.
</p>

<h3>FTA (Fault Tree Analysis)</h3>

<p>
  O FTA é uma abordagem <strong>top-down</strong>: parte de um evento indesejado de alto nível (ex.: "paciente recebe dose excessiva") e decompõe as causas em uma árvore lógica de eventos intermediários e básicos, usando portas AND/OR. É especialmente útil para analisar sistemas complexos com múltiplos caminhos de falha e interações entre subsistemas eletrônicos, mecânicos e de software. O FTA permite calcular a probabilidade do evento de topo quando as probabilidades dos eventos básicos são conhecidas ou estimáveis.
</p>

<h3>HAZOP e PHA</h3>

<p>
  O <strong>HAZOP (Hazard and Operability Study)</strong> utiliza palavras-guia (como "mais", "menos", "nenhum", "inverso") aplicadas a parâmetros de processo para identificar desvios e seus efeitos. É amplamente usado em dispositivos com fluxo de fluidos, como equipamentos de diálise, sistemas de anestesia e ventiladores mecânicos. O <strong>PHA (Preliminary Hazard Analysis)</strong> é aplicado nas fases iniciais do desenvolvimento, quando o design ainda não está detalhado, para identificar perigos de alto nível e orientar decisões arquiteturais.
</p>

<h2>ISO 14971 na Prática: O Arquivo de Gestão de Risco</h2>

<!-- IMG_SLOT_3 -->

<p>
  O <strong>Arquivo de Gestão de Risco</strong> (Risk Management File — RMF) é o conjunto de documentos e registros que evidencia a execução completa do processo. Não é um único documento, mas uma coleção rastreável que inclui:
</p>

<ul>
  <li>Plano de Gestão de Risco (com critérios de aceitabilidade justificados)</li>
  <li>Análise de uso pretendido e características relacionadas à segurança</li>
  <li>Registros de identificação de perigos e situações perigosas</li>
  <li>Estimativas de risco (pré-controle) com justificativas de probabilidade e severidade</li>
  <li>Planilhas FMEA / FTA / outros relatórios de análise</li>
  <li>Evidências de implementação e verificação das medidas de controle</li>
  <li>Avaliação do risco residual e análise de benefício-risco global</li>
  <li>Relatório de Gestão de Risco (resumo executivo da revisão — Cláusula 9)</li>
  <li>Registros de monitoramento pós-produção e ações tomadas (Cláusula 10)</li>
</ul>

<p>
  A <strong>rastreabilidade bidirecional</strong> é um requisito crítico: cada risco identificado deve ser rastreável às medidas de controle implementadas, e cada medida de controle deve ser rastreável ao risco que mitiga. Ferramentas de ALM (<em>Application Lifecycle Management</em>) como Jama Connect, Polarion ou mesmo planilhas Excel bem estruturadas podem ser usadas — o importante é que o auditor consiga navegar do perigo ao controle e vice-versa sem lacunas.
</p>
<figure>
<img src="/artigos/iso-14971-gestao-risco/image-3.webp" alt="Engenheiro de regulatory affairs analisando documentação de gestão de risco ISO 14971 com planilhas FMEA em monitores em escritório de empresa de dispositivos médicos" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Profissionais de regulatory affairs gerenciam o arquivo de gestão de risco ao longo de todo o ciclo de vida do dispositivo médico.</figcaption>
</figure>


<h2>Integração com Requisitos Regulatórios Globais</h2>

<p>
  Um dos maiores ativos da ISO 14971 é seu reconhecimento global, que permite ao fabricante usar um único processo de gestão de risco para atender a múltiplos mercados:
</p>

<table>
  <thead>
    <tr>
      <th>Regulador / Marco regulatório</th>
      <th>Como a ISO 14971 é referenciada</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ANVISA (Brasil)</td>
      <td>RDC 751/2022 e normativas complementares</td>
      <td>Exigida para registro e renovação de DM; <a href="/artigos/rdc-751-2022-classificacao-registro">ver guia RDC 751</a></td>
    </tr>
    <tr>
      <td>FDA (EUA)</td>
      <td>Reconhecida como consensus standard (FDA Recognition)</td>
      <td>510(k), PMA e De Novo referenciam a norma</td>
    </tr>
    <tr>
      <td>CE (Europa)</td>
      <td>Harmonizada sob MDR 2017/745 e IVDR 2017/746</td>
      <td>EN ISO 14971:2019 é norma harmonizada vigente</td>
    </tr>
    <tr>
      <td>Health Canada</td>
      <td>Referenciada no Medical Devices Regulations</td>
      <td>Parte do MDSAP (Canada, EUA, Brasil, Japão, Austrália)</td>
    </tr>
    <tr>
      <td>MDSAP</td>
      <td>Tarefa 4 dedicada à gestão de risco</td>
      <td>Auditoria única aceita por 5 países</td>
    </tr>
  </tbody>
</table>

<p>
  Para o mercado brasileiro, a <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">ANVISA exige</a> que o dossiê técnico de registro inclua evidência de que a gestão de risco foi conduzida conforme a ISO 14971. A ausência ou insuficiência do arquivo de gestão de risco é uma das principais causas de exigência (pedido de complementação) nos processos de registro de dispositivos médicos de alto risco (Classes III e IV).
</p>

<p>
  Para dispositivos com componente de software, a integração com a <a href="/artigos/samd-software-dispositivo-medico">IEC 62304</a> é mandatória: a classificação de segurança do software (A, B ou C) deve ser determinada com base nos riscos identificados segundo a ISO 14971, e as atividades de desenvolvimento e verificação de software devem ser proporcionais a essa classificação.
</p>

<h2>Cybersegurança e Tendências Futuras</h2>

<p>
  A ISO 14971:2019 foi a primeira edição a incluir explicitamente a cybersegurança no escopo de gestão de risco. Vulnerabilidades de software e de conectividade (rede hospitalar, Bluetooth, nuvem) são tratadas como fontes de perigo que devem ser analisadas pelo mesmo processo — identificação de perigo, estimativa de risco, controle e monitoramento. A norma <a href="https://www.iec.ch/homepage" target="_blank" rel="noopener noreferrer">IEC 81001-5-1:2021</a> (Atividades de ciclo de vida de segurança para software de saúde — cybersegurança) é o documento complementar específico para ameaças cibernéticas, e sua aplicação é crescentemente exigida por reguladores europeus e norte-americanos.
</p>

<p>
  A revisão periódica de março de 2025 confirmou a ISO 14971:2019 sem alterações, mas os grupos de trabalho do ISO/TC 210 já estão avaliando como futuras revisões abordarão IA/ML em dispositivos médicos — área onde a gestão de risco enfrenta desafios inéditos relacionados à imprevisibilidade de algoritmos adaptativos e à necessidade de monitoramento contínuo de performance em campo. O documento de orientação <a href="https://www.iso.org/standard/74566.html" target="_blank" rel="noopener noreferrer">ISO/TR 24971:2020</a> permanece como a principal referência de apoio à implementação prática da norma.
</p>

<h2>Erros Comuns na Implementação da ISO 14971</h2>

<p>
  Com base em padrões frequentes de não-conformidade identificados em auditorias MDSAP, ISO 13485 e revisões regulatórias, os erros mais recorrentes são:
</p>

<ul>
  <li><strong>Critérios de aceitabilidade sem justificativa</strong>: tabelas de risco copiadas de modelos genéricos sem fundamentação em dados clínicos ou "estado da arte".</li>
  <li><strong>FMEA desatualizado</strong>: planilhas criadas durante o desenvolvimento e nunca revisadas após mudanças de design, reclamações de campo ou novas evidências da literatura.</li>
  <li><strong>Falta de rastreabilidade</strong>: medidas de controle listadas no FMEA sem evidência de implementação verificada (registros de teste, inspeção ou qualificação).</li>
  <li><strong>Análise de benefício-risco ausente</strong>: a empresa avalia riscos individuais mas não documenta a análise do risco residual global e a comparação com benefícios clínicos.</li>
  <li><strong>Desconexão com o pós-mercado</strong>: o arquivo de gestão de risco é fechado no lançamento do produto e nunca alimentado com dados de vigilância pós-mercado, reclamações ou recalls de concorrentes.</li>
  <li><strong>Hierarquia de controle não respeitada</strong>: riscos graves controlados apenas com advertências na IFU, sem avaliação de alternativas de design ou proteção.</li>
  <li><strong>Software sem integração com IEC 62304</strong>: classificação de segurança do software não rastreada aos riscos ISO 14971, ou vice-versa.</li>
</ul>

<h2>FAQ — Perguntas Frequentes sobre ISO 14971</h2>

<h3>A ISO 14971 se aplica a acessórios e peças de reposição?</h3>

<p>
  Sim. A norma se aplica a dispositivos médicos conforme definido pelas regulamentações aplicáveis — e na maioria dos marcos regulatórios, acessórios e peças de reposição destinados a uso com dispositivos médicos são eles próprios classificados como dispositivos médicos. O fabricante deve conduzir a gestão de risco para o acessório de forma independente, mas também deve considerar os riscos introduzidos pela combinação do acessório com o dispositivo principal.
</p>

<h3>Qual a diferença entre FMEA de produto e FMEA de processo?</h3>

<p>
  O FMEA de produto (dFMEA — design FMEA) analisa modos de falha relacionados ao design do dispositivo e seus efeitos sobre o usuário/paciente. O FMEA de processo (pFMEA) analisa modos de falha nos processos de fabricação e como esses podem resultar em defeitos no produto acabado que causem dano. Ambos são relevantes para a ISO 14971, mas o dFMEA é o mais diretamente vinculado ao processo de gestão de risco do produto. O pFMEA conecta-se mais ao controle de processo no contexto da ISO 13485.
</p>

<h3>Como a ISO 14971 trata riscos de dispositivos combinados (drug-device combinations)?</h3>

<p>
  Combinações de produto (drug-device combinations, como autoaplicadores de insulina ou stents farmacológicos) exigem que o fabricante considere a interação entre o componente de dispositivo e o componente farmacológico como fonte adicional de perigos. A ISO 14971 se aplica ao componente de dispositivo; a gestão de risco do componente farmacológico segue normativas próprias (ICH Q9, por exemplo). O Relatório de Gestão de Risco deve documentar explicitamente como a interação entre os componentes foi avaliada.
</p>

<h3>É necessário contratar uma consultoria especializada para implementar a ISO 14971?</h3>

<p>
  Não é obrigatório, mas é altamente recomendável para empresas que iniciam o processo ou que enfrentaram não-conformidades em auditorias anteriores. A norma exige competência técnica para definir critérios de aceitabilidade, conduzir análises de FMEA e FTA, e integrar o processo com os demais requisitos do SGQ. Internamente, o time deve incluir profissionais com formação em engenharia (biomedical, mecânica, elétrica, de software), regulatory affairs e qualidade — com experiência no tipo de dispositivo em questão.
</p>

<h3>O Relatório de Gestão de Risco é o mesmo que o Arquivo de Gestão de Risco?</h3>

<p>
  Não. O <strong>Arquivo de Gestão de Risco</strong> (Risk Management File) é o conjunto completo de todos os documentos e registros do processo — análises, evidências de controle, registros de pós-mercado, etc. O <strong>Relatório de Gestão de Risco</strong> (Risk Management Report) é um documento específico gerado na Cláusula 9, que resume os resultados da revisão final antes do lançamento: confirma que o plano foi executado, que os critérios de aceitabilidade foram atendidos e que a análise de benefício-risco global é favorável. É essencialmente o "atestado de conclusão" do processo para aquele ciclo de desenvolvimento.
</p>

<p>
  Para aprofundar sua compreensão do ecossistema regulatório brasileiro, leia também nossos guias sobre o <a href="/artigos/iso-13485-dispositivos-medicos">sistema de gestão da qualidade ISO 13485</a>, o <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">processo de registro na ANVISA</a> e a <a href="/artigos/rdc-751-2022-classificacao-registro">classificação de dispositivos médicos pela RDC 751/2022</a>.
</p>
`,
};
