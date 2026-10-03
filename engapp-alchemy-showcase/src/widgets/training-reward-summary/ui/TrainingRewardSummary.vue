<script setup lang="ts">
import { Star } from '@lucide/vue'
import { Card, CardContent } from '@/components/ui/card'

defineProps<{
  minutes: number
  masteredWords: number
  earnedXp: number
}>()
</script>

<template>
  <section class="training-reward-summary" aria-labelledby="training-results-title">
    <h1 id="training-results-title">Тренировка завершена</h1>
    <div class="training-result-star" aria-hidden="true"><Star /></div>
    <h2>Хорошая работа!</h2>

    <Card class="question-card reward-summary-card">
      <CardContent class="reward-summary-content">
        <div><span>Время</span><strong>{{ minutes }} минут</strong></div>
        <div><span>Освоено слов</span><strong>{{ masteredWords }}</strong></div>
        <div><span>Получено опыта</span><strong>+{{ earnedXp }} XP</strong></div>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
.training-reward-summary { display: grid; justify-items: center; gap: 0.9rem; text-align: center; }
.training-reward-summary h1,
.training-reward-summary h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-display); font-weight: 600; }
.training-reward-summary h1 { font-size: 1.55rem; }
.training-reward-summary h2 { font-size: 1.15rem; }
.training-result-star { display: grid; width: 4.5rem; height: 4.5rem; margin-block: 0.15rem; place-items: center; border: 1px solid rgb(215 168 74 / 45%); border-radius: 50%; color: var(--brass-light); background: radial-gradient(circle, rgb(215 168 74 / 20%), transparent 68%); box-shadow: 0 0 0 6px rgb(215 168 74 / 5%), 0 0 28px rgb(215 168 74 / 15%); }
.training-result-star svg { width: 2rem; height: 2rem; fill: currentcolor; }
.reward-summary-card { width: 100%; gap: 0; padding-block: 0; text-align: left; }
.reward-summary-content { padding: 0.45rem 1rem; }
.reward-summary-content > div { display: grid; min-height: 3rem; grid-template-columns: 1fr auto; gap: 0.65rem; align-items: center; border-bottom: 1px solid rgb(231 211 161 / 9%); }
.reward-summary-content > div:last-child { border-bottom: 0; }
.reward-summary-content span { color: rgb(231 211 161 / 57%); font-size: 0.72rem; }
.reward-summary-content strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.78rem; }
</style>
