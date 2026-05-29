import JustificativasSection from './JustificativasSection'
import { fixture } from './JustificativasSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(JustificativasSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first block question', find: () => fixture.blocks[0].question },
  { label: 'shows thatpix note label', find: () => 'Diferencial ThatPix — Metodologia de Treinamento' },
])()
