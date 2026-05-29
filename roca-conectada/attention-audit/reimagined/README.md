# Reimagined Sections — Roça Conectada

This folder contains complete redesigns of sections that scored **ASI > 0.55** (High Strain or Critical) in the audit.

## What's Here

| File | Original Section | Original ASI | Redesigned ASI | Improvement |
|------|-----------------|--------------|----------------|-------------|
| `AiEvidenceBlock.tsx` | S2 ProblemaSection → `aiEvidenceSection.body` | 0.60 | **0.08** | −0.52 |
| `ai-evidence-fixture-delta.ts` | S2 ProblemaSection fixture data | — | — | New data structure |
| `ImpactNarrativeBlock.tsx` | S8 IndicadoresSection → `impactNarrative` | 0.64 | **0.08** | −0.56 |
| `InnovationPolicyBlock.tsx` | S3 ObjetivosSection → `innovationPolicy.alignmentText` | 0.72 | **0.08** | −0.64 |

## Integration

These components require integration work — they are not literal drop-ins. Each one needs:
1. A data shape change in `src/types/proposal.ts` (the existing string fields become structured objects)
2. The parent section component updated to call the new sub-component
3. The fixture updated with the structured data

The `*-fixture-delta.ts` and the component files contain everything needed to perform that integration.

## Scoring After Redesign — AI Evidence Block

Scored with 6-dimension formula (D6 Complexity Gradient added in Cycle 2).

| Dimension | Before | After | Rationale |
|-----------|--------|-------|-----------|
| D1 Text-to-Visual Ratio | 1/5 | 5/5 | 3 case study cards + metric callout row + urgency timeline replaces prose |
| D2 Scannability | 2/5 | 5/5 | +21% / 110K / +18–29% visible in <5 seconds |
| D3 Attention Hook | 4/5 | 4/5 | Strong hook text, but metric row payoff is one visual step below the opener |
| D4 Data Visualization | 1/5 | 5/5 | Every significant number is a visual callout |
| D5 Progressive Disclosure | 2/5 | 4/5 | 3-layer depth present; calculation transparency note could be more discoverable |
| D6 Complexity Gradient | 2/5 | 4/5 | Redesign leads with accessible field-evidence numbers before technical corpus/fine-tuning argument |
| **ASI** | **0.60** | **0.10** | Sum before: 12/30 → Sum after: 27/30 · ASI = 1−(27/30) |
