import type { LearningStageId } from '@/entities/learning-stage'
import type { LearningWord, WordPair, WordProgress } from './types'

export interface WordRepository {
  saveCatalog(words: readonly WordPair[]): Promise<void>
  listCatalogWords(): Promise<WordPair[]>
  countCatalogWords(): Promise<number>
  getCatalogWord(wordId: string): Promise<WordPair | undefined>
  getLearningWord(wordId: string): Promise<LearningWord | undefined>
  listLearningWords(): Promise<LearningWord[]>
  listStageWords(stage: LearningStageId): Promise<LearningWord[]>
  listMasteredWords(): Promise<LearningWord[]>
  countMasteredWords(): Promise<number>
  countLearningWords(): Promise<number>
  saveProgress(progress: WordProgress): Promise<void>
}
