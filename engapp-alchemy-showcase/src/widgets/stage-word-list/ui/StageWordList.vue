<script setup lang="ts">
import type { StageWordProgress } from '../model/types'
import { Card, CardContent } from '@/components/ui/card'
import StageWordRow from './StageWordRow.vue'

defineProps<{
  words: StageWordProgress[]
}>()
</script>

<template>
  <section class="stage-words" aria-labelledby="stage-words-title">
    <div class="stage-word-columns" id="stage-words-title">
      <span>Слово</span>
      <span>Полные прохождения</span>
    </div>
    <Card class="stage-card stage-word-card">
      <CardContent class="stage-word-card-content">
        <StageWordRow v-for="item in words" :key="item.id" :item="item" />
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
.stage-words { display: grid; gap: 0.6rem; }
.stage-word-columns { display: grid; grid-template-columns: 1fr auto; gap: 1rem; padding-inline: 1rem; color: rgb(243 228 188 / 68%); font-size: var(--type-small); font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; }
.stage-word-card { gap: 0; padding-block: 0; overflow: hidden; }
.stage-word-card-content { padding: 0; }
</style>
