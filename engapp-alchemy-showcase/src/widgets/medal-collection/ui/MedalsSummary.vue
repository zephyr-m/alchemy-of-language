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
.medals-summary { display: grid; gap: 0.7rem; }
.medals-summary strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.88rem; }
</style>
