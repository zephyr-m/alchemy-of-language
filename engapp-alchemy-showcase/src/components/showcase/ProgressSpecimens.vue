<script setup lang="ts">
import type { LearningStageSummary } from '@/entities/learning-stage'
import { DailyProgress } from '@/widgets/daily-progress'
import { MasteryPreview } from '@/widgets/mastery-preview'
import { StageList } from '@/widgets/stage-list'

const stages: LearningStageSummary[] = [
  { id: 1, rune: 'Ⅰ', title: 'Знакомство', count: 9, examples: ['apple', 'book', 'house'] },
  { id: 2, rune: 'Ⅱ', title: 'Выбор перевода', count: 7, examples: ['water', 'friend', 'morning'] },
  { id: 3, rune: 'Ⅲ', title: 'Обратный выбор', count: 6, examples: ['window', 'garden', 'work'] },
  { id: 4, rune: 'Ⅳ', title: 'Воспроизведение', count: 3, examples: ['enough', 'answer', 'together'] },
]

const masteryItems = [
  { word: 'enough', completed: 2, total: 3 },
  { word: 'answer', completed: 2, total: 3 },
]
</script>

<template>
  <div class="showcase-grid cards-grid">
    <section class="specimen-section stage-section">
      <div class="section-heading">
        <span>05</span>
        <div><h2>Стадии преобразования</h2><p>25 слов находятся в работе</p></div>
      </div>
      <StageList :stages="stages" />
    </section>

    <section class="specimen-section progress-section">
      <div class="section-heading">
        <span>06</span>
        <div><h2>Прогресс</h2><p>Время, опыт и устойчивость знания</p></div>
      </div>
      <DailyProgress :minutes="12" :goal-minutes="15" :mastered-words="4" :earned-xp="80" />
      <MasteryPreview :items="masteryItems" />
    </section>
  </div>
</template>
