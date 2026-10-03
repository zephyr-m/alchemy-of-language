<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AnswerState, ChoiceOption } from '@/features/answer-word'
import { ChoiceExercise } from '@/features/answer-word'
import { RecallExercise } from '@/features/recall-word'

const answerState = ref<AnswerState>('idle')
const selectedOptionId = ref<string>()
const recallState = ref<'question' | 'mastered'>('question')
const options: ChoiceOption[] = [
  { id: 'knowledge', label: 'A', text: 'знание' },
  { id: 'journey', label: 'B', text: 'путешествие' },
  { id: 'craft', label: 'C', text: 'ремесло' },
  { id: 'decision', label: 'D', text: 'решение' },
]

const feedbackTitle = computed(() => answerState.value === 'correct' ? 'Верно. Зелье стало сильнее!' : 'Попробуйте ещё раз')
const feedbackMessage = computed(() => answerState.value === 'correct' ? 'Слово переходит на следующую стадию.' : 'Knowledge означает «знание».')

function selectOption(optionId: string) {
  selectedOptionId.value = optionId
  answerState.value = optionId === 'knowledge' ? 'correct' : 'wrong'
}

function resetAnswer() {
  selectedOptionId.value = undefined
  answerState.value = 'idle'
}

function showMasteredWord() {
  recallState.value = 'mastered'
}
</script>

<template>
  <div class="showcase-grid exercise-grid">
    <section class="specimen-section answer-section">
      <div class="section-heading">
        <span>09</span>
        <div><h2>Учебное действие</h2><p>Выбор, ввод и голос</p></div>
      </div>
      <ChoiceExercise
        :position="6"
        :total-questions="10"
        prompt="Как переводится"
        word="knowledge"
        instruction="Выберите один вариант"
        :options="options"
        :completed-passes="1"
        :selected-option-id="selectedOptionId"
        correct-option-id="knowledge"
        :answer-state="answerState"
        :feedback-title="feedbackTitle"
        :feedback-message="feedbackMessage"
        @select="selectOption"
        @next="resetAnswer"
      />
    </section>

    <section class="specimen-section input-section">
      <div class="section-heading">
        <span>10</span>
        <div><h2>Самостоятельный ответ</h2><p>Финальная стадия проверки</p></div>
      </div>
      <RecallExercise
        instruction="Напиши или произнеси слово на английском"
        word="знание"
        answer="knowledge"
        :completed-passes="1"
        :state="recallState"
        @submit="showMasteredWord"
        @next="recallState = 'question'"
      />
    </section>
  </div>
</template>
