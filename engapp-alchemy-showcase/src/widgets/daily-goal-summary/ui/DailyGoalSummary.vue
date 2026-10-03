<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  minutes: number
  goalMinutes: number
}>()

const progress = computed(() => {
  if (props.goalMinutes <= 0) return 0
  return Math.min(100, (props.minutes / props.goalMinutes) * 100)
})
</script>

<template>
  <section class="daily-goal-summary" aria-labelledby="daily-goal-title">
    <div class="daily-goal-heading">
      <h2 id="daily-goal-title">Дневная цель</h2>
      <strong>{{ minutes }} / {{ goalMinutes }} минут</strong>
    </div>
    <div class="progress-track" :aria-label="`${minutes} из ${goalMinutes} минут`">
      <span :style="{ width: `${progress}%` }" />
    </div>
  </section>
</template>

<style scoped>
.daily-goal-summary { display: grid; gap: 0.7rem; }
.daily-goal-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 0.75rem; }
.daily-goal-heading h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-display); font-size: 1rem; font-weight: 600; }
.daily-goal-heading strong { color: var(--brass-light); font-family: var(--font-display); font-size: 0.75rem; }
</style>
