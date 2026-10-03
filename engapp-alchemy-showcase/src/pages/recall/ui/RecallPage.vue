<script setup lang="ts">
import { computed, ref } from 'vue'
import { RecallExercise } from '@/features/recall-word'
import { TrainingHeader } from '@/widgets/training-header'

const words = [
  { prompt: 'вода', answer: 'water' },
  { prompt: 'книга', answer: 'book' },
  { prompt: 'дом', answer: 'house' },
]

const position = ref(0)
const state = ref<'question' | 'mastered'>('question')
const word = computed(() => words[position.value]!)

function submitAnswer(answer: string) {
  if (answer.trim().toLowerCase() === word.value.answer) state.value = 'mastered'
}

function nextWord() {
  position.value = (position.value + 1) % words.length
  state.value = 'question'
}
</script>

<template>
  <div class="recall-page">
    <TrainingHeader :stage="4" rune="Ⅳ" title="Ввод и произношение" :word-count="3" />
    <RecallExercise
      instruction="Напиши или произнеси слово на английском"
      :word="word.prompt"
      :answer="word.answer"
      :completed-passes="1"
      :state="state"
      @submit="submitAnswer"
      @next="nextWord"
    />
  </div>
</template>

<style scoped>
.recall-page { display: grid; gap: 1.2rem; padding: 0.2rem 0 1rem; }
</style>
