<script setup lang="ts">
import type { AnswerState, ChoiceOption } from '../model/types'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FullPassProgress } from '@/entities/word'
import AnswerOption from './AnswerOption.vue'
import ExerciseFeedback from './ExerciseFeedback.vue'

const props = withDefaults(defineProps<{
  position: number
  totalQuestions: number
  prompt: string
  word: string
  instruction?: string
  options: ChoiceOption[]
  completedPasses: number
  totalPasses?: number
  stackedPrompt?: boolean
  showQuestionNumber?: boolean
  questionMark?: boolean
  selectedOptionId?: string
  correctOptionId?: string
  answerState?: AnswerState
  feedbackTitle?: string
  feedbackMessage?: string
}>(), {
  totalPasses: 3,
  stackedPrompt: false,
  showQuestionNumber: true,
  questionMark: true,
  answerState: 'idle',
  feedbackTitle: '',
  feedbackMessage: '',
})

defineEmits<{
  select: [optionId: string]
  next: []
}>()

function optionState(optionId: string): AnswerState {
  if (props.answerState === 'wrong' && props.correctOptionId === optionId) return 'correct'
  if (props.selectedOptionId === optionId) return props.answerState
  return 'idle'
}
</script>

<template>
  <Card class="question-card choice-exercise">
    <CardHeader v-if="answerState === 'idle'">
      <Badge v-if="showQuestionNumber" variant="outline" class="lesson-badge">Слово {{ position }} из {{ totalQuestions }}</Badge>
      <CardTitle class="question-title" :class="{ 'question-title-stacked': stackedPrompt }">
        <span>{{ prompt }}</span>
        <em>{{ word }}</em><template v-if="questionMark">?</template>
      </CardTitle>
      <CardDescription v-if="instruction">{{ instruction }}</CardDescription>
    </CardHeader>

    <CardHeader v-else class="answered-question-header">
      <CardTitle class="question-title answered-question-word"><em>{{ word }}</em></CardTitle>
    </CardHeader>

    <CardContent class="answer-grid">
      <AnswerOption
        v-for="option in options"
        :key="option.id"
        :option="option"
        :state="optionState(option.id)"
        :disabled="answerState !== 'idle'"
        @select="$emit('select', $event)"
      />
    </CardContent>

    <CardFooter v-if="answerState === 'idle'" class="choice-progress-footer">
      <FullPassProgress :completed="completedPasses" :total="totalPasses" />
    </CardFooter>

    <ExerciseFeedback
      v-if="answerState !== 'idle' && feedbackTitle && feedbackMessage"
      :state="answerState"
      :title="feedbackTitle"
      :message="feedbackMessage"
      action-label="Следующее слово"
      @action="$emit('next')"
    />
  </Card>
</template>

<style scoped>
.question-title-stacked { display: grid; gap: 1rem; }
.question-title-stacked em { display: block; font-size: clamp(1.8rem, 7vw, 2.35rem); font-style: normal; text-align: center; }
.answered-question-header { padding-bottom: 0.35rem; }
.answered-question-word { font-size: clamp(1.8rem, 7vw, 2.35rem); text-align: center; }
.answered-question-word em { font-style: normal; }
</style>
