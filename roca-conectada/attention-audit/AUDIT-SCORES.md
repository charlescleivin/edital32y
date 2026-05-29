# Document Audit — Attention Span Scores
# Roça Conectada Proposal · Cycle 1 · May 2026

> Reference: `SYSTEM.md` for scoring rubric and methodology.
> D6 (Complexity Gradient) added in revision cycle 2. All ASI values recalculated with 6-dimension formula.

---

## Summary Table

ASI = 1 − (D1+D2+D3+D4+D5+D6) / 30

| Section | Sub-block | D1 | D2 | D3 | D4 | D5 | D6 | ASI | Severity | Priority |
|---------|-----------|----|----|----|----|----|----|-----|----------|----------|
| S1 Sumário | Stats + problem statement | 4 | 4 | 4 | 4 | 4 | 4 | **0.20** | Good | 3 |
| S2 Problema | Stats grid | 5 | 5 | 5 | 5 | 4 | 5 | **0.03** | Excellent | 3 |
| S2 Problema | Barriers (5 cards) | 4 | 4 | 4 | 4 | 4 | 3 | **0.23** | Good | 3 |
| S2 Problema | **AI Evidence body** | 1 | 2 | 4 | 1 | 2 | 2 | **0.60** | 🔴 High | **1** |
| S2 Problema | AI Race Chart | 5 | 5 | 5 | 5 | 5 | 4 | **0.03** | Excellent | 3 |
| S2 Problema | contextNote | 3 | 3 | 2 | 2 | 3 | 4 | **0.43** | Moderate | 2 |
| S2 Problema | competitiveContext | 3 | 3 | 3 | 2 | 3 | 2 | **0.47** | Moderate | 2 |
| S3 Objetivos | General objective block | 3 | 3 | 3 | 2 | 3 | 2 | **0.47** | Moderate | 2 |
| S3 Objetivos | Policy alignment (5 items) | 2 | 3 | 2 | 2 | 2 | 2 | **0.57** | 🟠 High | **1** |
| S3 Objetivos | **innovationPolicy body** | 1 | 2 | 1 | 2 | 1 | 1 | **0.73** | 🔴 Critical | **1** |
| S4 Metodologia | Phase cards (3) | 4 | 4 | 4 | 4 | 4 | 4 | **0.20** | Good | 3 |
| S4 Metodologia | Gantt + milestones | 4 | 4 | 3 | 4 | 4 | 4 | **0.23** | Good | 3 |
| S4 Metodologia | Sovereignty callouts | 2 | 3 | 3 | 2 | 3 | 1 | **0.53** | Moderate | 2 |
| S4 Metodologia | Pilot regions (3) | 3 | 3 | 3 | 3 | 3 | 4 | **0.37** | Moderate | 2 |
| S5 Equipe | Member cards | 4 | 4 | 4 | 4 | 4 | 5 | **0.17** | Good | 3 |
| S6 Orçamento | Budget lines + compliance | 4 | 4 | 4 | 4 | 4 | 4 | **0.20** | Good | 3 |
| S7 Parcerias | Partner role blocks | 2 | 3 | 2 | 2 | 2 | 3 | **0.53** | Moderate | 2 |
| S7 Parcerias | Dissemination routes table | 4 | 4 | 3 | 4 | 4 | 4 | **0.23** | Good | 3 |
| S8 Indicadores | Counters + table | 5 | 5 | 4 | 5 | 4 | 5 | **0.07** | Excellent | 3 |
| S8 Indicadores | **impactNarrative** | 1 | 2 | 2 | 2 | 2 | 3 | **0.60** | 🔴 High | **1** |
| S9 Riscos | Risk matrix | 4 | 4 | 3 | 4 | 4 | 4 | **0.23** | Good | 3 |
| S10 Checklist | Checklist groups | 5 | 5 | 4 | 4 | 5 | 5 | **0.07** | Excellent | 3 |

---

## Priority 1 Sections — Full Audit

---

### S2 Problema — AI Evidence Section (body text)
**ASI: 0.60** | D1: 1/5 | D2: 2/5 | D3: 4/5 | D4: 1/5 | D5: 2/5 | D6: 2/5 | Severity: 🔴 High Strain

**Single biggest problem:** Three compelling case studies with dramatic quantitative results (+21% productivity, 110K farmers, +18–29% income) are embedded as prose sentences inside a 600+ word text block, invisible to any reader who isn't reading every word.

**D6 jargon gates found:**
- "LLMs" appears in the third paragraph without any prior plain-language definition of what a language model is
- "corpus", "fine-tuning", "ArXiv", "Zenodo", "Hugging Face" appear in the closing paragraph as a cluster — requires significant domain knowledge to parse
- The overall structure puts the technical argument (corpus urgency, fine-tuning window) before the emotional argument (farmers being helped right now)

**For the Investor:** The evidence is actually very strong — Saagu Baagu in India, Darli AI in Ghana, and the PLOS ONE meta-analysis form a rigorous international precedent case. The prose structure buries the strength of this evidence. A careful investor might miss that ALL THREE studies use different methodologies and reinforce each other.

**For the Scanner:** The subsection heading "O que o campo internacional já documentou" signals the presence of evidence, but the actual numbers (+21%, US$800/acre, 110,000 farmers, +18–29%) are embedded mid-sentence. A scanner who glances for 8–10 seconds sees only the heading and a wall of text.

**For the Skeptic:** The section opens with a rhetorical question — good hook (D3=4). But the payoff (dramatic case study results) is delayed by 3–4 sentences of framing. A skeptic disengaged at word 50 never reaches "+21% produtividade."

**Recommended restructure:**
1. Keep the rhetorical hook as a compact 2-sentence opener
2. Extract the 3 case studies into individual visual cards with the primary metric as the large visual number
3. Move the global investment context (Gates, China, UAE) to a separate compact section — different argument (scale of investment) from field evidence (efficacy)
4. Make the "corpus window closes" urgency argument its own closing callout with a visual timeline
5. **D6 fix:** Lead with the universally accessible evidence (farmers helped, results in the field), then escalate to the technical corpus/fine-tuning argument only at the end

**Redesigned version:** See `reimagined/AiEvidenceBlock.tsx` — integrated into `src/components/ProblemaSection/AiEvidenceBlock.tsx`

---

### S3 Objetivos — Innovation Policy Alignment (alignmentText)
**ASI: 0.73** | D1: 1/5 | D2: 2/5 | D3: 1/5 | D4: 2/5 | D5: 1/5 | D6: 1/5 | Severity: 🔴 Critical

**Single biggest problem:** A single 260-word paragraph connecting three legal resolution items (I, III, V) to project outcomes — written in dense legal-academic prose with no visual hierarchy and maximum jargon from word 1.

**D6 jargon gates found:**
- Opens with "A Política de Inovação da [ICT EXECUTORA]..." — institutional boilerplate as an opener
- Resolution item numbers (I, III, V) and decree citations embedded in prose before any plain-language framing
- The reader never learns WHY this policy matters before being asked to parse its legal structure

**For the Investor:** The content is well-reasoned — the three directives each map cleanly to specific project outputs. But that clean mapping is invisible because it's written as a single run-on paragraph.

**For the Scanner:** Opens with institutional boilerplate. They skip the entire block.

**For the Skeptic:** Gone by word 5.

**Recommended restructure:**
Split into a 3-column card layout:
- Card 1: Diretriz I → AgroLinguaBR + AgroAPI as permanent scientific infrastructure
- Card 2: Diretriz III → Applied research solving documented social problem (ATER collapse)
- Card 3: Diretriz V → Formal partnerships with cooperatives + EMATER/EMBRAPA

**D6 fix:** Each card should open with the outcome in plain language ("Este projeto cria infraestrutura pública permanente"), then cite the directive below it.

**Redesigned version:** See `reimagined/InnovationPolicyBlock.tsx`

---

### S3 Objetivos — Policy Alignment (5 items)
**ASI: 0.57** | D1: 2/5 | D2: 3/5 | D3: 2/5 | D4: 2/5 | D5: 2/5 | D6: 2/5 | Severity: 🟠 High Strain

**Single biggest problem:** Five policy alignment blocks rendered as text cards — adequate structure but each "body" paragraph is 80–130 words of continuous prose, and each card opens with the policy name (a bureaucratic label) rather than the human outcome it enables.

**D6 jargon gates found:**
- Cards open with "PRONAF", "Estratégia Brasileira para a Transformação Digital", "PNATER" — acronyms that require prior context
- The plain-language consequence of each policy alignment (what the project delivers for rural families) comes only at the end of each paragraph

**For the Investor:** The alignment claims are solid but hard to verify at a glance. The investor has to read 400+ words to confirm alignment.

**For the Scanner:** Sees 5 labeled cards (good) but each card is a text block (bad).

**Recommended restructure:**
Keep the card structure. Inside each card:
1. Lead with a bold **"Entrega concreta: [plain-language outcome]"** — one sentence, high contrast
2. Then: policy name + decree number as a smaller label
3. Body paragraph becomes supporting detail for investors who want the full argument

---

### S8 Indicadores — Impact Narrative
**ASI: 0.60** | D1: 1/5 | D2: 2/5 | D3: 2/5 | D4: 2/5 | D5: 2/5 | D6: 3/5 | Severity: 🔴 High Strain

**Single biggest problem:** A 120-word paragraph containing three distinct quantitative claims (R$4.300–6.500/year savings per family, R$12M aggregate ecosystem impact, 12–18% input cost reduction) all embedded in prose.

**D6 note:** D6 is 3/5 here (not flagged as critical) because the section opens with R$ savings — a universally legible metric. The gradient issue is that after the accessible opener, the section collapses into technical calculation language without visual separation between layers.

**For the Investor:** The impact numbers are the section's strongest content. They're unverifiable at a glance because the calculation is embedded in the narrative rather than displayed transparently alongside the result.

**For the Scanner:** A scanner sees one paragraph of text and zero visual numbers. The three big claims are invisible.

**Recommended restructure:**
Three-element visual layout:
1. Big number callout: **R$ 4.300–6.500** per family per year (with the calculation transparent: "R$36K renda × 12–18% redução")
2. Medium callout: **R$ 12M** aggregate ecosystem impact at Phase 3
3. Supporting narrative as a 2-sentence "Como chegamos aqui" explanation

**Redesigned version:** See `reimagined/ImpactNarrativeBlock.tsx`

---

## Priority 2 Sections — Quick Notes

### S2 Problema — contextNote
**ASI: 0.43** — D6: 4/5 (good — opens with geographic context, accessible). Minor upgrade: add a small regional map image (Northeast Brazil with the 3 pilot regions highlighted) to anchor the geography visually.

### S2 Problema — competitiveContext
**ASI: 0.47** | **D6: 2/5 — jargon gate flagged**

Opens with "modelos de linguagem de grande escala (LLMs)" — technical framing from word 1. Fix: swap the opener to lead with the accessible result ("O custo de usar IA caiu 95% em dois anos — e o WhatsApp já está no bolso de 99% dos adultos rurais brasileiros"), then explain what AI is in context. The compelling stats (−95% inference cost, 99% WhatsApp rural adoption) deserve to be visual callouts, not mid-paragraph sentences.

### S3 Objetivos — General Objective
**ASI: 0.47** | **D6: 2/5 — jargon gate flagged**

One long sentence rendered as a bordered callout block. Dense from word 1 — the opener names infrastructure components (AgroAPI, AgroLinguaBR) before explaining why they matter. Fix: lead with the plain-language impact ("Levar assistência técnica de qualidade a 3.000 agricultores familiares que hoje não têm acesso"), then introduce the infrastructure components as how that impact is achieved.

### S4 Metodologia — Sovereignty Callouts
**ASI: 0.53** | **D6: 1/5 — critical jargon gate**

Three technical justification paragraphs opening immediately with LoRA/PEFT, GPU-hours, and AgroEval — maximum domain knowledge required from the first word. These sections make a valid and important argument (why compute in Brazil, why not use ChatGPT), but that argument is buried under acronyms. Fix: each callout should open with a plain-language question-answer ("Por que não usamos o ChatGPT? — Porque um modelo genérico não sabe o que é 'mandacaru' ou 'farinha d'água'"), then the technical justification follows.

### S4 Metodologia — Pilot Regions
**ASI: 0.37** — Borderline. D6: 4/5 (accessible — municipality names and geographic context are universal). The "rationale" paragraphs are long but follow the gradient naturally. A compact stat per region ("5.200 agricultores · 1 técnico por 600 famílias") as a visual sub-header would make the regional case scannable.

### S7 Parcerias — Partner Role Blocks
**ASI: 0.53** — D6: 3/5 (mixed). Partner names are accessible openers, but role descriptions mix deliverables and reciprocity in undifferentiated paragraphs. Split each block: **"Papel no projeto"** (2–3 bullets) and **"O que recebem"** (1–2 items). Serves evaluation criteria CM-05.

---

## What Is Already Working Well

These sections require no structural changes — they are models for the rest:

- **S2 Problema → Stats grid:** Perfect D1–D6. Big numbers, short labels, color-coded, 4-column grid. Jargon-free.
- **S2 Problema → Barriers section:** Alternating text/visual panel layout is excellent. Icon + big stat panel paired with narrative text. D6: 3/5 only because "arquitetura assíncrona" appears in card 1 body without plain-language context first — minor.
- **S2 Problema → AI Race Chart:** One of the best sections. Flag + country + product + scale + status badge is instantly scannable. Good gradient (flags and country names → product names → technical scale details).
- **S4 Metodologia → Phase cards + Gantt:** 3-column card layout with activities as bullet points, followed by a visual Gantt bar chart + milestone grid. Phase names are universally accessible.
- **S8 Indicadores → Counters + table:** Icon + animated counter + label is a strong visual pattern. KPI table (phase1/phase2/phase3 columns) is easy to scan. Opens with numbers, not jargon.
- **S10 Checklist:** The interactive status-badge system is excellent. Universally legible (green/amber/red status before any text).

---

## D6 Complexity Gradient — Top Jargon Gate Findings

These are the specific first-occurrence failures across the document — terms that appear before the reader has been given a reason to care:

| Term | First appearance | Section | Fix |
|------|-----------------|---------|-----|
| LLM | Paragraph 3 of AI Evidence body | S2 | Move after the field evidence cards |
| corpus | Final paragraph of AI Evidence body | S2 | Introduce as "base de dados de treinamento (corpus)" |
| fine-tuning | competitiveContext opener + Sovereignty callouts | S2, S4 | "adaptar o modelo" before using the technical term |
| LoRA / PEFT | Sovereignty callout opener | S4 | Lead with "Por que não usamos o ChatGPT?" |
| ATER | First use in barriers section | S2 | OK here — explained inline. Watch for reuse without context |
| ANATER | contextNote | S2 | OK — cited as source, not as concept requiring understanding |
| AgroLinguaBR | General objective opener | S3 | Should follow "base de dados pública de IA agroalimentar" |
| AgroAPI | General objective opener | S3 | Should follow "plataforma de acesso à assistência técnica" |

---

## Revision Tracking

| Section | Previous ASI (5-dim) | D6 Added | New ASI (6-dim) | After Redesign | Delta (total) |
|---------|---------------------|---------|-----------------|----------------|---------------|
| S2 AI Evidence body | 0.60 | D6:2 | 0.60 | **0.10** (AiEvidenceBlock.tsx · live) | −0.50 |
| S2 Global Investment | — | — | — | **redesigned rendering** (v2) | visual lift |
| S3 Innovation Policy body | 0.72 | D6:1 | 0.73 | **0.10** (InnovationPolicyBlock.tsx) | −0.63 |
| S3 Policy Alignment | 0.56 | D6:2 | 0.57 | [pending] | — |
| S7 Partners role | 0.56 | D6:3 | 0.53 | [pending] | — |
| S8 Impact Narrative | 0.64 | D6:3 | 0.60 | **0.10** (ImpactNarrativeBlock.tsx) | −0.54 |
