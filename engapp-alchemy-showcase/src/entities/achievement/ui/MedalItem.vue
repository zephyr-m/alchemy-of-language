<script setup lang="ts">
import type { SpecialMedal } from '../model/types'

defineProps<{
  medal: SpecialMedal
}>()
</script>

<template>
  <div class="medal-item" :class="{ earned: medal.earned }">
    <span aria-hidden="true">{{ medal.earned ? '✓' : '◇' }}</span>
    <div>
      <strong>{{ medal.title }}</strong>
      <p>{{ medal.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.medal-item { display: grid; grid-template-columns: auto 1fr; gap: 0.85rem; align-items: center; padding: 0.9rem 1rem; border-bottom: 1px solid rgb(243 228 188 / 11%); }
.medal-item > span { display: grid; width: 2.6rem; height: 2.6rem; place-items: center; border: 1px solid rgb(231 211 161 / 22%); border-radius: 50%; color: rgb(243 228 188 / 55%); background: linear-gradient(165deg, #3a2c28, #221816); font-size: var(--type-body); box-shadow: inset 0 2px 6px rgb(0 0 0 / 40%), 0 3px 0 #1a100e; }
.medal-item.earned > span { border-color: #f2cb73; color: #fff1cf; background: radial-gradient(circle at 40% 28%, #e0b25a, #8a5a24 58%, #3a2416); box-shadow: inset 0 1px rgb(255 244 210 / 50%), 0 3px 0 #3a2616, 0 0 18px rgb(215 168 74 / 20%); }
.medal-item div { display: grid; gap: 0.18rem; }
.medal-item strong { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); }
.medal-item p { margin: 0; color: rgb(243 228 188 / 74%); font-size: var(--type-body); line-height: 1.45; }
</style>
