import CharlesSection from '@/components/CharlesSection/CharlesSection'
import { fixture as charlesSectionFixture } from '@/components/CharlesSection/CharlesSection.fixture'
import ParceriasSection, { componentMeta as parceriasSectionMeta } from '@/components/ParceriasSection/ParceriasSection'
import { fixture as parceriasSectionFixture } from '@/components/ParceriasSection/ParceriasSection.fixture'
import ChecklistSection, { componentMeta as checklistSectionMeta } from '@/components/ChecklistSection/ChecklistSection'
import { fixture as checklistSectionFixture } from '@/components/ChecklistSection/ChecklistSection.fixture'
import RiscosSection, { componentMeta as riscosSectionMeta } from '@/components/RiscosSection/RiscosSection'
import { fixture as riscosSectionFixture } from '@/components/RiscosSection/RiscosSection.fixture'
import IndicadoresSection, { componentMeta as indicadoresSectionMeta } from '@/components/IndicadoresSection/IndicadoresSection'
import { fixture as indicadoresSectionFixture } from '@/components/IndicadoresSection/IndicadoresSection.fixture'
import OrcamentoSection, { componentMeta as orcamentoSectionMeta } from '@/components/OrcamentoSection/OrcamentoSection'
import { fixture as orcamentoSectionFixture } from '@/components/OrcamentoSection/OrcamentoSection.fixture'
import EquipeSection, { componentMeta as equipeSectionMeta } from '@/components/EquipeSection/EquipeSection'
import { fixture as equipeSectionFixture } from '@/components/EquipeSection/EquipeSection.fixture'
import MetodologiaSection, { componentMeta as metodologiaSectionMeta } from '@/components/MetodologiaSection/MetodologiaSection'
import { fixture as metodologiaSectionFixture } from '@/components/MetodologiaSection/MetodologiaSection.fixture'
import ObjetivosSection, { componentMeta as objetivosSectionMeta } from '@/components/ObjetivosSection/ObjetivosSection'
import { fixture as objetivosSectionFixture } from '@/components/ObjetivosSection/ObjetivosSection.fixture'
import ProblemaSection, { componentMeta as problemaSectionMeta } from '@/components/ProblemaSection/ProblemaSection'
import { fixture as problemaSectionFixture } from '@/components/ProblemaSection/ProblemaSection.fixture'
import SumarioSection, { componentMeta as sumarioSectionMeta } from '@/components/SumarioSection/SumarioSection'
import { fixture as sumarioSectionFixture } from '@/components/SumarioSection/SumarioSection.fixture'
import Sidebar, { componentMeta as sidebarMeta } from '@/components/Sidebar/Sidebar'
import { fixture as sidebarFixture } from '@/components/Sidebar/Sidebar.fixture'
import HeroSection, { componentMeta as heroSectionMeta } from '@/components/HeroSection/HeroSection'
import { fixture as heroSectionFixture } from '@/components/HeroSection/HeroSection.fixture'
// Add 2 lines per new component: one import block, one registry entry.
// Run: node scripts/new-component.mjs --name X --slug x-x --label "X X"

export const registry: Record<string, {
  Component: React.ComponentType<any>
  fixture: any
  label: string
}> = {
  [heroSectionMeta.slug]: { Component: HeroSection, fixture: heroSectionFixture, label: heroSectionMeta.label },
  // 'use client' components: named exports aren't available in server context, use literals
  'sidebar': { Component: Sidebar, fixture: sidebarFixture, label: 'Sidebar Navigation' },
  [sumarioSectionMeta.slug]: { Component: SumarioSection, fixture: sumarioSectionFixture, label: sumarioSectionMeta.label },
  [problemaSectionMeta.slug]: { Component: ProblemaSection, fixture: problemaSectionFixture, label: problemaSectionMeta.label },
  // 'use client' component
  'objetivos-section': { Component: ObjetivosSection, fixture: objetivosSectionFixture, label: 'Objetivos' },
  [metodologiaSectionMeta.slug]: { Component: MetodologiaSection, fixture: metodologiaSectionFixture, label: metodologiaSectionMeta.label },
  [equipeSectionMeta.slug]: { Component: EquipeSection, fixture: equipeSectionFixture, label: equipeSectionMeta.label },
  [orcamentoSectionMeta.slug]: { Component: OrcamentoSection, fixture: orcamentoSectionFixture, label: orcamentoSectionMeta.label },
  [indicadoresSectionMeta.slug]: { Component: IndicadoresSection, fixture: indicadoresSectionFixture, label: indicadoresSectionMeta.label },
  [riscosSectionMeta.slug]: { Component: RiscosSection, fixture: riscosSectionFixture, label: riscosSectionMeta.label },
  // 'use client' component
  'charles-section': { Component: CharlesSection, fixture: charlesSectionFixture, label: 'Charles Cleivin' },
  'checklist-section': { Component: ChecklistSection, fixture: checklistSectionFixture, label: 'Checklist de Submissão' },
  [parceriasSectionMeta.slug]: { Component: ParceriasSection, fixture: parceriasSectionFixture, label: parceriasSectionMeta.label },
  // entries added here by generator
}
