import SumarioSection from './SumarioSection'
import { fixture } from './SumarioSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(SumarioSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first stat value', find: () => fixture.stats[0].value },
  { label: 'shows first edital result', find: () => fixture.editalResults[0] },
])()
