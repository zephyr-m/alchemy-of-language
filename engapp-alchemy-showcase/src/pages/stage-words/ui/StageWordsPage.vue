<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { StageWordProgress } from '@/widgets/stage-word-list'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { StageSummaryHeader } from '@/widgets/stage-summary-header'
import { StageWordList } from '@/widgets/stage-word-list'

interface StageScreenData {
  title: string
  trainingRoute: RouteLocationRaw
  words: StageWordProgress[]
}

const stages: Record<string, StageScreenData> = {
  1: {
    title: 'Знакомство',
    trainingRoute: { name: 'introduction' },
    words: ['apple', 'book', 'house', 'sun', 'road', 'food', 'tree', 'day', 'family']
      .map(word => ({ id: word, word, completedPasses: 0 })),
  },
  2: {
    title: 'Выбор перевода',
    trainingRoute: { name: 'translation-choice' },
    words: [
      { id: 'water', word: 'water', completedPasses: 1 },
      { id: 'friend', word: 'friend', completedPasses: 0 },
      { id: 'morning', word: 'morning', completedPasses: 2 },
      { id: 'food', word: 'food', completedPasses: 1 },
      { id: 'road', word: 'road', completedPasses: 0 },
      { id: 'night', word: 'night', completedPasses: 1 },
      { id: 'small', word: 'small', completedPasses: 2 },
      { id: 'smile', word: 'smile', completedPasses: 0 },
    ],
  },
  3: {
    title: 'Выбор английского',
    trainingRoute: { name: 'reverse-choice' },
    words: ['window', 'garden', 'work', 'light', 'home']
      .map((word, index) => ({ id: word, word, completedPasses: index % 3 })),
  },
  4: {
    title: 'Ввод и произношение',
    trainingRoute: { name: 'recall' },
    words: ['enough', 'answer', 'together']
      .map((word, index) => ({ id: word, word, completedPasses: index === 2 ? 1 : 2 })),
  },
}

const route = useRoute()
const stageId = computed(() => stages[String(route.params.stage)] ? String(route.params.stage) : '1')
const stageNumber = computed(() => Number(stageId.value))
const stage = computed(() => stages[stageId.value]!)
</script>

<template>
  <div class="stage-words-page">
    <StageSummaryHeader
      :stage="stageNumber"
      :title="stage.title"
      :word-count="stage.words.length"
    />

    <Button as-child class="alchemy-button alchemy-button-primary stage-training-action">
      <RouterLink :to="stage.trainingRoute">Начать тренировку</RouterLink>
    </Button>

    <StageWordList :words="stage.words" />
  </div>
</template>

<style scoped>
.stage-words-page { display: grid; gap: 1.25rem; padding: 0.2rem 0 1rem; }
.stage-training-action { width: 100%; min-height: 3.2rem; text-decoration: none; }
</style>
