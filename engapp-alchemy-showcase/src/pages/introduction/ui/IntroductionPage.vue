<script setup lang="ts">
import type { LearningWord } from '@/entities/word'
import { Beaker } from '@lucide/vue'
import { onMounted, ref } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { StageCompleteDialog } from '@/features/complete-stage'
import { wordLearningService } from '@/features/word-learning'
import { IntroductionWordList } from '@/widgets/introduction-word-list'
import { TrainingHeader } from '@/widgets/training-header'

const words = ref<LearningWord[]>([])
const advancedCount = ref(0)
const stageCompleteOpen = ref(false)
const advancingWordIds = new Set<string>()

onMounted(loadWords)

async function loadWords() {
  words.value = await wordLearningService.listStageWords(1)
}

async function advanceWord(wordId: string) {
  if (advancingWordIds.has(wordId)) return
  advancingWordIds.add(wordId)

  try {
    await wordLearningService.advanceIntroduction(wordId)
    words.value = words.value.filter(word => word.id !== wordId)
    advancedCount.value += 1
    if (words.value.length === 0) stageCompleteOpen.value = true
  }
  finally {
    advancingWordIds.delete(wordId)
  }
}
</script>

<template>
  <div class="introduction-page">
    <TrainingHeader :stage="1" rune="Ⅰ" title="Знакомство" :word-count="words.length" />

    <Card class="question-card introduction-guide">
      <CardContent class="introduction-guide-content">
        <div class="introduction-guide-icon"><Beaker /></div>
        <div>
          <strong>Изучи новую формулу</strong>
          <p>Посмотри слово и перевод. Когда будешь готов, отправь слово на следующую стадию.</p>
        </div>
      </CardContent>
    </Card>

    <div class="introduction-columns" aria-hidden="true">
      <span>Английский</span>
      <span>Русский</span>
      <span />
    </div>

    <IntroductionWordList :words="words" @advance="advanceWord" />
    <StageCompleteDialog
      v-model:open="stageCompleteOpen"
      :current-stage="1"
      :advanced="advancedCount"
      :advanced-stage="2"
      :returned="0"
      :returned-stage="1"
    />
  </div>
</template>

<style scoped>
.introduction-page { display: grid; gap: 1rem; padding: 0.2rem 0 1rem; }
.introduction-guide { gap: 0; padding-block: 0; border-color: rgb(215 168 74 / 28%); background: linear-gradient(165deg, rgb(78 52 38 / 82%), rgb(34 23 20 / 94%)); box-shadow: inset 0 1px rgb(255 236 190 / 12%), 0 10px 24px rgb(0 0 0 / 16%); }
.introduction-guide-content { display: grid; grid-template-columns: auto 1fr; gap: 0.9rem; align-items: center; padding: 1rem; }
.introduction-guide-icon { display: grid; width: 2.8rem; height: 2.8rem; place-items: center; border: 1px solid rgb(255 210 186 / 34%); border-radius: 48% 52% 46% 54%; color: #f6d2c4; background: radial-gradient(circle at 40% 32%, #d26454, #8a3328 70%); box-shadow: inset 0 1px rgb(255 220 200 / 35%), 0 2px 0 #5c241c; }
.introduction-guide-icon svg { width: 1.15rem; }
.introduction-guide strong { color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); }
.introduction-guide p { margin: 0.2rem 0 0; color: rgb(243 228 188 / 76%); font-size: var(--type-body); line-height: 1.5; }
.introduction-columns { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr) 2.55rem; gap: 0.65rem; padding-inline: 0.9rem; color: rgb(243 228 188 / 68%); font-size: var(--type-small); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }

@media (max-width: 370px) {
  .introduction-guide-content { align-items: start; }
}
</style>
