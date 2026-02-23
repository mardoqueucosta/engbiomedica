import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'QMSR e Cibersegurança da FDA: Requisitos Essenciais para Dispositivos Médicos [2026]',
  resumo:
    'A FDA implementou o QMSR em 2026, substituindo o QSR e exigindo cibersegurança por projeto em dispositivos médicos conectados. Entenda o que mudou.',
  categoria: 'Mercado',
  categoriaVariant: 'teal',
  data: '2026-02-19',
  leitura: '8 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Em fevereiro de 2026, a <a href="https://www.fda.gov/medical-devices">FDA</a> (Food and Drug Administration) tornou obrigatório o QMSR (Quality Management System Regulation), substituindo o sistema de gestão de qualidade vigente desde 1996. Simultaneamente, os requisitos de cibersegurança da Seção 524B do FD&C Act passaram a ser aplicados em plena vigência, tornando mandatório que fabricantes integrem segurança cibernética desde a fase de projeto — não como um recurso adicionado posteriormente.</strong></p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>O que é o QMSR da FDA?</h2>

<p>O <strong>QMSR (Quality Management System Regulation)</strong> é a nova regulamentação federal americana que governa os sistemas de gestão de qualidade de fabricantes de dispositivos médicos. Publicada em fevereiro de 2024 e com data de conformidade em <strong>2 de fevereiro de 2026</strong>, a norma revogou o antigo 21 CFR Part 820 (Quality System Regulation — QSR), em vigor desde 1996.</p>

<p>A principal inovação do QMSR é a <strong>harmonização com a <a href="https://www.iso.org">ISO</a> 13485:2016</strong>, norma internacional de sistemas de gestão da qualidade para dispositivos médicos. Ao incorporar os requisitos da ISO 13485 por referência, a FDA reduziu a duplicação de esforços para fabricantes que já possuem certificação para mercados internacionais, incluindo o europeu (MDR/IVDR) e o brasileiro (<a href="https://www.gov.br/anvisa">ANVISA</a>). Estima-se que mais de <strong>6.500 estabelecimentos de fabricação</strong> registrados na FDA sejam diretamente afetados pela nova regulamentação.</p>

<h2>QMSR versus QSR: Principais Diferenças</h2>

<p>Embora o QMSR e o antigo QSR compartilhem muitos conceitos, há diferenças estruturais e de conteúdo relevantes que os fabricantes precisam compreender antes de suas próximas inspeções ou submissões:</p>

<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>QSR — 21 CFR Part 820 (até 2026)</th>
      <th>QMSR (a partir de 2026)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Base normativa</td>
      <td>Regulamentação americana independente</td>
      <td>Harmonizado com ISO 13485:2016</td>
    </tr>
    <tr>
      <td>Terminologia</td>
      <td>Terminologia FDA própria</td>
      <td>Terminologia ISO 13485</td>
    </tr>
    <tr>
      <td>Gestão de riscos</td>
      <td>Referência implícita</td>
      <td>Integração explícita com ISO 14971</td>
    </tr>
    <tr>
      <td>Software e cibersegurança</td>
      <td>Cobertos por orientações separadas</td>
      <td>Integrados ao SGQ; SBOM exigido para cyber devices</td>
    </tr>
    <tr>
      <td>Estrutura documental</td>
      <td>DHF, DHR e DMR distintos</td>
      <td>Arquivo de dispositivo unificado (ISO 13485)</td>
    </tr>
  </tbody>
</table>

<p>Uma mudança prática significativa é a adoção do conceito de <strong>Design and Development File</strong> da ISO 13485, que substitui a estrutura tripartida do QSR (Design History File, Device Master Record e Device History Record). Empresas que já operavam sob ISO 13485 têm menor impacto operacional na transição.</p>

<h2>Requisitos de Cibersegurança: Seção 524B do FD&C Act</h2>

<figure>
<img src="/artigos/qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp/image-1.webp" alt="Estação de trabalho para revisão de cibersegurança de dispositivos médicos: laptop com dashboard de vulnerabilidades, dispositivo médico conectado via rede, documentação FDA e chave de segurança USB" width="1024" height="576" loading="lazy" decoding="async">
<figcaption>Estação de revisão de cibersegurança: dashboard de vulnerabilidades, dispositivo médico conectado, documentação de conformidade FDA e chave de segurança para autenticação</figcaption>
</figure>

<p>Paralelamente ao QMSR, os requisitos de cibersegurança da <strong>Seção 524B do Federal Food, Drug, and Cosmetic Act</strong> estão em plena vigência. Introduzida pelo Consolidated Appropriations Act em dezembro de 2022, a Seção 524B tornou-se lei imediatamente, e a FDA passou a recusar submissões sem documentação de cibersegurança adequada a partir de março de 2023.</p>

<p>Sob a Seção 524B, fabricantes de <strong>"cyber devices"</strong> — dispositivos com software e capacidade de conexão a redes, internet ou outros dispositivos — devem incluir nas submissões de pré-mercado (510(k), De Novo e PMAs):</p>

<ul>
  <li><strong>Plano de cibersegurança pós-mercado:</strong> processo documentado para monitorar, identificar e comunicar vulnerabilidades ao longo de todo o ciclo de vida do produto</li>
  <li><strong>Processo de patches e atualizações:</strong> capacidade de atualizar o software do dispositivo de forma razoavelmente expedita, incluindo atualizações críticas de segurança</li>
  <li><strong>SBOM (Software Bill of Materials):</strong> inventário completo de todos os componentes de software comerciais, de código aberto e de terceiros presentes no dispositivo</li>
  <li><strong>Evidências de testes de segurança:</strong> documentação de avaliações de ameaças, testes de penetração e análise de riscos de cibersegurança</li>
</ul>

<p>Em setembro de 2023, a FDA publicou o guia definitivo <em>"Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions"</em>, que detalha as expectativas da agência para cada um desses requisitos.</p>

<h2>Cibersegurança por Projeto: A Abordagem "Secure by Design"</h2>

<p>A mensagem central da FDA — e o núcleo da orientação para evitar cartas de deficiência — é que <strong>cibersegurança deve ser projetada no dispositivo desde o início, e não acrescentada como camada posterior</strong>. Essa abordagem, conhecida como "Secure by Design", alinha-se com as melhores práticas da CISA (Cybersecurity and Infrastructure Security Agency) americana e da ENISA europeia.</p>

<p>Na prática, isso significa integrar a análise de cibersegurança desde a fase de definição de requisitos, e não apenas durante os testes finais. A FDA recomenda que os fabricantes adotem frameworks reconhecidos, como:</p>

<ul>
  <li><strong>NIST Cybersecurity Framework (CSF 2.0)</strong></li>
  <li><strong>AAMI TIR57</strong> — Princípios para gestão de risco de cibersegurança em saúde</li>
  <li><strong><a href="https://www.iec.ch">IEC</a> 81001-5-1:2021</strong> — Segurança de software para a área da saúde</li>
  <li><strong>UL 2900-2-1</strong> — Padrão para segurança cibernética de dispositivos médicos conectados</li>
</ul>

<p>A análise de ameaças por meio de metodologias como <strong>STRIDE</strong> (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) ou <strong>PASTA</strong> (Process for Attack Simulation and Threat Analysis) deve ser documentada no Design File do dispositivo. Fabricantes que submetem documentação de cibersegurança apenas com declarações genéricas, sem evidências técnicas, são os que mais frequentemente recebem cartas de deficiência.</p>

<h2>SBOM: O Inventário de Software Exigido pela FDA</h2>

<figure>
<img src="/artigos/qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp/image-2.webp" alt="Análise de SBOM para dispositivo médico: monitor com árvore de dependências de software, indicadores de vulnerabilidades CVE e placa de circuito embarcado conectada via cabo de debug" width="1024" height="576" loading="lazy" decoding="async">
<figcaption>Análise de SBOM (Software Bill of Materials): visualização de dependências de software com indicadores de vulnerabilidades CVE, placa embarcada de dispositivo médico e documentação de rastreabilidade</figcaption>
</figure>

<p>O <strong>SBOM (Software Bill of Materials)</strong> é um dos requisitos mais novos e operacionalmente desafiadores da Seção 524B. Trata-se de um inventário estruturado de todos os componentes de software presentes no dispositivo — análogo a uma lista de ingredientes, mas para código.</p>

<p>A FDA aceita SBOMs nos formatos padronizados <strong>SPDX (ISO/IEC 5962:2021)</strong> e <strong>CycloneDX</strong>, que permitem rastreabilidade de componentes e integração com bancos de dados de vulnerabilidades conhecidas, como o NVD (National Vulnerability Database) do NIST.</p>

<p>Dados do setor indicam que dispositivos médicos modernos contêm, em média, <strong>entre 50 e 500 componentes de software de terceiros</strong>, incluindo bibliotecas de código aberto, sistemas operacionais embarcados e drivers. O monitoramento contínuo de CVEs (Common Vulnerabilities and Exposures) para esses componentes é agora uma responsabilidade regulatória explícita nos EUA, integrada ao SGQ como parte do plano pós-mercado.</p>

<h2>Impacto para Fabricantes Brasileiros que Exportam para os EUA</h2>

<p>Para empresas brasileiras que comercializam ou pretendem comercializar dispositivos médicos nos Estados Unidos, a dupla exigência do QMSR e da Seção 524B representa um desafio regulatório relevante. O <a href="/artigos/mercado-dispositivos-medicos-brasil-dados">mercado brasileiro de dispositivos médicos</a>, maior da América Latina, tem um número crescente de fabricantes que buscam aprovação da FDA como estratégia de internacionalização.</p>

<p>A boa notícia é que empresas certificadas pela <strong>ISO 13485:2016</strong> — exigência da ANVISA para autorização de funcionamento nos termos da RDC 16/2013 e da RDC 751/2022 — já possuem a base do SGQ compatível com o QMSR. Os esforços adicionais se concentram principalmente em:</p>

<ol>
  <li><strong>Adequação documental ao formato QMSR:</strong> adoção da terminologia e da estrutura documental da FDA, incluindo o arquivo de dispositivo unificado</li>
  <li><strong>Desenvolvimento do plano de cibersegurança pós-mercado:</strong> processo formal e documentado para gestão de vulnerabilidades ao longo do ciclo de vida</li>
  <li><strong>Geração e manutenção do SBOM:</strong> inventário vivo de componentes de software, com processo para atualização quando há novos lançamentos ou CVEs identificados</li>
  <li><strong>Evidências de testes de cibersegurança:</strong> documentação de testes de penetração, análise de ameaças e resultados de avaliações de risco</li>
  <li><strong>Registro anual na FDA:</strong> estabelecimentos de fabricação devem registrar-se anualmente e pagar a taxa MDUFA (Medical Device User Fee Act), cujo valor para 2026 é de aproximadamente US$ 6.700 por estabelecimento</li>
</ol>

<p>Vale destacar que a ANVISA acompanha de perto os desenvolvimentos do IMDRF (International Medical Device Regulators Forum) em cibersegurança, do qual é membro. Seu <em>Guia de Boas Práticas em Cibersegurança para Dispositivos Médicos</em>, publicado em 2021, ainda é recomendação, mas a tendência é de formalização progressiva. Empresas que atendam aos requisitos da FDA estarão bem posicionadas para futuras exigências da ANVISA. Veja mais sobre a <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">regulamentação da ANVISA para dispositivos médicos</a>.</p>

<h2>O que Esperar nas Inspeções da FDA após o QMSR</h2>

<p>Com a vigência do QMSR, as inspeções da FDA (Establishment Inspections) passaram a avaliar os SGQs com base nos requisitos harmonizados com a ISO 13485. Os inspetores utilizam o <strong>QSIT (Quality System Inspection Technique)</strong> atualizado, com foco em seis subsistemas principais: controles de gestão, controles de projeto e desenvolvimento, CAPA, controles de produção e processo, controles de registros e documentos, e controles de instalações e equipamentos.</p>

<p>Para dispositivos conectados, os inspetores verificam especificamente a existência e implementação do <strong>plano de cibersegurança pós-mercado</strong>. A ausência de documentação adequada — como um SBOM atualizado ou registros de avaliação de vulnerabilidades — pode resultar em observações 483 ou, em casos mais graves, em Warning Letters (cartas de advertência).</p>

<p>Dados da FDA indicam que entre 2023 e 2025 o número de observações 483 relacionadas a cibersegurança aumentou mais de <strong>200%</strong>, refletindo a atenção crescente da agência ao tema. Fabricantes que integram cibersegurança ao SGQ — e não como processo isolado — tendem a ter inspeções mais eficientes e menor taxa de emissão de observações.</p>

<p>Para um panorama mais amplo sobre como a regulamentação americana se compara ao contexto brasileiro, veja o artigo <a href="/artigos/engenharia-biomedica-eua-comparativo">Engenharia Biomédica: EUA vs Brasil</a>.</p>

<h2>Perguntas Frequentes</h2>

<h3>O QMSR é obrigatório para empresas brasileiras?</h3>
<p>Sim, para qualquer fabricante que comercialize dispositivos médicos nos EUA, incluindo empresas brasileiras. A exigência se aplica independentemente do país de origem. Empresas que exportam para o mercado americano devem registrar seus estabelecimentos na FDA e cumprir integralmente o QMSR.</p>

<h3>Quando o QMSR entrou em vigor?</h3>
<p>O QMSR foi publicado em fevereiro de 2024 com um período de transição de dois anos. A data de conformidade obrigatória foi <strong>2 de fevereiro de 2026</strong>. A partir dessa data, as inspeções e avaliações da FDA passaram a ser conduzidas com base nos requisitos do QMSR, e não mais do QSR.</p>

<h3>Todo dispositivo médico precisa apresentar um SBOM para a FDA?</h3>
<p>O SBOM é exigido especificamente para <strong>"cyber devices"</strong>, definidos pela FDA como dispositivos que contêm software e têm capacidade de conexão a internet, redes ou outros dispositivos. Dispositivos sem software ou sem conectividade de rede geralmente estão fora do escopo da Seção 524B, mas devem atender aos requisitos gerais de software do QMSR quando aplicável.</p>

<h3>O que é uma carta de deficiência da FDA e como evitá-la?</h3>
<p>Uma carta de deficiência (Additional Information request) é emitida quando uma submissão de pré-mercado está incompleta. Para cibersegurança, as deficiências mais comuns incluem: ausência de SBOM, falta de evidências de testes de penetração, plano de gerenciamento de vulnerabilidades vago e ausência de análise de ameaças documentada. A melhor forma de evitá-las é integrar cibersegurança ao processo de design desde o início e seguir o guia <em>"Cybersecurity in Medical Devices"</em> de setembro de 2023.</p>

<h3>A ANVISA tem requisitos similares de cibersegurança para dispositivos médicos?</h3>
<p>A ANVISA publicou o <em>Guia de Boas Práticas em Cibersegurança para Dispositivos Médicos</em> em 2021, ainda como recomendação. Como membro do IMDRF, a agência acompanha os desenvolvimentos internacionais e é esperado que requisitos formais de cibersegurança sejam progressivamente incorporados à regulamentação brasileira. Empresas que já atendem aos requisitos da FDA e da UE estarão melhor preparadas para essas futuras exigências da ANVISA.</p>

<p>Volte ao <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a> para explorar todas as seções.</p>

<p><em>Publicado por <a href="https://engenhariabiomedica.com">engenhariabiomedica.com</a></em></p>
`,
};
