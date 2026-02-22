import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Equipamentos de Centro Cirúrgico: Guia Técnico para Engenheiros Clínicos',
  resumo: 'Guia técnico completo sobre os principais equipamentos de centro cirúrgico — bisturi elétrico, mesa cirúrgica, foco cirúrgico, máquina de anestesia e monitores — com especificações, normas regulatórias e boas práticas de manutenção para engenheiros clínicos e gestores hospitalares.',
  categoria: 'Profissão',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '14 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6">O centro cirúrgico é o ambiente de <strong>maior densidade tecnológica de todo o hospital</strong>: cada sala operatória reúne simultaneamente uma máquina de anestesia, monitores multiparamétricos, bisturi elétrico, mesa cirúrgica motorizada, foco cirúrgico LED, bombas de infusão e, em muitos casos, uma torre de videolaparoscopia ou sistema robótico. Para o engenheiro clínico, dominar as especificações técnicas, os requisitos normativos e os protocolos de manutenção desses equipamentos não é apenas uma competência desejável — é uma exigência crítica para garantir a segurança do paciente e a continuidade das cirurgias.</p>

<p>Se você atua na gestão do parque tecnológico hospitalar, recomendamos também a leitura do nosso <a href="/artigos/gestao-parque-tecnologico-hospitalar">Guia Completo de Gestão do Parque Tecnológico Hospitalar</a>, que contextualiza o centro cirúrgico dentro da estratégia de manutenção de toda a instituição.</p>

<h2>O Centro Cirúrgico como Ambiente de Alta Densidade Tecnológica</h2>

<p>O mercado brasileiro de equipamentos médicos movimentou <strong>R$ 26,1 bilhões em 2024</strong>, segundo dados da ABIMO, e o centro cirúrgico responde por parcela expressiva desse volume. Uma sala operatória de médio porte pode reunir entre 15 e 30 equipamentos ativos simultaneamente, cada um com suas próprias normas de segurança elétrica, protocolos de manutenção e ciclos de vida.</p>

<p>A infraestrutura física é regulada pela <strong>RDC 50/2002 da Anvisa</strong>, que estabelece área mínima de 36 m² por sala operatória geral e requisitos específicos para salas especializadas (ortopedia, cardiovascular, neurologia). A instalação elétrica obedece à <strong>NBR 13534</strong>, que classifica o centro cirúrgico como Grupo 2 — o mais restritivo —, exigindo transformadores de isolamento, sistemas de alarme de impedância e aterramentos cirúrgicos independentes.</p>
<figure>
<img src="/artigos/equipamentos-centro-cirurgico/image-1.webp" alt="Sala cirúrgica moderna equipada com mesa cirúrgica motorizada, focos LED e torre de videolaparoscopia durante procedimento" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>O centro cirúrgico moderno concentra a maior densidade de tecnologia médica de todo o hospital, exigindo gestão técnica especializada.</figcaption>
</figure>


<p>Para entender os fundamentos regulatórios que embasam todo esse ecossistema, consulte nosso artigo sobre a <a href="/artigos/iec-60601-norma-equipamentos">norma IEC 60601 e sua aplicação prática</a> no contexto hospitalar brasileiro.</p>

<h2>Bisturi Elétrico (Unidade de Eletrocirurgia): Fundamentos Técnicos</h2>

<p>A unidade de eletrocirurgia (ESU — <em>Electrosurgical Unit</em>) é o equipamento de maior risco elétrico do centro cirúrgico. Seu princípio de funcionamento baseia-se na aplicação de corrente elétrica de radiofrequência — tipicamente entre <strong>200 e 500 kHz</strong> — em tecidos biológicos, gerando calor por efeito Joule localizado para corte ou coagulação.</p>

<p>A frequência acima de 100 kHz é deliberada: nessa faixa, a corrente não estimula musculatura cardíaca nem nervos motores, eliminando o risco de fibrilação ventricular. A potência de saída varia de <strong>200 a 400 W</strong> nos modelos modernos, com dois modos principais de operação:</p>
<figure>
<img src="/artigos/equipamentos-centro-cirurgico/image-2.webp" alt="Diagrama técnico da unidade de eletrocirurgia mostrando circuitos monopolar e bipolar com parâmetros de frequência e modos de operação" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Diagrama funcional do bisturi elétrico: os circuitos monopolar e bipolar operam em frequências de radiofrequência (200–500 kHz), acima do limiar de fibrilação cardíaca.</figcaption>
</figure>


<h3>Modo Monopolar</h3>
<p>O eletrodo ativo (bisturi) concentra a energia no ponto de contato cirúrgico, e a corrente retorna ao gerador pela <strong>placa de retorno do paciente (PRP)</strong>, fixada em região de grande superfície muscular (coxa, glúteo). A dispersão inadequada da corrente de retorno é a principal causa de queimaduras em sítios remotos — daí a importância dos sistemas <strong>REM (<em>Return Electrode Monitoring</em>)</strong> e <strong>CQM (<em>Contact Quality Monitoring</em>)</strong>, que monitoram continuamente a impedância da placa e interrompem o funcionamento em caso de contato insuficiente.</p>

<h3>Modo Bipolar</h3>
<p>A corrente circula apenas entre as duas hastes de uma pinça bipolar, confinando o efeito térmico ao tecido aprisionado. É obrigatório em neurocirurgia e procedimentos oftálmicos, e recomendado em pacientes com marca-passo cardíaco implantado.</p>

<table>
  <caption>Principais fabricantes de unidades de eletrocirurgia disponíveis no Brasil</caption>
  <thead>
    <tr>
      <th>Fabricante</th>
      <th>Modelo de Referência</th>
      <th>Potência Máx.</th>
      <th>Origem</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Medtronic / Valleylab</td>
      <td>FT10 Energy Platform</td>
      <td>400 W</td>
      <td>EUA</td>
    </tr>
    <tr>
      <td>Erbe Elektromedizin</td>
      <td>VIO 3</td>
      <td>350 W</td>
      <td>Alemanha</td>
    </tr>
    <tr>
      <td>WEM Equipamentos</td>
      <td>SS-501 Max</td>
      <td>300 W</td>
      <td>Brasil (Ribeirão Preto)</td>
    </tr>
    <tr>
      <td>Deltronix</td>
      <td>SSE-10</td>
      <td>200 W</td>
      <td>Brasil (São Paulo)</td>
    </tr>
  </tbody>
</table>

<p>A norma aplicável é a <strong>IEC 60601-2-2</strong> (equipamentos de eletrocirurgia de alta frequência), transposta no Brasil via INMETRO. Inspeções preventivas semestrais devem incluir verificação de potência de saída com carga resistiva padrão (300 Ω), teste de integridade do sistema REM/CQM e calibração dos modos de corte e coagulação.</p>

<h2>Estação de Anestesia: O Coração do Controle Ventilatório</h2>

<p>A estação de anestesia é, funcionalmente, a integração de três sistemas em um único equipamento: o <strong>anestesiômetro</strong> (administração de gases e agentes voláteis), o <strong>ventilador cirúrgico</strong> e o <strong>módulo de monitorização respiratória</strong>. Sua complexidade a torna um dos equipamentos mais exigentes em termos de manutenção preventiva no parque tecnológico hospitalar.</p>

<h3>Gases e Agentes Voláteis</h3>
<p>A estação conecta-se à rede de gases medicinais da sala (O₂, N₂O e ar comprimido, conforme <strong>NBR 12188</strong>) e recebe vaporizadores calibrados com agentes inalatórios — sevoflurano, isoflurano e desflurano. Cada vaporizador é termocompensado e calibrado individualmente para garantir concentração alveolar mínima (CAM) precisa. A <strong>ISO 80601-2-13</strong> define os requisitos de segurança e desempenho para máquinas de anestesia.</p>
<figure>
<img src="/artigos/equipamentos-centro-cirurgico/image-3.webp" alt="Painel de controle de estação de anestesia com vaporizadores calibrados, fluxímetros de gases e display de capnografia EtCO2 em verde" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>A estação de anestesia integra vaporizadores calibrados, fluxímetros precisos e monitorização contínua de EtCO2 para garantir segurança ventilatória intraoperatória.</figcaption>
</figure>


<h3>Modos Ventilatórios</h3>
<p>As estações de alta complexidade oferecem os principais modos ventilatórios: <strong>VC-CMV</strong> (volume controlado), <strong>PC-CMV</strong> (pressão controlada), <strong>SIMV</strong> (ventilação mandatória intermitente sincronizada) e <strong>PSV</strong> (suporte de pressão), além de modos avançados como ventilação de alta frequência. O circuito respiratório com sistema circular e cal sodada reinalante é padrão.</p>

<table>
  <caption>Modelos de estação de anestesia com presença relevante no mercado brasileiro</caption>
  <thead>
    <tr>
      <th>Fabricante</th>
      <th>Modelo</th>
      <th>Destaque</th>
      <th>Origem</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dräger</td>
      <td>Perseus A500</td>
      <td>Ventilação turbina, sem O₂ de acionamento</td>
      <td>Alemanha</td>
    </tr>
    <tr>
      <td>GE HealthCare</td>
      <td>Aisys CS²</td>
      <td>ADU — monitorização integrada avançada</td>
      <td>EUA</td>
    </tr>
    <tr>
      <td>Magnamed</td>
      <td>Fleximag Plus</td>
      <td>Produção nacional, suporte local</td>
      <td>Brasil (São Paulo)</td>
    </tr>
    <tr>
      <td>Mindray</td>
      <td>WATO EX-65 Pro</td>
      <td>Custo-benefício, ampla base instalada</td>
      <td>China</td>
    </tr>
  </tbody>
</table>

<p>A manutenção preventiva da estação de anestesia é regulamentada pelas instruções do fabricante e pela <strong>RDC 665/2022</strong> da Anvisa, que estabelece o regime de tecnovigilância para equipamentos de suporte à vida. Revisões trimestrais devem incluir teste de estanqueidade do circuito respiratório, calibração de vaporizadores (com equipamento rastreável ao INMETRO), verificação do sistema de scavenging (captura de gases exalados) e teste funcional completo de todos os alarmes.</p>

<h2>Monitores Multiparamétricos: Vigilância Contínua do Paciente Cirúrgico</h2>

<p>O monitor multiparamétrico intraoperatório é o eixo de toda a vigilância fisiológica do paciente durante a cirurgia. Os parâmetros mínimos exigidos para anestesia geral incluem <strong>ECG contínuo</strong> (com análise de segmento ST), <strong>SpO₂</strong>, <strong>pressão arterial não invasiva (NIBP)</strong>, <strong>temperatura</strong> e <strong>capnografia (EtCO₂)</strong>. Em procedimentos de maior complexidade, adiciona-se pressão arterial invasiva (IBP), pressão venosa central (PVC) e índice bispectral (BIS) para monitorização de profundidade anestésica.</p>

<p>Os módulos de capnografia merecem atenção especial: a medição do CO₂ exalado ao final da expiração (EtCO₂) é o principal indicador de ventilação alveolar efetiva e o primeiro parâmetro alterado em situações de intubação esofágica ou obstrução de vias aéreas. Valores de referência intraoperatório: <strong>35–45 mmHg</strong>.</p>

<p>Para uma visão completa sobre monitores hospitalares em outros contextos críticos, consulte nosso guia de <a href="/artigos/equipamentos-uti-guia">equipamentos de UTI</a>.</p>

<h2>Mesa Cirúrgica: Posicionamento e Segurança Biomecânica</h2>

<p>A mesa cirúrgica é o suporte sobre o qual se organiza todo o campo operatório. As mesas modernas são totalmente motorizadas, com controle elétrico hidráulico ou eletromecânico, e oferecem movimentação em múltiplos eixos: Trendelenburg (e reverso), lateralização, flexão/extensão de dorso e regulação de altura. A capacidade de carga varia de <strong>135 kg</strong> (mesas padrão) a <strong>450 kg</strong> (mesas bariátricas de alta capacidade).</p>

<p>A norma <strong>IEC 60601-2-46</strong> define os requisitos de segurança elétrica e mecânica para mesas de operação motorizadas. No Brasil, a <strong>Barrfab</strong> (São Paulo) é referência nacional na fabricação, enquanto <strong>Maquet/Getinge</strong> domina o segmento premium de importados.</p>

<p>Pontos críticos de manutenção preventiva incluem verificação semestral de bateria de backup (mesas com operação em emergência sem rede elétrica), lubrificação dos trilhos de deslizamento lateral, teste de carga máxima com dinamômetro e inspeção das travas de segurança em todas as posições.</p>

<h2>Foco Cirúrgico LED: Iluminação de Alta Performance</h2>

<p>O foco cirúrgico atual é integralmente baseado em LED de alta potência, substituindo as antigas lâmpadas halógenas por soluções com vida útil superior a <strong>50.000 horas</strong> e consumo energético até 60% menor. Os requisitos técnicos são definidos pela <strong>IEC 60601-2-41</strong>:</p>

<table>
  <caption>Parâmetros técnicos de focos cirúrgicos LED segundo IEC 60601-2-41</caption>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Valor Mínimo</th>
      <th>Valor Típico (high-end)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Iluminância central (Ec)</td>
      <td>40.000 lux</td>
      <td>120.000–160.000 lux</td>
    </tr>
    <tr>
      <td>Índice de Renderização de Cores (CRI / Ra)</td>
      <td>85</td>
      <td>≥ 95</td>
    </tr>
    <tr>
      <td>Temperatura de cor</td>
      <td>3.500 K</td>
      <td>4.000–5.000 K (ajustável)</td>
    </tr>
    <tr>
      <td>Profundidade de iluminação (D10/D50)</td>
      <td>–</td>
      <td>D10 ≥ 14 cm / D50 ≥ 7 cm</td>
    </tr>
    <tr>
      <td>Sombra relativa</td>
      <td>–</td>
      <td>&lt; 5% (foco duplo)</td>
    </tr>
  </tbody>
</table>

<p>O CRI elevado (≥ 95) é clinicamente relevante porque permite ao cirurgião distinguir com fidelidade as tonalidades de vermelho dos diferentes tecidos vascularizados — artérias, veias, músculo e parênquima — reduzindo erros de identificação anatômica.</p>

<h2>Equipamentos de Videocirurgia e Cirurgia Robótica</h2>

<p>A torre de videolaparoscopia tornou-se equipamento padrão em centros cirúrgicos de médio e grande porte. O conjunto inclui câmera com cabeça óptica de <strong>resolução 4K</strong> (3840 × 2160 px), fonte de luz LED ou xenônio, insuflador de CO₂ (pressão alvo: 12–15 mmHg, fluxo máx: 30–45 L/min), gravador e monitor cirúrgico 4K de 32". Os principais fabricantes são Karl Storz, Olympus e Stryker.</p>

<p>A <strong>cirurgia robótica</strong> representa a fronteira atual da videocirurgia no Brasil. O sistema da Intuitive Surgical (da Vinci) ainda lidera, mas fabricantes nacionais e asiáticos começam a ganhar espaço. Para aprofundamento, consulte nosso artigo sobre <a href="/artigos/cirurgia-robotica-brasil">cirurgia robótica no Brasil: panorama e perspectivas</a>.</p>

<h2>Bombas de Infusão: Precisão Farmacológica Intraoperatória</h2>

<p>As bombas de infusão intraoperatórias dividem-se em dois tipos principais: <strong>volumétricas peristálticas</strong> (faixa de 0,1 a 1.500 mL/h, para grandes volumes) e <strong>seringas eletrônicas</strong> (0,1 a 200 mL/h, para drogas vasoativas e anestésicos intravenosos em TIVA — Anestesia Total Intravenosa).</p>

<p>A <strong>Samtronic</strong> (São Paulo) lidera o segmento nacional, enquanto B.Braun e BD Alaris dominam o mercado de importados. A <strong>RDC 751/2022</strong> da Anvisa e a <strong>IN 283/2024</strong> regulamentam os requisitos de registro e rastreabilidade para bombas de infusão no Brasil.</p>

<p>Sistemas modernos incluem biblioteca de drogas com limites de dose configuráveis (<em>drug library</em> com <em>dose error reduction software</em> — DERS), comunicação com prontuário eletrônico via HL7/FHIR e alarmes de oclusão e ar no circuito. Para detalhes sobre gestão de manutenção desses equipamentos, veja nosso guia de <a href="/artigos/manutencao-equipamentos-hospitalares">manutenção de equipamentos hospitalares</a>.</p>

<h2>Esterilização e Reprocessamento no Centro Cirúrgico</h2>

<p>Embora tecnicamente a Central de Material e Esterilização (CME) seja um setor separado, sua operação é indissociável do centro cirúrgico. As duas tecnologias predominantes são:</p>

<h3>Autoclave a Vapor Pré-vácuo</h3>
<p>Opera a <strong>134°C / 3,0 bar</strong> por ciclos de 3–4 minutos de exposição (após remoção de ar pelo vácuo fracionado). É o método padrão para instrumentais cirúrgicos termorresistentes. A <strong>Baumer</strong> (Mogi Mirim-SP) é referência nacional. Validação semestral por indicadores biológicos (<em>Geobacillus stearothermophilus</em>) e qualificação de desempenho (PQ) são obrigatórias.</p>

<h3>Esterilização por Plasma de Peróxido de Hidrogênio (H₂O₂)</h3>
<p>Indicada para materiais termossensíveis (endoscópios, robótica, eletrônicos). Opera em ciclos de <strong>28–75 minutos</strong> a temperaturas de <strong>37–55°C</strong>, com peróxido de hidrogênio a 59% vaporizado e ionizado em plasma de baixa temperatura. Compatibilidade de carga deve ser verificada para cada ciclo — celulose e líquidos são incompatíveis.</p>

<h2>Protocolo de Manutenção Preventiva: Visão Geral por Equipamento</h2>

<table>
  <caption>Frequências recomendadas de manutenção preventiva nos principais equipamentos do CC</caption>
  <thead>
    <tr>
      <th>Equipamento</th>
      <th>Frequência</th>
      <th>Principais Verificações</th>
      <th>Norma de Referência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bisturi Elétrico (ESU)</td>
      <td>Semestral</td>
      <td>Potência de saída (300 Ω), teste REM/CQM, integridade de cabos</td>
      <td>IEC 60601-2-2</td>
    </tr>
    <tr>
      <td>Estação de Anestesia</td>
      <td>Trimestral</td>
      <td>Estanqueidade, calibração de vaporizadores, alarmes, scavenging</td>
      <td>ISO 80601-2-13</td>
    </tr>
    <tr>
      <td>Monitor Multiparamétrico</td>
      <td>Semestral</td>
      <td>Calibração de SpO₂, NIBP, EtCO₂, teste de alarmes</td>
      <td>IEC 60601-1</td>
    </tr>
    <tr>
      <td>Mesa Cirúrgica</td>
      <td>Semestral</td>
      <td>Bateria de backup, travas mecânicas, teste de carga, lubrificação</td>
      <td>IEC 60601-2-46</td>
    </tr>
    <tr>
      <td>Foco Cirúrgico LED</td>
      <td>Anual</td>
      <td>Medição de iluminância, CRI, integridade estrutural do braço</td>
      <td>IEC 60601-2-41</td>
    </tr>
    <tr>
      <td>Bomba de Infusão</td>
      <td>Semestral</td>
      <td>Acurácia de fluxo (±5%), alarmes, bateria interna, sensores de oclusão</td>
      <td>IEC 60601-2-24</td>
    </tr>
    <tr>
      <td>Autoclave</td>
      <td>Semestral + validação anual</td>
      <td>Teste Bowie-Dick, indicadores biológicos, calibração de sensores</td>
      <td>NBR ISO 17665</td>
    </tr>
  </tbody>
</table>

<p>A estruturação de um plano de manutenção baseado em risco é detalhada no nosso artigo sobre <a href="/artigos/engenharia-clinica-guia-completo">engenharia clínica: guia completo para profissionais</a>. A <strong>RDC 665/2022</strong> e a <strong>Portaria INMETRO 384/2020</strong> são as principais balizas regulatórias para equipamentos de suporte à vida e produtos para saúde sujeitos à metrologia legal no Brasil.</p>

<h2>Tendências Tecnológicas e o Futuro do Centro Cirúrgico</h2>

<p>O centro cirúrgico está em rota de transformação acelerada. Quatro vetores concentram as principais inovações em curso:</p>

<p><strong>Integração e OR digitalizada:</strong> plataformas como Stryker iSuite, Karl Storz OR1 e Trumpf TruSystem integram todos os equipamentos da sala em um único sistema de controle touchscreen com protocolo de comunicação DICOM/HL7, permitindo gerenciamento centralizado de câmeras, iluminação, mesa e gravação intraoperatória.</p>

<p><strong>Inteligência artificial intraoperatória:</strong> algoritmos de visão computacional para reconhecimento de fases cirúrgicas, identificação de estruturas anatômicas em videocirurgia e detecção precoce de complicações (sangramento, desembainhamento de nervo) já estão em validação clínica. Fabricantes como Medtronic (Touch Surgery) e startups brasileiras avançam nessa direção.</p>

<p><strong>Conectividade e manutenção preditiva:</strong> equipamentos com IoMT (<em>Internet of Medical Things</em>) transmitem dados operacionais em tempo real ao CMMS (<em>Computerized Maintenance Management System</em>), permitindo manutenção preditiva baseada em indicadores de desgaste real — e não mais em calendário fixo.</p>

<p><strong>Sustentabilidade:</strong> o centro cirúrgico é o maior gerador de resíduo hospitalar por m². Iniciativas de reprocessamento de dispositivos de uso único (SUD), esterilização de baixo impacto e redução do consumo de gases fluorados (desflurano tem potencial de aquecimento global 2.540 vezes maior que o CO₂) ganham tração regulatória e ambiental.</p>

<p>Para acompanhar as normas técnicas internacionais que regulamentam esses equipamentos, o portal da <a href="https://www.iec.ch/homepage" target="_blank" rel="noopener noreferrer">IEC (International Electrotechnical Commission)</a> e o <a href="https://www.gov.br/inmetro/pt-br" target="_blank" rel="noopener noreferrer">INMETRO</a> são as fontes primárias. A <a href="https://www.abimo.org.br" target="_blank" rel="noopener noreferrer">ABIMO</a> publica relatórios anuais do mercado brasileiro de equipamentos médicos. Para regulação sanitária, a consulta ao <a href="https://www.gov.br/anvisa/pt-br" target="_blank" rel="noopener noreferrer">portal da Anvisa</a> é imprescindível para acompanhar atualizações das RDCs. A norma técnica de infraestrutura elétrica hospitalar pode ser acessada pelo acervo da <a href="https://www.abnt.org.br" target="_blank" rel="noopener noreferrer">ABNT</a>.</p>

<h2>Perguntas Frequentes sobre Equipamentos de Centro Cirúrgico</h2>

<h3>Qual é a principal norma de segurança elétrica para equipamentos do centro cirúrgico?</h3>
<p>A norma geral é a <strong>IEC 60601-1</strong> (segurança de equipamentos eletromédicos), com normas colaterais e particulares para cada tipo de equipamento: IEC 60601-2-2 para bisturi elétrico, ISO 80601-2-13 para máquinas de anestesia, IEC 60601-2-41 para focos cirúrgicos e IEC 60601-2-46 para mesas de operação. No Brasil, estas normas são adotadas pela ABNT e referenciadas pela Anvisa (RDC 751/2022) e INMETRO (Portaria 384/2020) para fins de registro e metrologia legal.</p>

<h3>Por que o bisturi elétrico não causa fibrilação cardíaca se passa corrente pelo paciente?</h3>
<p>Porque opera em frequências de radiofrequência (200–500 kHz), muito acima do limiar de estimulação de células nervosas e musculares cardíacas (abaixo de 1 kHz). Em frequências elevadas, a corrente não consegue despolarizar membranas celulares de forma suficientemente rápida para gerar potenciais de ação — ela simplesmente aquece o tecido por efeito Joule, sem estimulação neuromuscular.</p>

<h3>Com que frequência deve ser feita a manutenção preventiva da estação de anestesia?</h3>
<p>A frequência mínima recomendada é <strong>trimestral</strong> para verificações funcionais completas (estanqueidade, calibração de vaporizadores, alarmes e scavenging), conforme orientação dos fabricantes e exigências da RDC 665/2022. Adicionalmente, a qualificação de desempenho (PQ) dos vaporizadores deve ser realizada anualmente com equipamento rastreável ao INMETRO. Verificações diárias (check-list pré-operatório) são de responsabilidade da equipe de anestesia.</p>

<h3>O que é o sistema REM no bisturi elétrico e por que ele é importante?</h3>
<p>REM (<em>Return Electrode Monitoring</em>) é um sistema eletrônico que monitora continuamente a impedância de contato entre a placa de retorno do paciente e a pele. Caso a placa descole parcialmente (reduzindo a área de contato e elevando a densidade de corrente de retorno), o gerador interrompe automaticamente o funcionamento antes que ocorra queimadura no sítio da placa. É obrigatório em unidades de eletrocirurgia modernas e um dos principais mecanismos de prevenção de eventos adversos cirúrgicos.</p>

<h3>Qual a diferença entre esterilização a vapor e por plasma de peróxido de hidrogênio na CME do CC?</h3>
<p>A autoclave a vapor (134°C, 3,0 bar) é o método de referência para instrumentais metálicos termorresistentes — é mais rápida, barata e com maior capacidade de carga. O plasma de H₂O₂ (37–55°C) é indicado exclusivamente para materiais termossensíveis, como endoscópios flexíveis com canais internos, instrumentais robóticos e dispositivos eletrônicos que não suportam o calor do vapor. Celulose, líquidos e materiais absorventes são incompatíveis com o plasma e devem ser esterilizados por outros métodos.</p>
`,
};
