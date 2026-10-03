<script setup lang="ts">
import type { AlphabeticalSection } from '@/widgets/alphabetical-word-list'
import { BookOpen } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { WordSearch } from '@/features/search-dictionary'
import { AlphabeticalWordList } from '@/widgets/alphabetical-word-list'
import { DictionaryProgress } from '@/widgets/dictionary-progress'

const sections: AlphabeticalSection[] = [
  { letter: 'A', words: ['answer', 'apple'] },
  { letter: 'B', words: ['book'] },
  { letter: 'F', words: ['family', 'food'] },
  { letter: 'H', words: ['house'] },
  { letter: 'R', words: ['road'] },
  { letter: 'S', words: ['sun'] },
  { letter: 'T', words: ['tree'] },
]
</script>

<template>
  <div class="dictionary-page">
    <header class="dictionary-header">
      <div class="dictionary-brand">
        <div class="brand-mark dictionary-mark" aria-hidden="true">
          <BookOpen :size="21" :stroke-width="1.8" />
        </div>
        <div>
          <p class="eyebrow">Книга знаний</p>
          <h1>Мой словарь</h1>
        </div>
      </div>
      <Badge class="game-badge gem-badge">124 слова</Badge>
    </header>

    <DictionaryProgress :mastered="124" :total="5000" />

    <section class="dictionary-catalog" aria-labelledby="dictionary-catalog-title">
      <div class="dictionary-section-heading">
        <div>
          <p class="eyebrow">Освоенные формулы</p>
          <h2 id="dictionary-catalog-title">Слова по алфавиту</h2>
        </div>
      </div>

      <WordSearch />
      <AlphabeticalWordList :sections="sections" />
    </section>
  </div>
</template>

<style scoped>
.dictionary-page { display: grid; gap: 1.35rem; padding: 0.25rem 0 1rem; }
.dictionary-header,
.dictionary-brand { display: flex; align-items: center; }
.dictionary-header { justify-content: space-between; gap: 0.75rem; }
.dictionary-brand { min-width: 0; gap: 0.75rem; }
.dictionary-mark { width: 2.85rem; height: 2.85rem; flex: 0 0 auto; }
.dictionary-header h1,
.dictionary-section-heading h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-display); font-weight: 500; }
.dictionary-header h1 { margin-top: 0.08rem; font-size: 1.75rem; line-height: 1; }
.dictionary-header .game-badge { flex: 0 0 auto; }
.dictionary-catalog { display: grid; gap: 0.9rem; }
.dictionary-section-heading h2 { margin-top: 0.18rem; font-size: 1.28rem; }

@media (max-width: 370px) {
  .dictionary-header h1 { font-size: 1.5rem; }
  .dictionary-mark { width: 2.55rem; height: 2.55rem; }
  .dictionary-header .game-badge { padding-inline: 0.5rem; }
}
</style>
