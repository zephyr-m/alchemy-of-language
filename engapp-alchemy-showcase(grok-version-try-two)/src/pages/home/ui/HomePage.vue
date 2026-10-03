<script setup lang="ts">
import { BookOpen, ChevronRight, Flame, FlaskConical, Sparkles } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DailyProgress } from '@/widgets/daily-progress'
import { MasteryPreview } from '@/widgets/mastery-preview'

const masteryItems = [
  { word: 'enough', completed: 2, total: 3 },
  { word: 'answer', completed: 2, total: 3 },
]

const dictionaryProgress = 124 / 5000 * 100
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

    <section class="home-section" aria-labelledby="today-title">
      <div class="home-section-heading">
        <div>
          <p class="eyebrow">Текущий прогресс</p>
          <h2 id="today-title">Сегодня</h2>
        </div>
      </div>
      <DailyProgress :minutes="12" :goal-minutes="15" :mastered-words="4" :earned-xp="80" />
    </section>

    <Button as-child size="lg" class="alchemy-button alchemy-button-primary home-primary-action">
      <RouterLink :to="{ name: 'training' }">
        <Sparkles /> Продолжить тренировку
      </RouterLink>
    </Button>

    <section class="home-section" aria-labelledby="mastery-title">
      <div class="home-section-heading">
        <div>
          <p class="eyebrow">Последний цикл</p>
          <h2 id="mastery-title">Близки к освоению</h2>
        </div>
      </div>
      <MasteryPreview :items="masteryItems" />
    </section>

    <section class="home-section" aria-labelledby="dictionary-title">
      <div class="home-section-heading">
        <div>
          <p class="eyebrow">Книга знаний</p>
          <h2 id="dictionary-title">Мой словарь</h2>
        </div>
      </div>

      <RouterLink :to="{ name: 'dictionary' }" class="dictionary-link">
        <Card class="stage-card dictionary-card">
          <CardContent class="dictionary-card-content">
            <div class="stage-rune dictionary-rune"><BookOpen /></div>
            <div class="dictionary-copy">
              <strong>124 освоенных слова</strong>
              <span>из 5000 слов в книге знаний</span>
              <div class="progress-track"><span :style="{ width: `${dictionaryProgress}%` }" /></div>
            </div>
            <ChevronRight class="stage-arrow" />
          </CardContent>
        </Card>
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: grid;
  gap: 1.55rem;
  padding: 0.25rem 0 1rem;
}

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

.home-header h1 { margin-top: 0.08rem; font-size: 1.75rem; line-height: 1; }
.home-header .game-badge { flex: 0 0 auto; }

.home-section { display: grid; gap: 0.75rem; }
.home-section-heading { justify-content: space-between; }
.home-section-heading h2 { margin-top: 0.18rem; font-size: 1.28rem; }

.home-primary-action {
  width: 100%;
  min-height: 3.35rem;
  text-decoration: none;
}

.dictionary-link { display: block; border-radius: 0.85rem; text-decoration: none; }
.dictionary-link:focus-visible { outline: 3px solid rgb(87 181 134 / 38%); outline-offset: 3px; }
.dictionary-card-content { display: grid; grid-template-columns: auto 1fr auto; gap: 0.85rem; align-items: center; padding: 0.9rem; }
.dictionary-rune svg { width: 1.15rem; }
.dictionary-copy { display: grid; min-width: 0; gap: 0.18rem; }
.dictionary-copy strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.92rem; font-weight: 600; }
.dictionary-copy > span { color: rgb(231 211 161 / 48%); font-size: 0.65rem; }
.dictionary-copy .progress-track { height: 0.42rem; margin-top: 0.35rem; }

@media (max-width: 370px) {
  .home-header h1 { font-size: 1.5rem; }
  .home-brand-mark { width: 2.55rem; height: 2.55rem; }
  .home-header .game-badge { padding-inline: 0.5rem; }
}
</style>
