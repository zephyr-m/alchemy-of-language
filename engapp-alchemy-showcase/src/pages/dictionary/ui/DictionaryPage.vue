<script setup lang="ts">
import type { AlphabeticalSection } from '@/widgets/alphabetical-word-list'
import { BookOpen } from '@lucide/vue'
import { computed, onMounted, ref } from 'vue'
import { Badge } from '@/components/ui/badge'
import { WordSearch } from '@/features/search-dictionary'
import { wordLearningService } from '@/features/word-learning'
import { AlphabeticalWordList } from '@/widgets/alphabetical-word-list'
import { DictionaryProgress } from '@/widgets/dictionary-progress'

const masteredWords = ref<string[]>([])
const totalCatalogWords = ref(0)
const query = ref('')
const sections = computed<AlphabeticalSection[]>(() => {
  const normalizedQuery = query.value.trim().toLowerCase()
  const groups = new Map<string, string[]>()

  for (const word of masteredWords.value) {
    if (normalizedQuery && !word.includes(normalizedQuery)) continue
    const letter = word.charAt(0).toUpperCase()
    groups.set(letter, [...(groups.get(letter) ?? []), word])
  }

  return [...groups.entries()].map(([letter, words]) => ({ letter, words }))
})

onMounted(async () => {
  const dictionary = await wordLearningService.getDictionary()
  masteredWords.value = dictionary.words.map(word => word.english).sort()
  totalCatalogWords.value = dictionary.totalCatalogWords
})
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
      <Badge class="game-badge gem-badge">{{ masteredWords.length }} слов</Badge>
    </header>

    <DictionaryProgress :mastered="masteredWords.length" :total="totalCatalogWords" />

    <section class="dictionary-catalog" aria-labelledby="dictionary-catalog-title">
      <div class="dictionary-section-heading">
        <div>
          <p class="eyebrow">Освоенные формулы</p>
          <h2 id="dictionary-catalog-title">Слова по алфавиту</h2>
        </div>
      </div>

      <WordSearch v-model="query" />
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
.dictionary-section-heading h2 { margin: 0; color: var(--parchment-bright); font-family: var(--font-interface); font-weight: 500; }
.dictionary-header h1 { margin-top: 0.08rem; font-size: var(--type-title); line-height: 1; }
.dictionary-header .game-badge { flex: 0 0 auto; }
.dictionary-catalog { display: grid; gap: 0.9rem; }
.dictionary-section-heading h2 { margin-top: 0.18rem; font-size: var(--type-title); }

@media (max-width: 370px) {
  .dictionary-mark { width: 2.55rem; height: 2.55rem; }
  .dictionary-header .game-badge { padding-inline: 0.5rem; }
}
</style>
