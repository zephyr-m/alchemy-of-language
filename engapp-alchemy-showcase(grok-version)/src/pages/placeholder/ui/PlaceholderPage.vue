<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Card, CardContent } from '@/components/ui/card'

const route = useRoute()
const title = computed(() => String(route.meta.title ?? 'EngApp'))
</script>

<template>
  <section class="route-placeholder">
    <p class="eyebrow">Скоро</p>
    <h1>{{ title }}</h1>
    <Card class="route-placeholder-card">
      <CardContent>
        Этот экран ещё собирается. Путь слова уже виден на главной.
      </CardContent>
    </Card>
  </section>
</template>
