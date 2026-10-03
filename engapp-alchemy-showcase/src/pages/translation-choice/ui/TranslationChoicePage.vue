<script setup lang="ts">
import type { AnswerState, ChoiceOption } from '@/features/answer-word'
import { computed, ref } from 'vue'
import { ChoiceExercise } from '@/features/answer-word'
import { StageCompleteDialog } from '@/features/complete-stage'
import { TrainingHeader } from '@/widgets/training-header'

interface TranslationQuestion {
  word: string
  correctOptionId: string
  options: ChoiceOption[]
}

const questions: TranslationQuestion[] = [
  {
    word: 'water',
    correctOptionId: 'water',
    options: [
      { id: 'fire', label: 'A', text: 'огонь' },
      { id: 'water', label: 'B', text: 'вода' },
      { id: 'wind', label: 'C', text: 'ветер' },
      { id: 'earth', label: 'D', text: 'земля' },
    ],
  },
  {
    word: 'friend',
    correctOptionId: 'friend',
    options: [
      { id: 'morning', label: 'A', text: 'утро' },
      { id: 'road', label: 'B', text: 'дорога' },
      { id: 'friend', label: 'C', text: 'друг' },
      { id: 'night', label: 'D', text: 'ночь' },
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
const feedbackMessage = computed(() => answerState.value === 'correct' ? 'Слово перешло на этап 3' : 'Слово вернулось на этап 1')

function selectOption(optionId: string) {
  if (answerState.value !== 'idle') return
  selectedOptionId.value = optionId
  answerState.value = optionId === question.value.correctOptionId ? 'correct' : 'wrong'
}

function nextQuestion() {
  if (position.value === 8) {
    stageCompleteOpen.value = true
    return
  }
  position.value += 1
  selectedOptionId.value = undefined
  answerState.value = 'idle'
}
</script>

<template>
  <div class="translation-choice-page">
    <TrainingHeader :stage="2" rune="Ⅱ" title="Выбор перевода" :word-count="8" />
    <ChoiceExercise
      :position="position"
      :total-questions="8"
      prompt="Как переводится"
      :word="question.word"
      instruction="Выбери один вариант"
      :options="question.options"
      :completed-passes="1"
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
      :advanced="6"
      :advanced-stage="3"
      :returned="2"
      :returned-stage="1"
    />
  </div>
</template>

<style scoped>
.translation-choice-page { display: grid; gap: 1.2rem; padding: 0.2rem 0 1rem; }
</style>
