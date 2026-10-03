<script setup lang="ts">
import type { SpecialMedal, TieredMedal } from '@/entities/achievement'
import { MedalFilters, MedalsSummary, MedalTierLegend, SpecialMedalList, TieredMedalList } from '@/widgets/medal-collection'

const tiered: TieredMedal[] = [
  { id: 'knowledge-book', title: 'Книга знаний', earnedTiers: 3, current: 124, target: 500, unit: 'освоенных слов', nextTier: 'золота' },
  { id: 'translator', title: 'Переводчик', earnedTiers: 2, current: 180, target: 250, unit: 'ответов', nextTier: 'серебра' },
]

const special: SpecialMedal[] = [
  { id: 'initiation', title: 'Посвящение', description: 'Завершить первую тренировку', earned: true },
  { id: 'first-recipe', title: 'Первый рецепт', description: 'Пройти одним словом все четыре этапа', earned: false },
]
</script>

<template>
  <div class="showcase-grid cards-grid">
    <section class="specimen-section">
      <div class="section-heading">
        <span>17</span>
        <div><h2>Коллекция медалей</h2><p>Общий прогресс и фильтры</p></div>
      </div>
      <div class="medal-controls-specimen">
        <MedalsSummary :earned="14" :total="60" />
        <MedalFilters />
        <MedalTierLegend />
      </div>
    </section>

    <section class="specimen-section">
      <div class="section-heading">
        <span>18</span>
        <div><h2>Медали</h2><p>Накопительные и особые награды</p></div>
      </div>
      <div class="medal-lists-specimen">
        <TieredMedalList :medals="tiered" />
        <SpecialMedalList :medals="special" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.medal-controls-specimen,
.medal-lists-specimen { display: grid; gap: 1.25rem; }
</style>
