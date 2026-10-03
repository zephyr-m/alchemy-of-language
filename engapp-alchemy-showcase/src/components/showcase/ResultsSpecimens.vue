<script setup lang="ts">
import type { WordPair } from '@/entities/word'
import { DailyGoalSummary } from '@/widgets/daily-goal-summary'
import { MasteredWordsList } from '@/widgets/mastered-words-list'
import { TrainingRewardSummary } from '@/widgets/training-reward-summary'

const words: WordPair[] = [
  { id: 'water', english: 'water', translation: 'вода' },
  { id: 'book', english: 'book', translation: 'книга' },
  { id: 'house', english: 'house', translation: 'дом' },
]
</script>

<template>
  <div class="showcase-grid cards-grid">
    <section class="specimen-section">
      <div class="section-heading">
        <span>11</span>
        <div><h2>Итог тренировки</h2><p>Награда и результаты занятия</p></div>
      </div>
      <TrainingRewardSummary :minutes="8" :mastered-words="3" :earned-xp="60" />
    </section>

    <section class="specimen-section">
      <div class="section-heading">
        <span>12</span>
        <div><h2>Дневной итог</h2><p>Цель и освоенные слова</p></div>
      </div>
      <div class="results-details-specimen">
        <DailyGoalSummary :minutes="12" :goal-minutes="15" />
        <MasteredWordsList :words="words" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.results-details-specimen { display: grid; gap: 1.5rem; }
</style>
