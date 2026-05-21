# Auditoria Roça Conectada × FINEP AgriFam-ICT 2026

**Data:** 20/05/2026 | **Prazo de submissão:** 26/06/2026 (37 dias) | **Auditor:** Claude Sonnet 4.6

---

## Scores por Critério

| Critério | Peso | Nota atual | Nota potencial | Pontuação atual |
|---------|------|------------|----------------|----------------|
| CM-01 Aderência ao Edital | 5 | 3/5 | 4/5 | 15 |
| CM-02 Equipe | 5 | 2/5 | 4/5 | 10 |
| CM-03 Consistência do Projeto | 5 | 3/5 | 4/5 | 15 |
| CM-04 Contribuição ao Setor | 4 | 2/5 | 4/5 | 8 |
| CM-05 Parcerias | 2 | 0/5 | 3/5 | 0 |
| **TOTAL** | **21** | | | **48/21 = 2,29/5** |

**Score atual: 2,29/5 → REPROVADO** (mínimo: 3,5)
**Score potencial com correções: 3,90/5 → APROVADO**

---

## BLOCO A — Aderência à Linha Temática 3

| ID | Foco | Status | Evidência encontrada | Gap |
|----|------|--------|---------------------|-----|
| LT3-F1 | Conectividade no campo + inclusão no mercado em tempo real | ⚠️ | WhatsApp offline-first endereça a falta de conectividade; contextNote cita Semiárido e Norte/Nordeste. | Conectividade **como tecnologia desenvolvida** (IoT, LoRa, redes mesh) ausente. O projeto trabalha *apesar* da falta de conectividade, não a resolve. "Mercado em tempo real" não é mencionado como feature. |
| LT3-F2 | Acesso digital à ATER + produção/armazenamento/comercialização | ✅ | AgroAssistente IA: "Extensão rural digital 24h". "Colapso da ATER" é a barreira central. Coopera Digital cobre comercialização. | Cobertura de produção animal/vegetal e armazenamento não está explicitada. |
| LT3-F3 | Equipamentos digitais + energia renovável + rastreabilidade | ❌ | Nenhuma menção em nenhum fixture. | Foco inteiramente ausente. Projeto é 100% software/IA. |
| LT3-F4 | Software de gestão e produção no campo | ✅ | Coopera Digital: "Plataforma de gestão para cooperativas". AgroAssistente via WhatsApp (campo). Objetivo geral cita explicitamente "digitalização das cadeias". | — |

**Diagnóstico:** 2 focos com ✅ (F2 e F4), 1 com ⚠️ (F1), 1 com ❌ (F3). Aderência suficiente para habilitar, mas cobre apenas metade dos focos do Anexo 2. Limita CM-01(i) a 3/5 sem ajuste textual.

---

## BLOCO B — Resultados Esperados

| ID | Resultado Esperado | Relevância LT3 | Status | Onde/Gap |
|----|-------------------|---------------|--------|----------|
| RE-01 | Geração de renda e autonomia | ALTA | ⚠️ | SumarioSection cita "independência e qualidade de vida" sem métrica de renda. |
| RE-02 | Fortalecimento de cooperativas | ALTA | ✅ | Coopera Digital + KPI: 18 cooperativas (Fase 3). |
| RE-03 | Aproveitamento das vocações dos territórios | MÉDIA | ❌ | Nenhuma menção a biomas ou vocações regionais. |
| RE-04 | Eficiência e produtividade de sistemas orgânicos | MÉDIA | ⚠️ | SumarioSection cita nominalmente sem atividade ou indicador vinculado. |
| RE-05 | Novos conhecimentos em bioeconomia e biodiversidade | MÉDIA | ❌ | AgroLinguaBR gera conhecimento NLP, não bioeconomia/biodiversidade. |
| RE-06 | Novos produtos/serviços para sistemas agroalimentares | MÉDIA | ⚠️ | AgroAssistente/Coopera qualificam como "serviços", mas edital foca bioprodutos/bioinsumos. |
| RE-07 | Manejo sustentável de solos/águas | BAIXA | ❌ | Ausente. Não forçar. |
| RE-08 | Digitalização das cadeias da AF | PRIMÁRIO | ✅✅ | Título, subtítulo, objetivo geral e 3 KPIs convergem. Evidência fortíssima. |
| RE-09 | Parcerias público-privado-academia | ALTA | ⚠️ | ParceriasSection mostra plano; sem cartas de anuência. |
| RE-10 | Sementes crioulas | BAIXA | ❌ | Ausente. Não forçar. |

**Diagnóstico:** RE-08 e RE-02 são sólidos — suficientes para habilitar. RE-01, RE-04, RE-09 têm ⚠️ e afetam CM-04 e CM-05.

---

## BLOCO C — Elegibilidade Formal

| ID | Critério | Status | Observação |
|----|---------|--------|------------|
| EL-01 | Cadastro na Plataforma Finep até 19/06/2026 | ❓ | Não verificável pelos fixtures. Prazo em 30 dias — confirmar com ICT. |
| EL-02 | Elegibilidade da ICT proponente/executora | ⚠️ | FAPEU/FEESC elegíveis como proponentes. ICT executora não identificada — "[Coordenador UFSC]" é placeholder. |
| EL-03 | Dirigentes com poderes legais | ❓ | Depende de EL-02 ser resolvido primeiro. |
| EL-04 | ICT federal via instituição de apoio | ✅ | "Cenário 4: ICT + PJ Especializado" — FAPEU/FEESC como proponente, UFSC como executora. Formato correto. |
| EL-05 | ICT privada — 3 anos de funcionamento | N/A | Executora aparenta ser UFSC (pública federal). |
| EL-06 | Máximo 1 proposta como Executora Principal | ❓ | Confirmar que nenhum outro grupo da UFSC submete para a mesma LT. |
| EL-07 | Máximo 1 projeto por entidade-mãe na LT3 | ❓ | Risco moderado — UFSC é grande. Verificar internamente. |
| EL-08 | Máximo 3 coexecutores | ⚠️ | THATPIX é contratada (não coexecutora). Parceiros são colaboradores. Verificar se estrutura de 0 coexecutores está correto na plataforma. |
| EL-09 | ICT pública: Política de Inovação | ❌ | **Nenhuma menção em nenhum fixture.** Se executora é UFSC, é requisito formal eliminatório. |
| EL-10 | Valor entre R$ 3M e R$ 7M | ✅ | R$ 7.000.000,00 — no teto máximo. |
| EL-11 | Contrapartida | ✅ | FAPEU/FEESC são fundações de apoio privadas sem fins lucrativos → isentas. |
| EL-12 | Prazo máximo 36 meses | ✅ | Confirmado no HeroSection. |
| EL-13 | Itens habilitados ≥ 70% | ❓ | Sem equipamentos importados visíveis, risco reduzido. |
| EL-14 | Proibição de importação com similar nacional | ✅ | Sem itens importados identificados. N/A para projeto de software/IA. |

**Diagnóstico:** EL-09 (Política de Inovação) é o maior risco concreto. EL-01 (cadastro) e EL-07 (duplicidade UFSC) são os ❓ de maior risco. Coordenador como placeholder compromete EL-02 e EL-03.

---

## BLOCO D — Conteúdo Obrigatório

| ID | Requisito | Status | Gap |
|----|-----------|--------|-----|
| RC-01 | Referências metodológicas + indicadores + certificação | ⚠️ | Indicadores quantitativos presentes. Metodologia "desenvolvimento ágil" genérico demais. Sem mecanismo de certificação do software/LLM. |
| RC-02 | Estratégia de disseminação dos resultados | ⚠️ | "Escala e Transferência" no nome da Fase 3 sugere, mas nenhum plano concreto descrito. |
| RC-03 | Comprovação formal das parcerias (cartas de anuência) | ❌ | Nenhuma carta obtida. Todos os parceiros ainda em fase de "contato planejado". Sem cartas: CM-05 = 0. |

---

## BLOCO E — Conformidade Orçamentária

| Rubrica | Limite | Valor proposto | % | Status | Observação |
|---------|--------|----------------|---|--------|------------|
| Capital (total) | ≤ 70% | R$ 2.450.000 | 35,0% | ✅ | Bem abaixo |
| Obras e Instalações | ≤ 10% | R$ 0 | 0% | ✅ | Adequado para software |
| Pessoal CLT | ≤ 30% | Não consta | ? | ❓ | Ausente nos fixtures |
| Bolsas | ≤ 30% | R$ 1.174.000 | 16,8% | ✅ | Admissível (proponente = fundação de apoio) |
| Diárias | ≤ 5% | R$ 345.000 | 4,9% | ✅ | À beira do limite |
| Passagens | ≤ 5% | Não consta | ? | ⚠️ | Não listado — monitorar |
| Overhead (fixo) | = 5% | R$ 350.000 (calc.) | 5,0% | ✅ | Calculado, não explicitado |
| Importação | ≤ 20% s/ importados | R$ 0 | N/A | ✅ | Sem importação |
| **TOTAL** | R$ 3M–R$ 7M | **R$ 7.000.000** | 100% | ✅ | No teto |

**Itens visíveis: R$ 5.649.000. Não contabilizados: R$ 1.351.000.** Passagens e eventual CLT ausentes.

---

## BLOCO F — Simulação de Mérito

### CM-01 — Aderência ao Edital (peso 5) → **Nota: 3/5**
F2 (ATER digital) e F4 (software gestão) cobertos com evidência clara. F3 (hardware + energia renovável) totalmente ausente. AgroLinguaBR como corpus NLP agrícola tem originalidade genuína. RE-08 é o eixo central, bem documentado. Política de Inovação da executora completamente ausente. Nota trava em 3 pela ausência de F3 e da Política de Inovação.

### CM-02 — Equipe (peso 5) → **Nota: 2/5**
"[Coordenador UFSC]" é literal placeholder — nenhum nome, titulação, vínculo ou currículo. Dedicação "[X]%" para o coordenador. Charles Cleivin tem experiência técnica relevante (LLM fine-tuning, Manual do Mundo) mas sem titulação acadêmica e sem vínculo formal com a ICT. Uma equipe com o coordenador como placeholder seria devolvida para esclarecimento.

### CM-03 — Consistência do Projeto (peso 5) → **Nota: 3/5** *(eliminatório se nota 1)*
3 fases de 12 meses são logicamente estruturadas. Budget de R$ 7M cobre 36 meses. Mas: R$ 1,35M não detalhado, expansão 800→2.500 agricultores sem metodologia de escala, e **infraestrutura computacional completamente ausente** — fine-tuning de LLM 7B+ requer GPU significativa, sem nenhuma menção a servidores, laboratório ou cloud compute.

### CM-04 — Contribuição ao Setor (peso 4) → **Nota: 2/5**
2.500 agricultores (Fase 3), 18 cooperativas, foco Norte/Nordeste — bom. Mas: **zero menções às 5 políticas nacionais** (NIB, PLANAPO, PNPIAF, ENECI, Prog. Nacional de Bioinsumos). Sem projeção de impacto de renda. Sem dimensão ambiental/sustentabilidade.

### CM-05 — Parcerias (peso 2) → **Nota: 0/5** *(zero sem documentação)*
Tipos de parceiros são elegíveis (cooperativas, EMATER, FETRAF). Mas nenhuma carta de anuência obtida. Sem disseminação descrita. Se cartas chegarem antes de 26/06: pode atingir 3–4/5.

---

## BLOCO G — Score Final

```
Score atual:    (3×5 + 2×5 + 3×5 + 2×4 + 0×2) / 21 = 48/21 = 2,29/5 → REPROVADO
Score potencial: (4×5 + 4×5 + 4×5 + 4×4 + 3×2) / 21 = 82/21 = 3,90/5 → APROVADO
Mínimo exigido: 3,5/5
```

**Critério mais fraco:** CM-02 (equipe) — melhorar 1 ponto adiciona +0,24 à média.
**Critério com maior ROI de escrita:** CM-04 — adicionar 5 políticas nacionais pode mover de 2 para 4 (+0,38 à média).

---

## BLOCO H — Ações Prioritárias

### 🔴 CRÍTICO
1. Identificar e nomear Coordenador UFSC (nome, titulação, vínculo, % dedicação)
2. Obter cartas de anuência — cooperativas até 30/05, EMATER até 05/06
3. Contato com FETRAF-Brasil/CONTAG — deadline: hoje (20/05)
4. Localizar e anexar Política de Inovação da UFSC (EL-09 — eliminatório)
5. Confirmar cadastro na Plataforma FAP até 19/06

### 🟡 ALTO IMPACTO
6. Adicionar alinhamento às 5 políticas nacionais (NIB, PLANAPO, PNPIAF, ENECI, Bioinsumos)
7. Descrever infraestrutura computacional (GPU/servidores para fine-tuning)
8. Declarar % de dedicação de todos os membros da equipe
9. Incluir metodologia de certificação do LLM (benchmarks, testes com grupo controle)

### 🟢 INCREMENTAIS
10. Quantificar impacto de renda (projeção econômica por família)
11. Adicionar plano de disseminação dos resultados aos parceiros
12. Fortalecer LT3-F1 — descrever offline-first como solução de conectividade
13. Substituir "desenvolvimento ágil" por metodologia científica reconhecida

---

## BLOCO I — Conformidade com Plataforma FAP

| ID | Alerta | Situação | Ação |
|----|--------|----------|------|
| FAP-01 | Limite 3 coexecutores | 0 coexecutores visíveis (THATPIX = contratada) | Confirmar estrutura na plataforma |
| FAP-02 | LT3 imutável após envio | Confirmada em todos os headers | Verificar seleção no formulário antes do envio |
| FAP-03 | Todas assinaturas necessárias | Proponente + executora (mín. 2) | Coordenar assinaturas com 5–7 dias de antecedência |
| FAP-04 | Docs de rubricas em aba correta | Não verificado | Separar orçamentos/justificativas de documentos gerais |
| FAP-05 | Docs gerais em Anexos Gerais | Política de Inovação + cartas de anuência | Checklist antes de 26/06 |

**Documentação por rubrica:**

| Rubrica | Valor | Docs exigidos | Status |
|---------|-------|--------------|--------|
| Equipamentos nacionais | R$ 2.450.000 | Orçamento + justificativa por item | ⚠️ Não mencionado |
| Serviços PJ THATPIX | R$ 1.680.000 | Orçamento formal THATPIX | ⚠️ Não mencionado |
| Bolsas (12 bolsistas) | R$ 1.174.000 | Declaração individual + autorização por bolsista | ❌ 12 documentos individuais necessários |
| Diárias | R$ 345.000 | Nenhum doc específico | ✅ |
| Pessoal CLT (se houver) | Não identificado | Anx 6-A + Anx 6-B por pessoa | ❓ |
