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
        <strong class="learning-text">{{ word.english }}</strong>
        <span class="learning-text">{{ word.translation }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mastered-words { display: grid; gap: 0.65rem; }
.mastered-words h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); font-weight: 600; }
.mastered-word-list { display: grid; overflow: hidden; border: 1px solid #c6a56e; border-left: 3px solid #9a4034; border-radius: 0.35rem 0.8rem 0.5rem 0.6rem; background: linear-gradient(180deg, #f7e7c2, #e8d1a4); box-shadow: inset 0 0 20px rgb(120 72 30 / 10%), 0 8px 16px rgb(0 0 0 / 14%); }
.mastered-word-list > div { display: grid; min-height: 4rem; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: center; padding-inline: 1rem; border-bottom: 1px solid rgb(110 68 36 / 18%); }
.mastered-word-list strong { color: #2a1812; }
.mastered-word-list span { color: #6a4030; }
</style>
