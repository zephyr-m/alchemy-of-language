<script setup lang="ts">
import type { SpecialMedal } from '../model/types'

defineProps<{
  medal: SpecialMedal
}>()
</script>

<template>
  <div class="medal-item" :class="{ earned: medal.earned }">
    <span aria-hidden="true">{{ medal.earned ? '✓' : '◇' }}</span>
    <div>
      <strong>{{ medal.title }}</strong>
      <p>{{ medal.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.medal-item { display: grid; grid-template-columns: auto 1fr; gap: 0.7rem; padding: 0.8rem 0; border-bottom: 1px solid rgb(231 211 161 / 9%); }
.medal-item > span { color: rgb(231 211 161 / 35%); font-size: 1rem; }
.medal-item.earned > span { color: var(--emerald); }
.medal-item div { display: grid; gap: 0.18rem; }
.medal-item strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.82rem; }
.medal-item p { margin: 0; color: rgb(231 211 161 / 49%); font-size: 0.66rem; line-height: 1.45; }
</style>
