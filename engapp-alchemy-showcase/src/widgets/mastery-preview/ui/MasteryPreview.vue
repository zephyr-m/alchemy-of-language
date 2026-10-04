<script setup lang="ts">
interface MasteryItem {
  word: string
  completed: number
  total: number
}

defineProps<{
  items: MasteryItem[]
}>()
</script>

<template>
  <div class="mastery-list">
    <div v-for="item in items" :key="item.word">
      <span class="learning-text">{{ item.word }}</span>
      <div class="mastery-pips" :aria-label="`${item.completed} из ${item.total} прохождений`">
        <i
          v-for="step in item.total"
          :key="step"
          :class="{ empty: step > item.completed }"
        />
      </div>
      <strong>{{ item.completed }}/{{ item.total }}</strong>
    </div>
  </div>
</template>
