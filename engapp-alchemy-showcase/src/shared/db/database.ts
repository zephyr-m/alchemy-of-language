import type { Table } from 'dexie'
import type { WordProgressRecord, WordRecord } from './schema'
import Dexie from 'dexie'
import { createInitialProgress, initialWords } from './seed'

class EngAppDatabase extends Dexie {
  words!: Table<WordRecord, string>
  wordProgress!: Table<WordProgressRecord, string>

  constructor() {
    super('engapp')

    this.version(1).stores({
      words: 'id, &english, translation',
      wordProgress: 'wordId, status, stage, fullPasses, updatedAt',
    })

    this.version(2).stores({
      words: 'id, &english, translation',
      wordProgress: 'wordId, status, stage, fullPasses, updatedAt',
    }).upgrade(async transaction => {
      const progressTable = transaction.table('wordProgress') as Table<WordProgressRecord, string>
      const migratedAt = Date.now()

      await progressTable.where('stage').equals(1).modify(progress => {
        const hasAlreadyLeftIntroduction = progress.fullPasses > 0 || progress.updatedAt > progress.startedAt
        if (progress.status === 'learning' && hasAlreadyLeftIntroduction) {
          progress.stage = 2
          progress.updatedAt = migratedAt
        }
      })
    })
  }
}

export const database = new EngAppDatabase()

export async function initializeDatabase(): Promise<void> {
  await database.transaction('rw', database.words, database.wordProgress, async () => {
    if ((await database.words.count()) > 0) return

    const now = Date.now()
    await database.words.bulkAdd(initialWords)
    await database.wordProgress.bulkAdd(createInitialProgress(now))
  })
}
