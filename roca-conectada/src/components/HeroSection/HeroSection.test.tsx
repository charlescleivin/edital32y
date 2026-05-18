import HeroSection from './HeroSection'
import { fixture } from './HeroSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(HeroSection, fixture, [
  { label: 'shows eyebrow text', find: () => fixture.eyebrow },
  { label: 'shows first stat value', find: () => fixture.stats[0].value },
  { label: 'shows layer A title', find: () => fixture.layers[0].title },
  { label: 'shows layer C title', find: () => fixture.layers[1].title },
])()
