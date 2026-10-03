<script setup lang="ts">
import type { ChoiceOption } from '@/features/answer-word'
import { ChoiceExercise } from '@/features/answer-word'
import { TrainingHeader } from '@/widgets/training-header'

const options: ChoiceOption[] = [
  { id: 'fire', label: 'A', text: 'огонь' },
  { id: 'water', label: 'B', text: 'вода' },
  { id: 'wind', label: 'C', text: 'ветер' },
  { id: 'earth', label: 'D', text: 'земля' },
]
</script>

<template>
  <div class="translation-choice-page">
    <TrainingHeader :stage="2" rune="Ⅱ" title="Выбор перевода" :word-count="8" />
    <ChoiceExercise
      :position="1"
      :total-questions="8"
      prompt="Как переводится"
      word="water"
      instruction="Выбери один вариант"
      :options="options"
      :completed-passes="1"
    />
  </div>
</template>

<style scoped>
.translation-choice-page { display: grid; gap: 1.2rem; padding: 0.2rem 0 1rem; }
</style>
