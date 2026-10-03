<script setup lang="ts">
import type { AnswerState, ChoiceOption } from '../model/types'
import { Check, X } from '@lucide/vue'

withDefaults(defineProps<{
  option: ChoiceOption
  state?: AnswerState
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
    @click="$emit('select', option.id)"
  >
    <span>{{ option.label }}</span>
    {{ option.text }}
    <Check v-if="state === 'correct'" />
    <X v-else-if="state === 'wrong'" />
  </button>
</template>
