<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const model = defineModel<string>({ default: '' })

defineEmits<{
  submit: [answer: string]
}>()
</script>

<template>
  <form class="written-answer-form" @submit.prevent="$emit('submit', model)">
    <Input v-model="model" class="written-answer-input" placeholder="Введи слово…" aria-label="Ответ на английском" />
    <Button type="submit" class="alchemy-button alchemy-button-primary">Ответить</Button>
  </form>
</template>

<style scoped>
.written-answer-form { display: grid; gap: 0.85rem; }
.written-answer-input { height: 3.2rem; border-color: rgb(87 181 134 / 42%); color: var(--cream); background: rgb(12 9 9 / 38%); font-family: var(--font-display); font-size: 1rem; box-shadow: inset 0 3px 9px rgb(0 0 0 / 28%), 0 0 16px rgb(87 181 134 / 7%); }
.written-answer-form .alchemy-button { width: 100%; }
</style>
