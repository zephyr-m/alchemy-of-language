<script setup lang="ts">
import { BookOpen, FlaskConical, House } from '@lucide/vue'

defineProps<{
  preview?: boolean
}>()

const items = [
  { label: 'Главная', name: 'home', icon: House },
  { label: 'Тренировка', name: 'training', icon: FlaskConical },
  { label: 'Словарь', name: 'dictionary', icon: BookOpen },
]
</script>

<template>
  <nav
    class="nav-specimen app-bottom-nav"
    :class="{ 'bottom-navigation-preview': preview }"
    aria-label="Основная навигация"
  >
    <RouterLink
      v-for="(item, index) in items"
      :key="item.name"
      :to="{ name: item.name }"
      :class="{ active: preview && index === 0 }"
      exact-active-class="active"
    >
      <component :is="item.icon" :size="20" :stroke-width="1.8" />
      <span>{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>
