<script setup lang="ts">
import type { WordPair } from '@/entities/word'
import { Button } from '@/components/ui/button'
import { DailyGoalSummary } from '@/widgets/daily-goal-summary'
import { MasteredWordsList } from '@/widgets/mastered-words-list'
import { TrainingRewardSummary } from '@/widgets/training-reward-summary'

const masteredWords: WordPair[] = [
  { id: 'water', english: 'water', translation: 'вода' },
  { id: 'book', english: 'book', translation: 'книга' },
  { id: 'house', english: 'house', translation: 'дом' },
]
</script>

<template>
  <div class="training-results-page">
    <TrainingRewardSummary :minutes="8" :mastered-words="3" :earned-xp="60" />
    <DailyGoalSummary :minutes="12" :goal-minutes="15" />
    <MasteredWordsList :words="masteredWords" />

    <div class="training-results-actions">
      <Button as-child class="alchemy-button alchemy-button-primary">
        <RouterLink :to="{ name: 'training' }">Продолжить</RouterLink>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.training-results-page { display: grid; gap: 1.45rem; padding: 0.2rem 0 1rem; }
.training-results-actions { display: grid; gap: 0.85rem; }
.training-results-actions .alchemy-button { width: 100%; min-height: 3.1rem; text-decoration: none; }
</style>
