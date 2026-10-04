<script setup lang="ts">
import { ChoiceExercise } from '@/features/answer-word'
import { StageCompleteDialog } from '@/features/complete-stage'
import { useChoiceStage } from '@/features/word-learning'
import { TrainingHeader } from '@/widgets/training-header'

const {
  advancedCount, answerState, currentIndex, feedbackMessage, feedbackTitle,
  nextQuestion, question, remainingCount, returnedCount, selectOption, selectedOptionId,
  stageCompleteOpen, words,
} = useChoiceStage(3)
</script>

<template>
  <div class="reverse-choice-page">
    <TrainingHeader :stage="3" rune="Ⅲ" title="Выбор английского" :word-count="remainingCount" />
    <ChoiceExercise
      v-if="question"
      :position="currentIndex + 1"
      :total-questions="words.length"
      prompt="Выбери английское слово"
      :word="question.word"
      :options="question.options"
      :completed-passes="question.completedPasses"
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
      :current-stage="3"
      :advanced="advancedCount"
      :advanced-stage="4"
      :returned="returnedCount"
      :returned-stage="2"
    />
  </div>
</template>

<style scoped>
.reverse-choice-page { display: grid; gap: 1.2rem; padding: 0.2rem 0 1rem; }
</style>
