<script setup lang="ts">
import type { LearningStageSummary } from '@/entities/learning-stage'
import { ChevronRight } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

defineProps<{
  stages: LearningStageSummary[]
}>()
</script>

<template>
  <div class="stage-list">
    <RouterLink
      v-for="stage in stages"
      :key="stage.id"
      :to="{ name: 'stage', params: { stage: stage.id } }"
      class="stage-link"
    >
      <Card class="stage-card">
        <CardContent class="stage-card-content">
          <div class="stage-rune">{{ stage.rune }}</div>
          <div class="stage-copy">
            <strong>{{ stage.title }}</strong>
            <span class="learning-text">{{ stage.examples.join(' · ') }}</span>
          </div>
          <Badge variant="outline" class="count-badge">{{ stage.count }}</Badge>
          <ChevronRight class="stage-arrow" />
        </CardContent>
      </Card>
    </RouterLink>
  </div>
</template>
