<script setup lang="ts">
import { Badge } from '@/components/ui/badge'

withDefaults(defineProps<{
  stage: number
  totalStages?: number
  rune: string
  title: string
  wordCount: number
}>(), {
  totalStages: 4,
})
</script>

<template>
  <header class="training-header">
    <div class="training-header-copy">
      <Badge variant="outline" class="lesson-badge">Этап {{ stage }} из {{ totalStages }}</Badge>
      <h1>{{ title }}</h1>
      <p>{{ wordCount }} слов в этой стадии</p>
    </div>

    <div class="stage-rune training-stage-rune" aria-hidden="true">{{ rune }}</div>
  </header>
</template>
