<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  earned: number
  total: number
}>()

const progress = computed(() => {
  if (props.total <= 0) return 0
  return Math.min(100, (props.earned / props.total) * 100)
})
</script>

<template>
  <section class="medals-summary" aria-label="Общий прогресс наград">
    <strong>Получено {{ earned }} из {{ total }} наград</strong>
    <div class="progress-track" :aria-label="`Получено ${earned} из ${total} наград`">
      <span :style="{ width: `${progress}%` }" />
    </div>
  </section>
</template>

<style scoped>
.medals-summary { display: grid; gap: 0.8rem; padding: 0.95rem 1rem; border: 1px solid rgb(215 168 74 / 26%); border-radius: 0.9rem; background: linear-gradient(165deg, rgb(78 52 38 / 76%), rgb(34 23 20 / 90%)); box-shadow: inset 0 1px rgb(255 236 190 / 10%), 0 8px 18px rgb(0 0 0 / 14%); }
.medals-summary strong { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); }
</style>
