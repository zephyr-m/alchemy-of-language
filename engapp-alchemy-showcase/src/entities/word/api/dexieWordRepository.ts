import type { LearningStageId } from '@/entities/learning-stage'
import type { LearningWord, WordPair, WordProgress } from '../model/types'
import type { WordRepository } from '../model/repository'
import type { WordProgressRecord, WordRecord } from '@/shared/db'
import { database } from '@/shared/db'

function toWordRecord(word: WordPair): WordRecord {
  return {
    id: word.id,
    english: word.english,
    translation: word.translation,
    ...(word.transcription ? { transcription: word.transcription } : {}),
  }
}

function toProgressRecord(progress: WordProgress): WordProgressRecord {
  return {
    wordId: progress.wordId,
    status: progress.status,
    stage: progress.stage,
    fullPasses: progress.fullPasses,
    mistakeCount: progress.mistakeCount,
    startedAt: progress.startedAt,
    ...(progress.masteredAt !== undefined ? { masteredAt: progress.masteredAt } : {}),
    updatedAt: progress.updatedAt,
  }
}

function toDomainProgress(record: WordProgressRecord): WordProgress {
  const base = {
    wordId: record.wordId,
    fullPasses: record.fullPasses,
    mistakeCount: record.mistakeCount,
    startedAt: record.startedAt,
    updatedAt: record.updatedAt,
  }

  if (record.status === 'mastered') {
    if (record.masteredAt === undefined) {
      throw new Error(`Mastered word ${record.wordId} has no masteredAt timestamp`)
    }

    return {
      ...base,
      status: 'mastered',
      stage: null,
      masteredAt: record.masteredAt,
    }
  }

  if (record.stage !== 1 && record.stage !== 2 && record.stage !== 3 && record.stage !== 4) {
    throw new Error(`Learning word ${record.wordId} has invalid stage`)
  }

  return {
    ...base,
    status: 'learning',
    stage: record.stage,
  }
}

function joinWord(word: WordRecord | undefined, progress: WordProgressRecord): LearningWord {
  if (!word) throw new Error(`Missing catalog word ${progress.wordId}`)
  return { ...word, ...toDomainProgress(progress) }
}

async function joinProgress(records: WordProgressRecord[]): Promise<LearningWord[]> {
  const words = await database.words.bulkGet(records.map(record => record.wordId))
  return records.map((record, index) => joinWord(words[index], record))
}

class DexieWordRepository implements WordRepository {
  async saveCatalog(words: readonly WordPair[]): Promise<void> {
    await database.words.bulkPut(words.map(toWordRecord))
  }

  async listCatalogWords(): Promise<WordPair[]> {
    return database.words.orderBy('english').toArray()
  }

  countCatalogWords(): Promise<number> {
    return database.words.count()
  }

  async getCatalogWord(wordId: string): Promise<WordPair | undefined> {
    return database.words.get(wordId)
  }

  async getLearningWord(wordId: string): Promise<LearningWord | undefined> {
    const progress = await database.wordProgress.get(wordId)
    if (!progress) return undefined
    return joinWord(await database.words.get(wordId), progress)
  }

  async listLearningWords(): Promise<LearningWord[]> {
    return joinProgress(await database.wordProgress.where('status').equals('learning').toArray())
  }

  async listStageWords(stage: LearningStageId): Promise<LearningWord[]> {
    return joinProgress(await database.wordProgress.where('stage').equals(stage).toArray())
  }

  async listMasteredWords(): Promise<LearningWord[]> {
    return joinProgress(await database.wordProgress.where('status').equals('mastered').toArray())
  }

  countMasteredWords(): Promise<number> {
    return database.wordProgress.where('status').equals('mastered').count()
  }

  countLearningWords(): Promise<number> {
    return database.wordProgress.where('status').equals('learning').count()
  }

  async saveProgress(progress: WordProgress): Promise<void> {
    await database.wordProgress.put(toProgressRecord(progress))
  }
}

export const wordRepository: WordRepository = new DexieWordRepository()
