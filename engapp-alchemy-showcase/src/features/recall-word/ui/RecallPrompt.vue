<script setup lang="ts">
defineProps<{
  instruction?: string
  word: string
}>()
</script>

<template>
  <div class="recall-prompt">
    <h2 v-if="instruction">{{ instruction }}</h2>
    <strong class="learning-text">{{ word }}</strong>
  </div>
</template>

<style scoped>
.recall-prompt { display: grid; gap: 1.2rem; }
.recall-prompt h2 { max-width: 18rem; margin: 0; color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); font-weight: 600; line-height: 1.3; }
.recall-prompt strong { color: #9be0b8; font-weight: 600; text-align: center; text-shadow: 0 0 20px rgb(87 181 134 / 18%); }
</style>
