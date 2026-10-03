<script setup lang="ts">
import type { AlphabeticalSection as AlphabeticalSectionData } from '../model/types'
import AlphabetSection from './AlphabetSection.vue'

defineProps<{
  sections: AlphabeticalSectionData[]
}>()
</script>

<template>
  <div class="alphabetical-word-list">
    <AlphabetSection v-for="section in sections" :key="section.letter" :section="section" />
  </div>
</template>

<style scoped>
.alphabetical-word-list { display: grid; gap: 1rem; }
</style>
