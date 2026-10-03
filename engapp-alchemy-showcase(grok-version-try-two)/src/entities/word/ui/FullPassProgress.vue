<script setup lang="ts">
defineProps<{
  completed: number
  total: number
}>()
</script>

<template>
  <div class="full-pass-progress">
    <span>Полных прохождений</span>
    <div class="mastery-pips" :aria-label="`${completed} из ${total} полных прохождений`">
      <i v-for="step in total" :key="step" :class="{ empty: step > completed }" />
    </div>
    <strong>{{ completed }}/{{ total }}</strong>
  </div>
</template>

<style scoped>
.full-pass-progress { display: grid; width: 100%; grid-template-columns: 1fr auto auto; gap: 0.65rem; align-items: center; }
.full-pass-progress > span { color: rgb(243 228 188 / 76%); font-size: 0.9rem; }
.full-pass-progress > strong { color: var(--parchment-bright); font-size: 0.9rem; font-weight: 600; }
</style>
