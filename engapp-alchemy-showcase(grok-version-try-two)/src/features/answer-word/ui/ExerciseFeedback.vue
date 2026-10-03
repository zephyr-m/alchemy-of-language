<script setup lang="ts">
import type { AnswerState } from '../model/types'
import { BadgeCheck, CircleAlert } from '@lucide/vue'
import { CardFooter } from '@/components/ui/card'

defineProps<{
  state: AnswerState
  title: string
  message: string
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
  </CardFooter>
</template>
