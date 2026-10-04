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
.medal-state-legend { display: flex; flex-wrap: wrap; gap: 1rem; color: rgb(243 228 188 / 68%); font-size: var(--type-small); }
.medal-state-legend .earned { color: var(--emerald); }
.medal-tier-initials { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.3rem; margin-left: auto; width: clamp(10rem, 44vw, 14rem); color: var(--brass-light); font-family: var(--font-interface); font-size: var(--type-small); text-align: center; }
.medal-tier-initials span { display: grid; aspect-ratio: 1; place-items: center; border: 1px solid rgb(215 168 74 / 30%); border-radius: 50%; background: rgb(215 168 74 / 8%); }
.medal-legend-full { display: grid; grid-template-columns: 1fr 1fr; gap: 0.55rem 1rem; padding: 0.9rem 1rem; border: 1px solid #c6a56e; border-left: 3px solid #9a4034; border-radius: 0.35rem 0.8rem 0.5rem 0.6rem; color: #6a4030; background: linear-gradient(180deg, #f7e7c2, #e8d1a4); font-size: var(--type-small); box-shadow: inset 0 0 20px rgb(120 72 30 / 10%), 0 8px 16px rgb(0 0 0 / 14%); }
.medal-legend-full strong { color: #8a4034; font-family: var(--font-interface); }
</style>
