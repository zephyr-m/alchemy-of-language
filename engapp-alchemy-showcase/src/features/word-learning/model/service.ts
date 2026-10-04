import type { LearningStageId } from '@/entities/learning-stage'
import type { LearningWord, WordPair, WordProgressUpdate, WordRepository } from '@/entities/word'
import { advanceIntroduction, applyAnswer, wordRepository } from '@/entities/word'

export interface TrainingOverview {
  stages: Record<LearningStageId, LearningWord[]>
  nearMastery: LearningWord[]
  activeCount: number
}

export interface DictionarySnapshot {
  words: LearningWord[]
  totalCatalogWords: number
}

export function createWordLearningService(repository: WordRepository) {
  return {
    listCatalogWords: (): Promise<WordPair[]> => repository.listCatalogWords(),
    listStageWords: (stage: LearningStageId): Promise<LearningWord[]> => repository.listStageWords(stage),

    async getTrainingOverview(): Promise<TrainingOverview> {
      const words = await repository.listLearningWords()
      const stages: TrainingOverview['stages'] = { 1: [], 2: [], 3: [], 4: [] }

      for (const word of words) {
        if (word.status === 'learning') stages[word.stage].push(word)
      }

      return {
        stages,
        nearMastery: words.filter(word => word.status === 'learning' && word.fullPasses === 2),
        activeCount: words.length,
      }
    },

    async getDictionary(): Promise<DictionarySnapshot> {
      const [words, totalCatalogWords] = await Promise.all([
        repository.listMasteredWords(),
        repository.countCatalogWords(),
      ])
      return { words, totalCatalogWords }
    },

    async advanceIntroduction(wordId: string, now = Date.now()): Promise<WordProgressUpdate> {
      const word = await requireLearningWord(repository, wordId)
      const update = advanceIntroduction(word, now)
      await repository.saveProgress(update.progress)
      return update
    },

    async submitAnswer(wordId: string, correct: boolean, now = Date.now()): Promise<WordProgressUpdate> {
      const word = await requireLearningWord(repository, wordId)
      const update = applyAnswer(word, correct, now)
      await repository.saveProgress(update.progress)
      return update
    },
  }
}

async function requireLearningWord(repository: WordRepository, wordId: string): Promise<LearningWord> {
  const word = await repository.getLearningWord(wordId)
  if (!word || word.status !== 'learning') throw new Error(`Learning word ${wordId} was not found`)
  return word
}

export const wordLearningService = createWordLearningService(wordRepository)
