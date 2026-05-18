import OrcamentoSection from './OrcamentoSection'
import { fixture } from './OrcamentoSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(OrcamentoSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first budget line', find: () => fixture.lines[0].label },
  { label: 'shows first compliance row', find: () => fixture.complianceTable[0].rubric },
])()
