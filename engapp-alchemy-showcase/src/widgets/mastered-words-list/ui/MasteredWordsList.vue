<script setup lang="ts">
import type { WordPair } from '@/entities/word'

defineProps<{
  words: WordPair[]
}>()
</script>

<template>
  <section class="mastered-words" aria-labelledby="mastered-words-title">
    <h2 id="mastered-words-title">Добавлены в мой словарь</h2>
    <div class="mastered-word-list">
      <div v-for="word in words" :key="word.id">
        <strong>{{ word.english }}</strong>
        <span>{{ word.translation }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mastered-words { display: grid; gap: 0.65rem; }
.mastered-words h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-display); font-size: 1rem; font-weight: 600; }
.mastered-word-list { display: grid; border-top: 1px solid rgb(231 211 161 / 9%); }
.mastered-word-list > div { display: grid; min-height: 2.65rem; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: center; border-bottom: 1px solid rgb(231 211 161 / 9%); }
.mastered-word-list strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.82rem; }
.mastered-word-list span { color: rgb(231 211 161 / 58%); font-size: 0.72rem; }
</style>
