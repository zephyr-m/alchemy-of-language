<script setup lang="ts">
import type { SpecialMedal } from '@/entities/achievement'
import { MedalItem } from '@/entities/achievement'

defineProps<{
  medals: SpecialMedal[]
}>()
</script>

<template>
  <section class="special-medal-list" aria-labelledby="special-medals-title">
    <h2 id="special-medals-title">Особые медали</h2>
    <div>
      <MedalItem v-for="medal in medals" :key="medal.id" :medal="medal" />
    </div>
  </section>
</template>

<style scoped>
.special-medal-list { display: grid; gap: 0.2rem; }
.special-medal-list h2 { margin: 0; color: var(--brass-light); font-family: var(--font-display); font-size: 0.7rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; }
</style>
