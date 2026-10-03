<script setup lang="ts">
import type { StageWordProgress } from '../model/types'
import { FullPassProgress } from '@/entities/word'

defineProps<{
  item: StageWordProgress
}>()
</script>

<template>
  <div class="stage-word-row">
    <strong>{{ item.word }}</strong>
    <FullPassProgress
      :completed="item.completedPasses"
      :total="3"
      :show-label="false"
      :show-count="false"
    />
  </div>
</template>

<style scoped>
.stage-word-row { display: grid; min-height: 3.35rem; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 0.8rem 1rem; border-bottom: 1px solid rgb(231 211 161 / 9%); }
.stage-word-row:last-child { border-bottom: 0; }
.stage-word-row > strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.88rem; font-weight: 600; }
</style>
