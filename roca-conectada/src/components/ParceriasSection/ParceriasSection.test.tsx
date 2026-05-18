import ParceriasSection from './ParceriasSection'
import { fixture } from './ParceriasSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(ParceriasSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first partner name', find: () => fixture.partners[0].name },
  { label: 'shows first timeline week', find: () => fixture.actionTimeline[0].label },
])()
