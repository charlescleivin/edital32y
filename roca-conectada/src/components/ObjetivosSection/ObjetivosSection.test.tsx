import ObjetivosSection from './ObjetivosSection'
import { fixture } from './ObjetivosSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(ObjetivosSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first axis label', find: () => fixture.axes[0].label },
  { label: 'shows first objective code', find: () => fixture.axes[0].objectives[0].code },
])()
