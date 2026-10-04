<script setup lang="ts">
import type { AnswerState, ChoiceOption } from '../model/types'
import { Check, X } from '@lucide/vue'

withDefaults(defineProps<{
  option: ChoiceOption
  state?: AnswerState
  disabled?: boolean
}>(), {
  state: 'idle',
})

defineEmits<{
  select: [optionId: string]
}>()
</script>

<template>
  <button
    type="button"
    class="answer-option"
    :class="{ selected: state === 'correct', rejected: state === 'wrong' }"
    :aria-pressed="state !== 'idle'"
    :disabled="disabled"
    @click="$emit('select', option.id)"
  >
    <span class="answer-option-marker">
      <Check v-if="state === 'correct'" />
      <X v-else-if="state === 'wrong'" />
      <template v-else>{{ option.label }}</template>
    </span>
    <span class="answer-option-text learning-text">{{ option.text }}</span>
  </button>
</template>

<style scoped>
.answer-option:disabled { cursor: default; }
.answer-option-marker svg { width: 1rem; }
</style>
