<script setup lang="ts">
import type { LearningStageSummary } from '@/entities/learning-stage'
import { ChevronRight } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const props = defineProps<{
  stages: LearningStageSummary[]
  lead?: boolean
}>()
</script>

<template>
  <div class="stage-list" :class="{ 'stage-list-lead': lead }">
    <RouterLink
      v-for="(stage, index) in stages"
      :key="stage.id"
      :to="{ name: 'stage', params: { stage: stage.id } }"
      class="stage-link"
    >
      <Card class="stage-card" :class="{ 'stage-card-lead': props.lead && index === 0 }">
        <CardContent class="stage-card-content">
          <div class="stage-rune">{{ stage.rune }}</div>
          <div class="stage-copy">
            <em v-if="props.lead && index === 0" class="stage-now">Сейчас</em>
            <strong>{{ stage.title }}</strong>
            <span>{{ stage.examples.join(' · ') }}</span>
          </div>
          <Badge variant="outline" class="count-badge">{{ stage.count }}</Badge>
          <ChevronRight class="stage-arrow" />
        </CardContent>
      </Card>
    </RouterLink>
  </div>
</template>
