<script setup lang="ts">
import type { WordPair } from '@/entities/word'
import { Beaker } from '@lucide/vue'
import { Card, CardContent } from '@/components/ui/card'
import { IntroductionWordList } from '@/widgets/introduction-word-list'
import { TrainingHeader } from '@/widgets/training-header'

const words: WordPair[] = [
  { id: 'apple', english: 'apple', translation: 'яблоко', transcription: '/ˈæpəl/' },
  { id: 'book', english: 'book', translation: 'книга', transcription: '/bʊk/' },
  { id: 'house', english: 'house', translation: 'дом', transcription: '/haʊs/' },
  { id: 'sun', english: 'sun', translation: 'солнце', transcription: '/sʌn/' },
  { id: 'road', english: 'road', translation: 'дорога', transcription: '/rəʊd/' },
  { id: 'food', english: 'food', translation: 'еда', transcription: '/fuːd/' },
  { id: 'tree', english: 'tree', translation: 'дерево', transcription: '/triː/' },
  { id: 'day', english: 'day', translation: 'день', transcription: '/deɪ/' },
  { id: 'family', english: 'family', translation: 'семья', transcription: '/ˈfæməli/' },
]
</script>

<template>
  <div class="introduction-page">
    <TrainingHeader :stage="1" rune="Ⅰ" title="Знакомство" :word-count="words.length" />

    <Card class="question-card introduction-guide">
      <CardContent class="introduction-guide-content">
        <div class="introduction-guide-icon"><Beaker /></div>
        <div>
          <strong>Изучи новую формулу</strong>
          <p>Посмотри слово и перевод. Когда будешь готов, отправь слово на следующую стадию.</p>
        </div>
      </CardContent>
    </Card>

    <div class="introduction-columns" aria-hidden="true">
      <span>Английский</span>
      <span>Русский</span>
      <span />
    </div>

    <IntroductionWordList :words="words" />
  </div>
</template>

<style scoped>
.introduction-page { display: grid; gap: 1rem; padding: 0.2rem 0 1rem; }
.introduction-guide { gap: 0; padding-block: 0; }
.introduction-guide-content { display: grid; grid-template-columns: auto 1fr; gap: 0.8rem; align-items: center; padding: 0.85rem; }
.introduction-guide-icon { display: grid; width: 2.6rem; height: 2.6rem; place-items: center; border: 1px solid rgb(215 168 74 / 37%); border-radius: 50%; color: var(--brass-light); background: rgb(215 168 74 / 7%); }
.introduction-guide-icon svg { width: 1.15rem; }
.introduction-guide strong { color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.9rem; }
.introduction-guide p { margin: 0.2rem 0 0; color: rgb(231 211 161 / 52%); font-size: 0.66rem; line-height: 1.5; }
.introduction-columns { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr) 2.55rem; gap: 0.65rem; padding-inline: 0.9rem; color: rgb(231 211 161 / 42%); font-size: 0.58rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }

@media (max-width: 370px) {
  .introduction-guide-content { align-items: start; }
}
</style>
