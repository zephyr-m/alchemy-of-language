<script setup lang="ts">
import type { LearningStageSummary } from '@/entities/learning-stage'
import { BookOpenCheck, FlaskConical } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MasteryPreview } from '@/widgets/mastery-preview'
import { StageList } from '@/widgets/stage-list'

const stages: LearningStageSummary[] = [
  { id: 1, rune: 'Ⅰ', title: 'Знакомство', count: 9, examples: ['apple', 'book', 'house'] },
  { id: 2, rune: 'Ⅱ', title: 'Выбор перевода', count: 8, examples: ['water', 'friend', 'morning'] },
  { id: 3, rune: 'Ⅲ', title: 'Выбор английского', count: 5, examples: ['window', 'garden', 'work'] },
  { id: 4, rune: 'Ⅳ', title: 'Ввод или произношение', count: 3, examples: ['enough', 'answer', 'together'] },
]

const masteryItems = [
  { word: 'enough', completed: 2, total: 3 },
  { word: 'answer', completed: 2, total: 3 },
]
</script>

<template>
  <div class="training-page">
    <header class="training-overview-header">
      <div class="training-overview-brand">
        <div class="brand-mark training-overview-mark" aria-hidden="true">
          <FlaskConical :size="22" :stroke-width="1.8" />
        </div>
        <div>
          <p class="eyebrow">Мастерская алхимика</p>
          <h1>Тренировка</h1>
        </div>
      </div>
      <Badge class="game-badge xp-badge">25 слов</Badge>
    </header>

    <Card class="question-card training-overview-guide">
      <CardContent class="training-overview-guide-content">
        <div class="training-overview-guide-icon"><BookOpenCheck /></div>
        <div>
          <strong>Выбери стадию преобразования</strong>
          <p>Каждое слово движется своим путём. Продолжи работу там, где хочешь.</p>
        </div>
      </CardContent>
    </Card>

    <section class="training-section" aria-labelledby="training-stages-title">
      <div>
        <p class="eyebrow">25 слов в работе</p>
        <h2 id="training-stages-title">Стадии преобразования</h2>
      </div>
      <StageList :stages="stages" />
    </section>

    <section class="training-section" aria-labelledby="training-mastery-title">
      <div>
        <p class="eyebrow">Последний цикл</p>
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
.training-stages h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-display); font-weight: 500; }
.training-overview-header h1 { margin-top: 0.08rem; font-size: 1.75rem; line-height: 1; }
.training-overview-header .game-badge { flex: 0 0 auto; }
.training-overview-guide { gap: 0; padding-block: 0; }
.training-overview-guide-content { display: grid; grid-template-columns: auto 1fr; gap: 0.8rem; align-items: center; padding: 0.85rem; }
.training-overview-guide-icon { display: grid; width: 2.6rem; height: 2.6rem; place-items: center; border: 1px solid rgb(87 181 134 / 36%); border-radius: 50%; color: var(--emerald); background: rgb(87 181 134 / 7%); }
.training-overview-guide-icon svg { width: 1.15rem; }
.training-overview-guide strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.9rem; }
.training-overview-guide p { margin: 0.2rem 0 0; color: rgb(231 211 161 / 52%); font-size: 0.66rem; line-height: 1.5; }
.training-section { display: grid; gap: 0.75rem; }
.training-section h2 { margin-top: 0.18rem; font-size: 1.28rem; }

@media (max-width: 370px) {
  .training-overview-header h1 { font-size: 1.5rem; }
  .training-overview-mark { width: 2.55rem; height: 2.55rem; }
  .training-overview-header .game-badge { padding-inline: 0.5rem; }
}
</style>
