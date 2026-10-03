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
        <div v-for="word in section.words" :key="word" class="dictionary-word-row">
          <span>{{ word }}</span>
        </div>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
.alphabet-section { display: grid; gap: 0.45rem; }
.alphabet-section h2 { margin: 0; color: var(--brass-light); font-family: var(--font-display); font-size: 1rem; font-weight: 600; }
.dictionary-word-group { gap: 0; padding-block: 0; }
.dictionary-word-group-content { padding: 0; }
.dictionary-word-row { min-height: 3.15rem; padding: 0.85rem 1rem; border-bottom: 1px solid rgb(231 211 161 / 9%); color: var(--parchment-bright); font-family: var(--font-display); font-size: 0.95rem; }
.dictionary-word-row:last-child { border-bottom: 0; }
</style>
