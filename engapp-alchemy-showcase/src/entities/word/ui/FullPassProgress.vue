<script setup lang="ts">
withDefaults(defineProps<{
  completed: number
  total: number
  showLabel?: boolean
  showCount?: boolean
}>(), {
  showLabel: true,
  showCount: true,
})
</script>

<template>
  <div class="full-pass-progress" :class="{ compact: !showLabel && !showCount }">
    <span v-if="showLabel">Полных прохождений</span>
    <div class="mastery-pips" :aria-label="`${completed} из ${total} полных прохождений`">
      <i v-for="step in total" :key="step" :class="{ empty: step > completed }" />
    </div>
    <strong v-if="showCount">{{ completed }}/{{ total }}</strong>
  </div>
</template>

<style scoped>
.full-pass-progress { display: grid; width: 100%; grid-template-columns: 1fr auto auto; gap: 0.65rem; align-items: center; }
.full-pass-progress.compact { width: auto; grid-template-columns: auto; }
.full-pass-progress > span { color: rgb(243 228 188 / 76%); font-size: var(--type-small); }
.full-pass-progress > strong { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-small); }
</style>
