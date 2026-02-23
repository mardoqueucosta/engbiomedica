import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Informática em Saúde: HIS, Prontuário Eletrônico e Interoperabilidade FHIR/HL7 [2026]',
  resumo: 'Guia completo sobre informática em saúde: HIS, prontuário eletrônico do paciente, padrões HL7 e FHIR, interoperabilidade, RNDS, mercado brasileiro e carreira para engenheiros biomédicos.',
  categoria: 'Inovação',
  categoriaVariant: 'amber',
  data: '2026-02-22',
  leitura: '18 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Informática em saúde</strong> é o campo multidisciplinar que aplica ciência da informação, ciência da computação e engenharia aos desafios da saúde humana — desde o registro do prontuário eletrônico do paciente até a troca de dados entre hospitais via padrões como <strong>FHIR e HL7</strong>. Definida pela AMIA como "a ciência e arte de utilizar dados, informação e conhecimento para melhorar a saúde humana", a área envolve sistemas de informação hospitalar (HIS), interoperabilidade, inteligência artificial clínica e governança de dados sensíveis. No Brasil, o mercado de saúde digital movimentou mais de R$ 464 milhões em investimentos federais em 2024, enquanto o setor privado amplia a adoção de plataformas integradas — tornando a informática em saúde uma das áreas com maior crescimento de empregos para profissionais de <a href="/artigos/o-que-faz-engenheiro-biomedico-9-caminhos">engenharia biomédica</a>.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>O que é informática em saúde e suas subáreas</h2>

<p>A informática em saúde não é uma disciplina monolítica. A AMIA — <em>American Medical Informatics Association</em>, fundada em 1988 — estrutura o campo em cinco grandes subáreas, cada uma com metodologias, ferramentas e públicos-alvo distintos:</p>

<table>
  <thead>
    <tr>
      <th>Subárea</th>
      <th>Foco principal</th>
      <th>Exemplos de aplicação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Informática Clínica</strong></td>
      <td>Ponto de cuidado, prontuário, CDSS</td>
      <td>PEP, CPOE, alertas de interação medicamentosa</td>
    </tr>
    <tr>
      <td><strong>Bioinformática</strong></td>
      <td>Dados genômicos, proteômicos</td>
      <td>Sequenciamento NGS, bancos de variantes</td>
    </tr>
    <tr>
      <td><strong>Informática em Saúde Pública</strong></td>
      <td>Epidemiologia, vigilância</td>
      <td>DATASUS, SINAN, rastreamento de surtos</td>
    </tr>
    <tr>
      <td><strong>Informática para o Consumidor</strong></td>
      <td>Paciente como usuário</td>
      <td>Meu SUS Digital, apps de saúde, wearables</td>
    </tr>
    <tr>
      <td><strong>Informática em Imagem Médica</strong></td>
      <td>PACS, DICOM, IA diagnóstica</td>
      <td>PACS Aurora, deep learning radiológico</td>
    </tr>
  </tbody>
</table>

<p>No Brasil, a <a href="https://sbis.org.br" target="_blank" rel="noopener">SBIS — Sociedade Brasileira de Informática em Saúde</a>, fundada em 19 de novembro de 1986 em Campinas, representa o campo nacionalmente. A entidade organiza o CBIS (Congresso Brasileiro de Informática em Saúde, bienal), publica o Journal of Health Informatics (JHI) e concede os certificados SBIS/CFM de qualidade para prontuários eletrônicos, com mais de 185 certificados ativos. A SBEB — Sociedade Brasileira de Engenharia Biomédica — inclui informática em saúde como área de atuação formal para engenheiros biomédicos.</p>

<p>Internacionalmente, a IMIA (International Medical Informatics Association, sede na Suíça) reúne 59 sociedades-membro e organiza o MedInfo, maior congresso mundial da área — cuja edição de 2015 ocorreu em São Paulo. A <a href="https://www.himss.org" target="_blank" rel="noopener">HIMSS</a> (Healthcare Information and Management Systems Society) conta com mais de 125.000 membros globais e é referência em maturidade digital hospitalar pelo modelo EMRAM.</p>

<h2>Breve história: dos mainframes ao FHIR</h2>

<p>A trajetória da informática em saúde acompanha a evolução da computação, com marcos específicos que moldaram a realidade brasileira atual:</p>

<table>
  <thead>
    <tr>
      <th>Período</th>
      <th>Marco global</th>
      <th>Marco brasileiro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1950–60s</td>
      <td>Primeiros computadores hospitalares nos EUA</td>
      <td>Primeiros centros universitários de computação</td>
    </tr>
    <tr>
      <td>1967</td>
      <td>IFIP-TC4 → origem da IMIA</td>
      <td>—</td>
    </tr>
    <tr>
      <td>1970s</td>
      <td>MYCIN (Shortliffe/Stanford): primeiro CDSS relevante</td>
      <td>Prof. Luiz Carlos Lobo (MUMPS/UFRJ); InCor/USP (1976); Sabbatini/USP-RP</td>
    </tr>
    <tr>
      <td>1986</td>
      <td>Fundação da AMIA (EUA, 1988)</td>
      <td>Fundação da SBIS (19/11/1986, Campinas)</td>
    </tr>
    <tr>
      <td>1987</td>
      <td>HL7 v2 — padrão de mensagens clínicas</td>
      <td>—</td>
    </tr>
    <tr>
      <td>1990</td>
      <td>—</td>
      <td>Criação do DATASUS</td>
    </tr>
    <tr>
      <td>2000s</td>
      <td>CDA (ANSI 2000/2005), C-CDA (2012)</td>
      <td>CFM 1.638/2002, 1.821/2007; certificação SBIS/CFM (2007)</td>
    </tr>
    <tr>
      <td>2012</td>
      <td>FHIR lançado (maio/2012) por Grahame Grieve</td>
      <td>Instituto HL7 Brasil fundado (2011)</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>FHIR R4 (padrão para mandatos nacionais)</td>
      <td>Brasil ingressa no SNOMED CT (abril/2018); Lei 13.787/2018</td>
    </tr>
    <tr>
      <td>2020–25</td>
      <td>ONC Final Rule (EUA), CMS-0057-F</td>
      <td>RNDS lançada; Meu SUS Digital 60M downloads; Decreto 12.560/2025</td>
    </tr>
  </tbody>
</table>

<h2>Sistemas de Informação Hospitalar (HIS): arquitetura e módulos</h2>

<p>Um Sistema de Informação Hospitalar (HIS) é a espinha dorsal digital de uma instituição de saúde. Sua arquitetura integra camadas administrativas, clínicas e departamentais, geralmente sobre barramento de integração (ESB/middleware) com suporte a padrões HL7 e FHIR.</p>

<h3>Módulos administrativos</h3>

<p>Os módulos administrativos sustentam a operação financeira e logística da instituição:</p>
<figure>
<img src="/artigos/informatica-saude-his-prontuario/image-1.webp" alt="Diagrama de arquitetura de Sistema de Informação Hospitalar (HIS) com módulos clínicos, administrativos e interoperabilidade HL7 FHIR" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Arquitetura típica de HIS moderno: módulos administrativos, clínicos e departamentais integrados por barramento HL7/FHIR.</figcaption>
</figure>


<ul>
  <li><strong>ADT (Admission, Discharge, Transfer):</strong> controle de leitos, internações, altas e transferências — gera mensagens HL7 ADT^A01/A03/A08</li>
  <li><strong>MPI (Master Patient Index):</strong> deduplicação e unicidade do cadastro do paciente em toda a rede</li>
  <li><strong>Faturamento TISS/TUSS:</strong> geração de guias e faturas para operadoras de plano de saúde conforme padrão ANS</li>
  <li><strong>Almoxarifado e OPME:</strong> gestão de estoque, rastreabilidade de órteses, próteses e materiais especiais</li>
  <li><strong>BI/Analytics:</strong> dashboards de desempenho, produtividade e indicadores regulatórios</li>
</ul>

<h3>Módulos clínicos</h3>

<ul>
  <li><strong>PEP (Prontuário Eletrônico do Paciente):</strong> registro longitudinal, notas de evolução, plano de cuidados</li>
  <li><strong>CPOE (Computerized Physician Order Entry):</strong> prescrição eletrônica de medicamentos, exames e dietas</li>
  <li><strong>CDSS (Clinical Decision Support System):</strong> alertas de alergias, interações medicamentosas, doses pediátricas</li>
  <li><strong>Módulo de enfermagem:</strong> checagem de medicamentos, balanço hídrico, escalas (Braden, Glasgow, Morse)</li>
  <li><strong>Centro cirúrgico:</strong> agendamento, checklist cirúrgico (OMS), anestesia, recuperação</li>
</ul>

<h3>Módulos departamentais</h3>

<ul>
  <li><strong>LIS (Laboratory Information System):</strong> gestão de amostras, resultados, controle de qualidade analítica</li>
  <li><strong>PACS/RIS (Picture Archiving and Communication System / Radiology Information System):</strong> armazenamento e distribuição de imagens DICOM, laudos radiológicos</li>
  <li><strong>Farmácia hospitalar:</strong> dispensação por dose unitária, controle de psicotrópicos, fracionamento</li>
</ul>

<h2>Principais fornecedores de HIS no Brasil</h2>

<p>O mercado brasileiro de HIS é dominado por poucos grandes players, com crescente internacionalização. Os dados a seguir refletem o cenário de 2024–2025:</p>

<table>
  <thead>
    <tr>
      <th>Fornecedor</th>
      <th>Produto principal</th>
      <th>Alcance</th>
      <th>Destaque</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>MV Informática</strong></td>
      <td>Soul MV (1° HIS 100% web do Brasil)</td>
      <td>~2.000 instituições; 50k+ médicos</td>
      <td>Best in KLAS 6 anos consecutivos; 23 hospitais HIMSS; meta R$1B em receita até 2027</td>
    </tr>
    <tr>
      <td><strong>Philips Tasy</strong></td>
      <td>Tasy EMR</td>
      <td>1.000+ instituições</td>
      <td>Único PEP registrado na ANVISA; 10+ instituições com HIMSS EMRAM 6/7; origem Blumenau/SC</td>
    </tr>
    <tr>
      <td><strong>TOTVS Saúde</strong></td>
      <td>TOTVS Saúde</td>
      <td>650 clientes de saúde</td>
      <td>R$20M+ em P&D anual; integração ERP nativa</td>
    </tr>
    <tr>
      <td><strong>Pixeon</strong></td>
      <td>Aurora PACS</td>
      <td>3.000+ instituições; 42M pacientes</td>
      <td>4x Best in KLAS PACS; líder em imagem médica no Brasil</td>
    </tr>
    <tr>
      <td><strong>Wareline</strong></td>
      <td>Wareline HIS</td>
      <td>370+ instituições</td>
      <td>11% de todos os pacientes hospitalizados no Brasil</td>
    </tr>
    <tr>
      <td><strong>InterSystems TrakCare</strong></td>
      <td>TrakCare</td>
      <td>Rede pública do DF</td>
      <td>2,5M+ cidadãos; economia projetada de R$100M/ano</td>
    </tr>
  </tbody>
</table>

<h3>Cenário global: Epic, Oracle e o mercado de US$ 350–520 bilhões</h3>

<p>No mercado norte-americano — referência global para HIS — a Epic Systems domina com US$ 5,7 bilhões em receita (2024), 42,3% dos hospitais de cuidado agudo e 54,9% dos leitos hospitalares dos EUA. Sua rede Care Everywhere processa mais de 220 milhões de registros por mês, cobrindo mais de 305 milhões de pacientes. A Oracle Health (ex-Cerner, adquirida por US$ 28,3 bilhões em 2022) detém 22,9% do mercado, mas perdeu 74 hospitais em 2024 para concorrentes, em meio à transição para sua nova plataforma AI-first. A MEDITECH aparece em terceiro lugar com 14,8%. O mercado global de Health IT foi estimado entre US$ 350 e 520 bilhões, com forte expansão projetada para a próxima década.</p>

<h2>Prontuário Eletrônico do Paciente (PEP): legislação e adoção no Brasil</h2>

<p>O <strong>Prontuário Eletrônico do Paciente (PEP)</strong> é o registro digital centrado na instituição, enquanto o <strong>RES (Registro Eletrônico de Saúde)</strong> é o conceito mais amplo, transversal a múltiplas instituições ao longo da vida do paciente. A SBIS criou ainda a categoria <strong>S-RES</strong> para sistemas que suportam o compartilhamento interinstitucional.</p>

<h3>Marco legal do PEP no Brasil</h3>

<table>
  <thead>
    <tr>
      <th>Norma</th>
      <th>Ano</th>
      <th>Disposição principal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CFM 1.638/2002</td>
      <td>2002</td>
      <td>Define prontuário médico e responsabilidade de guarda</td>
    </tr>
    <tr>
      <td>CFM 1.821/2007</td>
      <td>2007</td>
      <td>Aprova normas técnicas para PEP; permite eliminação do papel</td>
    </tr>
    <tr>
      <td>CFM 2.218/2018</td>
      <td>2018</td>
      <td>Atualiza requisitos de segurança e autenticação para PEP</td>
    </tr>
    <tr>
      <td>Lei 13.787/2018</td>
      <td>2018</td>
      <td>Digitalização de prontuários; guarda obrigatória por 20 anos mínimos</td>
    </tr>
    <tr>
      <td>CFM 2.299/2021</td>
      <td>2021</td>
      <td>Regulamenta telemedicina e prontuário digital na prática à distância</td>
    </tr>
    <tr>
      <td>LGPD (Lei 13.709/2018)</td>
      <td>2018/2020</td>
      <td>Dados de saúde classificados como dados sensíveis; exige consentimento específico</td>
    </tr>
  </tbody>
</table>

<h3>Certificação SBIS/CFM</h3>

<p>A certificação SBIS/CFM avalia sistemas de PEP em dois níveis de garantia de segurança (NGS):</p>

<ul>
  <li><strong>NGS1:</strong> controles obrigatórios de autenticação, auditoria e integridade — permite uso sem papel em contextos específicos</li>
  <li><strong>NGS2:</strong> todos os controles do NGS1 mais assinatura digital com certificado ICP-Brasil — habilita a <em>completa</em> eliminação do prontuário físico</li>
</ul>

<p>A certificação é voluntária, tem validade de 2 anos e já conta com mais de 185 certificados ativos. É considerada pelo mercado como diferencial competitivo e referência de qualidade técnica.</p>

<h3>Dados de adoção no Brasil (2024)</h3>

<p>O panorama brasileiro revela avanços expressivos mas desigualdades regionais persistentes:</p>

<table>
  <thead>
    <tr>
      <th>Indicador</th>
      <th>Dado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Estabelecimentos com sistema eletrônico</td>
      <td>92% do total (2024)</td>
    </tr>
    <tr>
      <td>UBS com PEP eletrônico (e-SUS APS)</td>
      <td>97,6%</td>
    </tr>
    <tr>
      <td>Estabelecimentos ainda mistos (papel + eletrônico)</td>
      <td>55%</td>
    </tr>
    <tr>
      <td>Adoção na região Sul</td>
      <td>93%</td>
    </tr>
    <tr>
      <td>Adoção na região Norte</td>
      <td>79%</td>
    </tr>
    <tr>
      <td>Menor índice estadual (Amapá)</td>
      <td>66%</td>
    </tr>
    <tr>
      <td>UBS com oferta de teleconsulta</td>
      <td>39%</td>
    </tr>
    <tr>
      <td>Estabelecimentos que compartilham PEP com especialistas</td>
      <td>25,3%</td>
    </tr>
  </tbody>
</table>

<p>Os benefícios clínicos documentados são expressivos: sistemas de CDSS maduros alcançam <strong>redução de até 70% nos erros de medicação</strong>, e 94% dos médicos norte-americanos relatam que o registro clínico está disponível no ponto de cuidado quando necessário.</p>

<h2>Padrões de interoperabilidade: HL7 v2, CDA e FHIR</h2>

<p>Interoperabilidade em saúde ocorre em três níveis: <strong>sintático</strong> (estrutura da mensagem), <strong>semântico</strong> (significado compartilhado dos dados) e <strong>organizacional</strong> (acordos entre instituições). Os padrões HL7 endereçam primariamente os dois primeiros níveis.</p>

<h3>HL7 v2 — o padrão mais adotado do mundo</h3>

<p>Criado em 1987, o HL7 v2 é uma especificação de mensagens pipe-delimited (separadas por |) que ainda hoje é o padrão dominante em integrações hospitalares. Uma mensagem HL7 v2 típica possui segmentos identificados por três letras:</p>
<figure>
<img src="/artigos/informatica-saude-his-prontuario/image-2.webp" alt="Comparativo técnico dos padrões de interoperabilidade em saúde HL7 v2, CDA e FHIR R4 com exemplos de estrutura de dados" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Evolução dos padrões HL7: de mensagens pipe-delimited (v2) ao FHIR R4 com APIs RESTful e JSON.</figcaption>
</figure>


<table>
  <thead>
    <tr>
      <th>Segmento</th>
      <th>Nome</th>
      <th>Conteúdo principal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MSH</td>
      <td>Message Header</td>
      <td>Remetente, destinatário, tipo de mensagem, timestamp</td>
    </tr>
    <tr>
      <td>PID</td>
      <td>Patient Identification</td>
      <td>Nome, CPF, data de nascimento, endereço</td>
    </tr>
    <tr>
      <td>OBR</td>
      <td>Observation Request</td>
      <td>Exame solicitado, data/hora, médico solicitante</td>
    </tr>
    <tr>
      <td>OBX</td>
      <td>Observation/Result</td>
      <td>Resultado do exame, unidade, valor de referência</td>
    </tr>
  </tbody>
</table>

<p>Os principais tipos de mensagem HL7 v2 em uso hospitalar são: <strong>ADT</strong> (cadastro/movimentação de paciente), <strong>ORM</strong> (solicitação de exames), <strong>ORU</strong> (resultado de exames) e <strong>SIU</strong> (agendamento). Apesar de sua idade, o HL7 v2 persiste porque é amplamente implementado, de baixo custo de integração e suficientemente flexível para adaptações locais — embora essa flexibilidade gere variações que dificultam interoperabilidade automática.</p>

<h3>HL7 v3 e CDA</h3>

<p>O HL7 v3, baseado no modelo RIM (Reference Information Model), foi considerado demasiadamente complexo pela comunidade e teve adoção limitada. O <strong>CDA (Clinical Document Architecture)</strong>, derivado do HL7 v3 e padronizado pela ANSI em 2000 (revisão 2005), obteve maior sucesso — especialmente o <strong>C-CDA (Consolidated CDA, 2012)</strong>, adotado como padrão para documentos clínicos nos EUA. O próprio HL7 International reorientou seus esforços futuros para o FHIR a partir de 2012.</p>

<h3>FHIR — Fast Healthcare Interoperability Resources</h3>

<p>O <strong>FHIR</strong> (pronuncia-se "fire"), lançado em maio de 2012 por Grahame Grieve, representa uma ruptura paradigmática: em vez de mensagens binárias ou documentos XML complexos, o FHIR utiliza APIs RESTful com recursos (Resources) representados em JSON ou XML. Cada Resource modela um conceito clínico específico — Patient, Observation, Condition, Medication, Encounter, Practitioner, entre os mais de 150 Resources disponíveis na versão R5 (2023).</p>

<table>
  <thead>
    <tr>
      <th>Versão FHIR</th>
      <th>Ano</th>
      <th>Status</th>
      <th>Destaque</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DSTU1</td>
      <td>2014</td>
      <td>Trial Use</td>
      <td>Primeira versão oficial</td>
    </tr>
    <tr>
      <td>DSTU2</td>
      <td>2015</td>
      <td>Trial Use</td>
      <td>Adoção inicial por grandes fornecedores</td>
    </tr>
    <tr>
      <td>STU3</td>
      <td>2017</td>
      <td>Trial Use</td>
      <td>SMART on FHIR (OAuth 2.0)</td>
    </tr>
    <tr>
      <td><strong>R4</strong></td>
      <td><strong>2018/2019</strong></td>
      <td><strong>Normative (estável)</strong></td>
      <td><strong>Versão mais adotada; mandato ONC EUA; base da RNDS Brasil</strong></td>
    </tr>
    <tr>
      <td>R5</td>
      <td>2023</td>
      <td>Normative</td>
      <td>157 Resources; melhorias em subscrições e bulk data</td>
    </tr>
    <tr>
      <td>R6</td>
      <td>Em desenvolvimento</td>
      <td>—</td>
      <td>Convergência com HL7 v2 e CDA</td>
    </tr>
  </tbody>
</table>

<p>O impacto global do FHIR é notável: <strong>71% dos países já utilizam FHIR ativamente</strong>, com Implementation Guides publicados para 79% das nações membros da IMIA. O <strong>SMART on FHIR</strong> (Substitutable Medical Applications, Reusable Technologies) adiciona uma camada de autorização via OAuth 2.0, permitindo que aplicativos de terceiros se conectem com segurança a servidores FHIR de hospitais e seguradoras.</p>

<p>Nos EUA, a regulamentação tornou o FHIR R4 obrigatório: o <em>21st Century Cures Act</em>, a <em>ONC Final Rule</em> e o padrão USCDI (United States Core Data for Interoperability) estabeleceram o FHIR R4 como padrão nacional. O CMS-0057-F projeta economia de US$ 15 bilhões por década com a redução de fardos administrativos. A rede TEFCA (Trusted Exchange Framework) processa mais de 1 bilhão de documentos clínicos por mês.</p>

<p>Saiba mais sobre as aplicações de <a href="/artigos/processamento-imagens-medicas">processamento de imagens médicas</a> e padrões DICOM, que complementam o FHIR no ecossistema de interoperabilidade.</p>

<h2>Terminologias clínicas: SNOMED CT, LOINC, CID e TUSS</h2>

<p>A interoperabilidade semântica — o entendimento comum do <em>significado</em> dos dados — depende de terminologias clínicas padronizadas. Sem elas, um código de diagnóstico em um sistema pode não ter o mesmo significado em outro. As principais terminologias em uso no Brasil são:</p>

<table>
  <thead>
    <tr>
      <th>Terminologia</th>
      <th>Escopo</th>
      <th>Tamanho</th>
      <th>Status no Brasil</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>SNOMED CT</strong></td>
      <td>Conceitos clínicos gerais (diagnósticos, procedimentos, achados)</td>
      <td>350.000+ conceitos</td>
      <td>Membro desde abril/2018; adoção pela RNDS</td>
    </tr>
    <tr>
      <td><strong>LOINC</strong></td>
      <td>Exames laboratoriais e observações clínicas</td>
      <td>90.000+ termos</td>
      <td>Adotado na RNDS; gratuito</td>
    </tr>
    <tr>
      <td><strong>CID-10/11</strong></td>
      <td>Classificação Internacional de Doenças</td>
      <td>~14.400 (CID-10) / 55.000+ (CID-11)</td>
      <td>CID-10 obrigatório; CID-11 em transição</td>
    </tr>
    <tr>
      <td><strong>TUSS/TISS</strong></td>
      <td>Procedimentos e faturamento para operadoras (ANS)</td>
      <td>~8.000 procedimentos</td>
      <td>Obrigatório para planos de saúde</td>
    </tr>
    <tr>
      <td><strong>CIAP-2</strong></td>
      <td>Classificação Internacional de Atenção Primária</td>
      <td>~700 códigos</td>
      <td>Adotado no e-SUS APS</td>
    </tr>
  </tbody>
</table>

<p>Além das terminologias, os perfis de implementação IHE (Integrating the Healthcare Enterprise) especificam como padrões existentes devem ser usados em conjunto para casos de uso reais. Os principais perfis relevantes no Brasil incluem: <strong>XDS</strong> (troca de documentos), <strong>PIX/PDQ</strong> (identificação de pacientes), <strong>ATNA</strong> (auditoria e autenticação), <strong>MHD/MHDS</strong> (documentos via FHIR) e <strong>XCA/XCPD</strong> (consulta entre comunidades).</p>

<h2>RNDS e a Estratégia de Saúde Digital do Brasil</h2>

<p>A <strong>RNDS — Rede Nacional de Dados em Saúde</strong> é a infraestrutura federal de interoperabilidade em saúde do Brasil, instituída pela Portaria GM/MS 1.432/2020 e fortalecida pelo Decreto 12.560/2025. Tecnicamente, a RNDS é um conjunto de APIs FHIR R4 com autenticação mútua SSL e certificados ICP-Brasil, operado pelo DATASUS.</p>

<h3>Números da RNDS (2025)</h3>

<table>
  <thead>
    <tr>
      <th>Indicador</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Registros clínicos integrados</td>
      <td>2,8 bilhões+</td>
    </tr>
    <tr>
      <td>Estados + DF integrados</td>
      <td>21 estados + DF</td>
    </tr>
    <tr>
      <td>Municípios integrados</td>
      <td>3.805 (68,3% do total)</td>
    </tr>
    <tr>
      <td>Investimento federal (2024)</td>
      <td>R$ 464 milhões</td>
    </tr>
    <tr>
      <td>Estados/municípios no SUS Digital</td>
      <td>100% aderiram</td>
    </tr>
  </tbody>
</table>

<h3>Meu SUS Digital</h3>

<p>O aplicativo <strong>Meu SUS Digital</strong> é a interface do cidadão com a RNDS. Com mais de 60 milhões de downloads e 29 milhões de usuários ativos mensais, é o aplicativo de saúde mais baixado nas lojas iOS e Android do Brasil. Oferece mais de 30 funcionalidades, incluindo carteira de vacinação digital, resultados de exames do SUS, histórico de atendimentos, e acesso ao histórico de saúde pessoal integrado à RNDS.</p>
<figure>
<img src="/artigos/informatica-saude-his-prontuario/image-3.webp" alt="Mapa de cobertura da Rede Nacional de Dados em Saúde RNDS no Brasil com 21 estados integrados e 3.805 municípios conectados em 2025" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Cobertura da RNDS em 2025: 21 estados + DF integrados, 3.805 municípios e 2,8 bilhões de registros clínicos.</figcaption>
</figure>


<h3>e-SUS APS e o salto da Atenção Primária</h3>

<p>A atenção primária à saúde passou pela maior transformação digital de sua história: em 2017, apenas 36% das UBS (Unidades Básicas de Saúde) não utilizavam PEP eletrônico — índice que chegou a 64% de não-adoção. Em 2024, <strong>97,6% das UBS registram atendimentos no e-SUS APS</strong>. Em junho de 2025, o sistema SIAPS substituiu o SISAB como plataforma central da APS digital, com foco em melhoria de usabilidade e integração com a RNDS.</p>

<p>A <strong>Estratégia de Saúde Digital 2028 (ESD28)</strong>, lançada pela Portaria 3.632/2020, estrutura 7 prioridades estratégicas para o período. Em 2023, o Decreto 11.358/2023 criou a SEIDIGI (Secretaria de Informação e Saúde Digital) para coordenar as ações federais. O índice de maturidade digital hospitalar, apurado em 2024, ainda é de apenas 46,19% — indicando vasto espaço para crescimento.</p>

<h2>Outros padrões e tecnologias do ecossistema</h2>

<p>O ecossistema de informática em saúde vai além do HL7/FHIR. Outros padrões e tecnologias complementam a interoperabilidade e o funcionamento do sistema como um todo:</p>

<h3>DICOM e imagem médica</h3>

<p>O padrão <strong>DICOM (Digital Imaging and Communications in Medicine)</strong> governa o armazenamento, transmissão e exibição de imagens médicas — radiografias, tomografias, ressonâncias, ultrassons. Todo arquivo de imagem médica digital é um arquivo DICOM. Os sistemas PACS (Picture Archiving and Communication System) armazenam e distribuem esses arquivos, enquanto os sistemas RIS gerenciam o fluxo radiológico. O Brasil conta com o Pixeon Aurora como líder de mercado, com mais de 42 milhões de pacientes cadastrados. Para aprofundar o tema, veja o artigo sobre <a href="/artigos/processamento-imagens-medicas">processamento de imagens médicas</a>.</p>

<h3>openEHR</h3>

<p>O openEHR é uma especificação de arquitetura aberta para prontuários eletrônicos baseada no conceito de <em>archetypes</em> — modelos de conhecimento clínico independentes do software. Tem adoção significativa na Noruega, Austrália e crescente na América Latina, especialmente em projetos acadêmicos e institucionais de longo prazo.</p>

<h3>Segurança e privacidade</h3>

<p>Dados de saúde são classificados pela LGPD como <strong>dados sensíveis</strong>, exigindo base legal específica, consentimento explícito e medidas técnicas reforçadas de proteção. Os requisitos de segurança para sistemas de saúde incluem: autenticação forte (MFA), criptografia em trânsito e em repouso, controle de acesso baseado em papel (RBAC), auditoria de todos os acessos ao prontuário e gestão de incidentes conforme a LGPD e a ANS.</p>

<h2>Tendências: IA, nuvem, IoMT e telemedicina</h2>

<p>A convergência de múltiplas tecnologias está remodelando a informática em saúde em velocidade crescente:</p>

<h3>Inteligência artificial nos EHRs</h3>

<p>A Epic Systems mantém entre 160 e 200 projetos de IA ativos em sua plataforma, incluindo modelos preditivos de sepse, readmissão e deterioração clínica. A Oracle Health relançou sua estratégia em torno de uma plataforma de EHR nativa de IA. O hospital Cedars-Sinai (Los Angeles) documentou <strong>redução de 37% na mortalidade em 30 dias</strong> com implementação de alertas de sepse baseados em IA. Sistemas de CDSS de última geração alcançam acurácia superior a 85% em tarefas clínicas específicas.</p>

<h3>Nuvem em saúde</h3>

<p>Até 2024, 82% das organizações de saúde haviam migrado ao menos parte de sua infraestrutura para a nuvem. O mercado global de cloud em saúde foi estimado em US$ 54,28 bilhões em 2024, com projeção de alcançar US$ 197,45 bilhões até 2032. A AWS Health possui aproximadamente 130.000 instalações de saúde como clientes. A nuvem habilita escalabilidade para picos de demanda (como durante pandemias), recuperação de desastres e redução de custos de infraestrutura local.</p>

<h3>Telemedicina</h3>

<p>A <strong>Lei 14.510/2022</strong> tornou a telemedicina permanente no Brasil, após o período experimental da pandemia. A Doctoralia registrou crescimento de 57% em teleconsultas em 2024, com 3 milhões de consultas realizadas. A telemedicina responde por 57,78% da receita do setor de saúde digital no Brasil. A integração do <a href="/artigos/sensores-vestiveis-saude-2026">PGHD (Patient-Generated Health Data)</a> de wearables via SMART on FHIR permite que dados de smartwatches e monitores pessoais sejam incorporados ao prontuário eletrônico.</p>

<h3>IoMT — Internet of Medical Things</h3>

<p>O mercado de IoMT foi estimado entre US$ 56 e 97 bilhões em 2025. Hospitais de alta complexidade operam entre 10 e 15 dispositivos de borda (edge) por leito, gerando volumes massivos de dados que precisam ser integrados ao HIS em tempo real. A integração segura de dispositivos médicos conectados ao prontuário eletrônico é um dos maiores desafios técnicos atuais. Veja também o artigo sobre <a href="/artigos/sensores-vestiveis-saude-2026">sensores vestíveis em saúde</a>.</p>

<h3>Big Data e PGHD</h3>

<p>A RNDS acumula mais de 2,8 bilhões de registros clínicos — um dos maiores repositórios de dados de saúde do mundo em crescimento. A análise desses dados em escala exige infraestruturas de big data (Hadoop, Spark, plataformas cloud) e metodologias de pesquisa clínica translacional. O PGHD (Patient-Generated Health Data) — dados gerados por pacientes via wearables, apps e dispositivos domésticos — adiciona nova camada de complexidade e oportunidade, especialmente com a integração via SMART on FHIR.</p>

<h2>Carreira em informática em saúde para engenheiros biomédicos</h2>

<p>A informática em saúde é uma das áreas de crescimento mais acelerado para profissionais de <a href="/artigos/engenharia-biomedica-vale-a-pena-v2">engenharia biomédica</a>. O Brasil registrou 5.979 novas posições em informática em saúde em 2024, com crescimento de 50% nas contratações em relação ao ano anterior.</p>

<h3>Competências técnicas mais valorizadas</h3>

<table>
  <thead>
    <tr>
      <th>Categoria</th>
      <th>Habilidades específicas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Programação</strong></td>
      <td>Python (predominante), Java, C#, SQL, APIs REST</td>
    </tr>
    <tr>
      <td><strong>Padrões de saúde</strong></td>
      <td>HL7 v2, FHIR R4/R5, DICOM, IHE Profiles</td>
    </tr>
    <tr>
      <td><strong>Infraestrutura</strong></td>
      <td>Cloud (AWS/Azure/GCP), segurança de redes, HTTPS/TLS, certificados ICP-Brasil</td>
    </tr>
    <tr>
      <td><strong>Domínio clínico</strong></td>
      <td>Anatomia, fisiologia, fluxos clínicos hospitalares, terminologias (SNOMED, LOINC, CID)</td>
    </tr>
    <tr>
      <td><strong>Regulatório</strong></td>
      <td>LGPD, CFM, ANVISA, resoluções ANS, Lei 13.787/2018</td>
    </tr>
    <tr>
      <td><strong>Gestão</strong></td>
      <td>Gestão de projetos ágeis (Scrum/Kanban), implantação de HIS, treinamento de usuários</td>
    </tr>
  </tbody>
</table>

<h3>Certificações profissionais</h3>

<ul>
  <li><strong>cpTICS-SBIS:</strong> certificação brasileira de Profissional em TI na Saúde, oferecida pela SBIS</li>
  <li><strong>CAHIMS / CPHIMS (HIMSS):</strong> certificações internacionais de gestão de informação em saúde; CAHIMS para profissionais com até 5 anos de experiência</li>
  <li><strong>FHIR Foundational / Advanced (HL7):</strong> certificações técnicas específicas em FHIR, da organização mantenedora do padrão</li>
  <li><strong>AHIC (AMIA):</strong> Applied Health Informatics Certification, voltada a profissionais clínicos com atuação em informática</li>
</ul>

<h3>Remuneração e mercado</h3>

<p>A remuneração média para profissionais de informática em saúde no Brasil é de R$ 8.658/mês, com profissionais seniores — especialmente arquitetos FHIR, líderes de integração e especialistas em segurança — alcançando R$ 16.000 ou mais. Para referência de carreira e salários na engenharia biomédica em geral, consulte o artigo sobre <a href="/artigos/quanto-ganha-engenheiro-biomedico-2026">remuneração do engenheiro biomédico em 2026</a>.</p>

<p>As principais <a href="/artigos/healthtechs-mapa-brasil">healthtechs brasileiras</a> e fornecedores de HIS como MV Informática, Philips Tasy e TOTVS Saúde são empregadores significativos do setor. A carreira pode se desenvolver também em órgãos públicos como DATASUS, SEIDIGI e secretarias estaduais de saúde, além de hospitais e redes privadas em transição para sistemas integrados.</p>

<p>Para quem está ainda na graduação, o tema de informática em saúde oferece excelentes oportunidades de <a href="/artigos/ideias-tcc-engenharia-biomedica">TCCs em engenharia biomédica</a>, especialmente envolvendo integração FHIR, análise de dados do DATASUS ou desenvolvimento de aplicações SMART on FHIR.</p>

<h2>Organismos e recursos de referência</h2>

<p>Para aprofundar os estudos e acompanhar a evolução da área, os principais organismos e recursos são:</p>

<ul>
  <li><strong><a href="https://sbis.org.br" target="_blank" rel="noopener">SBIS</a></strong> — Sociedade Brasileira de Informática em Saúde: congresso CBIS, journal JHI, certificação SBIS/CFM, grupos de trabalho</li>
  <li><strong><a href="https://hl7.org/fhir" target="_blank" rel="noopener">HL7 FHIR</a></strong> — Especificação oficial, Implementation Guides, validadores e comunidade global</li>
  <li><strong><a href="https://www.himss.org" target="_blank" rel="noopener">HIMSS</a></strong> — Publicações, EMRAM, certificações CAHIMS/CPHIMS, conferência anual</li>
  <li><strong><a href="https://amia.org" target="_blank" rel="noopener">AMIA</a></strong> — 5.600+ membros, JAMIA (Journal), certificação AHIC, simpósio anual</li>
  <li><strong><a href="https://www.gov.br/anvisa" target="_blank" rel="noopener">ANVISA</a></strong> — Registros de software como dispositivo médico (SaMD), certificação de PEPs</li>
  <li><strong>DATASUS/RNDS</strong> — Portal de desenvolvedor da RNDS, documentação das APIs FHIR, laboratório de integração</li>
</ul>

<h2>Perguntas frequentes</h2>

<h3>Qual é a diferença entre HIS, PEP e RES?</h3>

<p>O <strong>HIS (Hospital Information System)</strong> é o sistema de informação de um hospital inteiro, englobando módulos administrativos, clínicos e departamentais. O <strong>PEP (Prontuário Eletrônico do Paciente)</strong> é o módulo clínico central do HIS, focado no registro longitudinal dos dados de saúde de um paciente dentro de uma instituição específica. O <strong>RES (Registro Eletrônico de Saúde)</strong> é o conceito mais amplo: o conjunto de registros do paciente ao longo de toda a sua vida, em múltiplas instituições. A RNDS brasileira tem como objetivo evoluir progressivamente para o RES nacional.</p>

<h3>FHIR substitui o HL7 v2?</h3>

<p>Não completamente, ao menos no curto e médio prazo. O HL7 v2 está instalado em milhares de sistemas ao redor do mundo e sua substituição é cara e complexa. O FHIR é o padrão para novas integrações, APIs abertas e mandatos regulatórios recentes (como a ONC Final Rule nos EUA e a RNDS no Brasil). Na prática, hospitais modernos operam ambientes híbridos: HL7 v2 para integrações legadas internas e FHIR R4 para interoperabilidade externa e aplicações novas. O FHIR R6 (em desenvolvimento) prevê mecanismos de convergência com HL7 v2 para facilitar a transição.</p>

<h3>O que é SMART on FHIR e por que é importante?</h3>

<p>SMART on FHIR (Substitutable Medical Applications, Reusable Technologies on FHIR) é um conjunto de especificações que adiciona uma camada de autorização OAuth 2.0 sobre o FHIR, permitindo que aplicativos de terceiros se conectem de forma segura e padronizada a servidores FHIR de hospitais, operadoras e repositórios nacionais. É importante porque habilita um ecossistema de aplicativos clínicos independentes que funcionam dentro do PEP (como uma "App Store" clínica), e é a base técnica para integração de dados de wearables e dispositivos pessoais ao prontuário. A maioria dos grandes fornecedores de HIS — Epic, Oracle, MEDITECH — já suporta SMART on FHIR.</p>

<h3>A LGPD se aplica a dados de saúde de maneira diferente?</h3>

<p>Sim. A Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018) classifica dados de saúde — diagnósticos, prontuários, resultados de exames, genoma — como <strong>dados sensíveis</strong>, categoria que exige proteção reforçada. Para o tratamento de dados sensíveis de saúde, a base legal principal é o <em>consentimento específico e destacado</em> do titular, ou a tutela da saúde em procedimentos de saúde pública. Sistemas de saúde são obrigados a nomear um DPO (Data Protection Officer), implementar medidas técnicas de segurança documentadas, realizar Relatórios de Impacto à Proteção de Dados (RIPD) e notificar a ANPD em caso de incidentes. As sanções chegam a 2% do faturamento, limitadas a R$ 50 milhões por infração.</p>

<h3>Qual formação seguir para trabalhar com informática em saúde como engenheiro biomédico?</h3>

<p>A base é a graduação em engenharia biomédica ou áreas correlatas (engenharia de computação, ciência da computação, sistemas de informação). Para especialização, as melhores rotas incluem: pós-graduação lato sensu em saúde digital, informática em saúde ou gestão hospitalar; certificações técnicas como CAHIMS/CPHIMS (HIMSS) ou FHIR Foundational (HL7); participação ativa na SBIS e seus grupos de trabalho; e projetos práticos com as APIs da RNDS, disponíveis no portal público do DATASUS. Veja as opções de <a href="/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica">pós-graduação em engenharia biomédica</a> no Brasil.</p>

<p>Volte ao <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a> para explorar todas as seções.</p>
<p><em>Publicado por <a href="https://engenhariabiomedica.com">engenhariabiomedica.com</a></em></p>
`,
};
