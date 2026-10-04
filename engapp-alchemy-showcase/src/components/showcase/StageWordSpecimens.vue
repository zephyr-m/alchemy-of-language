<script setup lang="ts">
import type { StageWordProgress } from '@/widgets/stage-word-list'
import { StageSummaryHeader } from '@/widgets/stage-summary-header'
import { StageWordList } from '@/widgets/stage-word-list'

const words: StageWordProgress[] = [
  { id: 'water', word: 'water', completedPasses: 1 },
  { id: 'friend', word: 'friend', completedPasses: 0 },
  { id: 'morning', word: 'morning', completedPasses: 2 },
  { id: 'food', word: 'food', completedPasses: 1 },
]
</script>

<template>
  <div class="showcase-grid cards-grid">
    <section class="specimen-section">
      <div class="section-heading">
        <span>13</span>
        <div><h2>Заголовок этапа</h2><p>Стадия и количество слов</p></div>
      </div>
      <StageSummaryHeader :stage="2" :word-count="8" />
    </section>

    <section class="specimen-section">
      <div class="section-heading">
        <span>14</span>
        <div><h2>Слова этапа</h2><p>Прогресс полных прохождений</p></div>
      </div>
      <StageWordList :words="words" />
    </section>
  </div>
</template>
