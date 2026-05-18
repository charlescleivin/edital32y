import ProblemaSection from './ProblemaSection'
import { fixture } from './ProblemaSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(ProblemaSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first stat value', find: () => fixture.stats[0].value },
  { label: 'shows first barrier title', find: () => fixture.barriers[0].title },
])()
