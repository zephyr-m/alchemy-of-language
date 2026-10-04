<script setup lang="ts">
import type { AlphabeticalSection } from '../model/types'
import { Card, CardContent } from '@/components/ui/card'

defineProps<{
  section: AlphabeticalSection
}>()
</script>

<template>
  <section class="alphabet-section" :aria-labelledby="`letter-${section.letter}`">
    <h2 :id="`letter-${section.letter}`">{{ section.letter }}</h2>
    <Card class="stage-card dictionary-word-group">
      <CardContent class="dictionary-word-group-content">
        <div v-for="word in section.words" :key="word" class="dictionary-word-row learning-text">
          <span>{{ word }}</span>
        </div>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
.alphabet-section { display: grid; gap: 0.5rem; }
.alphabet-section h2 { margin: 0; color: var(--brass-light); font-family: var(--font-interface); font-size: var(--type-title); font-weight: 600; }
.dictionary-word-group { gap: 0; padding-block: 0; overflow: hidden; border-color: #c6a56e; border-left: 3px solid #9a4034; border-radius: 0.35rem 0.8rem 0.5rem 0.6rem; background: linear-gradient(180deg, #f7e7c2, #e8d1a4); box-shadow: inset 0 0 20px rgb(120 72 30 / 10%), 0 8px 16px rgb(0 0 0 / 14%); }
.dictionary-word-group-content { padding: 0; }
.dictionary-word-row { min-height: 4rem; padding: 0.95rem 1rem; border-bottom: 1px solid rgb(110 68 36 / 18%); color: #2a1812; }
.dictionary-word-row:last-child { border-bottom: 0; }
</style>
