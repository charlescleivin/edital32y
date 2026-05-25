import proposalJson from '../../data/proposal.json'
import type { ProposalData } from '@/types/proposal'
import Sidebar from '@/components/Sidebar/Sidebar'
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
import { VersionProvider } from '@/context/VersionContext'
import { LoaderProvider } from '@/context/LoaderContext'
import DiffSection from '@/components/DiffSection/DiffSection'
import DiffDrawer from '@/components/DiffDrawer/DiffDrawer'
import VersionToggle from '@/components/VersionToggle/VersionToggle'

const proposal = proposalJson as unknown as ProposalData

export default function Home() {
  const { meta, sidebar, hero, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11 } = proposal

  return (
    <LoaderProvider>
    <VersionProvider>
      <div className="flex min-h-screen" style={{ background: 'var(--bg)' }}>
        <PageLoader />
        <Sidebar
          projectName={meta.projectName}
          call={meta.call}
          deadline={meta.deadline}
          sections={sidebar.sections}
        />
        <main style={{ marginLeft: 'var(--sw)' }} className="flex-1 min-w-0">
          <DiffSection sectionKey="hero">
            <section id="s0">
              <HeroSection {...hero} />
            </section>
          </DiffSection>
          <Reveal>
            <DiffSection sectionKey="s1">
              <section id="s1" className="scroll-mt-4">
                <SumarioSection {...s1} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s2">
              <section id="s2" className="scroll-mt-4">
                <ProblemaSection {...s2} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s3">
              <section id="s3" className="scroll-mt-4">
                <ObjetivosSection {...s3} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s4">
              <section id="s4" className="scroll-mt-4">
                <MetodologiaSection {...s4} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s5">
              <section id="s5" className="scroll-mt-4">
                <EquipeSection {...s5} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s6">
              <section id="s6" className="scroll-mt-4">
                <OrcamentoSection {...s6} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s7">
              <section id="s7" className="scroll-mt-4">
                <ParceriasSection {...s7} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s8">
              <section id="s8" className="scroll-mt-4">
                <IndicadoresSection {...s8} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s9">
              <section id="s9" className="scroll-mt-4">
                <RiscosSection {...s9} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s10">
              <section id="s10" className="scroll-mt-4">
                <ChecklistSection {...s10} />
              </section>
            </DiffSection>
          </Reveal>
          <Reveal>
            <DiffSection sectionKey="s11">
              <section id="s11" className="scroll-mt-4">
                <ReferencesSection {...s11} />
              </section>
            </DiffSection>
          </Reveal>
        </main>
        <VersionToggle />
        <DiffDrawer />
      </div>
    </VersionProvider>
    </LoaderProvider>
  )
}
