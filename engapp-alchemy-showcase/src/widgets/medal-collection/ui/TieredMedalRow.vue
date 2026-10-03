<script setup lang="ts">
import type { TieredMedal } from '@/entities/achievement'

defineProps<{
  medal: TieredMedal
}>()
</script>

<template>
  <div class="tiered-medal-row">
    <div class="tiered-medal-heading">
      <strong>{{ medal.title }}</strong>
      <div class="tiered-medal-steps" :aria-label="`${medal.earnedTiers} из 6 ступеней получено`">
        <span v-for="step in 6" :key="step" :class="{ earned: step <= medal.earnedTiers }">
          {{ step <= medal.earnedTiers ? '✓' : '◇' }}
        </span>
      </div>
    </div>
    <p>{{ medal.current }} / {{ medal.target }} {{ medal.unit }} до {{ medal.nextTier }}</p>
  </div>
</template>

<style scoped>
.tiered-medal-row { display: grid; gap: 0.38rem; padding: 0.85rem 0; border-bottom: 1px solid rgb(231 211 161 / 9%); }
.tiered-medal-heading { display: grid; grid-template-columns: 1fr auto; gap: 0.8rem; align-items: center; }
.tiered-medal-heading > strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.82rem; }
.tiered-medal-steps { display: grid; width: clamp(9rem, 42vw, 13rem); grid-template-columns: repeat(6, 1fr); gap: 0.25rem; color: rgb(231 211 161 / 28%); text-align: center; }
.tiered-medal-steps .earned { color: var(--emerald); }
.tiered-medal-row p { margin: 0; color: rgb(231 211 161 / 47%); font-size: 0.64rem; line-height: 1.45; }
</style>
