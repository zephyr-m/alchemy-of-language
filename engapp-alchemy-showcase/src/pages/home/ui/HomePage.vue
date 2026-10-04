<script setup lang="ts">
import { Flame, FlaskConical, Sparkles } from '@lucide/vue'
import { onMounted, ref } from 'vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { wordLearningService } from '@/features/word-learning'
import { DailyProgress } from '@/widgets/daily-progress'
import { DictionaryProgress } from '@/widgets/dictionary-progress'

const masteredCount = ref(0)
const catalogCount = ref(0)

onMounted(async () => {
  const dictionary = await wordLearningService.getDictionary()
  masteredCount.value = dictionary.words.length
  catalogCount.value = dictionary.totalCatalogWords
})
</script>

<template>
  <div class="home-page">
    <header class="home-header">
      <div class="home-brand">
        <div class="brand-mark home-brand-mark" aria-hidden="true">
          <FlaskConical :size="21" :stroke-width="1.8" />
        </div>
        <div>
          <h1>Мастерская</h1>
        </div>
      </div>
      <Badge class="game-badge streak-badge"><Flame /> 5 дней</Badge>
    </header>

    <section class="home-section" aria-labelledby="today-title">
      <div class="home-section-heading">
        <div>
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

    <section class="home-section" aria-labelledby="dictionary-title">
      <div class="home-section-heading">
        <div>
          <h2 id="dictionary-title">Мой словарь</h2>
        </div>
      </div>

      <RouterLink :to="{ name: 'dictionary' }" class="dictionary-link">
        <DictionaryProgress :mastered="masteredCount" :total="catalogCount" show-arrow />
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
  font-family: var(--font-interface);
  font-weight: 500;
}

.home-header h1 { margin-top: 0.08rem; font-size: var(--type-title); line-height: 1; }
.home-header .game-badge { flex: 0 0 auto; }

.home-section { display: grid; gap: 0.75rem; }
.home-section-heading { justify-content: space-between; }
.home-section-heading h2 { margin-top: 0.18rem; font-size: var(--type-title); }

.home-primary-action {
  width: 100%;
  min-height: 3.35rem;
  text-decoration: none;
}

.dictionary-link { display: block; border-radius: 0.85rem; text-decoration: none; }
.dictionary-link:focus-visible { outline: 3px solid rgb(87 181 134 / 38%); outline-offset: 3px; }

@media (max-width: 370px) {
  .home-brand-mark { width: 2.55rem; height: 2.55rem; }
  .home-header .game-badge { padding-inline: 0.5rem; }
}
</style>
