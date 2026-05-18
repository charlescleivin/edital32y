import EquipeSection from './EquipeSection'
import { fixture } from './EquipeSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(EquipeSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows Charles name', find: () => 'Charles Cleivin' },
  { label: 'shows THATPIX name', find: () => 'THATPIX LTDA' },
])()
