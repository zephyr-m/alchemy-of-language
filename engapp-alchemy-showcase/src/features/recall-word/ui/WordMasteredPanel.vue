<script setup lang="ts">
import { ArrowRight, Check } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { FullPassProgress } from '@/entities/word'

defineProps<{
  word: string
}>()

defineEmits<{
  next: []
}>()
</script>

<template>
  <div class="word-mastered-panel">
    <div class="mastered-answer"><Check /> {{ word }}</div>
    <h2>Слово освоено!</h2>
    <div class="mastered-passes">
      <FullPassProgress :completed="3" :total="3" :show-label="false" :show-count="false" />
      <span>3 полных прохождения</span>
    </div>
    <p>{{ word }} добавлено в мой словарь</p>
    <Button type="button" variant="ghost" class="mastered-next" @click="$emit('next')">
      Следующее слово <ArrowRight />
    </Button>
  </div>
</template>

<style scoped>
.word-mastered-panel { display: grid; justify-items: center; gap: 1rem; text-align: center; }
.mastered-answer { display: flex; width: 100%; min-height: 3.1rem; align-items: center; gap: 0.65rem; padding: 0.75rem 0.9rem; border: 1px solid rgb(87 181 134 / 48%); border-radius: 0.72rem; color: #a8ebc8; background: rgb(45 130 89 / 18%); font-family: var(--font-display); text-align: left; }
.mastered-answer svg { width: 1rem; }
.word-mastered-panel h2 { margin: 0.25rem 0 0; color: var(--parchment-bright); font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; }
.mastered-passes { display: grid; justify-items: center; gap: 0.55rem; }
.mastered-passes > span { color: rgb(231 211 161 / 52%); font-size: 0.67rem; }
.word-mastered-panel p { margin: 0; color: rgb(231 211 161 / 62%); font-size: 0.72rem; }
.mastered-next { color: var(--brass-light); }
</style>
