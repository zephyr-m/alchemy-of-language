<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { StageWordProgress } from '@/widgets/stage-word-list'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { wordLearningService } from '@/features/word-learning'
import { StageSummaryHeader } from '@/widgets/stage-summary-header'
import { StageWordList } from '@/widgets/stage-word-list'

interface StageScreenData {
  trainingRoute: RouteLocationRaw
}

const stages: Record<string, StageScreenData> = {
  1: {
    trainingRoute: { name: 'introduction' },
  },
  2: {
    trainingRoute: { name: 'translation-choice' },
  },
  3: {
    trainingRoute: { name: 'reverse-choice' },
  },
  4: {
    trainingRoute: { name: 'recall' },
  },
}

const route = useRoute()
const stageId = computed(() => stages[String(route.params.stage)] ? String(route.params.stage) : '1')
const stageNumber = computed(() => Number(stageId.value))
const stage = computed(() => stages[stageId.value]!)
const words = ref<StageWordProgress[]>([])

watch(stageNumber, async value => {
  const stageWords = await wordLearningService.listStageWords(value as 1 | 2 | 3 | 4)
  words.value = stageWords.map(word => ({
    id: word.id,
    word: word.english,
    completedPasses: word.fullPasses,
  }))
}, { immediate: true })
</script>

<template>
  <div class="stage-words-page">
    <StageSummaryHeader
      :stage="stageNumber"
      :word-count="words.length"
    />

    <Button as-child class="alchemy-button alchemy-button-primary stage-training-action">
      <RouterLink :to="stage.trainingRoute">Начать тренировку</RouterLink>
    </Button>

    <StageWordList :words="words" />
  </div>
</template>

<style scoped>
.stage-words-page { display: grid; gap: 1.25rem; padding: 0.2rem 0 1rem; }
.stage-training-action { width: 100%; min-height: 3.2rem; text-decoration: none; }
</style>
