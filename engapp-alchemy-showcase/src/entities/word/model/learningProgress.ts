import type { LearningStageId } from '@/entities/learning-stage'
import type { WordProgress } from './types'

export const MAX_ACTIVE_WORDS = 25
export const REQUIRED_FULL_PASSES = 3

export type WordProgressEvent =
  | { type: 'word_introduced', wordId: string, stage: 1 }
  | { type: 'word_advanced', wordId: string, fromStage: LearningStageId, toStage: LearningStageId }
  | { type: 'word_lowered', wordId: string, fromStage: LearningStageId, toStage: LearningStageId }
  | { type: 'word_retained', wordId: string, stage: 2 }
  | { type: 'cycle_completed', wordId: string, fullPasses: number }
  | { type: 'word_mastered', wordId: string, fullPasses: number }

export interface WordProgressUpdate {
  progress: WordProgress
  events: WordProgressEvent[]
}

export type StartLearningResult =
  | { ok: true, update: WordProgressUpdate }
  | { ok: false, reason: 'active-word-limit' }

type ActiveWordProgress = Extract<WordProgress, { status: 'learning' }>

export function startWordLearning(
  wordId: string,
  activeWordCount: number,
  now: number,
): StartLearningResult {
  if (activeWordCount >= MAX_ACTIVE_WORDS) {
    return { ok: false, reason: 'active-word-limit' }
  }

  return {
    ok: true,
    update: {
      progress: {
        wordId,
        status: 'learning',
        stage: 1,
        fullPasses: 0,
        mistakeCount: 0,
        startedAt: now,
        updatedAt: now,
      },
      events: [{ type: 'word_introduced', wordId, stage: 1 }],
    },
  }
}

export function advanceIntroduction(progress: WordProgress, now: number): WordProgressUpdate {
  assertLearningStage(progress, 1)

  return {
    progress: { ...progress, stage: 2, updatedAt: now },
    events: [{ type: 'word_advanced', wordId: progress.wordId, fromStage: 1, toStage: 2 }],
  }
}

export function applyAnswer(progress: WordProgress, correct: boolean, now: number): WordProgressUpdate {
  if (progress.status !== 'learning' || progress.stage === 1) {
    throw new Error(`Word ${progress.wordId} cannot be answered at its current stage`)
  }

  if (!correct) return lowerStage(progress, now)
  if (progress.stage === 2 || progress.stage === 3) return advanceStage(progress, now)
  return completeCycle(progress, now)
}

function advanceStage(
  progress: ActiveWordProgress,
  now: number,
): WordProgressUpdate {
  if (progress.stage !== 2 && progress.stage !== 3) {
    throw new Error(`Word ${progress.wordId} cannot advance from stage ${progress.stage}`)
  }

  const nextStage = (progress.stage + 1) as 3 | 4

  return {
    progress: { ...progress, stage: nextStage, updatedAt: now },
    events: [{
      type: 'word_advanced',
      wordId: progress.wordId,
      fromStage: progress.stage,
      toStage: nextStage,
    }],
  }
}

function lowerStage(
  progress: ActiveWordProgress,
  now: number,
): WordProgressUpdate {
  if (progress.stage === 1) {
    throw new Error(`Word ${progress.wordId} cannot be lowered from stage 1`)
  }

  const progressWithMistake = {
    ...progress,
    mistakeCount: progress.mistakeCount + 1,
    updatedAt: now,
  }

  if (progress.stage === 2) {
    return {
      progress: progressWithMistake,
      events: [{ type: 'word_retained', wordId: progress.wordId, stage: 2 }],
    }
  }

  const previousStage = (progress.stage - 1) as 2 | 3

  return {
    progress: {
      ...progressWithMistake,
      stage: previousStage,
    },
    events: [{
      type: 'word_lowered',
      wordId: progress.wordId,
      fromStage: progress.stage,
      toStage: previousStage,
    }],
  }
}

function completeCycle(
  progress: ActiveWordProgress,
  now: number,
): WordProgressUpdate {
  if (progress.stage !== 4) {
    throw new Error(`Word ${progress.wordId} cannot complete a cycle from stage ${progress.stage}`)
  }

  const fullPasses = progress.fullPasses + 1
  const cycleEvent: WordProgressEvent = {
    type: 'cycle_completed',
    wordId: progress.wordId,
    fullPasses,
  }

  if (fullPasses >= REQUIRED_FULL_PASSES) {
    return {
      progress: {
        ...progress,
        status: 'mastered',
        stage: null,
        fullPasses,
        masteredAt: now,
        updatedAt: now,
      },
      events: [
        cycleEvent,
        { type: 'word_mastered', wordId: progress.wordId, fullPasses },
      ],
    }
  }

  return {
    progress: { ...progress, stage: 2, fullPasses, updatedAt: now },
    events: [cycleEvent],
  }
}

function assertLearningStage<TStage extends LearningStageId>(
  progress: WordProgress,
  stage: TStage,
): asserts progress is ActiveWordProgress & { stage: TStage } {
  if (progress.status !== 'learning' || progress.stage !== stage) {
    throw new Error(`Word ${progress.wordId} is not at stage ${stage}`)
  }
}
