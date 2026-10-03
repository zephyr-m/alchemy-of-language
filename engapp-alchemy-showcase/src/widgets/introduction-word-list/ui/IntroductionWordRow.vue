<script setup lang="ts">
import type { WordPair } from '@/entities/word'
import { ArrowRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'

defineProps<{
  word: WordPair
}>()
</script>

<template>
  <div class="word-pair introduction-word-row">
    <div class="introduction-word-copy">
      <strong>{{ word.english }}</strong>
      <em v-if="word.transcription">{{ word.transcription }}</em>
    </div>
    <span>{{ word.translation }}</span>
    <Button
      variant="outline"
      size="icon"
      class="alchemy-button alchemy-button-outline introduction-word-action"
      :aria-label="`Отправить ${word.english} на следующий этап`"
    >
      <ArrowRight />
    </Button>
  </div>
</template>
