<script setup lang="ts">
withDefaults(defineProps<{
  mode?: 'compact' | 'full'
}>(), {
  mode: 'compact',
})

const tiers = [
  { short: 'М', label: 'медь' },
  { short: 'Б', label: 'бронза' },
  { short: 'С', label: 'серебро' },
  { short: 'З', label: 'золото' },
  { short: 'П', label: 'платина' },
  { short: 'А', label: 'алмаз' },
]
</script>

<template>
  <div v-if="mode === 'compact'" class="medal-legend-compact">
    <div class="medal-state-legend">
      <span class="earned">✓ получена</span>
      <span>◇ ещё не получена</span>
    </div>
    <div class="medal-tier-initials" aria-label="Медь, бронза, серебро, золото, платина, алмаз">
      <span v-for="tier in tiers" :key="tier.short">{{ tier.short }}</span>
    </div>
  </div>

  <div v-else class="medal-legend-full">
    <span v-for="tier in tiers" :key="tier.short"><strong>{{ tier.short }}</strong> — {{ tier.label }}</span>
  </div>
</template>

<style scoped>
.medal-legend-compact { display: grid; gap: 1rem; }
.medal-state-legend { display: flex; flex-wrap: wrap; gap: 1rem; color: rgb(231 211 161 / 45%); font-size: 0.65rem; }
.medal-state-legend .earned { color: var(--emerald); }
.medal-tier-initials { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.25rem; margin-left: auto; width: clamp(9rem, 42vw, 13rem); color: var(--brass-light); font-family: var(--font-display); font-size: 0.72rem; text-align: center; }
.medal-legend-full { display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem 1rem; padding-top: 0.3rem; color: rgb(231 211 161 / 48%); font-size: 0.65rem; }
.medal-legend-full strong { color: var(--brass-light); font-family: var(--font-display); }
</style>
