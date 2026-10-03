<script setup lang="ts">
import type { AnswerState, ChoiceOption } from '@/features/answer-word'
import { computed, ref } from 'vue'
import { ChoiceExercise } from '@/features/answer-word'
import { StageCompleteDialog } from '@/features/complete-stage'
import { TrainingHeader } from '@/widgets/training-header'

interface ReverseQuestion {
  word: string
  correctOptionId: string
  options: ChoiceOption[]
}

const questions: ReverseQuestion[] = [
  {
    word: 'вода',
    correctOptionId: 'water',
    options: [
      { id: 'fire', label: 'A', text: 'fire' },
      { id: 'wind', label: 'B', text: 'wind' },
      { id: 'water', label: 'C', text: 'water' },
      { id: 'earth', label: 'D', text: 'earth' },
    ],
  },
  {
    word: 'друг',
    correctOptionId: 'friend',
    options: [
      { id: 'morning', label: 'A', text: 'morning' },
      { id: 'friend', label: 'B', text: 'friend' },
      { id: 'road', label: 'C', text: 'road' },
      { id: 'night', label: 'D', text: 'night' },
    ],
  },
]

const position = ref(1)
const selectedOptionId = ref<string>()
const answerState = ref<AnswerState>('idle')
const stageCompleteOpen = ref(false)
const question = computed(() => questions[(position.value - 1) % questions.length]!)
const correctOption = computed(() => question.value.options.find(option => option.id === question.value.correctOptionId)!)
const feedbackTitle = computed(() => answerState.value === 'correct' ? 'Верно!' : `Правильный ответ: ${correctOption.value.text}`)
const feedbackMessage = computed(() => answerState.value === 'correct' ? 'Слово перешло на этап 4' : 'Слово вернулось на этап 2')

function selectOption(optionId: string) {
  if (answerState.value !== 'idle') return
  selectedOptionId.value = optionId
  answerState.value = optionId === question.value.correctOptionId ? 'correct' : 'wrong'
}

function nextQuestion() {
  if (position.value === 5) {
    stageCompleteOpen.value = true
    return
  }
  position.value += 1
  selectedOptionId.value = undefined
  answerState.value = 'idle'
}
</script>

<template>
  <div class="reverse-choice-page">
    <TrainingHeader :stage="3" rune="Ⅲ" title="Выбор английского" :word-count="5" />
    <ChoiceExercise
      :position="position"
      :total-questions="5"
      prompt="Выбери английское слово"
      :word="question.word"
      :options="question.options"
      :completed-passes="1"
      stacked-prompt
      :show-question-number="false"
      :question-mark="false"
      :selected-option-id="selectedOptionId"
      :correct-option-id="question.correctOptionId"
      :answer-state="answerState"
      :feedback-title="feedbackTitle"
      :feedback-message="feedbackMessage"
      @select="selectOption"
      @next="nextQuestion"
    />
    <StageCompleteDialog
      v-model:open="stageCompleteOpen"
      :advanced="4"
      :advanced-stage="4"
      :returned="1"
      :returned-stage="2"
    />
  </div>
</template>

<style scoped>
.reverse-choice-page { display: grid; gap: 1.2rem; padding: 0.2rem 0 1rem; }
</style>
