<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { FullPassProgress } from '@/entities/word'
import RecallPrompt from './RecallPrompt.vue'
import VoiceAnswerAction from './VoiceAnswerAction.vue'
import WordMasteredPanel from './WordMasteredPanel.vue'
import WrittenAnswerForm from './WrittenAnswerForm.vue'

withDefaults(defineProps<{
  instruction: string
  word: string
  answer: string
  completedPasses: number
  totalPasses?: number
  state?: 'question' | 'mastered'
}>(), {
  state: 'question',
})

defineEmits<{
  submit: [answer: string]
  record: []
  next: []
}>()
</script>

<template>
  <Card class="question-card recall-exercise">
    <CardHeader>
      <RecallPrompt :instruction="state === 'question' ? instruction : undefined" :word="word" />
    </CardHeader>

    <CardContent v-if="state === 'question'" class="recall-actions">
      <WrittenAnswerForm @submit="$emit('submit', $event)" />
      <VoiceAnswerAction @record="$emit('record')" />
    </CardContent>

    <CardContent v-else>
      <WordMasteredPanel :word="answer" @next="$emit('next')" />
    </CardContent>

    <CardFooter v-if="state === 'question'" class="recall-progress-footer">
      <FullPassProgress :completed="completedPasses" :total="totalPasses ?? 3" />
    </CardFooter>
  </Card>
</template>

<style scoped>
.recall-actions { display: grid; gap: 1rem; }
.recall-progress-footer { padding-top: 0.95rem; border-top: 1px solid rgb(215 168 74 / 12%); }
</style>
