# Visual Asset Requests
# Roça Conectada Proposal · Cycle 1

Assets ordered by impact × feasibility. Priority 1 = blocking; Priority 2 = high value; Priority 3 = enhancement.

---

## Priority 1 — High Impact, Replace Text Directly

### VAR-01 · Three-Country Case Study Cards Graphic
**Section:** S2 ProblemaSection → AI Evidence sub-block  
**Type:** Infographic — 3-column card layout  
**Format:** SVG or WebP, dark background, 1200px wide  
**Replaces:** The paragraph starting "Em Khammam, estado de Telangana..."  
**Content to show:**

```
Card 1 — India / Saagu Baagu
  Flag 🇮🇳 | Country: India · Telangana
  BIG NUMBER: +21%
  label: "produtividade documentada"
  Sub-stats: 7.000 agricultores · 18 meses · −9% defensivos · +US$800/acre
  Source tag: [b21] 2024

Card 2 — Ghana / Darli AI
  Flag 🇬🇭 | Country: Gana / África Ocidental
  BIG NUMBER: 110.000
  label: "agricultores ativos em 8 meses"
  Sub-stats: 27 línguas · WhatsApp · TIME Best Inventions 2024
  Source tag: [b22] Farmerline 2024

Card 3 — India / PLOS ONE
  Flag 📊 | Methodology: RCT com grupo controle
  BIG NUMBER: +18–29%
  label: "renda agrícola (vs. controle)"
  Sub-stats: 1.100 domicílios · causalidade estabelecida
  Source tag: [b23] PLOS ONE 2021
```

**Style:** Terracota/gold/sage palette per card, dark bg `#0f1714`, rounded corners, thin border matching card color.

---

### VAR-02 · Corpus Window Timeline
**Section:** S2 ProblemaSection → AI Evidence → corpusUrgency  
**Type:** Horizontal urgency timeline  
**Format:** SVG or WebP, dark background, full-width  
**Replaces:** The paragraph "O vácuo que não será preenchido por acidente"  
**Content to show:**

```
[GREEN segment] 2025–2026
  "Dados reais do campo brasileiro sendo gerados"
  "Janela aberta — única chance"

[AMBER segment → Mês 18]
  "AgroLinguaBR publicado · 25K pares · DOI público"
  Arrow: "Projeto entrega aqui"

[RED segment] 2028+
  "Esses dados não existem mais como dado novo"
  "Vantagem irrecuperável para quem agiu antes"
```

**Style:** Traffic light color logic (green → amber → red), dark background, bold year labels, icons (🌱 → ⚡ → 🔒). A wedge or funnel shape showing the "window closing."

---

### VAR-03 · Northeast Brazil Pilot Regions Map
**Section:** S2 ProblemaSection → contextNote  
**Type:** Minimal map — Brazil silhouette with Northeast region highlighted  
**Format:** SVG, dark background  
**Content to show:**
- Brazil outline in dark gray
- Northeast region slightly highlighted
- 3 dots: Crateús-CE (🟠), Sousa-PB (🟡), Vitória da Conquista-BA (🟢)
- Each dot labeled with city + state abbreviation
- Legend: connectivity coverage % per region (≤30% 4G in Semiárido, 3G intermitente, 4G moderado)

**Why:** The text says "Norte e Nordeste concentram o maior número de agricultores familiares com pior infraestrutura digital" — a map makes this geographic argument visceral and scannable in 2 seconds vs. 30 seconds of reading.

---

## Priority 2 — High Value, Enhance Existing Visual Sections

### VAR-04 · AI Agricultural Deployment World Map
**Section:** S2 ProblemaSection → aiRaceChart (enhance existing)  
**Type:** World map with country highlights  
**Format:** SVG, dark background  
**Content:** Highlight China, India, UAE, Ghana as deployed (green dot), Brazil as proposed (amber dot pulsing). Same data as aiRaceChart entries but spatially.  
**Note:** This supplements the existing aiRaceChart — does not replace it.

---

### VAR-05 · Innovation Policy Directive Mapping Diagram
**Section:** S3 ObjetivosSection → innovationPolicy  
**Type:** 3-column mapping diagram  
**Format:** SVG, dark background  
**Content:**
- Column 1: "Política exige" (3 directive text blocks)
- Column 2: Arrow connector "→ Projeto entrega →"
- Column 3: "Entrega concreta" (3 output blocks with specific artifacts)

**Style:** Gold palette, clean arrows, dark background.

---

### VAR-06 · ATER Collapse Infographic
**Section:** S2 ProblemaSection → barrier "Colapso Estrutural da ATER"  
**Type:** Ratio visualization  
**Format:** SVG, dark background  
**Content:**
- Visual ratio: 1 person icon vs. 500 family icons (current state)
- Visual ratio: 1 person icon vs. 83 family icons (with AgroAssistente)
- Label: "Atual: 1:500 → Com AgroAssistente: 1:6"
- Source: ANATER 2023

**Why:** The ratio 1:500 vs. 1:6 is one of the most powerful numbers in the entire proposal. Currently it's in text. A visual comparison makes the impact immediately visceral.

---

## Priority 3 — Enhancement, Not Structural

### VAR-07 · Cooperative Management Flow Diagram
**Section:** S4 MetodologiaSection → Coopera Digital description  
**Type:** Simple flow diagram  
**Content:** Farmer → Cooperative → PAA/PNAE market chain with Coopera Digital touchpoints  
**Priority:** Low — the Gantt chart already handles the timeline well

### VAR-08 · Fine-tuning Architecture Diagram  
**Section:** S4 MetodologiaSection → GPU sovereignty callout  
**Type:** Technical architecture diagram  
**Content:** Qwen2.5-7B → LoRA/PEFT → AgroLinguaBR corpus → AgroAssistente deployment  
**Priority:** Low — primarily for technically-oriented evaluators who are already reading the text

---

## Photography Suggestions (for hero images if hero sections are added)

| Section | Suggested photo subject | Purpose |
|---------|------------------------|---------|
| S2 Problema | Farmer holding a featurephone/basic smartphone in a field, looking at sky (connectivity metaphor) | Hero for Problema section |
| S4 Metodologia | EMATER extension worker with a group of farmers around a table | Hero for Metodologia section |
| S5 Equipe | Laptop in a field context / tech+rural contrast | Hero for Equipe section |

**Photo style:** All images should work in the `SectionHero` component — landscape orientation, dark overlay compatible, subject in left-third or center for text overlay on right.
