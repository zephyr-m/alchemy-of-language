<script setup lang="ts">
import type { WordPair } from '@/entities/word'
import IntroductionWordRow from './IntroductionWordRow.vue'

defineProps<{
  words: WordPair[]
}>()
</script>

<template>
  <div class="introduction-word-list">
    <IntroductionWordRow v-for="word in words" :key="word.id" :word="word" />
  </div>
</template>
