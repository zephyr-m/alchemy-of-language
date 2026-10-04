<script setup lang="ts">
import { Search } from '@lucide/vue'
import { Input } from '@/components/ui/input'

const model = defineModel<string>({ default: '' })
</script>

<template>
  <label class="word-search">
    <Search aria-hidden="true" />
    <Input v-model="model" class="word-search-input learning-text" placeholder="Поиск слова…" aria-label="Поиск слова" />
  </label>
</template>

<style scoped>
.word-search { position: relative; display: block; }
.word-search > svg { position: absolute; z-index: 1; top: 50%; left: 1rem; width: 1.05rem; transform: translateY(-50%); color: var(--brass-light); pointer-events: none; }
.word-search-input { height: 3.35rem; padding-left: 2.8rem; border-color: rgb(215 168 74 / 38%); color: var(--cream); background: linear-gradient(180deg, rgb(63 43 34 / 82%), rgb(27 19 18 / 92%)); box-shadow: inset 0 2px 8px rgb(0 0 0 / 30%), 0 5px 14px rgb(0 0 0 / 12%); }
.word-search-input::placeholder { font-family: var(--font-interface); font-size: var(--type-body); }
</style>
