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
.tiered-medal-row { display: grid; gap: 0.45rem; padding: 0.9rem 1rem; border-bottom: 1px solid rgb(243 228 188 / 11%); }
.tiered-medal-heading { display: grid; grid-template-columns: 1fr auto; gap: 0.8rem; align-items: center; }
.tiered-medal-heading > strong { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); line-height: 1.15; }
.tiered-medal-steps { display: grid; width: clamp(10rem, 44vw, 14rem); grid-template-columns: repeat(6, 1fr); gap: 0.3rem; color: rgb(243 228 188 / 36%); font-size: var(--type-small); text-align: center; }
.tiered-medal-steps .earned { color: var(--emerald); }
.tiered-medal-row p { margin: 0; color: rgb(243 228 188 / 74%); font-size: var(--type-body); line-height: 1.45; }

@media (max-width: 370px) {
  .tiered-medal-heading { grid-template-columns: 1fr; }
  .tiered-medal-steps { width: 100%; }
}
</style>
