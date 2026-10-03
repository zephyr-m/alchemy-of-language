<script setup lang="ts">
import type { AnswerState } from '../model/types'
import { ArrowRight, BadgeCheck, CircleAlert } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'

defineProps<{
  state: AnswerState
  title: string
  message: string
  actionLabel?: string
}>()

defineEmits<{
  action: []
}>()
</script>

<template>
  <CardFooter class="feedback" :class="state">
    <BadgeCheck v-if="state === 'correct'" />
    <CircleAlert v-else />
    <div>
      <strong>{{ title }}</strong>
      <span>{{ message }}</span>
    </div>
    <Button
      v-if="actionLabel"
      type="button"
      variant="ghost"
      class="feedback-action"
      @click="$emit('action')"
    >
      {{ actionLabel }} <ArrowRight />
    </Button>
  </CardFooter>
</template>

<style scoped>
.feedback { display: grid; grid-template-columns: auto 1fr; }
.feedback-action { grid-column: 1 / -1; justify-self: center; color: var(--brass-light); }
</style>
