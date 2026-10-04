<script setup lang="ts">
withDefaults(defineProps<{
  stage: number
  totalStages?: number
  wordCount: number
}>(), {
  totalStages: 4,
})
</script>

<template>
  <header class="stage-summary-header">
    <div class="stage-summary-meta">
      <span>Этап {{ stage }} из {{ totalStages }}</span>
      <strong>{{ wordCount }} слов</strong>
    </div>
  </header>
</template>

<style scoped>
.stage-summary-header { display: grid; gap: 0.85rem; }
.stage-summary-meta { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; padding-left: 0.1rem; }
.stage-summary-meta span { color: var(--brass-light); font-family: var(--font-interface); font-size: var(--type-body); }
.stage-summary-meta strong { color: rgb(243 228 188 / 76%); font-size: var(--type-small); }
</style>
