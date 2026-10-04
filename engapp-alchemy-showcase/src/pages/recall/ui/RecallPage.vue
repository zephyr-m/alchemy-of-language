<script setup lang="ts">
import type { LearningWord } from '@/entities/word'
import { computed, onMounted, ref } from 'vue'
import { RecallExercise } from '@/features/recall-word'
import { wordLearningService } from '@/features/word-learning'
import { TrainingHeader } from '@/widgets/training-header'

const words = ref<LearningWord[]>([])
const position = ref(0)
const state = ref<'question' | 'result'>('question')
const result = ref<'cycle' | 'mastered' | 'wrong'>('cycle')
const resultPasses = ref(0)
const word = computed(() => words.value[position.value])
const remainingCount = computed(() => Math.max(
  0,
  words.value.length - position.value - (state.value === 'question' ? 0 : 1),
))
let answerPending = false

onMounted(async () => {
  words.value = await wordLearningService.listStageWords(4)
})

async function submitAnswer(answer: string) {
  const currentWord = word.value
  if (!currentWord || answerPending) return

  answerPending = true
  try {
    const correct = answer.trim().toLowerCase() === currentWord.english.toLowerCase()
    const update = await wordLearningService.submitAnswer(currentWord.id, correct)
    result.value = correct
      ? (update.progress.status === 'mastered' ? 'mastered' : 'cycle')
      : 'wrong'
    resultPasses.value = update.progress.fullPasses
    state.value = 'result'
  }
  finally {
    answerPending = false
  }
}

function nextWord() {
  position.value += 1
  state.value = 'question'
}
</script>

<template>
  <div class="recall-page">
    <TrainingHeader :stage="4" rune="Ⅳ" title="Ввод и произношение" :word-count="remainingCount" />
    <RecallExercise
      v-if="word"
      instruction="Напиши или произнеси слово на английском"
      :word="word.translation"
      :answer="word.english"
      :completed-passes="word.fullPasses"
      :state="state"
      :result="result"
      :result-passes="resultPasses"
      @submit="submitAnswer"
      @next="nextWord"
    />
    <p v-else class="recall-empty">На этом этапе слов больше нет</p>
  </div>
</template>

<style scoped>
.recall-page { display: grid; gap: 1.2rem; padding: 0.2rem 0 1rem; }
.recall-empty { margin: 0; padding: 1.2rem; color: rgb(243 228 188 / 76%); text-align: center; }
</style>
