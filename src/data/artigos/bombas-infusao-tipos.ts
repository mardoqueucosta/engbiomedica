import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Bombas de Infusão: Tipos, Funcionamento, Calibração e Manutenção',
  resumo: 'Guia técnico completo sobre bombas de infusão — volumétricas, de seringa, elastoméricas, PCA e enterais — com mecanismos de acionamento, sistemas de segurança DERS, calibração IEC 60601-2-24, fabricantes brasileiros (Samtronic, Lifemed) e gestão do modelo de comodato para engenheiros clínicos e gestores hospitalares.',
  categoria: 'Profissão',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '17 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6">As bombas de infusão são o dispositivo médico ativo mais presente nos hospitais brasileiros: <strong>mais de 70% dos pacientes internados recebem alguma forma de terapia intravenosa controlada</strong> por esses equipamentos, que movimentam um mercado global de US$ 18,5 bilhões em 2024 com projeção de US$ 28,3 bilhões até 2030 — e cuja falha de calibração ou manutenção figura entre as principais causas de eventos adversos medicamentosos em ambiente hospitalar.</p>

<p class="mb-6">Este artigo faz parte do nosso <a href="/artigos/engenharia-clinica-guia-completo">Guia Completo de Engenharia Clínica</a> e deve ser lido em conjunto com os artigos sobre <a href="/artigos/equipamentos-uti-guia">equipamentos de UTI</a> e <a href="/artigos/manutencao-equipamentos-hospitalares">manutenção de equipamentos hospitalares</a>, que contextualizam a bomba de infusão dentro do parque tecnológico hospitalar mais amplo.</p>

<h2>Classificação Regulatória e Mercado Global</h2>

<p>No Brasil, as bombas de infusão são classificadas pela <strong>ANVISA como dispositivos médicos de Classe III</strong> (RDC 751/2022) — grau de risco alto — em razão do contato direto com corrente sanguínea e do potencial de dano grave decorrente de falha. Nos Estados Unidos, a <strong>FDA</strong> as enquadra na <strong>Classe II</strong> (controles especiais), exigindo notificação pré-comercialização (510(k)) com demonstração de equivalência substancial. Na União Europeia, seguem o <strong>Regulamento UE 2017/745 (MDR)</strong> como dispositivos de Classe IIb.</p>

<p>O registro na ANVISA exige dossiê técnico completo com resultados de ensaios conforme a <strong>IEC 60601-2-24</strong> (norma particular para equipamentos de infusão) e a <strong>ABNT NBR IEC 60601-1</strong> (requisitos gerais de segurança elétrica). Fabricantes devem ainda manter <strong>Boas Práticas de Fabricação</strong> certificadas conforme a RDC 665/2022, equivalente brasileira da ISO 13485.</p>

<table>
  <caption>Classificação regulatória e principais exigências por mercado — bombas de infusão (2024)</caption>
  <thead>
    <tr>
      <th>Mercado</th>
      <th>Classe/Risco</th>
      <th>Via regulatória</th>
      <th>Norma técnica principal</th>
      <th>Certificação fabricante</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Brasil (ANVISA)</td>
      <td>Classe III</td>
      <td>Registro (RDC 751/2022)</td>
      <td>IEC 60601-2-24 / ABNT NBR IEC 60601-1</td>
      <td>RDC 665/2022 (= ISO 13485)</td>
    </tr>
    <tr>
      <td>Estados Unidos (FDA)</td>
      <td>Classe II</td>
      <td>510(k) pré-comercialização</td>
      <td>IEC 60601-2-24 / AAMI HE75</td>
      <td>21 CFR Part 820 / ISO 13485</td>
    </tr>
    <tr>
      <td>União Europeia (CE)</td>
      <td>Classe IIb</td>
      <td>MDR 2017/745 + Organismo Notificado</td>
      <td>IEC 60601-2-24 / EN ISO 14971</td>
      <td>ISO 13485 + Anexo IX MDR</td>
    </tr>
    <tr>
      <td>Global (OMS)</td>
      <td>Alto risco</td>
      <td>Recomendação WHO MEDS-LIST</td>
      <td>IEC 60601-2-24</td>
      <td>ISO 13485</td>
    </tr>
  </tbody>
</table>

<p>O mercado global de bombas de infusão atingiu <strong>US$ 18,5 bilhões em 2024</strong>, impulsionado pela prevalência crescente de doenças crônicas, envelhecimento populacional e expansão da oncologia ambulatorial. A taxa de crescimento anual composta (CAGR) projetada de 7,3% levará o mercado a <strong>US$ 28,3 bilhões até 2030</strong>. As bombas volumétricas respondem por 45% do volume de mercado, enquanto as bombas de seringa — de crescimento mais acelerado — já representam 32%. O segmento de bombas inteligentes (smart pumps) com integração a prontuários eletrônicos cresce a CAGR de 9,1%.</p>

<figure>
<img src="/artigos/bombas-infusao-tipos/image-1.webp" alt="Torre com seis bombas de infusão hospitalares empilhadas — volumétricas e de seringa — ao lado de leito de UTI com telas ativas exibindo taxa e volume" loading="lazy" />
<figcaption>Em leitos de UTI de alta complexidade, torres com quatro a seis bombas de infusão são a norma, exigindo gestão técnica rigorosa de calibração, manutenção e compatibilidade de equipes.</figcaption>
</figure>

<h2>Tipos de Bombas de Infusão: Classificação Funcional e Aplicação Clínica</h2>

<p>A literatura e a prática clínica reconhecem seis categorias principais de bombas de infusão, diferenciadas pelo mecanismo de acionamento, volume de operação e aplicação terapêutica. A escolha do tipo correto impacta diretamente a precisão do tratamento e a segurança do paciente.</p>

<table>
  <caption>Tipos de bombas de infusão: características técnicas e aplicações clínicas</caption>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Mecanismo</th>
      <th>Faixa de vazão</th>
      <th>Volume típico</th>
      <th>Aplicação principal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Volumétrica peristáltica</td>
      <td>Peristáltico linear ou rotativo</td>
      <td>0,1 – 1.500 mL/h</td>
      <td>50 – 1.000 mL</td>
      <td>Antibióticos, hidratação, nutrição parenteral</td>
    </tr>
    <tr>
      <td>De seringa (pistão)</td>
      <td>Fuso de precisão (lead screw)</td>
      <td>0,1 – 200 mL/h</td>
      <td>5 – 60 mL (seringa)</td>
      <td>Vasoativos, sedação, insulina, neonatologia</td>
    </tr>
    <tr>
      <td>Elastomérica</td>
      <td>Reservatório elastomérico pressurizado</td>
      <td>0,5 – 250 mL/h (fixo)</td>
      <td>50 – 500 mL</td>
      <td>Quimioterapia domiciliar, analgesia pós-operatória</td>
    </tr>
    <tr>
      <td>Ambulatorial (CADD)</td>
      <td>Peristáltico miniaturizado + bateria</td>
      <td>0,1 – 99,9 mL/h</td>
      <td>50 – 100 mL (cassete)</td>
      <td>Terapia intravenosa domiciliar, PCA ambulatorial</td>
    </tr>
    <tr>
      <td>PCA (Analgesia Controlada)</td>
      <td>Peristáltico com módulo de demanda</td>
      <td>Basal + bôlus demanda</td>
      <td>30 – 100 mL</td>
      <td>Controle de dor pós-operatória, paliação</td>
    </tr>
    <tr>
      <td>Enteral</td>
      <td>Peristáltico com equipe enteral</td>
      <td>1 – 300 mL/h</td>
      <td>500 – 1.500 mL</td>
      <td>Nutrição enteral via sonda naso/gástrica/jejunal</td>
    </tr>
  </tbody>
</table>

<p>A <strong>bomba volumétrica peristáltica</strong> é o equipamento mais comum em enfermarias e UTIs gerais, adequada para a maioria das infusões de médio e alto volume. A <strong>bomba de seringa</strong> é indispensável em UTI e neonatologia, onde a precisão em baixos volumes é crítica — sedação com propofol a 2 mL/h, por exemplo, exige erro de fluxo inferior a ±2%. As <strong>bombas enterais</strong> operam com equipes e conectores dedicados (ENFit), que são incompatíveis por design com circuitos intravenosos, prevenindo conexões acidentais — erro historicamente letal.</p>

<h2>Mecanismos de Acionamento: Do Peristáltico ao Fuso de Precisão</h2>

<p>Compreender o mecanismo interno de cada tipo de bomba é fundamental para o engenheiro clínico diagnosticar falhas, avaliar precisão e definir cronogramas de manutenção preventiva. A norma <strong>IEC 60601-2-24</strong> classifica os mecanismos em três categorias principais.</p>

<p><strong>Peristáltico linear:</strong> uma série de seis a doze dedos ou cames comprime sequencialmente um segmento de tubo de PVC ou silicone, criando uma onda peristáltica progressiva. A frequência de compressão determina a vazão. É o mecanismo mais robusto e de menor custo de manutenção, porém sujeito a variações de fluxo em frequências muito baixas (<1 mL/h) e ao desgaste do tubo da equipe pelo uso repetido.</p>

<p><strong>Peristáltico rotativo:</strong> um rotor com dois a três rolos comprime o tubo em um segmento curvo. É o mecanismo mais comum em bombas de baixo custo. A oclusão incompleta do tubo (desgaste do rotor ou rolos) é a principal causa de subinfusão, dificilmente detectada sem calibração com analisador de fluxo.</p>

<p><strong>Cassete de pistão com câmara de sapfira:</strong> o mecanismo de maior precisão, utilizado nas bombas de seringa de alta criticidade. Um fuso de aço inoxidável de passo calibrado (lead screw), movido por motor de passo ou servo, avança o êmbolo da seringa em incrementos de nanolitros. A câmara de sapfira elimina atrito e garante precisão de ±1% mesmo em vazões inferiores a 0,5 mL/h. O ponto crítico é o fenômeno de <em>startup delay</em> — atraso de até 8 minutos para estabilização do fluxo após o início da infusão — relevante em vasoativos de meia-vida curta.</p>

<p>Para aprofundamento na norma que rege esses mecanismos e os ensaios de aceitação, consulte nosso artigo sobre a <a href="/artigos/iec-60601-norma-equipamentos">norma IEC 60601 e equipamentos eletromédicos</a>.</p>

<figure>
<img src="/artigos/bombas-infusao-tipos/image-2.webp" alt="Diagrama técnico comparativo dos mecanismos de bomba peristáltica linear, peristáltica rotativa e cassete de pistão utilizados em bombas de infusão hospitalares" loading="lazy" />
<figcaption>O mecanismo de cassete de pistão com câmara de safira oferece a maior precisão de fluxo (±1%) e é utilizado nas bombas de seringa de alta criticidade para sedação e vasoativos.</figcaption>
</figure>

<h2>Sistemas de Segurança: DERS, Detecção de Ar e Sensor de Oclusão</h2>

<p>A segurança das bombas de infusão modernas é garantida por uma cadeia de sistemas eletrônicos e mecânicos que, em conjunto, reduzem os erros de medicação a taxas inferiores a 0,1 eventos por mil infusões nas unidades que implementam a tecnologia de forma completa.</p>

<p>O <strong>DERS (Drug Error Reduction System)</strong>, também chamado de <em>Dose Error Reduction Software</em> ou simplesmente biblioteca de medicamentos (<em>drug library</em>), é o avanço mais significativo das últimas duas décadas. A biblioteca contém limites de dose configurados pela farmácia clínica para cada medicamento, concentração e perfil de paciente (adulto, pediátrico, neonatal). Quando o profissional programa uma dose fora dos limites, a bomba emite alertas <em>soft</em> (consultivo, pode ser ignorado com justificativa) ou <em>hard</em> (bloqueio absoluto). Estudos publicados no <em>American Journal of Health-System Pharmacy</em> demonstram redução de 50–80% em erros de programação com DERS ativo.</p>

<p>O <strong>detector de ar em linha (air-in-line)</strong> utiliza um par emissor/receptor de ultrassom posicionado no segmento da equipe: a diferença de impedância acústica entre o líquido e uma bolha de ar acima de 20–50 μL aciona o alarme e bloqueia a bomba automaticamente. A sensibilidade mínima exigida pela IEC 60601-2-24 é de 0,10 mL de ar total.</p>

<p>O <strong>sensor de oclusão</strong> monitora a pressão a jusante (distal) e a montante (proximal) do mecanismo de infusão. O limiar de oclusão — configurável entre 100 e 900 mmHg conforme o acesso venoso — determina com que rapidez a bomba alerta sobre obstrução. Limiares baixos (100–200 mmHg) são adequados para acessos periféricos; limiares altos (600–900 mmHg) para cateteres centrais de múltiplos lúmens. O tempo de resposta para acionar o alarme não deve exceder 45 segundos na pressão máxima configurada.</p>

<p>O <strong>sistema anti-bólus</strong> limita o volume que pode ser infundido por livre fluxo gravitacional caso a bomba seja aberta inadvertidamente: a norma IEC 60601-2-24 exige volume de livre fluxo inferior a 0,2 mL. Todas as equipes de bomba volumétrica modernas incluem uma válvula anti-livre-fluxo integrada que fecha automaticamente quando a equipe é removida da bomba.</p>

<table>
  <caption>Sistemas de segurança das bombas de infusão modernas — parâmetros e exigências normativas</caption>
  <thead>
    <tr>
      <th>Sistema</th>
      <th>Tecnologia</th>
      <th>Limiar / Sensibilidade</th>
      <th>Exigência IEC 60601-2-24</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Detector de ar em linha</td>
      <td>Ultrassom (emissor/receptor)</td>
      <td>≥ 20 μL por bolha única</td>
      <td>≤ 0,10 mL acumulado antes do alarme</td>
    </tr>
    <tr>
      <td>Sensor de oclusão distal</td>
      <td>Sensor piezorresistivo de pressão</td>
      <td>100 – 900 mmHg (configurável)</td>
      <td>Alarme em ≤ 45 s na pressão máxima</td>
    </tr>
    <tr>
      <td>Sensor de oclusão proximal</td>
      <td>Sensor de pressão diferencial</td>
      <td>Detecção de sucção</td>
      <td>Alarme obrigatório</td>
    </tr>
    <tr>
      <td>Anti-bólus (livre fluxo)</td>
      <td>Válvula mecânica na equipe</td>
      <td>Fechamento automático</td>
      <td>≤ 0,2 mL volume de livre fluxo</td>
    </tr>
    <tr>
      <td>DERS / Drug Library</td>
      <td>Software embarcado + base de dados</td>
      <td>Limites soft e hard por medicamento</td>
      <td>Não obrigatório pela norma; exigido por boas práticas</td>
    </tr>
    <tr>
      <td>Alarme de bateria</td>
      <td>Monitor de tensão de bateria interna</td>
      <td>≥ 30 min de autonomia residual</td>
      <td>Alarme com autonomia mínima de 30 min</td>
    </tr>
  </tbody>
</table>

<h2>Fabricantes: Mercado Brasileiro e Global</h2>

<p>O mercado brasileiro de bombas de infusão é dominado por dois fabricantes nacionais que construíram posição competitiva baseada no modelo de comodato e no atendimento técnico capilar em todo o território nacional.</p>

<p>A <strong>Samtronic</strong> (São Paulo-SP) é a líder de mercado no Brasil e exporta para mais de 55 países. Seus modelos principais — ST660 (seringa), ST670 (volumétrica) e ST880 (smart pump com DERS) — são amplamente utilizados em UTIs privadas e redes hospitalares. A empresa foi pioneira no Brasil a implementar integração bidirecional com prontuários eletrônicos via HL7 FHIR. A <strong>Lifemed</strong> (São Paulo-SP) é a principal fornecedora do SUS, com contratos de comodato em hospitais universitários e da rede estadual; seus modelos BI-200-E e BI-8000 são referência em custo-benefício para o setor público.</p>

<p>No mercado global, os principais players são: <strong>BD Alaris</strong> (Becton Dickinson, EUA) — referência em smart pumps com o sistema Alaris PCU e a plataforma Guardrails; <strong>B.Braun Infusomat Space</strong> (Alemanha) — destaque em modularidade e conectividade; <strong>Baxter Sigma Spectrum</strong> (EUA) — presença dominante em oncologia ambulatorial; <strong>Fresenius Kabi Agilia</strong> (Alemanha) — forte em nutrição parenteral; e <strong>ICU Medical Plum 360</strong> (EUA) — após aquisição da linha Hospira da Pfizer.</p>

<p>O modelo de negócios predominante no Brasil é o <strong>comodato</strong>: o fabricante fornece as bombas gratuitamente ao hospital em troca do compromisso de aquisição exclusiva dos consumíveis (equipes dedicadas e cassetes) pelo período contratual, tipicamente 36 a 60 meses. O custo real do equipamento é embutido nos consumíveis, que chegam a representar 60–80% da receita do fabricante ao longo do contrato. Para o hospital, o comodato elimina o investimento inicial mas reduz a flexibilidade de troca de fornecedor. O engenheiro clínico deve avaliar o <strong>custo total de propriedade (TCO)</strong> ao comparar propostas, incluindo: preço por equipe, volume mínimo contratual, cobertura de manutenção incluída e penalidades por rescisão.</p>

<p>Para uma análise mais ampla do mercado de dispositivos médicos e os principais fabricantes nacionais, recomendamos nosso artigo sobre <a href="/artigos/empresas-dispositivos-medicos-brasil">empresas de dispositivos médicos no Brasil</a>.</p>

<h2>Smart Pumps e Integração com Prontuário Eletrônico</h2>

<p>As chamadas <em>smart pumps</em> — bombas inteligentes — representam a convergência entre o equipamento eletromédico e os sistemas de informação hospitalar. Além do DERS embarcado, elas oferecem conectividade bidirecional com o sistema de prescrição médica eletrônica (CPOE) e com o prontuário eletrônico do paciente (PEP), através dos protocolos <strong>HL7 v2.x</strong>, <strong>HL7 FHIR R4</strong> e, em implementações mais recentes, <strong>DICOM SR</strong> para documentação estruturada.</p>

<p>O fluxo de trabalho de <strong>infusão em circuito fechado (closed-loop infusion)</strong> funciona da seguinte forma: o médico prescreve no CPOE; a prescrição é validada pela farmácia clínica; a ordem é transmitida eletronicamente à bomba já identificada ao leito via código de barras ou RFID; o enfermeiro confirma a programação no display; e os dados de infusão (volume infundido, alarmes disparados, interrupções) retornam automaticamente ao PEP. Esse ciclo elimina a transcrição manual — fonte de até 39% dos erros de medicação segundo estudo do Institute for Safe Medication Practices (ISMP).</p>

<p>A interoperabilidade plena, contudo, exige investimento em infraestrutura: rede Wi-Fi hospitalar com cobertura de 100% das áreas clínicas, servidor de middleware para integração (tipicamente Capsule Technologies ou ICU Medical DoseEdge), e profissional de TI clínica dedicado à manutenção da biblioteca de medicamentos. No Brasil, hospitais com mais de 200 leitos e certificação ONA Nível 3 ou Qmentum são os principais adotantes.</p>

<h2>Calibração: IEC 60601-2-24 e Procedimentos com Analisador de Fluxo</h2>

<p>A calibração de bombas de infusão é uma das atividades mais críticas do laboratório de engenharia clínica. A <strong>IEC 60601-2-24</strong> estabelece os limites de exatidão de fluxo que todos os fabricantes devem cumprir, e que os departamentos de engenharia clínica devem verificar periodicamente.</p>

<p>Os parâmetros de exatidão mínima exigidos pela norma são:</p>
<ul>
  <li><strong>Exatidão de longo prazo:</strong> ±5% para bombas volumétricas e ±2% para bombas de seringa, medida ao longo de pelo menos 1 hora de operação contínua.</li>
  <li><strong>Exatidão de curto prazo (uniformidade de fluxo):</strong> ±10% medida em intervalos de 1 minuto, para capturar a pulsatilidade do mecanismo peristáltico.</li>
  <li><strong>Oclusão distal:</strong> pressão de alarme dentro de ±15% do valor programado.</li>
  <li><strong>Volume infundido:</strong> erro de volume acumulado inferior a ±5% ao final da infusão.</li>
</ul>

<p>O equipamento padrão para calibração é o <strong>analisador de fluxo gravimétrico ou volumétrico</strong>. O modelo mais utilizado nos hospitais brasileiros é o <strong>Fluke Biomedical IDA-4 Plus</strong> (ou seu sucessor IDA-5), que mede fluxo por método gravimétrico com resolução de 0,01 mL/h e rastreabilidade ao INMETRO/BIPM. O procedimento básico de calibração segue estas etapas:</p>

<ol>
  <li>Inspeção visual: integridade física, display, teclado, equipe compatível.</li>
  <li>Verificação elétrica: corrente de fuga, isolamento elétrico (conforme IEC 60601-1).</li>
  <li>Configuração do analisador: modo gravimétrico, temperatura ambiente registrada (correção de densidade da água).</li>
  <li>Infusão de teste a três vazões: 1 mL/h (baixa), 25 mL/h (média) e 100 mL/h (alta) por no mínimo 60 minutos cada.</li>
  <li>Registro do erro percentual em cada ponto; reprovação se qualquer ponto exceder ±5%.</li>
  <li>Verificação do alarme de oclusão: ocluir a saída e medir pressão de alarme com manômetro calibrado.</li>
  <li>Verificação do detector de ar: injetar bolha de ar de 0,1 mL e confirmar alarme.</li>
  <li>Emissão de laudo com resultado aprovado/reprovado e validade de 12 meses.</li>
</ol>

<p>Bombas reprovadas devem ser retiradas de serviço imediatamente e encaminhadas para manutenção corretiva. O engenheiro clínico deve manter rastreabilidade completa dos laudos conforme exigido pela <strong>RDC 2/2010</strong> (tecnovigilância) e pelo programa de <a href="/artigos/manutencao-equipamentos-hospitalares">manutenção preventiva de equipamentos hospitalares</a>.</p>

<figure>
<img src="/artigos/bombas-infusao-tipos/image-3.webp" alt="Técnico de engenharia clínica calibrando bomba de infusão volumétrica com analisador de fluxo Fluke IDA-4 em bancada de laboratório hospitalar mostrando erro de 0,2 por cento" loading="lazy" />
<figcaption>A calibração com analisador de fluxo rastreável ao INMETRO deve ser realizada anualmente ou após qualquer manutenção corretiva, com tolerância máxima de ±5% conforme a IEC 60601-2-24.</figcaption>
</figure>

<table>
  <caption>Parâmetros de calibração de bombas de infusão — limites IEC 60601-2-24 e procedimento</caption>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Ponto de teste</th>
      <th>Limite de aprovação</th>
      <th>Instrumento</th>
      <th>Frequência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Exatidão de fluxo (longo prazo)</td>
      <td>1, 25, 100 mL/h</td>
      <td>±5% (volumétrica) / ±2% (seringa)</td>
      <td>Analisador gravimétrico (Fluke IDA-4)</td>
      <td>Anual ou após corretiva</td>
    </tr>
    <tr>
      <td>Uniformidade de fluxo (curto prazo)</td>
      <td>25 mL/h por 30 min</td>
      <td>±10% por minuto</td>
      <td>Analisador gravimétrico</td>
      <td>Anual</td>
    </tr>
    <tr>
      <td>Pressão de alarme de oclusão</td>
      <td>Valor programado ±15%</td>
      <td>±15% do programado</td>
      <td>Manômetro calibrado</td>
      <td>Anual</td>
    </tr>
    <tr>
      <td>Detector de ar em linha</td>
      <td>Bolha de 0,1 mL injetada</td>
      <td>100% de detecção e alarme</td>
      <td>Seringa + equipe de teste</td>
      <td>Anual</td>
    </tr>
    <tr>
      <td>Corrente de fuga ao terra</td>
      <td>Modo normal / modo falha</td>
      <td>≤ 500 μA (modo normal)</td>
      <td>Analisador elétrico (ESA620)</td>
      <td>Anual</td>
    </tr>
  </tbody>
</table>

<h2>Manutenção Preventiva e Gestão do Parque de Bombas</h2>

<p>A gestão eficiente do parque de bombas de infusão é um dos maiores desafios operacionais da engenharia clínica, especialmente em hospitais com contratos de comodato de múltiplos fabricantes. Um hospital de 300 leitos tipicamente opera entre 600 e 900 bombas — entre volumétricas, seringas e enterais — distribuídas em todas as unidades.</p>

<p>A <strong>manutenção preventiva (MP)</strong> anual de uma bomba volumétrica inclui, em média: limpeza interna (remoção de partículas do mecanismo peristáltico), inspeção e lubrificação dos dedos de compressão ou rolos, substituição da bateria interna (ciclo de 2–3 anos), atualização de firmware e biblioteca de medicamentos (DERS), calibração de fluxo e verificação de todos os alarmes. O tempo médio de MP é de 45–90 minutos por equipamento, com custo de peças (principalmente bateria e componentes do mecanismo) entre R$ 80 e R$ 350 por unidade.</p>

<p>O rastreamento do ciclo de vida deve ser feito em sistema <strong>CMMS (Computerized Maintenance Management System)</strong>, com registro de: número de série, data de fabricação, histórico de manutenções preventivas e corretivas, laudos de calibração, ordem de serviço por ocorrência, localização atual e status de disponibilidade. Hospitais acima de ONA Nível 2 são auditados quanto à completude desses registros.</p>

<p>Um indicador crítico a monitorar é a <strong>taxa de disponibilidade</strong> do parque: o tempo em que o equipamento está em plenas condições de uso dividido pelo tempo total. Para bombas de infusão, o benchmark de mercado é disponibilidade superior a 95%. Quedas abaixo desse nível indicam necessidade de revisão do cronograma de MP ou aumento do estoque de equipamentos reserva (recomendado: 10–15% do parque em reserva técnica).</p>

<p>Para estratégias completas de gestão do parque tecnológico hospitalar, consulte nosso artigo sobre <a href="/artigos/gestao-parque-tecnologico-hospitalar">gestão de parque tecnológico hospitalar</a> e sobre <a href="/artigos/manutencao-equipamentos-hospitalares">manutenção de equipamentos hospitalares</a>.</p>

<h2>Tecnovigilância e Notificação de Eventos Adversos</h2>

<p>As bombas de infusão figuram sistematicamente entre os cinco equipamentos médicos com mais notificações no sistema de tecnovigilância brasileiro (NOTIVISA) e no sistema americano MAUDE (FDA). Os eventos adversos mais frequentes são: programação incorreta de dose (erro humano facilitado por interface ruim), subdosagem por oclusão não detectada a tempo, sobredose por livre fluxo acidental e falha de alarme de bateria levando à interrupção inadvertida da infusão.</p>

<p>O engenheiro clínico tem obrigação legal de notificar ao fabricante e à ANVISA (via NOTIVISA) qualquer evento adverso grave ou near-miss relacionado a equipamento, conforme a <strong>RDC 2/2010</strong> (vigente) e a regulamentação de tecnovigilância. A notificação deve conter: descrição do evento, modelo e número de série do equipamento, condições de uso, consequências para o paciente e medidas corretivas imediatas adotadas.</p>

<p>Para compreender o sistema completo de tecnovigilância no Brasil, consulte nosso artigo sobre <a href="/artigos/tecnovigilancia-brasil">tecnovigilância de equipamentos médicos no Brasil</a>.</p>

<h2>Perguntas Frequentes sobre Bombas de Infusão</h2>

<h3>Qual a diferença entre bomba volumétrica e bomba de seringa?</h3>
<p>A <strong>bomba volumétrica</strong> opera com bolsas ou frascos de 50 a 1.000 mL através de equipe peristáltica, sendo indicada para infusões de médio e alto volume como antibióticos, hidratação e nutrição parenteral, com faixa de vazão de 0,1 a 1.500 mL/h. A <strong>bomba de seringa</strong> opera com seringas de 5 a 60 mL através de mecanismo de fuso de precisão, com faixa de 0,1 a 200 mL/h, e é indispensável quando a precisão em baixas vazões é crítica — vasoativos em UTI, insulina e sedação em neonatologia — onde erros superiores a ±2% podem ter consequências clínicas imediatas.</p>

<h3>O que é o modelo de comodato e quais seus riscos para o hospital?</h3>
<p>No comodato, o fabricante fornece as bombas gratuitamente ao hospital em troca da compra exclusiva dos consumíveis (equipes dedicadas) pelo período contratual (36–60 meses). O risco principal é a <strong>dependência de fornecedor</strong>: equipes de um fabricante são incompatíveis com bombas de outro (por design e contrato), dificultando a troca. O hospital deve avaliar o <strong>custo total de propriedade (TCO)</strong> e incluir cláusulas de saída no contrato. Outro risco é a desatualização tecnológica: se um modelo superior for lançado durante o contrato, o hospital está vinculado ao modelo anterior.</p>

<h3>Com que frequência as bombas de infusão devem ser calibradas?</h3>
<p>A <strong>IEC 60601-2-24</strong> e as boas práticas de engenharia clínica recomendam calibração anual para todos os equipamentos em operação clínica, além de recalibração obrigatória após qualquer manutenção corretiva que envolva o mecanismo de infusão, substituição de bateria ou atualização de firmware. Bombas utilizadas em aplicações de alta criticidade — UTI neonatal, oncologia pediátrica, sedação em adultos — devem ser consideradas para calibração semestral. Os laudos devem ser rastreáveis e mantidos por pelo menos 5 anos.</p>

<h3>O que é DERS e como implementar a biblioteca de medicamentos?</h3>
<p>O <strong>DERS (Drug Error Reduction System)</strong> é um software embarcado nas smart pumps que contém limites de dose (mínima, máxima e crítica) para cada medicamento, concentração e perfil de paciente. A implementação exige: (1) formação de uma comissão multidisciplinar com farmácia clínica, enfermagem e medicina; (2) levantamento de todos os protocolos de infusão em uso; (3) parametrização dos limites com base em referências como o ISMP e o Formulário Terapêutico Nacional; (4) validação clínica antes da ativação; (5) monitoramento contínuo da taxa de <em>override</em> de alertas — taxas acima de 30% indicam problemas de parametrização que precisam ser corrigidos.</p>

<h3>Quais são os principais indicadores de gestão do parque de bombas de infusão?</h3>
<p>Os indicadores essenciais são: <strong>taxa de disponibilidade</strong> (meta: ≥ 95%); <strong>MTBF (Mean Time Between Failures)</strong> em horas de operação; <strong>MTTR (Mean Time To Repair)</strong> — tempo médio de reparo (meta: ≤ 24 horas para corretivas); <strong>taxa de conformidade na calibração</strong> — percentual aprovado na primeira calibração anual (meta: ≥ 90%); <strong>custo por equipe consumida</strong> para avaliar rentabilidade do contrato de comodato; e <strong>taxa de notificação de eventos</strong> ao NOTIVISA, que deve ser monitorada e comparada com o benchmark do fabricante.</p>

<p class="mt-8">Para uma visão completa do papel do engenheiro clínico na gestão de tecnologias como as bombas de infusão, consulte nosso <a href="/artigos/engenharia-clinica-guia-completo">Guia Completo de Engenharia Clínica</a> e o artigo sobre <a href="/artigos/ventiladores-mecanicos-engenharia">ventiladores mecânicos para engenheiros</a>, outro equipamento crítico com desafios técnicos similares de manutenção e calibração.</p>

<h2>Referências e Leituras Complementares</h2>

<ul>
  <li><a href="https://www.iec.ch/homepage" rel="noopener noreferrer" target="_blank">IEC 60601-2-24: Equipamentos Eletromédicos — Parte 2-24: Requisitos Particulares para Segurança Básica e Desempenho Essencial de Bombas e Controladores de Infusão (IEC, 2012)</a></li>
  <li><a href="https://www.anvisa.gov.br/tecnovigilancia" rel="noopener noreferrer" target="_blank">ANVISA — Tecnovigilância: Notificações e Alertas de Bombas de Infusão (NOTIVISA)</a></li>
  <li><a href="https://www.ismp.org/resources/infusion-pump-safety" rel="noopener noreferrer" target="_blank">ISMP — Infusion Pump Safety: Guidelines and Resources (Institute for Safe Medication Practices)</a></li>
  <li><a href="https://www.fda.gov/medical-devices/infusion-pumps" rel="noopener noreferrer" target="_blank">FDA — Infusion Pumps: Safety Communications and Guidance Documents</a></li>
  <li><a href="https://www.flukebiomedical.com/products/biomedical-test-equipment/infusion-device-analyzers" rel="noopener noreferrer" target="_blank">Fluke Biomedical — Infusion Device Analyzers IDA-4 e IDA-5: Especificações e Manuais</a></li>
</ul>
`,
};
