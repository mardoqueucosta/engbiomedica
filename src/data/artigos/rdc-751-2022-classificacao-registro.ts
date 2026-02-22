import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'RDC 751/2022 Explicada: Classificação e Registro de Dispositivos Médicos',
  resumo: 'Análise completa da RDC 751/2022 artigo por artigo: as 22 regras de classificação, as 4 classes de risco, documentação técnica do dossiê, prazos de análise e estratégias para agilizar o registro de dispositivos médicos na ANVISA.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '13 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>A RDC 751/2022 é a principal norma regulatória de dispositivos médicos no Brasil</strong>, substituindo a RDC 185/2001 e consolidando mais de duas décadas de evolução regulatória em um único instrumento legal. Publicada em 21 de setembro de 2022 e em vigor desde 1º de março de 2023, ela define como fabricantes, importadores e distribuidores devem classificar, notificar e registrar produtos junto à ANVISA — impactando diretamente os profissionais de regulatory affairs e engenheiros de qualidade que atuam nesse setor.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>Contexto Histórico e Revogações</h2>

<p>A RDC 751/2022 não surgiu no vácuo. Ela consolidou e revogou seis normas anteriores que coexistiam de forma fragmentada, gerando insegurança jurídica para as empresas. Entender o que foi revogado é fundamental para evitar referencias a normas obsoletas em documentos técnicos:</p>

<table>
  <thead>
    <tr>
      <th>Norma Revogada</th>
      <th>Assunto</th>
      <th>Substituída por</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RDC 185/2001</td>
      <td>Registro de dispositivos médicos (norma mãe anterior)</td>
      <td>RDC 751/2022 integral</td>
    </tr>
    <tr>
      <td>RE 1.554/2002</td>
      <td>Lista de produtos dispensados de registro</td>
      <td>Anexo I da RDC 751/2022</td>
    </tr>
    <tr>
      <td>RDC 207/2006</td>
      <td>Dispositivos de uso único</td>
      <td>Seção específica da RDC 751/2022</td>
    </tr>
    <tr>
      <td>IN 4/2012 (itens específicos)</td>
      <td>Instruções sobre dossiê técnico</td>
      <td>IN 290/2024 + RDC 751/2022</td>
    </tr>
    <tr>
      <td>RDC 15/2014</td>
      <td>Regime de vigilância especial</td>
      <td>Integrado às regras especiais (14-22)</td>
    </tr>
    <tr>
      <td>RDC 40/2015</td>
      <td>Alterações pós-registro</td>
      <td>Capítulo específico da RDC 751/2022</td>
    </tr>
  </tbody>
</table>

<p>A harmonização com o arcabouço regulatório global foi outro objetivo central. As 22 regras de classificação da RDC 751/2022 espelham diretamente o Regulamento (UE) 2017/745 (EU MDR), facilitando a dupla submissão para empresas que atuam simultaneamente nos mercados europeu e brasileiro.</p>

<h2>As 4 Classes de Risco: Definições e Implicações Regulatórias</h2>

<p>O sistema de quatro classes de risco é a espinha dorsal da RDC 751/2022. A classe determina a via de acesso ao mercado, os documentos exigidos, os prazos de análise e os custos envolvidos:</p>

<table>
  <thead>
    <tr>
      <th>Classe</th>
      <th>Risco</th>
      <th>Via</th>
      <th>Prazo Legal</th>
      <th>Validade</th>
      <th>CBPF Exigido?</th>
      <th>TFVS (base)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>I</strong></td>
      <td>Baixo</td>
      <td>Notificação</td>
      <td>~30 dias</td>
      <td>Indefinida</td>
      <td>Não</td>
      <td>R$ 1.406</td>
    </tr>
    <tr>
      <td><strong>II</strong></td>
      <td>Médio</td>
      <td>Notificação</td>
      <td>~30 dias</td>
      <td>Indefinida</td>
      <td>Não</td>
      <td>R$ 1.406</td>
    </tr>
    <tr>
      <td><strong>III</strong></td>
      <td>Alto</td>
      <td>Registro</td>
      <td>250–365 dias</td>
      <td>10 anos</td>
      <td>Sim</td>
      <td>R$ 8.510–14.000</td>
    </tr>
    <tr>
      <td><strong>IV</strong></td>
      <td>Máximo</td>
      <td>Registro</td>
      <td>250–365 dias</td>
      <td>10 anos</td>
      <td>Sim</td>
      <td>R$ 14.000–19.856</td>
    </tr>
  </tbody>
</table>

<p>Vale destacar que o prazo mediano real para registro (classes III e IV) gira em torno de 389 dias, superando o prazo legal. Estratégias para reduzir esse tempo incluem a via AREE (Análise com Base em Evidências Regulatórias Estrangeiras), regulamentada pela IN 290/2024, que permite reliance em decisões do FDA, Health Canada, TGA (Austrália) e PMDA (Japão), reduzindo o tempo de análise em aproximadamente 30%.</p>

<p>Para mais detalhes sobre o processo completo de registro, consulte nosso guia sobre <a href="/artigos/como-registrar-dispositivo-medico-anvisa">como registrar dispositivo médico na ANVISA</a>.</p>

<h2>As 22 Regras de Classificação: Análise por Grupos</h2>

<p>A classificação de um dispositivo médico é o passo mais crítico do processo regulatório. Errar a classe significa submeter documentação incorreta, podendo resultar em indeferimento ou, pior, irregularidade sanitária. A RDC 751/2022 organiza as 22 regras em quatro grupos:</p>

<!-- IMG_SLOT_1 -->

<h3>Grupo 1 — Dispositivos Não Invasivos (Regras 1 a 4)</h3>

<p>As regras de 1 a 4 cobrem produtos que não penetram o corpo humano. A regra geral (Regra 1) classifica todos os não invasivos como Classe I, mas as regras subsequentes elevam a classe conforme o risco:</p>
<figure>
<img src="/artigos/rdc-751-2022-classificacao-registro/image-2.webp" alt="Especialista em assuntos regulatórios analisando dossiê técnico de dispositivo médico conforme RDC 751/2022 da ANVISA" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Profissional de regulatory affairs durante a elaboração do dossiê técnico para registro de dispositivo médico na ANVISA, seguindo a estrutura IMDRF exigida pela RDC 751/2022.</figcaption>
</figure>

<figure>
<img src="/artigos/rdc-751-2022-classificacao-registro/image-1.webp" alt="Fluxograma das 22 regras de classificação RDC 751/2022 organizadas em 4 grupos de risco de dispositivos médicos ANVISA" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>As 22 regras de classificação da RDC 751/2022 divididas em quatro grupos, com progressão de risco da Classe I (baixo) à Classe IV (máximo).</figcaption>
</figure>


<ul>
  <li><strong>Regra 1:</strong> Dispositivos não invasivos em geral — Classe I (ex.: termômetros de mercúrio, espátulas).</li>
  <li><strong>Regra 2:</strong> Dispositivos para condução ou armazenamento de sangue, líquidos corporais ou tecidos — Classe II (ex.: bolsas coletoras de urina, tubos de drenagem).</li>
  <li><strong>Regra 3:</strong> Dispositivos para modificar composição biológica ou química de sangue — Classe III (ex.: filtros de diálise).</li>
  <li><strong>Regra 4:</strong> Dispositivos em contato com pele lesionada — Classe I (feridas superficiais) a Classe III (feridas crônicas, queimaduras de terceiro grau).</li>
</ul>

<h3>Grupo 2 — Dispositivos Invasivos (Regras 5 a 8)</h3>

<p>Invasivos são aqueles que penetram o corpo, parcial ou totalmente, por orifício corporal ou pela superfície corporal. A duração do contato (transitório, curto prazo, longo prazo) e o local de uso são os fatores determinantes:</p>

<ul>
  <li><strong>Regra 5:</strong> Invasivos por orifício corporal não cirúrgico — Classe I a III conforme duração e local (ex.: especulum vaginal = I; cateter uretral de longa duração = III).</li>
  <li><strong>Regra 6:</strong> Invasivos cirúrgicos de uso transitório — Classe II (ex.: bisturis, luvas cirúrgicas); Classe III se reutilizáveis e para diagnóstico de doenças graves.</li>
  <li><strong>Regra 7:</strong> Implantados de curto prazo — Classe II a III (ex.: drenos cirúrgicos absorvíveis).</li>
  <li><strong>Regra 8:</strong> Implantados de longa duração — Classe III (ex.: parafusos ortopédicos de titânio); Classe IV se implantados no sistema nervoso central ou coração (ex.: marca-passo, válvulas cardíacas).</li>
</ul>

<h3>Grupo 3 — Dispositivos Ativos (Regras 9 a 13)</h3>

<p>Dispositivos ativos dependem de energia elétrica, eletromagnética ou outra fonte que não a força humana ou gravitacional. Este grupo inclui equipamentos de diagnóstico por imagem, ventiladores e desfibriladores:</p>

<ul>
  <li><strong>Regra 9:</strong> Dispositivos ativos terapêuticos — Classe I (ex.: aparelhos auditivos de amplificação simples); Classe IIb/III se risco em caso de falha (ex.: ventiladores mecânicos).</li>
  <li><strong>Regra 10:</strong> Dispositivos ativos de diagnóstico — Classe I a II (ex.: eletrocardiógrafo = II); Classe III se fornecem energia ionizante (ex.: tomógrafo).</li>
  <li><strong>Regra 11 (SaMD):</strong> Regra nova introduzida pela RDC 751/2022. Softwares como Dispositivos Médicos (SaMD) são classificados conforme o impacto clínico da informação gerada. Para saber mais, consulte nosso artigo sobre <a href="/artigos/samd-software-dispositivo-medico">SaMD — Software como Dispositivo Médico</a>.</li>
  <li><strong>Regra 12:</strong> Dispositivos que administram medicamentos ou outros produtos — Classe II a III (ex.: bomba de infusão = III).</li>
  <li><strong>Regra 13:</strong> Outros dispositivos ativos — Classe I por padrão.</li>
</ul>

<h3>Grupo 4 — Regras Especiais (Regras 14 a 22)</h3>

<p>As regras especiais cobrem categorias com características únicas que justificam tratamento diferenciado. Quatro delas foram introduzidas pela RDC 751/2022 e não existiam na RDC 185/2001:</p>

<table>
  <thead>
    <tr>
      <th>Regra</th>
      <th>Categoria</th>
      <th>Classe Típica</th>
      <th>Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>14</td>
      <td>Contraceptivos e DSTs</td>
      <td>II–III</td>
      <td>Preservativos (III), DIU (III)</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Desinfecção de dispositivos</td>
      <td>II–III</td>
      <td>Glutaraldeído (III)</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Radiação ionizante</td>
      <td>II–IV</td>
      <td>Fontes radioativas implantáveis (IV)</td>
    </tr>
    <tr>
      <td>17</td>
      <td>Derivados de sangue ou tecidos</td>
      <td>III–IV</td>
      <td>Substitutos ósseos (III)</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Uso em diagnóstico in vitro</td>
      <td>I–IV</td>
      <td>Glicosímetros (II)</td>
    </tr>
    <tr>
      <td><strong>19</strong></td>
      <td><strong>Nanomateriais (nova)</strong></td>
      <td>III–IV</td>
      <td>Nanopartículas terapêuticas (IV)</td>
    </tr>
    <tr>
      <td><strong>20</strong></td>
      <td><strong>Inalação (nova)</strong></td>
      <td>II–III</td>
      <td>Nebulizadores (II), inaladores pressurizados (III)</td>
    </tr>
    <tr>
      <td><strong>21</strong></td>
      <td><strong>Substâncias absorvidas (nova)</strong></td>
      <td>III–IV</td>
      <td>Adesivos transdérmicos medicamentosos (III)</td>
    </tr>
    <tr>
      <td><strong>22</strong></td>
      <td><strong>Terapêutico + diagnóstico (nova)</strong></td>
      <td>Classe mais alta</td>
      <td>Cateter ablação com imageamento (IV)</td>
    </tr>
  </tbody>
</table>

<p><strong>Princípio do pior caso:</strong> quando mais de uma regra for aplicável ao mesmo dispositivo, prevalece a que resultar na classificação mais elevada. Esse princípio é expresso no artigo 11 da RDC 751/2022 e deve ser documentado no dossiê técnico.</p>

<!-- IMG_SLOT_2 -->

<h2>Dossiê Técnico: Estrutura IMDRF e Documentação Exigida</h2>

<p>A estrutura do dossiê técnico da RDC 751/2022 adota o sumário IMDRF (International Medical Device Regulators Forum), alinhando o Brasil ao padrão global. Isso permite o reaproveitamento de documentos preparados para o FDA 510(k), FDA PMA ou marcação CE:</p>

<h3>Módulos do Dossiê para Registro (Classes III e IV)</h3>

<table>
  <thead>
    <tr>
      <th>Módulo</th>
      <th>Conteúdo Principal</th>
      <th>Normas de Referência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 — Administrativo</td>
      <td>Formulários, procurações, TFVS, comprovantes de CBPF</td>
      <td>RDC 751/2022, Art. 25–32</td>
    </tr>
    <tr>
      <td>2 — Visão Geral</td>
      <td>Descrição do dispositivo, finalidade prevista, usuário pretendido</td>
      <td>IMDRF/GRRP WG/N47</td>
    </tr>
    <tr>
      <td>3 — Não Clínico</td>
      <td>Testes de biocompatibilidade, esterilização, EMC, software</td>
      <td>ISO 10993, IEC 60601, IEC 62304</td>
    </tr>
    <tr>
      <td>4 — Clínico</td>
      <td>Avaliação clínica, dados de desempenho clínico, PMCF</td>
      <td>ABNT NBR ISO 14155, IMDRF/SaMD WG</td>
    </tr>
    <tr>
      <td>5 — Gestão de Risco</td>
      <td>Arquivo de gestão de risco, FMEA, análise de árvore de falhas</td>
      <td><a href="/artigos/iso-14971-gestao-risco">ISO 14971:2019</a></td>
    </tr>
    <tr>
      <td>6 — Fabricação</td>
      <td>Processo produtivo, controle de qualidade, CBPF ou equivalente</td>
      <td><a href="/artigos/rdc-665-2022-boas-praticas">RDC 665/2022</a>, ISO 13485</td>
    </tr>
    <tr>
      <td>7 — Rotulagem</td>
      <td>Rótulo, IFU em português, símbolos ISO 15223</td>
      <td>RDC 751/2022, Art. 55–68</td>
    </tr>
  </tbody>
</table>

<p>Para notificações (Classes I e II), o dossiê é simplificado: dispensa avaliação clínica completa e aceita autodeclaração de conformidade às normas técnicas. O sistema SOLICITA da ANVISA é a plataforma eletrônica para submissão.</p>

<h3>Certificado de Boas Práticas de Fabricação (CBPF)</h3>

<p>O CBPF é exigido para Classes III e IV. Para fabricantes estrangeiros, a ANVISA aceita:</p>
<ul>
  <li>Certificado MDSAP (Medical Device Single Audit Program) — A taxa de adoção saltou de 4,7% em 2017 para 59,1% em 2023 entre fabricantes importados, tornando-se a opção preferida.</li>
  <li>Certificado de BPF emitido pela autoridade sanitária do país de origem, desde que o país tenha acordo de reconhecimento mútuo com o Brasil.</li>
  <li>Certificado emitido pela própria ANVISA após inspeção internacional.</li>
</ul>

<p>Para fabricantes nacionais, o CBPF é emitido pela ANVISA após inspeção na planta produtiva. O sistema de qualidade deve estar conforme a <a href="/artigos/iso-13485-dispositivos-medicos">ISO 13485</a>.</p>

<h2>Rotulagem e Instruções de Uso</h2>

<p>A RDC 751/2022 dedica os artigos 55 a 68 exclusivamente à rotulagem, tornando-a uma das seções mais detalhadas da norma. Os requisitos centrais são:</p>

<ul>
  <li><strong>Idioma obrigatório:</strong> português do Brasil para todos os elementos textuais do rótulo e das instruções de uso (IFU).</li>
  <li><strong>Símbolos:</strong> permitido o uso de símbolos ISO 15223-1, desde que acompanhados de legenda ou glossário.</li>
  <li><strong>IFU digital:</strong> autorizada pela RDC 751/2022, substituindo o impresso, desde que o acesso seja garantido por URL ou QR Code no rótulo físico. Exceção: dispositivos implantáveis e de uso domiciliar devem manter IFU impressa.</li>
  <li><strong>Uso único:</strong> dispositivos de uso único devem trazer o símbolo específico e a proibição expressa de reprocessamento, salvo quando o fabricante disponibiliza protocolo validado de reprocessamento.</li>
</ul>

<h2>UDI/SIUD: Identificação Única de Dispositivos</h2>

<p>A identificação única de dispositivos (UDI — Unique Device Identification) foi introduzida no Brasil pelo SIUD (Sistema de Identificação Única de Dispositivos Médicos), com cronograma de implementação faseado por classe de risco:</p>

<table>
  <thead>
    <tr>
      <th>Classe</th>
      <th>Prazo para Atribuição de UDI</th>
      <th>Prazo para Inclusão no SIUD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IV</td>
      <td>Janeiro de 2025</td>
      <td>Julho de 2025</td>
    </tr>
    <tr>
      <td>III</td>
      <td>Janeiro de 2026</td>
      <td>Julho de 2026</td>
    </tr>
    <tr>
      <td>II</td>
      <td>Janeiro de 2027</td>
      <td>Julho de 2027</td>
    </tr>
    <tr>
      <td>I</td>
      <td>Janeiro de 2028</td>
      <td>Julho de 2028</td>
    </tr>
  </tbody>
</table>

<p>O UDI é composto pelo Device Identifier (DI), que identifica o modelo, e pelo Production Identifier (PI), que identifica o lote, número de série e data de fabricação. Para mais informações sobre o panorama do setor, consulte nosso estudo sobre o <a href="/artigos/mercado-dispositivos-medicos-brasil-dados">mercado de dispositivos médicos no Brasil</a>.</p>

<h2>Alterações Pós-Registro: Três Categorias</h2>

<p>A RDC 751/2022 classifica as alterações em registros e notificações em três categorias, com obrigações distintas para cada uma:</p>

<h3>Alterações que Exigem Aprovação Prévia</h3>
<p>Qualquer alteração que impacte segurança, eficácia ou identidade do produto requer petição formal antes da implementação. Exemplos: mudança de finalidade prevista, novo fabricante, alteração de princípio de funcionamento, novo material em contato com paciente.</p>
<figure>
<img src="/artigos/rdc-751-2022-classificacao-registro/image-3.webp" alt="Infográfico das três categorias de alterações pós-registro RDC 751/2022 com exemplos e fluxos de aprovação ANVISA dispositivos médicos" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>As três categorias de alterações pós-registro da RDC 751/2022: aprovação prévia obrigatória, notificação imediata e alterações não reportáveis, com exemplos práticos de cada categoria.</figcaption>
</figure>


<h3>Alterações de Implementação Imediata com Notificação</h3>
<p>Mudanças que não afetam segurança ou eficácia, mas que devem ser comunicadas à ANVISA no mesmo momento da implementação. Exemplos: nova versão de software sem impacto clínico, alteração de fornecedor de embalagem sem mudança no material.</p>

<h3>Alterações Não Sujeitas a Notificação</h3>
<p>Mudanças de caráter administrativo ou estético que não precisam ser comunicadas. Devem, no entanto, ser documentadas internamente no arquivo do produto. Exemplos: atualização do logotipo da empresa, mudança de endereço.</p>

<!-- IMG_SLOT_3 -->

<h2>ANVISA vs FDA vs EU MDR: Comparativo Regulatório</h2>

<p>A convergência regulatória é uma tendência global. A RDC 751/2022 posiciona o Brasil entre os sistemas mais alinhados internacionalmente:</p>

<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>ANVISA (RDC 751/2022)</th>
      <th>FDA (EUA)</th>
      <th>EU MDR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Número de regras</td>
      <td>22</td>
      <td>Não aplica (510k/PMA)</td>
      <td>22 (mesmas)</td>
    </tr>
    <tr>
      <td>Número de classes</td>
      <td>4 (I, II, III, IV)</td>
      <td>3 (I, II, III)</td>
      <td>4 (I, IIa, IIb, III)</td>
    </tr>
    <tr>
      <td>Equivalência de classes</td>
      <td>I = I | II = IIa | III = IIb | IV = III</td>
      <td>I ≈ I | II ≈ II | III ≈ III</td>
      <td>Referência</td>
    </tr>
    <tr>
      <td>Via de reliance</td>
      <td>AREE (IN 290/2024)</td>
      <td>Não formal</td>
      <td>Não formal</td>
    </tr>
    <tr>
      <td>SaMD</td>
      <td>Regra 11</td>
      <td>Digital Health Center of Excellence</td>
      <td>Regra 11 (MDCG 2019-11)</td>
    </tr>
    <tr>
      <td>UDI</td>
      <td>SIUD (2025–2028)</td>
      <td>UDI (implementado)</td>
      <td>EUDAMED (em curso)</td>
    </tr>
    <tr>
      <td>Boas práticas</td>
      <td>RDC 665/2022 + ISO 13485</td>
      <td>21 CFR Part 820 (QMSR)</td>
      <td>ISO 13485 + IVDR Annex IX</td>
    </tr>
  </tbody>
</table>

<p>A harmonização com o EU MDR é particularmente relevante: empresas que já possuem marcação CE podem usar a documentação europeia como base para a submissão AREE no Brasil, reduzindo significativamente o tempo e custo de elaboração do dossiê. Veja também nosso guia completo sobre <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">ANVISA e dispositivos médicos em 2026</a>.</p>

<h2>Descontos na TFVS e Redução de Custos</h2>

<p>A Taxa de Fiscalização de Vigilância Sanitária (TFVS) é o principal custo direto do processo regulatório. A RDC 751/2022, combinada com a legislação tributária, prevê descontos escalonados conforme o porte da empresa:</p>

<ul>
  <li><strong>Empresas com receita bruta até R$ 6 milhões/ano:</strong> desconto de 60% na TFVS.</li>
  <li><strong>Empresas de pequeno porte (EPP):</strong> desconto de aproximadamente 90%.</li>
  <li><strong>Microempresas (ME):</strong> desconto de aproximadamente 95%.</li>
  <li><strong>Startups certificadas pelo MCTIC:</strong> podem acumular benefícios com editais de inovação em saúde.</li>
</ul>

<p>Para uma startup de base tecnológica desenvolvendo um SaMD Classe II, o custo total de notificação pode ser inferior a R$ 150, considerando os descontos disponíveis — tornando o acesso ao mercado regulado muito mais viável para empresas emergentes.</p>

<h2>RDC 848/2024: Requisitos Essenciais de Segurança</h2>

<p>Publicada em 2024, a RDC 848/2024 complementa a RDC 751/2022 estabelecendo os Requisitos Essenciais de Segurança e Performance (RESD), equivalentes ao ESPR europeu. O fabricante deve demonstrar que o dispositivo atende a esses requisitos antes de qualquer submissão regulatória. A conformidade é demonstrada preferencialmente por meio de normas técnicas harmonizadas (ABNT, IEC, ISO), cujo uso cria presunção de conformidade — reduzindo o ônus probatório no dossiê.</p>

<h2>Perguntas Frequentes</h2>

<h3>Quais produtos estão dispensados de registro ou notificação pela RDC 751/2022?</h3>
<p>O Anexo I da RDC 751/2022 lista os produtos dispensados, que correspondem basicamente aos itens que constavam na antiga RE 1.554/2002. Incluem produtos como óculos de leitura simples sem prescrição, termômetros ambientais e alguns equipamentos de uso exclusivamente veterinário. A consulta ao Anexo I deve ser o primeiro passo antes de iniciar qualquer processo regulatório.</p>

<h3>Como funciona a via AREE e quais países são aceitos como referência?</h3>
<p>A AREE (regulamentada pela IN 290/2024) permite que a ANVISA utilize a decisão regulatória de autoridades estrangeiras como principal evidência de análise. Os países aceitos são: EUA (FDA), Canadá (Health Canada), Austrália (TGA) e Japão (PMDA). O fabricante deve ter aprovação vigente nesses países e submeter a documentação utilizada na aprovação estrangeira, traduzida para o português. O processo reduz o tempo de análise em aproximadamente 30%.</p>

<h3>O que é o CBPF e quando ele é obrigatório?</h3>
<p>O Certificado de Boas Práticas de Fabricação (CBPF) é o documento que atesta que a planta produtiva do fabricante opera em conformidade com as boas práticas regulatórias. É obrigatório para dispositivos das Classes III e IV — tanto para fabricantes nacionais quanto importados. Para fabricantes estrangeiros, o certificado MDSAP é o mais aceito pela ANVISA, cobrindo simultaneamente Brasil, EUA, Canadá, Austrália e Japão.</p>

<h3>Como classificar um software como dispositivo médico pela Regra 11?</h3>
<p>A Regra 11 classifica SaMD com base no impacto clínico da informação gerada pelo software. Softwares que fornecem informações apenas para fins de armazenamento ou exibição são Classe I. Softwares que geram diagnóstico ou orientam tratamento em condições de risco moderado são Classe II ou III. Softwares que substituem o julgamento clínico em situações de risco de vida são Classe IV. O IMDRF/SaMD N41 e o guia MDCG 2019-11 são as referências internacionais recomendadas para a análise.</p>

<h3>Qual é o prazo real para aprovação de um registro Classe III na ANVISA?</h3>
<p>O prazo legal é de 250 a 365 dias corridos após a aceitação da petição. No entanto, o prazo mediano real observado é de aproximadamente 389 dias, e pode superar 500 dias em casos de exigências (solicitações de complementação de documentos). A principal estratégia para reduzir esse prazo é submeter um dossiê técnico completo e sem inconsistências na primeira submissão — o que exige domínio dos requisitos da norma e das guias de perguntas e respostas publicadas pela ANVISA.</p>

<h2>Conclusão</h2>

<p>A RDC 751/2022 representa uma maturidade regulatória significativa para o Brasil, alinhando o país às melhores práticas internacionais em um setor que movimenta US$ 15,28 bilhões e emprega mais de 85.000 profissionais. Para profissionais de regulatory affairs e engenheiros de qualidade, o domínio das 22 regras de classificação, da estrutura IMDRF do dossiê e das vias alternativas como a AREE é condição essencial para atuar com eficiência nesse mercado.</p>

<p>Para aprofundar seu conhecimento em regulamentação de dispositivos médicos, acesse nosso <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">guia completo sobre ANVISA e dispositivos médicos</a> e o conteúdo sobre <a href="/artigos/rdc-665-2022-boas-praticas">boas práticas de fabricação (RDC 665/2022)</a>.</p>

<p>Fontes externas de referência: <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/anvisa-publica-nova-resolucao-sobre-dispositivos-medicos" target="_blank" rel="noopener noreferrer">ANVISA — RDC 751/2022 (publicação oficial)</a>, <a href="https://www.gov.br/anvisa/pt-br/setores-regulados/regularizacao/dispositivos-medicos" target="_blank" rel="noopener noreferrer">Portal ANVISA — Dispositivos Médicos</a> e <a href="https://www.imdrf.org/documents/imdrf-table-contents-technical-documentation" target="_blank" rel="noopener noreferrer">IMDRF — Table of Contents for Technical Documentation</a>.</p>

<p><em>Artigo elaborado pela equipe editorial do Portal Engenharia Biomédica, com base na RDC 751/2022, IN 290/2024, RDC 848/2024 e publicações técnicas da ANVISA e do IMDRF. Atualizado em fevereiro de 2026.</em></p>
`,
};
