<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue'
import { Button } from '@/components/ui/button'

withDefaults(defineProps<{
  stage: number
  totalStages?: number
  title: string
  wordCount: number
}>(), {
  totalStages: 4,
})
</script>

<template>
  <header class="stage-summary-header">
    <div class="stage-summary-topline">
      <Button as-child variant="ghost" class="stage-summary-back">
        <RouterLink :to="{ name: 'home' }"><ArrowLeft /> Главная</RouterLink>
      </Button>
      <h1>{{ title }}</h1>
    </div>
    <div class="stage-summary-meta">
      <span>Этап {{ stage }} из {{ totalStages }}</span>
      <strong>{{ wordCount }} слов</strong>
    </div>
  </header>
</template>

<style scoped>
.stage-summary-header { display: grid; gap: 0.85rem; }
.stage-summary-topline { display: grid; grid-template-columns: auto 1fr; gap: 0.75rem; align-items: center; }
.stage-summary-back { height: auto; padding: 0; color: rgb(231 211 161 / 58%); background: transparent; }
.stage-summary-back svg { width: 1rem; }
.stage-summary-topline h1 { margin: 0; overflow: hidden; color: var(--parchment-bright); font-family: var(--font-display); font-size: 1.35rem; font-weight: 500; text-align: right; text-overflow: ellipsis; white-space: nowrap; }
.stage-summary-meta { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; padding-left: 0.1rem; }
.stage-summary-meta span { color: var(--brass-light); font-family: var(--font-display); font-size: 0.78rem; }
.stage-summary-meta strong { color: rgb(231 211 161 / 54%); font-size: 0.7rem; }
</style>
