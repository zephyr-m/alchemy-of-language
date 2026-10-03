<script setup lang="ts">
defineProps<{
  advanced: number
  advancedStage: number
  returned: number
  returnedStage: number
}>()
</script>

<template>
  <div class="stage-transition-stats">
    <div><span>Перешли на этап {{ advancedStage }}</span><strong>{{ advanced }}</strong></div>
    <div><span>Вернулись на этап {{ returnedStage }}</span><strong>{{ returned }}</strong></div>
  </div>
</template>

<style scoped>
.stage-transition-stats { display: grid; gap: 0.55rem; padding-block: 0.35rem; }
.stage-transition-stats > div { display: grid; grid-template-columns: 1fr auto; gap: 1rem; color: rgb(231 211 161 / 62%); font-size: 0.75rem; }
.stage-transition-stats strong { color: var(--parchment-bright); font-family: var(--font-display); }
</style>
