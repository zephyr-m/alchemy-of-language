<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen, Sparkles } from '@lucide/vue'
import { Card, CardContent } from '@/components/ui/card'

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

function minuteWord(value: number) {
  const mod10 = value % 10
  const mod100 = value % 100
  if (mod10 === 1 && mod100 !== 11) return 'минута'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'минуты'
  return 'минут'
}

const hint = computed(() => {
  if (progress.value >= 100) return 'Дневная цель выполнена'
  const left = Math.max(props.goalMinutes - props.minutes, 0)
  const verb = left % 10 === 1 && left % 100 !== 11 ? 'Осталась' : 'Осталось'
  return `${verb} ${left} ${minuteWord(left)}`
})
</script>

<template>
  <Card class="elixir-card">
    <CardContent class="elixir-content">
      <div class="elixir-main">
        <div class="bottle" :aria-label="`Дневная цель выполнена на ${progress} процентов`">
          <div class="bottle-neck" />
          <div class="bottle-body">
            <div class="liquid" :style="{ height: `${progress}%` }"><span /><span /><span /></div>
          </div>
        </div>

        <div class="progress-copy">
          <p class="eyebrow">Сегодня</p>
          <strong>{{ minutes }}<small> / {{ goalMinutes }} мин</small></strong>
          <div class="progress-track"><span :style="{ width: `${progress}%` }" /></div>
          <p>{{ hint }}</p>
        </div>
      </div>

      <div class="daily-progress-stats">
        <div><BookOpen /><span>Освоено</span><strong>{{ masteredWords }}</strong></div>
        <div><Sparkles /><span>Опыт</span><strong>+{{ earnedXp }}</strong></div>
      </div>
    </CardContent>
  </Card>
</template>
