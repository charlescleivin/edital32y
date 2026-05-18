import proposalJson from '../../data/proposal.json'
import type { ProposalData } from '@/types/proposal'
import Sidebar from '@/components/Sidebar/Sidebar'

const proposal = proposalJson as unknown as ProposalData
import CharlesSection from '@/components/CharlesSection/CharlesSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import SumarioSection from '@/components/SumarioSection/SumarioSection'
import ProblemaSection from '@/components/ProblemaSection/ProblemaSection'
import ObjetivosSection from '@/components/ObjetivosSection/ObjetivosSection'
import MetodologiaSection from '@/components/MetodologiaSection/MetodologiaSection'
import EquipeSection from '@/components/EquipeSection/EquipeSection'
import OrcamentoSection from '@/components/OrcamentoSection/OrcamentoSection'
import ParceriasSection from '@/components/ParceriasSection/ParceriasSection'
import IndicadoresSection from '@/components/IndicadoresSection/IndicadoresSection'
import RiscosSection from '@/components/RiscosSection/RiscosSection'
import ChecklistSection from '@/components/ChecklistSection/ChecklistSection'
import ReferencesSection from '@/components/ReferencesSection/ReferencesSection'
import PageLoader from '@/components/ui/PageLoader'
import Reveal from '@/components/ui/Reveal'

export default function Home() {
  const { meta, sidebar, hero, charles, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11 } = proposal

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg)' }}>
      <PageLoader />
      <Sidebar
        projectName={meta.projectName}
        call={meta.call}
        deadline={meta.deadline}
        sections={sidebar.sections}
      />
      <main style={{ marginLeft: 'var(--sw)' }} className="flex-1 min-w-0">
        <section id="s0">
          <HeroSection {...hero} />
        </section>
        <Reveal>
          <section id="s-charles" className="scroll-mt-4">
            <CharlesSection {...charles} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s1" className="scroll-mt-4">
            <SumarioSection {...s1} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s2" className="scroll-mt-4">
            <ProblemaSection {...s2} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s3" className="scroll-mt-4">
            <ObjetivosSection {...s3} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s4" className="scroll-mt-4">
            <MetodologiaSection {...s4} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s5" className="scroll-mt-4">
            <EquipeSection {...s5} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s6" className="scroll-mt-4">
            <OrcamentoSection {...s6} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s7" className="scroll-mt-4">
            <ParceriasSection {...s7} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s8" className="scroll-mt-4">
            <IndicadoresSection {...s8} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s9" className="scroll-mt-4">
            <RiscosSection {...s9} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s10" className="scroll-mt-4">
            <ChecklistSection {...s10} />
          </section>
        </Reveal>
        <Reveal>
          <section id="s11" className="scroll-mt-4">
            <ReferencesSection {...s11} />
          </section>
        </Reveal>
      </main>
    </div>
  )
}
