import RiscosSection from './RiscosSection'
import { fixture } from './RiscosSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(RiscosSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first risk id', find: () => fixture.risks[0].id },
  { label: 'shows first risk title', find: () => fixture.risks[0].title },
])()
