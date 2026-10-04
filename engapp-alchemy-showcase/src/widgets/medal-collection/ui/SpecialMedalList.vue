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
.special-medal-list { display: grid; gap: 0.55rem; }
.special-medal-list > div { overflow: hidden; border: 1px solid rgb(215 168 74 / 24%); border-radius: 0.9rem; background: linear-gradient(165deg, rgb(73 49 38 / 72%), rgb(31 21 19 / 88%)); box-shadow: inset 0 1px rgb(255 236 190 / 9%), 0 10px 22px rgb(0 0 0 / 14%); }
.special-medal-list h2 { margin: 0; color: var(--brass-light); font-family: var(--font-interface); font-size: var(--type-body); font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
</style>
