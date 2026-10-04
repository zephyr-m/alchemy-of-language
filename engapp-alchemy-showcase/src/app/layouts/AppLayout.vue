<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { BackButton } from '@/features/navigate-back'
import { BottomNavigation } from '@/widgets/bottom-navigation'

const route = useRoute()
const showNavigation = computed(() => !route.meta.hideNavigation)
const showBackButton = computed(() => route.name !== 'home')
</script>

<template>
  <div class="showcase-board app-shell" :class="{ 'app-shell-with-navigation': showNavigation }">
    <div class="ambient ambient-left" />
    <div class="ambient ambient-right" />

    <main class="app-content">
      <BackButton v-if="showBackButton" class="app-route-back" />
      <RouterView />
    </main>

    <BottomNavigation v-if="showNavigation" />
  </div>
</template>
