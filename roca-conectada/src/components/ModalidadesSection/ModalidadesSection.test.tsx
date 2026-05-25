import ModalidadesSection from './ModalidadesSection'
import { fixture } from './ModalidadesSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(ModalidadesSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first modality title', find: () => fixture.modalities[0].title },
  { label: 'shows second modality title', find: () => fixture.modalities[1].title },
  { label: 'shows disclaimer', find: () => 'Potencial Pós-Projeto — Fora do Escopo Atual' },
  { label: 'shows architecture bridge title', find: () => fixture.architectureBridge.title },
])()
