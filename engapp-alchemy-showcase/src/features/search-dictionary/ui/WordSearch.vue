<script setup lang="ts">
import { Search } from '@lucide/vue'
import { Input } from '@/components/ui/input'

const model = defineModel<string>({ default: '' })
</script>

<template>
  <label class="word-search">
    <Search aria-hidden="true" />
    <Input v-model="model" class="word-search-input" placeholder="Поиск слова…" aria-label="Поиск слова" />
  </label>
</template>

<style scoped>
.word-search { position: relative; display: block; }
.word-search > svg { position: absolute; z-index: 1; top: 50%; left: 0.9rem; width: 1rem; transform: translateY(-50%); color: rgb(231 211 161 / 42%); pointer-events: none; }
.word-search-input { height: 3.15rem; padding-left: 2.7rem; border-color: rgb(215 168 74 / 27%); color: var(--cream); background: rgb(12 9 9 / 28%); box-shadow: inset 0 2px 7px rgb(0 0 0 / 22%); }
</style>
