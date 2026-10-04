import type { WordProgressRecord, WordRecord } from './schema'

export const initialWords: WordRecord[] = [
  { id: 'apple', english: 'apple', translation: 'яблоко', transcription: '/ˈæpəl/' },
  { id: 'book', english: 'book', translation: 'книга', transcription: '/bʊk/' },
  { id: 'house', english: 'house', translation: 'дом', transcription: '/haʊs/' },
  { id: 'sun', english: 'sun', translation: 'солнце', transcription: '/sʌn/' },
  { id: 'road', english: 'road', translation: 'дорога', transcription: '/rəʊd/' },
  { id: 'food', english: 'food', translation: 'еда', transcription: '/fuːd/' },
  { id: 'tree', english: 'tree', translation: 'дерево', transcription: '/triː/' },
  { id: 'day', english: 'day', translation: 'день', transcription: '/deɪ/' },
  { id: 'family', english: 'family', translation: 'семья', transcription: '/ˈfæməli/' },
  { id: 'water', english: 'water', translation: 'вода' },
  { id: 'friend', english: 'friend', translation: 'друг' },
  { id: 'morning', english: 'morning', translation: 'утро' },
  { id: 'night', english: 'night', translation: 'ночь' },
  { id: 'small', english: 'small', translation: 'маленький' },
  { id: 'smile', english: 'smile', translation: 'улыбка' },
  { id: 'school', english: 'school', translation: 'школа' },
  { id: 'city', english: 'city', translation: 'город' },
  { id: 'window', english: 'window', translation: 'окно' },
  { id: 'garden', english: 'garden', translation: 'сад' },
  { id: 'work', english: 'work', translation: 'работа' },
  { id: 'light', english: 'light', translation: 'свет' },
  { id: 'home', english: 'home', translation: 'дом' },
  { id: 'enough', english: 'enough', translation: 'достаточно' },
  { id: 'answer', english: 'answer', translation: 'ответ' },
  { id: 'together', english: 'together', translation: 'вместе' },
  { id: 'knowledge', english: 'knowledge', translation: 'знание' },
  { id: 'language', english: 'language', translation: 'язык' },
  { id: 'world', english: 'world', translation: 'мир' },
]

const stageWords: Array<{ id: string, stage: 1 | 2 | 3 | 4, fullPasses: number }> = [
  ...['apple', 'book', 'house', 'sun', 'road', 'food', 'tree', 'day', 'family']
    .map(id => ({ id, stage: 1 as const, fullPasses: 0 })),
  ...[
    ['water', 1], ['friend', 0], ['morning', 2], ['night', 1],
    ['small', 0], ['smile', 1], ['school', 2], ['city', 0],
  ].map(([id, fullPasses]) => ({ id: String(id), stage: 2 as const, fullPasses: Number(fullPasses) })),
  ...[
    ['window', 0], ['garden', 1], ['work', 2], ['light', 0], ['home', 1],
  ].map(([id, fullPasses]) => ({ id: String(id), stage: 3 as const, fullPasses: Number(fullPasses) })),
  { id: 'enough', stage: 4, fullPasses: 2 },
  { id: 'answer', stage: 4, fullPasses: 2 },
  { id: 'together', stage: 4, fullPasses: 1 },
]

export function createInitialProgress(now: number): WordProgressRecord[] {
  const active = stageWords.map(({ id, stage, fullPasses }) => ({
    wordId: id,
    status: 'learning' as const,
    stage,
    fullPasses,
    mistakeCount: 0,
    startedAt: now,
    updatedAt: now,
  }))

  const mastered = ['knowledge', 'language', 'world'].map(wordId => ({
    wordId,
    status: 'mastered' as const,
    stage: null,
    fullPasses: 3,
    mistakeCount: 0,
    startedAt: now,
    masteredAt: now,
    updatedAt: now,
  }))

  return [...active, ...mastered]
}

