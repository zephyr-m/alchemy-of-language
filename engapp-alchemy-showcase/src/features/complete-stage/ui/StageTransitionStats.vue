<script setup lang="ts">
defineProps<{
  currentStage: number
  advanced: number
  advancedStage: number
  returned: number
  returnedStage: number
}>()
</script>

<template>
  <div class="stage-transition-stats">
    <div><span>Перешли на этап {{ advancedStage }}</span><strong>{{ advanced }}</strong></div>
    <div>
      <span v-if="returnedStage === currentStage">Остались на этапе {{ returnedStage }}</span>
      <span v-else>Вернулись на этап {{ returnedStage }}</span>
      <strong>{{ returned }}</strong>
    </div>
  </div>
</template>

<style scoped>
.stage-transition-stats { display: grid; gap: 0.6rem; padding-block: 0.45rem; }
.stage-transition-stats > div { display: grid; min-height: 2.8rem; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 0.65rem 0.8rem; border: 1px solid rgb(215 168 74 / 20%); border-radius: 0.72rem; color: rgb(243 228 188 / 78%); background: rgb(8 5 5 / 18%); font-size: var(--type-body); }
.stage-transition-stats strong { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-body); }
</style>
