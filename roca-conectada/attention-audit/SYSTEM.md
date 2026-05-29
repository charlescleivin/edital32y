# Attention Span Audit System — Roça Conectada Proposal

## Purpose

This system evaluates every section of the proposal on five cognitive-load dimensions and produces a composite **Attention Strain Index (ASI)** score. It is designed to be run by an AI auditor on any section of the document, producing scores, explanations, and concrete suggestions.

The underlying premise: a funding proposal competes with 50+ other proposals for a reviewer's attention. A technically perfect proposal that is exhausting to read loses to a slightly weaker proposal that is easy to scan. Attention span is not a nice-to-have — it is the delivery mechanism for everything else.

---

## The Three Reader Personas

Every section must be evaluated through three lenses simultaneously:

### 1. The Investor (Invested Reader)
Reads every word. Looking for rigor, methodology gaps, budget inconsistencies, and unanswered questions. Will tolerate prose density if the structure helps them navigate. Their failure mode: they find an inconsistency buried in a text block and the proposal loses credibility.

**What they need:** Logical structure, clear claims linked to evidence, no buried contradictions.

### 2. The Scanner (Skimming Reviewer)
Scans headings, numbers, cards, and call-out boxes. Reads a paragraph only if the visual hook earned it. Typical case: a committee member reviewing 12 proposals over 3 hours. Their failure mode: the most important proof point ("+21% productivity, India, published study") is in the middle of paragraph 3 and they never see it.

**What they need:** Big numbers as visual callouts, heading hierarchy that summarizes the argument, scannable card layouts.

### 3. The Skeptic (Disengaged Reader)
Opens the document without intent to fund. Perhaps a domain expert asked to give a second opinion, or a committee alternate. Needs an emotional or intellectual hook within the first three visual seconds — a tension-creating question, a shocking stat, or a striking visual — or they mentally exit. Their failure mode: the section opens with "This section presents the alignment between the project and national policies..." and they stop reading after three words.

**What they need:** Strong openers, emotional or contrarian framings, maximum information per visual second.

---

## The Five Scoring Dimensions

### D1: Text-to-Visual Ratio (TVR)
What percentage of the section's content is conveyed through visual/structured elements (stat cards, icon+number patterns, timelines, comparison tables, case study cards, charts) vs. running prose?

| Score | Condition |
|-------|-----------|
| 5 | ≥60% of content is visual/structured |
| 4 | 40–60% visual |
| 3 | 25–40% visual |
| 2 | 10–25% visual |
| 1 | <10% visual — pure prose block |

> **Why it matters:** Humans process images and structured patterns ~60,000× faster than text. A reader who takes 90 seconds to read a paragraph absorbs the same information in 4 seconds from a well-designed card.

---

### D2: Scannability Index (SI)
Can a reader extract the three most important facts from this section in under 10 seconds of casual scanning?

| Score | Condition |
|-------|-----------|
| 5 | Yes — bold numbers, visual hierarchy, short label + big number pattern throughout |
| 4 | Yes for 2 of 3 key facts |
| 3 | Only with effort — headers exist but facts are buried inside paragraphs |
| 2 | Very difficult — key facts are in mid-sentence positions |
| 1 | Impossible — no visual hierarchy, no headers, pure paragraph |

> **Why it matters:** Scanners determine whether to read within 10 seconds. If they can't quickly confirm "this section has something relevant," they move on.

---

### D3: Attention Hook Strength (AHS)
Does the first visible element of the section (or sub-block) create a reason to keep reading?

| Score | Condition |
|-------|-----------|
| 5 | Immediate visual hook — surprising stat, tension-creating question, or bold contrarian statement that creates cognitive dissonance |
| 4 | Good hook but delayed — appears in 2nd or 3rd element |
| 3 | Moderate — heading describes the topic but doesn't create urgency or tension |
| 2 | Weak — generic academic framing ("This section presents...") |
| 1 | None — opens with legal/procedural text or methodology boilerplate |

> **Why it matters:** The skeptic makes a go/no-go decision at the opener. A hook doesn't mean clickbait — it means an honest framing that makes the content feel consequential.

---

### D4: Data Visualization Quality (DVQ)
Are numbers and comparisons expressed as visual elements (large stat callouts, bar comparisons, icon+number), or are they buried in prose sentences?

| Score | Condition |
|-------|-----------|
| 5 | All significant numbers are visual callouts, labeled and contextualized visually |
| 4 | Most numbers (≥70%) are visual |
| 3 | Mixed — some numbers are callouts, some are in running text |
| 2 | Numbers exist but are embedded in sentences and hard to extract by scanning |
| 1 | No visual treatment of numbers whatsoever |

> **Why it matters:** "The project generated +21% productivity and −9% pesticide use over 18 months" takes ~8 seconds to process. A card with "+21%" in large type and "produtividade documentada · 18 meses · Índia 2024" in smaller text takes ~1.5 seconds. Same information. 5× faster.

---

### D5: Progressive Disclosure (PD)
Is the information layered so a scanner gets the summary and an investor gets the depth, without either being penalized?

| Score | Condition |
|-------|-----------|
| 5 | Clear 3-layer hierarchy: bold visual summary → supporting sentence → methodology footnote/reference |
| 4 | 2 of 3 layers present |
| 3 | Single density — all detail, no summary layer; must read everything to understand anything |
| 2 | Information ordering penalizes scanners (detail comes before summary) |
| 1 | Dense prose with no layer distinction — all sentences carry equal weight |

> **Why it matters:** The investor and scanner aren't reading different documents — they're reading the same document at different depths. Progressive disclosure serves both without dumbing down.

---

### D6: Complexity Gradient (CG)
Does the section begin with universally accessible content — no prior knowledge required — and increase in technical complexity only as the reader goes deeper? Jargon, acronyms, and domain-specific terms should never appear before the reader has been given a plain-language reason to care.

| Score | Condition |
|-------|-----------|
| 5 | Opens with a universally legible hook (big number, universal emotion, plain-language consequence). Technical terms always introduced after their plain-language context. Complexity increases smoothly from top to bottom. |
| 4 | Good gradient, but 1–2 jargon gates appear slightly before their context (e.g., an acronym in the second sentence without explanation until the third) |
| 3 | Mixed: some technical framing from the start, some accessible elements. A reader without domain knowledge can partially follow but hits unexplained walls |
| 2 | Technical vocabulary in the opening — requires prior domain knowledge to parse the section opener. Example: starts with "LLM", "ATER", "corpus", or "LoRA" without explanation |
| 1 | Opens with jargon chains, acronyms, or institutional boilerplate. A reader outside the domain cannot determine the section's purpose from the first 20 words |

**Jargon gates to watch for in this document:** LLM, corpus, fine-tuning, LoRA/PEFT, ATER, ANATER, CGIAR, LoRA, SciELO, PSM, RESR — each should appear only after the reader understands *why it matters*, not as openers.

> **Why it matters:** The skeptic and scanner form a first impression from the first 3–5 words of any section. Jargon before context is an immediate signal that the section "is not for me" — and they mentally exit. Even the investor (who will read everything) absorbs sections more efficiently when the complexity builds rather than front-loads.

---

## Composite ASI Calculation

```
Average Score = (D1 + D2 + D3 + D4 + D5 + D6) / 6
ASI = 1 - (Average Score / 5)
```

| ASI Range | Severity | Action |
|-----------|----------|--------|
| 0.00–0.20 | Excellent | No structural changes needed |
| 0.20–0.40 | Good | Minor improvements (polish callouts, strengthen hook) |
| 0.40–0.55 | Moderate | Visual redesign recommended for 1–2 elements |
| 0.55–0.70 | High Strain | Restructuring required — Scanner and Skeptic will miss key content |
| 0.70–1.00 | Critical | Section may lose all three reader types; full rebuild recommended |

---

## Standard Audit Output Format

For every section or sub-block, the AI auditor produces:

```
## [Section Name] — [Sub-block if applicable]
**ASI: X.XX** | D1: X/5 | D2: X/5 | D3: X/5 | D4: X/5 | D5: X/5 | D6: X/5 | Severity: [label]

**Single biggest problem:** [One sentence identifying the root cause]

**For the Investor:** [What risk they face from current format]
**For the Scanner:** [What they'll miss — specific fact/claim]
**For the Skeptic:** [Why they'll stop reading — specific moment]

**Recommended restructure:** [Concrete action — not "add more visuals" but "split the 3 case studies 
into individual cards with the productivity stat as the headline number per card"]

**Image/visual assets needed:**
- [Specific prompt or description for each required graphic/photo]
```

---

## Section Severity Triage

Use this to prioritize which sections to fix first. A section is **Priority 1** if:
- ASI > 0.55 AND it contains evidence that the evaluator weights heavily (methodology, impact, international precedents)
- OR it is in the first third of the proposal (first impressions set reading posture)

A section is **Priority 2** if:
- ASI 0.40–0.55 AND contains secondary supporting evidence

A section is **Priority 3** if:
- ASI < 0.40 OR contains procedural content (checklists, budget compliance tables)

---

## Image and Visual Asset Request Protocol

When the audit identifies that a section needs visual content that doesn't yet exist, use this format to request it:

```
### Visual Asset Request — [Section] — [Asset Name]
**Type:** [infographic | chart | photograph | diagram | timeline | map]
**Purpose:** [What cognitive job this visual does — what it replaces in the text]
**Content:** [Exactly what data/story it should show]
**Style:** [Dark mode, terracota/gold/sage palette, consistent with proposal design]
**Priority:** [high | medium | low]
**Text it replaces:** [Quote the specific prose this visual would replace]
```

---

## Revision Cycle

After each redesign iteration:
1. Re-run the audit on the redesigned section
2. Compare ASI before/after
3. Document the delta in `AUDIT-SCORES.md`
4. If ASI > 0.35 after redesign, continue iterating

Goal for any section that was Priority 1: ASI ≤ 0.25 after redesign.
