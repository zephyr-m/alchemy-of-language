<script setup lang="ts">
import type { LearningStageId } from '@/entities/learning-stage'
import { computed } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import StarCelebration from './StarCelebration.vue'
import StageTransitionStats from './StageTransitionStats.vue'

const props = defineProps<{
  currentStage: LearningStageId
  advanced: number
  advancedStage: number
  returned: number
  returnedStage: number
}>()

const stageRoutes: Record<LearningStageId, string> = {
  1: 'introduction',
  2: 'translation-choice',
  3: 'reverse-choice',
  4: 'recall',
}

const open = defineModel<boolean>('open', { default: false })
const router = useRouter()
const previousStage = computed<LearningStageId | undefined>(() => (
  props.currentStage > 1 ? (props.currentStage - 1) as LearningStageId : undefined
))
const nextStage = computed<LearningStageId | undefined>(() => (
  props.currentStage < 4 ? (props.currentStage + 1) as LearningStageId : undefined
))

function navigateToStage(stage: LearningStageId) {
  open.value = false
  void router.push({ name: stageRoutes[stage] })
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent :show-close-button="false" class="stage-complete-dialog">
      <DialogHeader class="stage-complete-header">
        <StarCelebration />
        <DialogTitle>Хорошая работа!</DialogTitle>
        <DialogDescription>На этом этапе слов<br>больше нет</DialogDescription>
      </DialogHeader>

      <StageTransitionStats
        :current-stage="currentStage"
        :advanced="advanced"
        :advanced-stage="advancedStage"
        :returned="returned"
        :returned-stage="returnedStage"
      />

      <DialogFooter class="stage-complete-footer">
        <div class="stage-complete-navigation">
          <Button
            v-if="previousStage"
            class="alchemy-button alchemy-button-outline stage-complete-action"
            variant="outline"
            @click="navigateToStage(previousStage)"
          >
            <ChevronLeft /> Предыдущий этап
          </Button>
          <Button
            v-if="nextStage"
            class="alchemy-button alchemy-button-outline stage-complete-action"
            variant="outline"
            @click="navigateToStage(nextStage)"
          >
            Следующий этап <ChevronRight />
          </Button>
        </div>
        <Button class="alchemy-button alchemy-button-primary stage-complete-action" @click="open = false">Закрыть</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
.stage-complete-dialog { max-width: 25rem; border-color: rgb(226 184 104 / 52%); color: var(--parchment); background: radial-gradient(ellipse at 50% -8%, rgb(242 196 112 / 22%), transparent 15rem), repeating-linear-gradient(112deg, transparent 0 14px, rgb(255 228 180 / 1.8%) 14px 15px), linear-gradient(155deg, #493126, #211817 72%); box-shadow: 0 25px 80px rgb(0 0 0 / 58%), inset 0 1px rgb(255 236 190 / 14%), inset 0 -24px 45px rgb(0 0 0 / 18%); }
.stage-complete-header { align-items: center; gap: 0.85rem; text-align: center; }
.stage-complete-header [data-slot="dialog-title"] { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); }
.stage-complete-header [data-slot="dialog-description"] { color: rgb(243 228 188 / 78%); font-size: var(--type-body); line-height: 1.55; }
[data-slot="dialog-footer"].stage-complete-footer { display: grid; width: 100%; justify-content: stretch; gap: 0.65rem; }
.stage-complete-navigation { display: grid; gap: 0.65rem; }
.stage-complete-action { width: 100%; text-decoration: none; }
</style>
