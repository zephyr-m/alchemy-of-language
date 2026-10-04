<script setup lang="ts">
import type { WordPair } from '@/entities/word'
import { ArrowRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'

defineProps<{
  word: WordPair
}>()

defineEmits<{
  advance: [wordId: string]
}>()
</script>

<template>
  <div class="word-pair introduction-word-row">
    <div class="introduction-word-copy">
      <strong class="learning-text">{{ word.english }}</strong>
      <em v-if="word.transcription" class="learning-text">{{ word.transcription }}</em>
    </div>
    <span class="learning-text">{{ word.translation }}</span>
    <Button
      variant="outline"
      size="icon"
      class="alchemy-button alchemy-button-outline introduction-word-action"
      :aria-label="`Отправить ${word.english} на следующий этап`"
      @click="$emit('advance', word.id)"
    >
      <ArrowRight />
    </Button>
  </div>
</template>
