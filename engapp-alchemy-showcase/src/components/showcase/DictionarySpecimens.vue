<script setup lang="ts">
import type { AlphabeticalSection } from '@/widgets/alphabetical-word-list'
import { WordSearch } from '@/features/search-dictionary'
import { AlphabeticalWordList } from '@/widgets/alphabetical-word-list'
import { DictionaryProgress } from '@/widgets/dictionary-progress'

const sections: AlphabeticalSection[] = [
  { letter: 'A', words: ['answer', 'apple'] },
  { letter: 'B', words: ['book'] },
  { letter: 'H', words: ['house'] },
]
</script>

<template>
  <div class="showcase-grid cards-grid">
    <section class="specimen-section">
      <div class="section-heading">
        <span>15</span>
        <div><h2>Книга знаний</h2><p>Прогресс и поиск освоенных слов</p></div>
      </div>
      <div class="dictionary-controls-specimen">
        <DictionaryProgress :mastered="124" :total="5000" />
        <WordSearch />
      </div>
    </section>

    <section class="specimen-section">
      <div class="section-heading">
        <span>16</span>
        <div><h2>Словарь</h2><p>Алфавитный список без переводов</p></div>
      </div>
      <AlphabeticalWordList :sections="sections" />
    </section>
  </div>
</template>

<style scoped>
.dictionary-controls-specimen { display: grid; gap: 1rem; }
</style>
