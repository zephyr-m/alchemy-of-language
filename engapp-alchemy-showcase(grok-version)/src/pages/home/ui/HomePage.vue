<script setup lang="ts">
import type { LearningStageSummary } from '@/entities/learning-stage'
import { ChevronRight, Flame, FlaskConical, Sparkles } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DailyProgress } from '@/widgets/daily-progress'
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
  <div class="home-page">
    <header class="home-header">
      <div class="home-brand">
        <div class="brand-mark home-brand-mark" aria-hidden="true">
          <FlaskConical :size="21" :stroke-width="1.8" />
        </div>
        <div>
          <p class="eyebrow">EngApp</p>
          <h1>Мастерская</h1>
        </div>
      </div>
      <Badge class="game-badge streak-badge"><Flame /> 5 дней</Badge>
    </header>

    <section class="home-today" aria-label="Сегодня">
      <DailyProgress :minutes="12" :goal-minutes="15" :mastered-words="4" :earned-xp="80" />
      <Button as-child size="lg" class="alchemy-button alchemy-button-primary home-primary-action">
        <RouterLink :to="{ name: 'training' }">
          <Sparkles /> Продолжить тренировку
        </RouterLink>
      </Button>
    </section>

    <section class="home-section" aria-labelledby="stages-title">
      <div class="home-section-heading">
        <div>
          <p class="eyebrow">25 слов</p>
          <h2 id="stages-title">В работе</h2>
        </div>
      </div>
      <StageList :stages="stages" lead />
    </section>

    <section class="home-section" aria-labelledby="mastery-title">
      <div class="home-section-heading">
        <div>
          <p class="eyebrow">Остался один шаг</p>
          <h2 id="mastery-title">Почти освоены</h2>
        </div>
      </div>
      <MasteryPreview :items="masteryItems" />
    </section>

    <RouterLink :to="{ name: 'dictionary' }" class="dictionary-link" aria-label="Мой словарь, 124 освоенных слова">
      <Card class="dictionary-card">
        <CardContent class="dictionary-card-content">
          <div class="dictionary-copy">
            <p class="eyebrow">Книга знаний</p>
            <strong>124</strong>
            <span>освоенных слова из 5000</span>
          </div>
          <ChevronRight class="dictionary-arrow" />
        </CardContent>
      </Card>
    </RouterLink>
  </div>
</template>

<style scoped>
.home-page {
  display: grid;
  gap: 1.85rem;
  padding: 0.15rem 0 0.5rem;
}

.home-today { display: grid; gap: 0.75rem; }

.home-header,
.home-brand,
.home-section-heading {
  display: flex;
  align-items: center;
}

.home-header {
  justify-content: space-between;
  gap: 0.75rem;
}

.home-brand { min-width: 0; gap: 0.75rem; }
.home-brand-mark { width: 2.85rem; height: 2.85rem; flex: 0 0 auto; }

.home-header h1,
.home-section-heading h2 {
  margin: 0;
  color: var(--parchment-bright);
  font-family: var(--font-display);
  font-weight: 500;
}

.home-header h1 { margin-top: 0.08rem; font-size: 1.85rem; line-height: 0.95; }
.home-header .game-badge { flex: 0 0 auto; }

.home-section { display: grid; gap: 0.85rem; }
.home-section-heading { justify-content: space-between; }
.home-section-heading h2 { margin-top: 0.15rem; font-size: 1.55rem; }

.home-primary-action {
  width: 100%;
  min-height: 3.4rem;
  font-family: var(--font-body);
  font-size: 1.02rem;
  font-weight: 600;
  letter-spacing: 0;
  text-decoration: none;
}

.dictionary-link { display: block; border-radius: 1rem; text-decoration: none; }
.dictionary-link:focus-visible { outline: 3px solid rgb(87 181 134 / 38%); outline-offset: 3px; }
.dictionary-card {
  gap: 0;
  padding-block: 0;
  border-color: rgb(215 168 74 / 28%);
  background: linear-gradient(160deg, rgb(86 58 32 / 55%), rgb(38 26 22 / 88%));
  box-shadow: var(--inset-line);
}
.dictionary-card-content { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.05rem 1rem; }
.dictionary-copy { display: grid; min-width: 0; gap: 0.1rem; }
.dictionary-copy strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 2.4rem; font-weight: 500; line-height: 0.95; }
.dictionary-copy > span { color: rgb(243 228 188 / 78%); font-size: 0.92rem; }
.dictionary-arrow { width: 1.15rem; color: rgb(243 228 188 / 70%); }

@media (max-width: 370px) {
  .home-header h1 { font-size: 1.5rem; }
  .home-brand-mark { width: 2.55rem; height: 2.55rem; }
  .home-header .game-badge { padding-inline: 0.5rem; }
}
</style>
