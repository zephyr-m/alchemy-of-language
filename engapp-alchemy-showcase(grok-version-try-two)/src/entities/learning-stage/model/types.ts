export type LearningStageId = 1 | 2 | 3 | 4

export interface LearningStageSummary {
  id: LearningStageId
  rune: string
  title: string
  count: number
  examples: string[]
}
