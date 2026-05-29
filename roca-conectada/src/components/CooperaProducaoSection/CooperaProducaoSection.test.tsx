import CooperaProducaoSection from './CooperaProducaoSection'
import { fixture } from './CooperaProducaoSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(CooperaProducaoSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first stat value', find: () => fixture.leadStats[0].value },
  { label: 'shows conclusion statement start', find: () => fixture.conclusionStatement.slice(0, 30) },
])()
