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
  instruction: string
  options: ChoiceOption[]
  completedPasses: number
  totalPasses?: number
  selectedOptionId?: string
  correctOptionId?: string
  answerState?: AnswerState
  feedbackTitle?: string
  feedbackMessage?: string
}>(), {
  totalPasses: 3,
  answerState: 'idle',
  feedbackTitle: '',
  feedbackMessage: '',
})

defineEmits<{
  select: [optionId: string]
}>()

function optionState(optionId: string): AnswerState {
  if (props.answerState === 'wrong' && props.correctOptionId === optionId) return 'correct'
  if (props.selectedOptionId === optionId) return props.answerState
  return 'idle'
}
</script>

<template>
  <Card class="question-card choice-exercise">
    <CardHeader>
      <Badge variant="outline" class="lesson-badge">Слово {{ position }} из {{ totalQuestions }}</Badge>
      <CardTitle class="question-title">{{ prompt }} <em>{{ word }}</em>?</CardTitle>
      <CardDescription>{{ instruction }}</CardDescription>
    </CardHeader>

    <CardContent class="answer-grid">
      <AnswerOption
        v-for="option in options"
        :key="option.id"
        :option="option"
        :state="optionState(option.id)"
        @select="$emit('select', $event)"
      />
    </CardContent>

    <CardFooter class="choice-progress-footer">
      <FullPassProgress :completed="completedPasses" :total="totalPasses" />
    </CardFooter>

    <ExerciseFeedback
      v-if="answerState !== 'idle' && feedbackTitle && feedbackMessage"
      :state="answerState"
      :title="feedbackTitle"
      :message="feedbackMessage"
    />
  </Card>
</template>
