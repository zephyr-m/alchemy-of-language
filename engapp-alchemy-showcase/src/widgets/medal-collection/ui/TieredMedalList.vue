<script setup lang="ts">
import type { TieredMedal } from '@/entities/achievement'
import TieredMedalRow from './TieredMedalRow.vue'

defineProps<{
  medals: TieredMedal[]
}>()
</script>

<template>
  <section class="tiered-medal-list" aria-labelledby="learning-medals-title">
    <h2 id="learning-medals-title">Обучение</h2>
    <div>
      <TieredMedalRow v-for="medal in medals" :key="medal.id" :medal="medal" />
    </div>
  </section>
</template>

<style scoped>
.tiered-medal-list { display: grid; gap: 0.2rem; }
.tiered-medal-list h2 { margin: 0; color: var(--brass-light); font-family: var(--font-display); font-size: 0.7rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; }
</style>
