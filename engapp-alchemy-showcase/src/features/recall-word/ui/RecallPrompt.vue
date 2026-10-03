<script setup lang="ts">
defineProps<{
  instruction?: string
  word: string
}>()
</script>

<template>
  <div class="recall-prompt">
    <h2 v-if="instruction">{{ instruction }}</h2>
    <strong>{{ word }}</strong>
  </div>
</template>

<style scoped>
.recall-prompt { display: grid; gap: 1.2rem; }
.recall-prompt h2 { max-width: 18rem; margin: 0; color: var(--parchment-bright); font-family: var(--font-display); font-size: clamp(1.15rem, 5vw, 1.45rem); font-weight: 600; line-height: 1.3; }
.recall-prompt strong { color: #82d4aa; font-family: var(--font-display); font-size: clamp(1.8rem, 7vw, 2.35rem); font-weight: 600; text-align: center; }
</style>
