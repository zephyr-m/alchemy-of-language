<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const model = defineModel<string>({ default: '' })
const form = ref<HTMLFormElement>()

defineEmits<{
  submit: [answer: string]
}>()

onMounted(async () => {
  await nextTick()
  form.value?.querySelector<HTMLInputElement>('input')?.focus()
})
</script>

<template>
  <form ref="form" class="written-answer-form" @submit.prevent="$emit('submit', model)">
    <Input v-model="model" class="written-answer-input learning-text" placeholder="Введи слово…" aria-label="Ответ на английском" />
    <Button type="submit" class="alchemy-button alchemy-button-primary">Ответить</Button>
  </form>
</template>

<style scoped>
.written-answer-form { display: grid; gap: 0.85rem; }
.written-answer-input { height: 3.35rem; border-color: rgb(87 181 134 / 48%); color: var(--cream); background: rgb(12 9 9 / 48%); box-shadow: inset 0 3px 9px rgb(0 0 0 / 32%), 0 0 18px rgb(87 181 134 / 9%); }
.written-answer-input::placeholder { font-family: var(--font-interface); font-size: var(--type-body); }
.written-answer-form .alchemy-button { width: 100%; }
</style>
