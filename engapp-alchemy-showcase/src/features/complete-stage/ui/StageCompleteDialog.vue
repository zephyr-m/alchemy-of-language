<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import StarCelebration from './StarCelebration.vue'
import StageTransitionStats from './StageTransitionStats.vue'

defineProps<{
  advanced: number
  advancedStage: number
  returned: number
  returnedStage: number
}>()

const open = defineModel<boolean>('open', { default: false })
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
        :advanced="advanced"
        :advanced-stage="advancedStage"
        :returned="returned"
        :returned-stage="returnedStage"
      />

      <DialogFooter>
        <Button as-child class="alchemy-button alchemy-button-primary stage-complete-action">
          <RouterLink :to="{ name: 'home' }">На главную</RouterLink>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
.stage-complete-dialog { max-width: 25rem; border-color: rgb(215 168 74 / 45%); color: var(--parchment); background: radial-gradient(circle at 50% 0%, rgb(215 168 74 / 16%), transparent 42%), linear-gradient(150deg, #3b2921, #201817); box-shadow: 0 25px 80px rgb(0 0 0 / 55%), inset 0 1px rgb(255 255 255 / 8%); }
.stage-complete-header { align-items: center; gap: 0.85rem; text-align: center; }
.stage-complete-header [data-slot="dialog-title"] { color: var(--parchment-bright); font-family: var(--font-display); font-size: 1.4rem; }
.stage-complete-header [data-slot="dialog-description"] { color: rgb(231 211 161 / 54%); line-height: 1.55; }
.stage-complete-action { width: 100%; text-decoration: none; }
</style>
