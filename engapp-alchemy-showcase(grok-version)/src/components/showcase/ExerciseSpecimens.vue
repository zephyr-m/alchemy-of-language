<script setup lang="ts">
import { ref } from 'vue'
import { BadgeCheck, Check, CircleAlert, Mic, X } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

type AnswerState = 'idle' | 'correct' | 'wrong'

const answerState = ref<AnswerState>('idle')
const typedWord = ref('kno')
const keepSound = ref(true)
</script>

<template>
  <div class="showcase-grid exercise-grid">
    <section class="specimen-section answer-section">
      <div class="section-heading">
        <span>07</span>
        <div><h2>Учебное действие</h2><p>Выбор, ввод и голос</p></div>
      </div>
      <Card class="question-card">
        <CardHeader>
          <Badge variant="outline" class="lesson-badge">Этап II · 6 из 10</Badge>
          <CardTitle class="question-title">Как переводится <em>knowledge</em>?</CardTitle>
          <CardDescription>Выберите один вариант</CardDescription>
        </CardHeader>
        <CardContent class="answer-grid">
          <button class="answer-option" :class="{ selected: answerState === 'correct' }" @click="answerState = 'correct'">
            <span>A</span> знание <Check v-if="answerState === 'correct'" />
          </button>
          <button class="answer-option" :class="{ rejected: answerState === 'wrong' }" @click="answerState = 'wrong'">
            <span>B</span> путешествие <X v-if="answerState === 'wrong'" />
          </button>
          <button class="answer-option" @click="answerState = 'idle'"><span>C</span> ремесло</button>
          <button class="answer-option" @click="answerState = 'idle'"><span>D</span> решение</button>
        </CardContent>
        <CardFooter v-if="answerState !== 'idle'" class="feedback" :class="answerState">
          <BadgeCheck v-if="answerState === 'correct'" />
          <CircleAlert v-else />
          <div>
            <strong>{{ answerState === 'correct' ? 'Верно. Зелье стало сильнее!' : 'Попробуйте ещё раз' }}</strong>
            <span>{{ answerState === 'correct' ? 'Слово переходит на следующую стадию.' : 'Knowledge означает «знание».' }}</span>
          </div>
        </CardFooter>
      </Card>
    </section>

    <section class="specimen-section input-section">
      <div class="section-heading">
        <span>08</span>
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
