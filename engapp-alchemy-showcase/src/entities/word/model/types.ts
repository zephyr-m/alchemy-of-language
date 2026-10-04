import type { LearningStageId } from '@/entities/learning-stage'

export interface WordPair {
  id: string
  english: string
  translation: string
  transcription?: string
}

interface ProgressBase {
  wordId: string
  fullPasses: number
  mistakeCount: number
  startedAt: number
  updatedAt: number
}

export type WordProgress =
  | ProgressBase & {
    status: 'learning'
    stage: LearningStageId
    masteredAt?: never
  }
  | ProgressBase & {
    status: 'mastered'
    stage: null
    masteredAt: number
  }

export type LearningWord = WordPair & WordProgress
