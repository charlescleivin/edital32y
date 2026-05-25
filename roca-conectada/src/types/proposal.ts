export interface Stat {
  value: string
  label: string
  icon?: string
}

export interface Layer {
  id: string
  badge: string
  title: string
  description: string
}

export interface HeroData {
  eyebrow: string
  title: string
  subtitle: string
  statement?: string
  statementContrast?: string
  stats: Stat[]
  layers: Layer[]
}

export interface SectionMeta {
  number: string
  title: string
  subtitle: string
  headline?: string
  heroImage?: string
  heroCaption?: string
  heroStatement?: string
  heroObjectPosition?: string
}

export interface InstitutionalRole {
  badge: string
  badgeVariant: 'primary' | 'blue' | 'amber'
  label: string
}

export interface WhyNowItem {
  icon: string
  title: string
  body: string
}

export interface S1Data extends SectionMeta {
  stats: Stat[]
  problemStatement: string
  summary: string
  whyNow?: WhyNowItem[]
  editalResults: string[]
  institutionalStructure: InstitutionalRole[]
}

export interface Barrier {
  icon: string
  title: string
  description: string
  keyFact?: { value: string; label: string }
  image?: string
}

export interface BibliographyRef {
  ref: string
  text: string
}

export interface AiEvidenceSection {
  title: string
  body: string
}

export interface AiEvidenceCaseStudy {
  flag: string
  country: string
  project: string
  bigStat: { value: string; label: string }
  details: string[]
  year: string
  source: string
  accentColor: string
}

export interface AiEvidenceStructured {
  title: string
  hook?: string
  metricCallouts?: Array<{ value: string; label: string; color?: string }>
  caseStudies?: AiEvidenceCaseStudy[]
  globalInvestment?: Array<{ actor: string; label: string; amount: string; year: string; color: string }>
  globalInvestmentTotal?: string
  globalInvestmentTotalLabel?: string
  globalInvestmentBrazilContrast?: string
  corpusUrgency?: {
    title: string
    body: string
    timeline: Array<{ year: string; event: string; type: 'now' | 'closing' | 'lost' }>
  }
}

export interface AiRaceEntry {
  flag: string
  country: string
  product: string
  launched: string
  scale: string
  status: 'deployed' | 'proposed' | 'planned'
}

export interface AiRaceChart {
  title: string
  subtitle: string
  entries: AiRaceEntry[]
  brazilNote: string
}

export interface S2Data extends SectionMeta {
  stats: Array<{ value: string; label: string; colorVariant: 'green' | 'blue' | 'red' }>
  barriers: Barrier[]
  aiEvidenceSection?: AiEvidenceSection
  aiEvidenceStructured?: AiEvidenceStructured
  aiRaceChart?: AiRaceChart
  contextNote: string
  openingScenario?: string
  competitiveContext?: string
  bibliography?: BibliographyRef[]
  genderEquity?: string
}

export interface Objective {
  id: string
  code: string
  text: string
}

export interface ObjectiveAxis {
  id: string
  label: string
  objectives: Objective[]
}

export interface TheoryOfChangeStage {
  stage: string
  items: string[]
}

export interface TheoryOfChange {
  premise: string
  chain: TheoryOfChangeStage[]
}

export interface PolicyAlignmentItem {
  sigla: string
  fullName: string
  decree: string
  axes: string
  body: string
}

export interface InnovationPolicyRef {
  document: string
  resolution: string
  article: string
  alignmentText: string
  annexNote?: string
}

export interface S3Data extends SectionMeta {
  generalObjective: string
  axes: ObjectiveAxis[]
  theoryOfChange?: TheoryOfChange
  policyAlignment?: PolicyAlignmentItem[]
  innovationPolicy?: InnovationPolicyRef
}

export interface Phase {
  id: string
  icon: string
  label: string
  name: string
  period: string
  activities: string[]
  deliverables?: string[]
}

export interface ScopeRole {
  title: string
  subtitle: string
  responsibilities: string[]
  note?: string
  noteItems?: string[]
  badge?: string
  disclosure?: string
}

export interface SovereigntyCallout {
  id: string
  badge: string
  title: string
  content: string
}

export interface PilotRegion {
  id: string
  municipality: string
  profile: string
  rationale: string
}

export interface ConflictGovernance {
  title: string
  body: string
}

export interface S4Data extends SectionMeta {
  phases: Phase[]
  scopeDistinction: {
    researcher: ScopeRole
    company: ScopeRole
  }
  sovereigntyCallouts?: SovereigntyCallout[]
  pilotRegions?: PilotRegion[]
  conflictGovernance?: ConflictGovernance
}

export interface BudgetRef {
  lineId: string
  months: number
  team: Array<{ role: string; rate: number }>
  overheadPercent: number
}

export interface TeamMember {
  id: string
  avatar: string
  name: string
  role: string
  tags: string[]
  dedication?: string
  highlight?: boolean
  isPJ?: boolean
  badge?: string
  badgeVariant?: 'blue' | 'amber'
  budgetRef?: BudgetRef
}

export interface MarketContextCallout {
  value: string
  label: string
  note?: string
}

export interface MarketContextRecommendation {
  icon: string
  title: string
  body: string
}

export interface MarketContextParagraph {
  title: string
  body: string
}

export interface MarketContext {
  badge?: string
  title: string
  paragraphs: MarketContextParagraph[]
  callouts?: MarketContextCallout[]
  recommendations?: MarketContextRecommendation[]
}

export interface AnnexTableRow {
  cells: string[]
  highlight?: boolean
  variant?: 'critical' | 'warning' | 'success'
}

export interface AnnexTable {
  number: string
  title: string
  headers: string[]
  rows: AnnexTableRow[]
  note?: string
  source?: string
}

export interface S5AnnexSection {
  heading: string
  tables: AnnexTable[]
}

export interface S5Data extends SectionMeta {
  members: TeamMember[]
  marketContext?: MarketContext
  annex?: S5AnnexSection
  expandedProfiles?: CharlesData[]
}

export interface BudgetLine {
  id: string
  icon: string
  label: string
  amount: number
  limit: string
  color: string
}

export interface BudgetDonutSlice {
  label: string
  color: string
  lineIds: string[]
}

export interface ComplianceRow {
  rubric: string
  limit: string
  status: string
  proposed?: string
  percent?: string
  lineIds?: string[]
}

export interface EquipmentItem {
  item: string
  spec: string
  qty: number
  unitValue: string
  total: string
  amount: number
}

export interface S6Data extends SectionMeta {
  total: string
  donutSlices: BudgetDonutSlice[]
  lines: BudgetLine[]
  complianceTable: ComplianceRow[]
  equipmentItems?: EquipmentItem[]
}

export interface Partner {
  id: string
  priority: 'critical' | 'high' | 'medium'
  priorityLabel: string
  name: string
  role: string
  deadline: string
}

export interface ActionWeek {
  label: string
  description: string
  isCritical?: boolean
}

export interface DisseminationRoute {
  audience: string
  mechanism: string
  when: string
}

export interface S7Data extends SectionMeta {
  alertMessage: string
  partners: Partner[]
  actionTimeline: ActionWeek[]
  disseminationRoutes?: DisseminationRoute[]
}

export interface KPICounter {
  icon: string
  count: number
  label: string
}

export interface IndicatorRow {
  indicator: string
  phase1: string
  phase2: string
  phase3: string
}

export interface LeverageYear {
  label: string
  sublabel?: string
  cumulative: string
  roi: string
  roiVariant: 'warm' | 'gold' | 'sage' | 'bright'
  barPercent: number
}

export interface PermanentAsset {
  icon: string
  name: string
  license: string
}

export interface InvestmentLeverage {
  title: string
  subtitle: string
  investment: string
  investmentLabel: string
  annualReturn: string
  familyCount: string
  costPerFamily: string
  years: LeverageYear[]
  callout: string
  note: string
  permanentAssets: PermanentAsset[]
}

export interface S8Data extends SectionMeta {
  counters: KPICounter[]
  indicators: IndicatorRow[]
  impactNarrative?: string
  leverage?: InvestmentLeverage
}

export interface SustainabilityScenario {
  id: string
  scenario: string
  description: string
  responsible: string
  probability: string
}

export interface Risk {
  id: string
  title: string
  mitigation: string
  probability: string
  level: 'high' | 'medium' | 'low'
}

export interface S9Data extends SectionMeta {
  risks: Risk[]
  sustainabilityScenarios?: SustainabilityScenario[]
}

export interface ChecklistItem {
  id: string
  label: string
  detail: string
  status: string
  statusVariant: 'todo' | 'critical' | 'available' | 'inprogress'
}

export interface ChecklistGroup {
  id: string
  title: string
  items: ChecklistItem[]
}

export interface S10Data extends SectionMeta {
  alertMessage: string
  groups: ChecklistGroup[]
}

export interface Reference {
  id: string
  area: string
  abnt: string
}

export interface S11Data extends SectionMeta {
  references: Reference[]
}

export interface CharlesHighlight {
  value: string
  label: string
}

export interface CharlesSkillArea {
  area: string
  icon: string
  items: string[]
}

export interface CharlesProject {
  name: string
  description: string
  tags: string[]
  relevance: string
}

export interface CharlesVideo {
  url: string
  title: string
}

export interface CharlesAward {
  icon: string
  text: string
}

export interface CharlesPhoto {
  src: string
  caption: string
  badge: string
  featured?: boolean
  context?: string
  awards?: CharlesAward[]
}

export interface CharlesData {
  name: string
  title: string
  subtitle: string
  location: string
  email?: string
  bio: string
  highlights?: CharlesHighlight[]
  skills?: CharlesSkillArea[]
  projects?: CharlesProject[]
  softSkills?: string[]
  videos?: CharlesVideo[]
  cvFile?: string
  heroImage?: string
  heroCaption?: string
  heroHeadline?: string
  heroSubtext?: string
  badgeLabel?: string
  gallery?: CharlesPhoto[]
  profilePhoto?: string
  isPlaceholder?: boolean
}

export interface ScalePhase {
  id: string
  period: string
  icon: string
  title: string
  description: string
  milestones: string[]
}

export interface FundingPath {
  id: string
  name: string
  funder: string
  type: 'public-federal' | 'public-state' | 'international' | 'operational'
  typeLabel: string
  description: string
  fit: string
  fitLevel: 'high' | 'medium'
  amount?: string
  color: string
}

export interface ServerTransition {
  title: string
  body: string
  steps: string[]
}

export interface ThatpixCallout {
  title: string
  body: string
  points: string[]
}

export interface S12Data extends SectionMeta {
  visionStatement: string
  visionSub: string
  phases: ScalePhase[]
  thatpixCallout: ThatpixCallout
  fundingPaths: FundingPath[]
  serverTransition: ServerTransition
}

export interface ModalityProofStat {
  value: string
  label: string
  color?: 'terra' | 'gold' | 'sage' | 'blue'
}

export interface ModalityProof {
  label: string
  description: string
  stats: ModalityProofStat[]
}

export interface ModalityCard {
  id: string
  icon: string
  badge: string
  title: string
  description: string
  channelNote: string
  proof?: ModalityProof
  useCases?: string[]
  horizonLabel: string
  accentColor: 'terra' | 'gold' | 'sage' | 'blue'
}

export interface ModalityChannelItem {
  icon: string
  label: string
  note: string
}

export interface ModalidadesArchBridge {
  title: string
  body: string
  points: string[]
}

export interface S13Data extends SectionMeta {
  disclaimer: string
  channelCapabilityNote: string
  channelCapabilityItems: ModalityChannelItem[]
  modalities: ModalityCard[]
  architectureBridge: ModalidadesArchBridge
}

export interface ProposalData {
  meta: {
    projectName: string
    call: string
    lineTheme: string
    deadline: string
    totalValue: string
    duration: string
    generatedAt: string
    company: string
    cnpj: string
  }
  sidebar: {
    sections: Array<{
      id: string
      label: string
      num: string
      children?: Array<{ id: string; label: string; avatar?: string }>
    }>
  }
  hero: HeroData
  s1: S1Data
  s2: S2Data
  s3: S3Data
  s4: S4Data
  s5: S5Data
  s6: S6Data
  s7: S7Data
  s8: S8Data
  s9: S9Data
  s10: S10Data
  s11: S11Data
  s12: S12Data
  s13: S13Data
  charles?: CharlesData
}
