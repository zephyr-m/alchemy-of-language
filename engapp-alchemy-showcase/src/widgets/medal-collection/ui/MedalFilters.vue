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
.medal-filters { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.35rem; padding: 0.3rem; border: 1px solid rgb(215 168 74 / 18%); border-radius: 0.8rem; background: rgb(12 9 9 / 20%); }
.medal-filters button { min-width: 0; padding-inline: 0.35rem; color: rgb(231 211 161 / 48%); font-size: 0.66rem; }
.medal-filters button.active { color: #10281d; background: linear-gradient(#7acb9d, #4aa676); box-shadow: inset 0 1px rgb(255 255 255 / 22%); }

@media (max-width: 370px) {
  .medal-filters button { font-size: 0.58rem; }
}
</style>
