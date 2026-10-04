<script setup lang="ts">
import { ArrowRight, Check, X } from '@lucide/vue'
import { nextTick, onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { FullPassProgress } from '@/entities/word'

const props = withDefaults(defineProps<{
  word: string
  outcome?: 'cycle' | 'mastered' | 'wrong'
  fullPasses?: number
}>(), {
  outcome: 'mastered',
  fullPasses: 3,
})

defineEmits<{
  next: []
}>()

const panel = ref<HTMLElement>()

onMounted(async () => {
  if (props.outcome === 'wrong') return
  await nextTick()
  panel.value?.querySelector<HTMLButtonElement>('.mastered-next')?.focus()
})
</script>

<template>
  <div ref="panel" class="word-mastered-panel">
    <div class="mastered-answer" :class="{ wrong: outcome === 'wrong' }">
      <X v-if="outcome === 'wrong'" />
      <Check v-else />
      <span class="learning-text">{{ word }}</span>
    </div>
    <h2 v-if="outcome === 'mastered'">Слово освоено!</h2>
    <h2 v-else-if="outcome === 'cycle'">Полное прохождение!</h2>
    <h2 v-else>Слово возвращено</h2>
    <div class="mastered-passes">
      <FullPassProgress :completed="fullPasses" :total="3" :show-label="false" :show-count="false" />
      <span>{{ fullPasses }} из 3 полных прохождений</span>
    </div>
    <p v-if="outcome === 'mastered'"><span class="learning-text">{{ word }}</span> добавлено в мой словарь</p>
    <p v-else-if="outcome === 'cycle'">Следующий круг начнётся с этапа 2</p>
    <p v-else>Слово вернулось на этап 3</p>
    <Button type="button" variant="ghost" class="mastered-next" @click="$emit('next')">
      Следующее слово <ArrowRight />
    </Button>
  </div>
</template>

<style scoped>
.word-mastered-panel { display: grid; justify-items: center; gap: 1rem; text-align: center; }
.mastered-answer { display: flex; width: 100%; min-height: 3.5rem; align-items: center; gap: 0.75rem; padding: 0.8rem 1rem; border: 1px solid #b7f0d0; border-radius: 0.8rem; color: #f3fff8; background: linear-gradient(180deg, #63c496, #2d7a58); text-align: left; box-shadow: inset 0 1px rgb(255 255 255 / 34%), 0 0 22px rgb(110 220 168 / 28%), 0 3px 0 #184836; }
.mastered-answer svg { width: 1rem; }
.mastered-answer.wrong { border-color: #e08a7c; color: #ffe4de; background: linear-gradient(180deg, #a85a4c, #6e342c); box-shadow: inset 0 1px rgb(255 255 255 / 16%), 0 3px 0 #4a221c; }
.word-mastered-panel h2 { margin: 0.25rem 0 0; color: var(--parchment-bright); font-family: var(--font-interface); font-size: var(--type-title); font-weight: 600; }
.mastered-passes { display: grid; justify-items: center; gap: 0.55rem; }
.mastered-passes > span { color: rgb(243 228 188 / 74%); font-size: var(--type-small); }
.word-mastered-panel p { margin: 0; color: rgb(243 228 188 / 80%); font-size: var(--type-body); }
.mastered-next { color: var(--brass-light); }
.mastered-next:focus-visible { color: var(--accent-foreground); background: var(--accent); }
</style>
