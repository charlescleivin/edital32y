import IndicadoresSection from './IndicadoresSection'
import { fixture } from './IndicadoresSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(IndicadoresSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first counter label', find: () => fixture.counters[0].label },
  { label: 'shows first indicator name', find: () => fixture.indicators[0].indicator },
])()
