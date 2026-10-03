<script setup lang="ts">
import { BookOpen, FlaskConical, House } from '@lucide/vue'
import { useRoute } from 'vue-router'

defineProps<{
  preview?: boolean
}>()

const route = useRoute()

const items = [
  { label: 'Главная', name: 'home', icon: House, isActive: (path: string) => path === '/' },
  { label: 'Тренировка', name: 'training', icon: FlaskConical, isActive: (path: string) => path.startsWith('/training') || path.startsWith('/stages') },
  { label: 'Словарь', name: 'dictionary', icon: BookOpen, isActive: (path: string) => path.startsWith('/dictionary') },
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
      :class="{ active: preview ? index === 0 : item.isActive(route.path) }"
    >
      <component :is="item.icon" :size="20" :stroke-width="1.8" />
      <span>{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>
