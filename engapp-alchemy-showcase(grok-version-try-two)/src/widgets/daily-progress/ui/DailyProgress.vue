<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen, Clock3, Droplets, Sparkles } from '@lucide/vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const props = defineProps<{
  minutes: number
  goalMinutes: number
  masteredWords: number
  earnedXp: number
}>()

const progress = computed(() => {
  if (props.goalMinutes <= 0) return 0
  return Math.min(100, Math.round((props.minutes / props.goalMinutes) * 100))
})

const description = computed(() => progress.value >= 100 ? 'Дневная цель готова' : 'Дневная цель почти готова')
const hint = computed(() => progress.value >= 100 ? 'Эликсир завершён' : 'Ещё немного — и цель выполнена')
</script>

<template>
  <Card class="elixir-card">
    <CardHeader class="elixir-card-header">
      <div>
        <CardTitle>Сегодняшний эликсир</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </div>
      <Clock3 />
    </CardHeader>

    <CardContent class="elixir-content">
      <div class="elixir-main">
        <div class="bottle" :aria-label="`Дневная цель выполнена на ${progress} процентов`">
          <div class="bottle-neck" />
          <div class="bottle-body">
            <div class="liquid" :style="{ height: `${progress}%` }"><span /><span /><span /></div>
          </div>
        </div>

        <div class="progress-copy">
          <strong>{{ minutes }} <small>/ {{ goalMinutes }} минут</small></strong>
          <div class="progress-track"><span :style="{ width: `${progress}%` }" /></div>
          <p><Droplets /> {{ hint }}</p>
        </div>
      </div>

      <div class="daily-progress-stats">
        <div><BookOpen /><span>Освоено</span><strong>{{ masteredWords }}</strong></div>
        <div><Sparkles /><span>Опыт</span><strong>+{{ earnedXp }} XP</strong></div>
      </div>
    </CardContent>
  </Card>
</template>
