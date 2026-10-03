<script setup lang="ts">
import type { WordPair } from '@/entities/word'
import { IntroductionWordList } from '@/widgets/introduction-word-list'
import { TrainingHeader } from '@/widgets/training-header'

const words: WordPair[] = [
  { id: 'apple', english: 'apple', translation: 'яблоко', transcription: '/ˈæpəl/' },
  { id: 'book', english: 'book', translation: 'книга', transcription: '/bʊk/' },
  { id: 'house', english: 'house', translation: 'дом', transcription: '/haʊs/' },
]
</script>

<template>
  <div class="showcase-grid cards-grid">
    <section class="specimen-section">
      <div class="section-heading">
        <span>07</span>
        <div><h2>Заголовок тренировки</h2><p>Этап, возврат и количество слов</p></div>
      </div>
      <TrainingHeader :stage="1" rune="Ⅰ" title="Знакомство" :word-count="9" />
    </section>

    <section class="specimen-section">
      <div class="section-heading">
        <span>08</span>
        <div><h2>Знакомство со словами</h2><p>Пара и переход на следующую стадию</p></div>
      </div>
      <IntroductionWordList :words="words" />
    </section>
  </div>
</template>
