<script setup lang="ts">
import type { MedalFilter } from '@/entities/achievement'
import { Button } from '@/components/ui/button'

withDefaults(defineProps<{
  active?: MedalFilter
}>(), {
  active: 'all',
})

const filters: { id: MedalFilter, label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'earned', label: 'Полученные' },
  { id: 'locked', label: 'Не полученные' },
]
</script>

<template>
  <div class="medal-filters" aria-label="Фильтры медалей">
    <Button
      v-for="filter in filters"
      :key="filter.id"
      type="button"
      variant="ghost"
      :class="{ active: active === filter.id }"
    >
      {{ filter.label }}
    </Button>
  </div>
</template>

<style scoped>
.medal-filters { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.35rem; padding: 0.35rem; border: 1px solid rgb(215 168 74 / 24%); border-radius: 0.85rem; background: rgb(12 9 9 / 32%); box-shadow: inset 0 2px 8px rgb(0 0 0 / 24%); }
.medal-filters button { min-width: 0; min-height: 2.65rem; padding-inline: 0.35rem; color: rgb(243 228 188 / 70%); }
.medal-filters button.active { color: #10281d; background: linear-gradient(#86d6aa, #4aa676); box-shadow: inset 0 1px rgb(255 255 255 / 28%), 0 3px 0 #225e46; }

</style>
