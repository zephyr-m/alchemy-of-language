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
.training-reward-summary h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-interface); font-weight: 600; }
.training-reward-summary h1 { font-size: var(--type-title); }
.training-reward-summary h2 { font-size: var(--type-title); }
.training-result-star { display: grid; width: 5rem; height: 5rem; margin-block: 0.2rem; place-items: center; border: 2px solid #f2cb73; border-radius: 50%; color: #fff1cf; background: radial-gradient(circle at 40% 28%, #e0b25a, #8a5a24 58%, #3a2416); box-shadow: inset 0 1px rgb(255 244 210 / 50%), 0 0 0 6px rgb(215 168 74 / 12%), 0 6px 0 #3a2616, 0 0 30px rgb(215 168 74 / 30%); }
.training-result-star svg { width: 2rem; height: 2rem; fill: currentcolor; }
.reward-summary-card { width: 100%; gap: 0; padding-block: 0; text-align: left; }
.reward-summary-content { padding: 0.5rem 1rem; }
.reward-summary-content > div { display: grid; min-height: 3.35rem; grid-template-columns: 1fr auto; gap: 0.65rem; align-items: center; border-bottom: 1px solid rgb(243 228 188 / 12%); }
.reward-summary-content > div:last-child { border-bottom: 0; }
.reward-summary-content span { color: rgb(243 228 188 / 76%); font-size: var(--type-body); }
.reward-summary-content strong { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-body); }
</style>
