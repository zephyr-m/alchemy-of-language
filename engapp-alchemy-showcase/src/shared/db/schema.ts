export interface WordRecord {
  id: string
  english: string
  translation: string
  transcription?: string
}

export interface WordProgressRecord {
  wordId: string
  status: 'learning' | 'mastered'
  stage: 1 | 2 | 3 | 4 | null
  fullPasses: number
  mistakeCount: number
  startedAt: number
  masteredAt?: number
  updatedAt: number
}
