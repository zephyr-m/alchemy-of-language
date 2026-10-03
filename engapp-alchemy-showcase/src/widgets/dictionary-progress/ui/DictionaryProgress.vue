<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen, ChevronRight } from '@lucide/vue'
import { Card, CardContent } from '@/components/ui/card'

const props = withDefaults(defineProps<{
  mastered: number
  total: number
  showArrow?: boolean
}>(), {
  showArrow: false,
})

const progress = computed(() => {
  if (props.total <= 0) return 0
  return Math.min(100, (props.mastered / props.total) * 100)
})
</script>

<template>
  <Card class="stage-card dictionary-progress-card">
    <CardContent class="dictionary-progress-content">
      <div class="stage-rune dictionary-progress-rune"><BookOpen /></div>
      <div class="dictionary-progress-copy">
        <strong>{{ mastered }} освоенных слов</strong>
        <span>из {{ total }} слов в книге знаний</span>
        <div class="progress-track" :aria-label="`Освоено ${mastered} слов из ${total}`">
          <span :style="{ width: `${progress}%` }" />
        </div>
      </div>
      <ChevronRight v-if="showArrow" class="stage-arrow" />
    </CardContent>
  </Card>
</template>

<style scoped>
.dictionary-progress-content { display: grid; grid-template-columns: auto 1fr auto; gap: 0.85rem; align-items: center; padding: 0.9rem; }
.dictionary-progress-rune svg { width: 1.15rem; }
.dictionary-progress-copy { display: grid; min-width: 0; gap: 0.18rem; }
.dictionary-progress-copy strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.92rem; font-weight: 600; }
.dictionary-progress-copy > span { color: rgb(231 211 161 / 48%); font-size: 0.65rem; }
.dictionary-progress-copy .progress-track { height: 0.42rem; margin-top: 0.35rem; }
</style>
