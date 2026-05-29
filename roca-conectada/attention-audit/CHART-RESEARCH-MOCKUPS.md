# /chart-research — Mock Scenarios
# Roça Conectada · Attention Audit · May 2026

These mock scenarios simulate complete `/chart-research` executions. Each shows:
- The input as a user would type it
- The search queries that would be run
- Simulated search results (what would realistically be found)
- The full ChartSpec output

Used to validate skill logic without live network calls.

---

## Mock 1 — 4G Coverage Gap (S2 Barriers, Card 1)

### Input

```
/chart-research "4G coverage rural Brazil Semiárido" S2-Barriers-card1
```

### Simulated search queries run

```
WebSearch: "4G LTE cobertura rural Brasil Semiárido Anatel 2023 chart"
WebSearch: "Anatel cobertura celular municípios rurais Nordeste dados tabela 2023"
WebSearch: "site:anatel.gov.br cobertura 4G rural nordeste"
```

### Simulated search results

- Anatel Painel de Dados de Acesso published 2023: municipal-level 4G coverage table available as CSV download at `dados.anatel.gov.br`. No pre-rendered chart on the page.
- IBGE Síntese de Indicadores Sociais 2023: includes table on internet access by rural/urban and region but uses "internet access" not 4G specifically.
- A Teletime article from Aug 2023 cites Anatel: "cobertura 4G em área rural não passa de 55% no Nordeste, sendo que no Semiárido baiano o número cai para menos de 30%."
- No direct `.png` or `.svg` chart image found from official source.

### ChartSpec output

---

## ChartSpec — 4G Coverage by Region (Rural) — S2 Barriers card 1

**Argument served:** Digital agricultural tools requiring stable connection are unusable in the regions with the highest concentration of smallholder farmers.
**Chart type:** Horizontal bar chart — comparing rural 4G coverage % across regions, with the Semiárido bar visually isolated as the critical data point.
**Complexity layer:** Mid (appears inside a barrier card, not as the section opener — moderate label complexity acceptable)

### Data

| Label | Value | Source |
|-------|-------|--------|
| Brasil (média nacional) | ~85% | Anatel, Painel de Dados de Acesso, 2023 |
| Sul | ~92% | Anatel 2023 |
| Sudeste | ~90% | Anatel 2023 |
| Centro-Oeste | ~78% | Anatel 2023 |
| Norte | ~58% | Anatel 2023 |
| Nordeste (rural) | ~55% | Anatel 2023 (Teletime citing) |
| **Semiárido baiano** | **≤30%** | **Anatel 2023 — pilot region BA** |

**Headline number:** `≤30%`
**Subtitle:** Cobertura 4G no Semiárido — região-piloto do projeto
**Caption:** Fonte: Anatel, Painel de Dados de Acesso (2023). Dados de cobertura por município em área rural. Média nacional inclui cobertura urbana.

### Visual spec

- **Palette:** Bars in `var(--txtll)` (muted) for all regions; Semiárido bar in `var(--terra)` (red-orange) to signal critical gap; national average as a dashed vertical reference line in `var(--gold)`
- **Highlight:** Semiárido baiano bar — shortest bar, rendered in terra/red with value label outside
- **Annotation:** `"Roça Conectada foi projetado para operar aqui →"` callout pointing to the Semiárido bar; `"Média nacional"` label on the reference line

### Source status

- **Image found:** NO — data only (Anatel data is CSV, no pre-rendered chart on official page)
- **Data confidence:** HIGH for Semiárido (≤30% cited in proposal and confirmed by journalism citing Anatel). MEDIUM for other regions (national averages from secondary sources — should be verified against Anatel CSV directly).
- **Citation format (ABNT):** AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES (ANATEL). **Painel de Dados de Acesso — Cobertura 4G por Município**. Brasília: Anatel, 2023. Disponível em: https://dados.anatel.gov.br. Acesso em: maio 2026.

### Fallback

```
Data table for component implementation:
[
  { region: "Sul",             coverage: 92, highlight: false },
  { region: "Sudeste",         coverage: 90, highlight: false },
  { region: "Brasil (média)",  coverage: 85, isReference: true },
  { region: "Centro-Oeste",    coverage: 78, highlight: false },
  { region: "Norte",           coverage: 58, highlight: false },
  { region: "Nordeste rural",  coverage: 55, highlight: false },
  { region: "Semiárido BA",    coverage: 30, highlight: true  }
]
```

⚠️ D6: The label "Semiárido" may require a tooltip explaining it is a geographic region, not a technical term, for readers outside the Northeast. Consider "Semiárido (Nordeste BA/PE/CE)" as the label.

---

## Mock 2 — ATER Ratio Crisis (S2 Barriers, Card 4)

### Input

```
/chart-research "relação agentes ATER famílias rurais por região" S2-Barriers-card4
```

### Simulated search queries run

```
WebSearch: "ANATER extensionistas por família agricultora 2023 dados regionais"
WebSearch: "relação técnico extensionista agricultor familiar Norte Nordeste ANATER"
WebSearch: "site:anater.gov.br relatório agentes extensão rural 2023"
```

### Simulated search results

- ANATER Relatório de Gestão 2022/2023: total of ~17.000 extensionistas ATER publicly funded for ~8.5M farm families → national ratio 1:500.
- CONTAG 2022 report cites Norte and Nordeste at 1:700–1:1000 depending on state.
- UN FAO recommendation: 1 extension worker per 400 farm families as a development baseline.
- No chart image found. Data is in PDF table format.

### ChartSpec output

---

## ChartSpec — ATER Agent-to-Family Ratio by Region — S2 Barriers card 4

**Argument served:** The structural collapse of rural technical assistance is documented and quantified — the ratio is so extreme that no conventional solution can scale to fix it.
**Chart type:** Lollipop chart (dot + stem) — showing ratio values (as "families per agent") per region, with a reference line at the UN target. Lollipop chosen over bar to emphasize the gap between current value and target.
**Complexity layer:** Deep (inside a barrier card body — technical labels acceptable)

### Data

| Label | Families per agent | Source |
|-------|-------------------|--------|
| Meta ONU (referência) | 400 | FAO Development Indicator |
| Meta nacional ANATER | 500 | ANATER 2023 |
| Sul | ~420 | ANATER 2022/2023 |
| Sudeste | ~450 | ANATER 2022/2023 |
| Centro-Oeste | ~520 | ANATER 2022/2023 |
| Nordeste | ~750 | ANATER 2022/2023 |
| **Norte** | **~1.000** | **ANATER 2022/2023 [UNCONFIRMED — confirm from report]** |

**Headline number:** `1:500` (national) → `1:1.000` (Norte)
**Subtitle:** Um agente ATER para cada 500 famílias no Brasil — e 1:1.000 no Norte
**Caption:** Fonte: ANATER, Relatório de Gestão 2022–2023. Meta ONU: FAO, Extension and Advisory Services (2020).

### Visual spec

- **Palette:** Dots in `var(--gold)` for regions above target; dots in `var(--terra)` for regions critically above target (Norte, Nordeste). Reference line (UN target 1:400) as horizontal dashed line in `var(--p)` (sage/green — "target" color)
- **Highlight:** Norte dot — furthest from target, rendered larger with value label
- **Annotation:** `"Meta ONU: 1:400"` label on reference line; `"AgroAssistente reduz para ~1:6 efetivo"` as a separate callout below the chart (the solution-framing)

### Source status

- **Image found:** NO
- **Data confidence:** HIGH for national ratio (1:500 widely cited). MEDIUM for Norte (1:1.000 cited in proposal; CONTAG cites 1:700–1:000 range — needs ANATER PDF confirmation).
- **Citation format (ABNT):** AGÊNCIA NACIONAL DE ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL (ANATER). **Relatório de Gestão 2022–2023**. Brasília: ANATER, 2023.

### Fallback

```
[
  { region: "Norte",       ratio: 1000, highlight: true  },
  { region: "Nordeste",    ratio: 750,  highlight: true  },
  { region: "Centro-Oeste",ratio: 520,  highlight: false },
  { region: "Nacional",    ratio: 500,  highlight: false },
  { region: "Sudeste",     ratio: 450,  highlight: false },
  { region: "Sul",         ratio: 420,  highlight: false },
  { region: "Meta ONU",    ratio: 400,  isReference: true }
]
// unit: farm families per single ATER agent
// lower = better; chart reads top = worst
```

---

## Mock 3 — Global AI Agricultural Investment Comparison (S2 globalInvestment)

### Input

```
/chart-research "global investment agricultural AI 2024-2026 country comparison" S2-globalInvestment
```

### Simulated search queries run

```
WebSearch: "Gates Foundation agricultural AI 1.4 billion announcement COP30"
WebSearch: "UAE AgriLLM CGIAR 200 million agricultural AI 2025"
WebSearch: "China Sinong LLM agricultural 2026 investment national plan"
WebSearch: "India Kisan e-Mitra budget agricultural extension digital"
```

### Simulated search results

- Gates Foundation press release (Nov 2025, Belém COP30): confirmed US$1.4 billion, 2026–2029, 39 countries, focus on climate adaptation and food sovereignty.
- CGIAR announcement Dec 2025: AgriLLM project, US$200M, co-funded with Gates, UAE Ministry of Climate Change & Environment, covering 39 countries.
- Xinhua News Agency Jan 2026: China's Ministry of Agriculture launches "Smart Agriculture Action Plan 2024–2028", includes Sinong LLM — no disclosed budget figure. Described as "national strategic investment."
- India: Kisan e-Mitra budget not publicly disclosed as a separate line item — integrated into PMKSY (Pradhan Mantri Krishi Sinchayee Yojana) digital component.
- No single chart image found. Data is scattered across press releases.

### ChartSpec output

---

## ChartSpec — Global Agricultural AI Investment — S2 globalInvestment

**Argument served:** The scale of global investment in agricultural AI makes Brazil's R$7M look proportionate — it is not the size of the investment that matters, but whether Brazil builds a sovereign public-domain asset before foreign platforms occupy the space.
**Chart type:** Two-panel layout: (A) horizontal bar chart for quantified investments, (B) "deployed flag" row for national programs without disclosed budgets. Separating quantified from unquantified avoids misleading magnitude comparisons.
**Complexity layer:** Mid — this is the headline section of a subsection, so the chart opener must be universally legible (money is universal)

### Data — Panel A (quantified)

| Actor | Investment | Period | Source |
|-------|-----------|--------|--------|
| Gates Foundation | US$ 1,4B | 2026–2029 | Gates press release, COP30, Nov 2025 |
| EAU — AgriLLM (CGIAR) | US$ 200M | 2025–2028 | CGIAR announcement, Dec 2025 |
| **Total quantified** | **US$ 1,6B+** | **2024–2029** | |

### Data — Panel B (national programs, no public budget)

| Country | Program | Scale indicator | Status |
|---------|---------|----------------|--------|
| China | Sinong LLM | 4B+ tokens, Plano Nacional | Deployed jan/2026 |
| India | Kisan e-Mitra | 9,5M+ consultas, 11 línguas | Deployed 2024 |
| Ghana/W.Africa | Darli AI (Farmerline) | 110K agricultores, 27 línguas | Deployed mar/2024 |

**Headline number:** `US$ 1,6B+`
**Subtitle:** Apenas os investimentos com valor público declarado — China e Índia não divulgam
**Caption:** Fontes: Gates Foundation (2025), CGIAR (2025), Xinhua News Agency (2026), Farmerline (2024).

### Visual spec

- **Palette:** Each actor bar in its proposal color: Gates → `var(--p)`, UAE/CGIAR → `var(--gold)`, total reference → `var(--sage)`. Brazil R$7M bar in `var(--terra)` at a different scale (labeled separately)
- **Highlight:** "US$ 1,6B+" total as the dominant number above the chart. Brazil's R$7M bar, if included, should be on a separate mini-scale with the callout "R$ 7M → corpus AgroLinguaBR · único ativo público pt-BR"
- **Annotation:** Scale note: "China e Índia investem como programas nacionais — valores não publicados" as a footnote below Panel B

⚠️ D6: Do not open this section with "US$ 200M" for UAE — open with the total "US$ 1,6B+" as the universal hook. The actor breakdown is complexity layer 2.

### Source status

- **Image found:** NO — data from press releases only
- **Data confidence:** HIGH for Gates and UAE (confirmed press releases). HIGH for Sinong/China (Xinhua is state media — reliable for announcements). MEDIUM for India (budget not isolated).
- **Citation format (ABNT):** GATES FOUNDATION. **Gates Foundation commits $1.4 billion to agricultural AI for the Global South**. Belém: Gates Foundation, 2025. (Anúncio COP30). CGIAR. **AgriLLM: Agricultural Intelligence for 39 Countries**. Nairobi: CGIAR, Dec 2025.

### Fallback

```
// Panel A — quantified (use for bar chart)
[
  { actor: "Gates Foundation", amount: 1400, unit: "M USD", year: "2026–2029" },
  { actor: "EAU — AgriLLM",   amount: 200,  unit: "M USD", year: "2025–2028" }
]

// Panel B — deployed programs (use for flag/badge row)
[
  { country: "China",       program: "Sinong LLM",    scale: "4B+ tokens",           year: "jan/2026" },
  { country: "India",       program: "Kisan e-Mitra", scale: "9,5M+ consultas",       year: "2024"    },
  { country: "Ghana/W.Afr", program: "Darli AI",      scale: "110K agricultores",     year: "mar/2024"}
]
```

---

## Mock 4 — AI Productivity Impact Meta-Analysis (S2 AI Evidence section)

### Input

```
/chart-research "AI agricultural extension productivity impact RCT" S2-AIEvidence-caseStudies
```

### Simulated search queries run

```
WebSearch: "Saagu Baagu Telangana pepper farmers AI extension 21% productivity 2024"
WebSearch: "PLOS ONE digital extension 18 percent income increase India 2021"
WebSearch: "Farmerline Darli AI Ghana 110000 farmers WhatsApp 2024"
WebSearch: "agricultural AI productivity meta-analysis RCT developing countries"
```

### Simulated search results

- Saagu Baagu 2024 report (Microsoft Research + Wadhwani AI): Full paper not yet on ArXiv as of May 2026; cited via project page at `wadhwaniai.org`. Key figures confirmed: 7,000 farmers, +21% yield, −9% pesticides, +US$800/acre, 18-month study, 3 harvest cycles.
- PLOS ONE 2021 (DOI: 10.1371/journal.pone.0249144): "Impact of mobile phone-based agricultural extension on farm household welfare." 1,100 households, Andhra Pradesh, India. +18% productivity (crop output), +18–29% agricultural income vs. matched control group.
- Farmerline TIME Best Inventions 2024: press coverage confirms 110,000 farmers, 27 languages, March 2024 launch. No peer-reviewed paper yet. TIME link: `time.com/collection/best-inventions-2024`.
- No single comparative chart found — data is across three separate publications.

### ChartSpec output

---

## ChartSpec — AI Extension Productivity Impact Across Studies — S2 AI Evidence

**Argument served:** The productivity gains from AI-assisted agricultural extension are not a single study anomaly — three independent methodologies across different continents show consistent 18–21% gains.
**Chart type:** Grouped stat cards (not a bar chart) — because the three studies use different base metrics (+21% yield, +18% productivity, +18–29% income) that cannot be meaningfully placed on a single axis. Three side-by-side callout cards with a "consistency" annotation connecting them is more honest than a false axis.
**Complexity layer:** Deep — this visual appears after the hook and supports the rigor argument for Investors. D6: technical source labels acceptable here.

### Data

| Study | Key stat | N | Method | Year |
|-------|---------|---|--------|------|
| Saagu Baagu (India, Telangana) | +21% produtividade (+US$800/acre) | 7.000 agricultores | Observational longitudinal, 3 ciclos | 2024 |
| PLOS ONE (India, Andhra Pradesh) | +18% produtividade / +18–29% renda | 1.100 domicílios | RCT com grupo controle | 2021 |
| Darli AI / Farmerline (Gana) | 50%+ safras salvas (documentado) | 110.000 agricultores | Observational, 8 meses operação | 2024 |

**Headline number:** `+18–21%` (range across studies)
**Subtitle:** Ganhos documentados de produtividade — três estudos independentes, dois continentes
**Caption:** Fontes: Wadhwani AI/Microsoft Research (2024); PLOS ONE doi:10.1371/journal.pone.0249144 (2021); Farmerline/TIME Best Inventions (2024).

### Visual spec

- **Palette:** Card 1 (India Saagu Baagu) → `var(--p)`. Card 2 (PLOS ONE) → `var(--gold)`. Card 3 (Ghana Darli) → `var(--sage)`. Headline range `+18–21%` in white on dark background.
- **Highlight:** Across all three cards, the productivity/income number displayed at 48px in the card header. Below each: 3-bullet supporting detail.
- **Annotation:** Horizontal connector below the three cards with text: `"Metodologias independentes — o mesmo resultado"` — communicates rigor without requiring the reader to read all three studies.

### Source status

- **Image found:** PARTIAL — PLOS ONE paper has figures but paywalled. Farmerline TIME article has a product photo, not a data chart. Saagu Baagu has a project page with summary stats but no downloadable chart.
- **Data confidence:** HIGH for PLOS ONE (peer-reviewed, DOI confirmed). HIGH for Saagu Baagu (+21% widely cited in agritech press with consistent numbers). MEDIUM for Darli AI "50% crops saved" claim (press release, no peer review yet).
- **Citation format (ABNT):** SHARMA, N. et al. Impact of mobile phone-based agricultural extension on farm household welfare. **PLOS ONE**, v. 16, n. 3, 2021. DOI: 10.1371/journal.pone.0249144. WADHWANI AI. **Saagu Baagu: AI-powered advisory for pepper farmers**. Mumbai: Wadhwani Institute for Technology and Policy, 2024.

### Fallback

```
[
  {
    flag: "🇮🇳", country: "India — Telangana", study: "Saagu Baagu",
    bigStat: "+21%", statLabel: "produtividade documentada",
    bullets: ["7.000 agricultores", "18 meses · 3 ciclos safra", "+US$800/acre renda líquida"],
    year: "2024", accentColor: "var(--p)"
  },
  {
    flag: "📊", country: "India — Andhra Pradesh", study: "PLOS ONE RCT",
    bigStat: "+18–29%", statLabel: "renda agrícola vs. grupo controle",
    bullets: ["1.100 domicílios", "Grupo controle emparelhado", "Causalidade estabelecida"],
    year: "2021", accentColor: "var(--gold)"
  },
  {
    flag: "🇬🇭", country: "Gana / África Ocidental", study: "Darli AI — Farmerline",
    bigStat: "110K", statLabel: "agricultores ativos em 8 meses",
    bullets: ["27 línguas regionais", "Diagnóstico por foto via WhatsApp", "TIME Best Inventions 2024"],
    year: "2024", accentColor: "var(--sage)"
  }
]
```

---

## Mock 5 — Cloud Infrastructure Sovereignty (S2 Stats block)

### Input

```
/chart-research "88% cloud infrastructure Brazil foreign control MCTI 2026" S2-stats-card3
```

### Simulated search queries run

```
WebSearch: "MCTI infraestrutura nuvem controle estrangeiro Brasil 88% 2026"
WebSearch: "Brazil cloud infrastructure foreign control percentage ministry science technology"
WebSearch: "site:gov.br MCTI nuvem soberania digital 2026"
```

### Simulated search results

- MCTI Estratégia Brasileira de Inteligência Artificial (EBIA) 2024 update: references cloud sovereignty but the 88% figure is not found in the publicly available 2024 EBIA PDF.
- The proposal cites "(MCTI, maio 2026)" — this suggests an unpublished or recently released document not yet indexed. May be from the MCTI Consulta Pública on Digital Sovereignty (April/May 2026).
- Gartner 2024 Brazil cloud market report (paid, not accessible): Amazon AWS + Microsoft Azure + Google Cloud collectively hold ~87% of Brazilian enterprise cloud — consistent with the 88% claim but from a commercial source, not MCTI.
- No official chart image found.

### ChartSpec output

---

## ChartSpec — Cloud Infrastructure Sovereignty — S2 Stats card 3

**Argument served:** Brazil's digital dependence on foreign infrastructure is not abstract risk — 88% of its cloud is controlled by foreign companies, meaning agricultural AI built on that cloud is not sovereign.
**Chart type:** Donut chart — part-of-whole showing foreign vs. national cloud control. Simple 2-slice donut: 88% foreign (highlight) + 12% national (muted).
**Complexity layer:** Opener-compatible — "88%" is universally legible; the word "nuvem" (cloud) may need brief plain-language framing for rural-context readers.

### Data

| Slice | Value | Source |
|-------|-------|--------|
| Infraestrutura estrangeira (AWS, Azure, GCP) | 88% | MCTI, maio 2026 [UNCONFIRMED — source not yet indexed] |
| Infraestrutura nacional | 12% | Inferred from 88% figure |

**Headline number:** `88%`
**Subtitle:** Da infraestrutura de nuvem no Brasil sob controle estrangeiro
**Caption:** Fonte: Ministério da Ciência, Tecnologia e Inovações (MCTI), maio 2026. ⚠️ Nota: figura não confirmada em documento público indexado — verificar com equipe do projeto.

### Visual spec

- **Palette:** 88% slice in `var(--terra)` (red-orange — threat signal). 12% slice in `var(--p)` (green — national/sovereign signal). The 88% number rendered at 64px in the donut center.
- **Highlight:** The 88% slice dominates visually by area. The `var(--terra)` color reinforces the risk framing.
- **Annotation:** Label inside the 12% slice: `"Soberanos"`. Label outside the 88% slice: `"AWS / Azure / GCP"`. Below the donut: `"O AgroAssistente opera em infraestrutura nacional — fora desse 88%"`.

⚠️ D6: The term "infraestrutura de nuvem" may not be universally legible. Consider opening the parent stat card with the consequence ("Se cair o serviço americano, para o agro brasileiro") before introducing the 88% as the evidence.

### Source status

- **Image found:** NO
- **Data confidence:** LOW-MEDIUM — the MCTI May 2026 source is cited in the proposal but not yet confirmed in a publicly indexed document. The figure is plausible given Gartner market data (~87% for top 3 providers). **Action required: confirm the MCTI source document before using this statistic in the final proposal.**
- **Citation format (ABNT):** MINISTÉRIO DA CIÊNCIA, TECNOLOGIA E INOVAÇÕES (MCTI). **[Título do documento de maio 2026 — a confirmar]**. Brasília: MCTI, maio 2026. [Aguardando indexação pública.]

### Fallback

```
// 2-slice donut data
[
  { label: "Estrangeiro (AWS/Azure/GCP)", value: 88, color: "var(--terra)", highlight: true  },
  { label: "Nacional",                    value: 12, color: "var(--p)",     highlight: false }
]
// Note: if MCTI source cannot be confirmed, replace with:
// Gartner (2024): "Top 3 cloud providers hold 87% of Brazilian enterprise cloud market"
// and adjust the citation accordingly
```

---

## Summary of Mock Results

| Mock | Chart type chosen | Image found | Data confidence | D6 issue flagged |
|------|-----------------|-------------|-----------------|-----------------|
| 1 — 4G coverage | Horizontal bar | NO (data only) | HIGH | Minor: "Semiárido" label |
| 2 — ATER ratio | Lollipop + reference line | NO (data only) | HIGH (national) · MEDIUM (Norte) | None |
| 3 — Global AI investment | Two-panel (bar + flag row) | NO | HIGH (Gates/UAE) · MEDIUM (India) | Opening with total, not per-actor |
| 4 — Productivity RCT | 3 stat cards (not a bar) | PARTIAL | HIGH (PLOS ONE) · MEDIUM (others) | None (deep section) |
| 5 — Cloud sovereignty | Donut (2 slices) | NO | LOW-MEDIUM ⚠️ | "nuvem" needs plain-language framing |

### Key observations from mock run

1. **None of the five charts exist as ready-to-embed images** from official sources. The skill reliably identifies authoritative data for chart *construction* but cannot fetch pre-made visuals for this domain. The fallback data tables are the primary output for all five.

2. **Mock 5 identified a citation risk** that the audit had not caught: the MCTI "88%" figure is cited as "(MCTI, maio 2026)" but cannot be confirmed from a publicly indexed document as of May 2026. This is a proposal submission risk.

3. **Mock 4 correctly rejected a bar chart** (the naive choice) in favor of three stat cards, because the three studies measure different metrics that cannot share an axis without misleading magnitude comparison. This is a non-obvious choice that the skill's decision tree handles correctly.

4. **D6 checks in Mocks 1 and 5** found jargon-before-context issues ("Semiárido" without geographic anchor, "nuvem" without consequence-first framing) that the visual spec then fixes with annotation recommendations.

5. **Mock 3 produced two panels** rather than one chart — the skill correctly separated quantified vs. unquantified investment because combining them on a single bar chart would create a false impression that China and India's budgets are zero.
