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
.tiered-medal-list { display: grid; gap: 0.55rem; }
.tiered-medal-list > div { overflow: hidden; border: 1px solid rgb(215 168 74 / 24%); border-radius: 0.9rem; background: linear-gradient(165deg, rgb(73 49 38 / 72%), rgb(31 21 19 / 88%)); box-shadow: inset 0 1px rgb(255 236 190 / 9%), 0 10px 22px rgb(0 0 0 / 14%); }
.tiered-medal-list h2 { margin: 0; color: var(--brass-light); font-family: var(--font-interface); font-size: var(--type-body); font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
</style>
