<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AnswerState, ChoiceOption } from '@/features/answer-word'
import { Mic } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { ChoiceExercise } from '@/features/answer-word'

const answerState = ref<AnswerState>('idle')
const selectedOptionId = ref<string>()
const typedWord = ref('kno')
const keepSound = ref(true)

const options: ChoiceOption[] = [
  { id: 'knowledge', label: 'A', text: 'знание' },
  { id: 'journey', label: 'B', text: 'путешествие' },
  { id: 'craft', label: 'C', text: 'ремесло' },
  { id: 'decision', label: 'D', text: 'решение' },
]

const feedbackTitle = computed(() => answerState.value === 'correct' ? 'Верно. Зелье стало сильнее!' : 'Попробуйте ещё раз')
const feedbackMessage = computed(() => answerState.value === 'correct' ? 'Слово переходит на следующую стадию.' : 'Knowledge означает «знание».')

function selectOption(optionId: string) {
  selectedOptionId.value = optionId
  answerState.value = optionId === 'knowledge' ? 'correct' : 'wrong'
}
</script>

<template>
  <div class="showcase-grid exercise-grid">
    <section class="specimen-section answer-section">
      <div class="section-heading">
        <span>09</span>
        <div><h2>Учебное действие</h2><p>Выбор, ввод и голос</p></div>
      </div>
      <ChoiceExercise
        :position="6"
        :total-questions="10"
        prompt="Как переводится"
        word="knowledge"
        instruction="Выберите один вариант"
        :options="options"
        :completed-passes="1"
        :selected-option-id="selectedOptionId"
        correct-option-id="knowledge"
        :answer-state="answerState"
        :feedback-title="feedbackTitle"
        :feedback-message="feedbackMessage"
        @select="selectOption"
      />
    </section>

    <section class="specimen-section input-section">
      <div class="section-heading">
        <span>10</span>
        <div><h2>Самостоятельный ответ</h2><p>Финальная стадия проверки</p></div>
      </div>
      <Card class="transcription-card">
        <CardHeader>
          <CardTitle>Введите слово на английском</CardTitle>
          <CardDescription>знание</CardDescription>
        </CardHeader>
        <CardContent class="input-stack">
          <div class="enchanted-input">
            <Input v-model="typedWord" aria-label="Ответ на английском" />
            <span>_</span>
          </div>
          <Button variant="outline" class="alchemy-button voice-button"><Mic /> Произнести</Button>
          <label class="sound-choice">
            <Checkbox v-model="keepSound" />
            <span><strong>Звуковой отклик</strong><small>Тихий звон при верном ответе</small></span>
          </label>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
