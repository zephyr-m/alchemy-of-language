<script setup lang="ts">
import type { SpecialMedal, TieredMedal } from '@/entities/achievement'
import { ArrowLeft } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { MedalFilters, MedalsSummary, MedalTierLegend, SpecialMedalList, TieredMedalList } from '@/widgets/medal-collection'

const tieredMedals: TieredMedal[] = [
  { id: 'knowledge-book', title: 'Книга знаний', earnedTiers: 3, current: 124, target: 500, unit: 'освоенных слов', nextTier: 'золота' },
  { id: 'first-meeting', title: 'Первое знакомство', earnedTiers: 3, current: 149, target: 500, unit: 'разных слов', nextTier: 'золота' },
  { id: 'translator', title: 'Переводчик', earnedTiers: 2, current: 180, target: 250, unit: 'ответов', nextTier: 'серебра' },
  { id: 'word-mirror', title: 'Зеркало слов', earnedTiers: 2, current: 170, target: 250, unit: 'ответов', nextTier: 'серебра' },
  { id: 'alchemist-pen', title: 'Перо алхимика', earnedTiers: 1, current: 18, target: 25, unit: 'ответов', nextTier: 'бронзы' },
  { id: 'alchemist-voice', title: 'Голос алхимика', earnedTiers: 0, current: 0, target: 5, unit: 'ответов', nextTier: 'меди' },
  { id: 'full-cycle', title: 'Полный цикл', earnedTiers: 1, current: 24, target: 30, unit: 'прохождений', nextTier: 'бронзы' },
  { id: 'craft-loyalty', title: 'Верность ремеслу', earnedTiers: 0, current: 2, target: 3, unit: 'дней', nextTier: 'меди' },
]

const specialMedals: SpecialMedal[] = [
  { id: 'initiation', title: 'Посвящение', description: 'Завершить первую тренировку', earned: true },
  { id: 'four-elements', title: 'Четыре стихии', description: 'Поработать на всех четырёх этапах', earned: true },
  { id: 'first-recipe', title: 'Первый рецепт', description: 'Пройти одним словом все четыре этапа', earned: false },
  { id: 'reinforcement', title: 'Закрепление', description: 'Пройти одно слово второй раз', earned: false },
  { id: 'triple-distillation', title: 'Тройная перегонка', description: 'Освоить первое слово', earned: false },
  { id: 'full-workshop', title: 'Полная мастерская', description: 'Набрать 25 слов в обучение', earned: false },
  { id: 'new-page', title: 'Новая страница', description: 'Добавить слово на освободившееся место', earned: false },
  { id: 'mistake-work', title: 'Работа над ошибками', description: 'Верно ответить после прошлой ошибки', earned: false },
  { id: 'stubborn-alchemist', title: 'Упрямый алхимик', description: 'Освоить слово с пятью ошибками', earned: false },
  { id: 'long-experiment', title: 'Долгий эксперимент', description: 'Освоить слово после 30 дней обучения', earned: false },
  { id: 'second-wind', title: 'Второе дыхание', description: 'Вернуться после перерыва от 7 дней', earned: false },
  { id: 'two-tools', title: 'Два инструмента', description: 'Ответить и вводом, и голосом', earned: false },
]
</script>

<template>
  <div class="medals-page">
    <header class="medals-header">
      <Button as-child variant="ghost" class="medals-back">
        <RouterLink :to="{ name: 'home' }"><ArrowLeft /> Назад</RouterLink>
      </Button>
      <h1>Коллекция медалей</h1>
    </header>

    <MedalsSummary :earned="14" :total="60" />
    <MedalFilters />
    <MedalTierLegend />
    <TieredMedalList :medals="tieredMedals" />
    <SpecialMedalList :medals="specialMedals" />
    <MedalTierLegend mode="full" />
  </div>
</template>

<style scoped>
.medals-page { display: grid; gap: 1.35rem; padding: 0.2rem 0 1rem; }
.medals-header { display: grid; grid-template-columns: auto 1fr; gap: 0.75rem; align-items: center; }
.medals-back { height: auto; padding: 0; color: rgb(231 211 161 / 58%); background: transparent; }
.medals-back svg { width: 1rem; }
.medals-header h1 { margin: 0; color: var(--parchment-bright); font-family: var(--font-display); font-size: 1.4rem; font-weight: 500; text-align: right; }
</style>
