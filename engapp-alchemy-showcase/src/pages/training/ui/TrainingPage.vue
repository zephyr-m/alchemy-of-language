<script setup lang="ts">
import type { LearningStageSummary } from '@/entities/learning-stage'
import { FlaskConical } from '@lucide/vue'
import { onMounted, ref } from 'vue'
import { Badge } from '@/components/ui/badge'
import { wordLearningService } from '@/features/word-learning'
import { MasteryPreview } from '@/widgets/mastery-preview'
import { StageList } from '@/widgets/stage-list'

const stageRunes = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ'] as const
const stages = ref<LearningStageSummary[]>([])
const masteryItems = ref<Array<{ word: string, completed: number, total: number }>>([])
const activeCount = ref(0)

onMounted(async () => {
  const overview = await wordLearningService.getTrainingOverview()
  activeCount.value = overview.activeCount
  stages.value = stageRunes.map((rune, index) => {
    const id = (index + 1) as 1 | 2 | 3 | 4
    const words = overview.stages[id]
    return {
      id,
      rune,
      title: `Этап ${id}`,
      count: words.length,
      examples: words.slice(0, 3).map(word => word.english),
    }
  })
  masteryItems.value = overview.nearMastery.map(word => ({
    word: word.english,
    completed: word.fullPasses,
    total: 3,
  }))
})
</script>

<template>
  <div class="training-page">
    <header class="training-overview-header">
      <div class="training-overview-brand">
        <div class="brand-mark training-overview-mark" aria-hidden="true">
          <FlaskConical :size="22" :stroke-width="1.8" />
        </div>
        <div>
          <h1>Тренировка</h1>
        </div>
      </div>
      <Badge class="game-badge xp-badge">{{ activeCount }} слов</Badge>
    </header>

    <section class="training-section" aria-labelledby="training-stages-title">
      <div>
        <h2 id="training-stages-title">Стадии преобразования</h2>
      </div>
      <StageList :stages="stages" />
    </section>

    <section class="training-section" aria-labelledby="training-mastery-title">
      <div>
        <h2 id="training-mastery-title">Близки к освоению</h2>
      </div>
      <MasteryPreview :items="masteryItems" />
    </section>
  </div>
</template>

<style scoped>
.training-page { display: grid; gap: 1.35rem; padding: 0.25rem 0 1rem; }
.training-overview-header,
.training-overview-brand { display: flex; align-items: center; }
.training-overview-header { justify-content: space-between; gap: 0.75rem; }
.training-overview-brand { min-width: 0; gap: 0.75rem; }
.training-overview-mark { width: 2.85rem; height: 2.85rem; flex: 0 0 auto; }
.training-overview-header h1,
.training-stages h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-interface); font-weight: 500; }
.training-overview-header h1 { margin-top: 0.08rem; font-size: var(--type-title); line-height: 1; }
.training-overview-header .game-badge { flex: 0 0 auto; }
.training-section { display: grid; gap: 0.75rem; }
.training-section h2 { margin-top: 0.18rem; font-size: var(--type-title); }

@media (max-width: 370px) {
  .training-overview-mark { width: 2.55rem; height: 2.55rem; }
  .training-overview-header .game-badge { padding-inline: 0.5rem; }
}
</style>
