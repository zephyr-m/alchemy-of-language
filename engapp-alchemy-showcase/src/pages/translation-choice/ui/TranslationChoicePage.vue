<script setup lang="ts">
import { ChoiceExercise } from '@/features/answer-word'
import { StageCompleteDialog } from '@/features/complete-stage'
import { useChoiceStage } from '@/features/word-learning'
import { TrainingHeader } from '@/widgets/training-header'

const {
  advancedCount, answerState, currentIndex, feedbackMessage, feedbackTitle,
  nextQuestion, question, remainingCount, returnedCount, selectOption, selectedOptionId,
  stageCompleteOpen, words,
} = useChoiceStage(2)
</script>

<template>
  <div class="translation-choice-page">
    <TrainingHeader :stage="2" rune="Ⅱ" title="Выбор перевода" :word-count="remainingCount" />
    <ChoiceExercise
      v-if="question"
      :position="currentIndex + 1"
      :total-questions="words.length"
      prompt="Как переводится"
      :word="question.word"
      instruction="Выбери один вариант"
      :options="question.options"
      :completed-passes="question.completedPasses"
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
      :current-stage="2"
      :advanced="advancedCount"
      :advanced-stage="3"
      :returned="returnedCount"
      :returned-stage="2"
    />
  </div>
</template>

<style scoped>
.translation-choice-page { display: grid; gap: 1.2rem; padding: 0.2rem 0 1rem; }
</style>
