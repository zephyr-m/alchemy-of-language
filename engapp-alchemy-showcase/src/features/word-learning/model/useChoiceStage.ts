import type { LearningWord, WordPair } from '@/entities/word'
import { computed, onMounted, ref } from 'vue'
import { wordLearningService } from './service'

interface ChoiceOption {
  id: string
  label: string
  text: string
}

interface ChoiceQuestion {
  word: string
  correctOptionId: string
  options: ChoiceOption[]
  completedPasses: number
}

export function useChoiceStage(stage: 2 | 3) {
  const words = ref<LearningWord[]>([])
  const catalog = ref<WordPair[]>([])
  const currentIndex = ref(0)
  const selectedOptionId = ref<string>()
  const answerState = ref<'idle' | 'correct' | 'wrong'>('idle')
  const stageCompleteOpen = ref(false)
  const advancedCount = ref(0)
  const returnedCount = ref(0)

  const currentWord = computed(() => words.value[currentIndex.value])
  const remainingCount = computed(() => Math.max(
    0,
    words.value.length - currentIndex.value - (answerState.value === 'idle' ? 0 : 1),
  ))
  const question = computed<ChoiceQuestion | undefined>(() => {
    const word = currentWord.value
    if (!word) return undefined

    const text = stage === 2 ? word.english : word.translation
    return {
      word: text,
      correctOptionId: word.id,
      options: buildOptions(word, catalog.value, stage, currentIndex.value),
      completedPasses: word.fullPasses,
    }
  })

  const correctOption = computed(() => question.value?.options.find(option => option.id === question.value?.correctOptionId))
  const feedbackTitle = computed(() => answerState.value === 'correct'
    ? 'Верно!'
    : `Правильный ответ: ${correctOption.value?.text ?? ''}`)
  const feedbackMessage = computed(() => answerState.value === 'correct'
    ? `Слово перешло на этап ${stage + 1}`
    : stage === 2
      ? 'Слово остаётся на этапе 2'
      : `Слово вернулось на этап ${stage - 1}`)

  onMounted(async () => {
    [words.value, catalog.value] = await Promise.all([
      wordLearningService.listStageWords(stage),
      wordLearningService.listCatalogWords(),
    ])
  })

  async function selectOption(optionId: string) {
    const word = currentWord.value
    if (!word || answerState.value !== 'idle') return

    const correct = optionId === word.id
    selectedOptionId.value = optionId
    answerState.value = correct ? 'correct' : 'wrong'
    await wordLearningService.submitAnswer(word.id, correct)
    if (correct) advancedCount.value += 1
    else returnedCount.value += 1
  }

  function nextQuestion() {
    if (currentIndex.value >= words.value.length - 1) {
      stageCompleteOpen.value = true
      return
    }

    currentIndex.value += 1
    selectedOptionId.value = undefined
    answerState.value = 'idle'
  }

  return {
    advancedCount,
    answerState,
    currentIndex,
    feedbackMessage,
    feedbackTitle,
    nextQuestion,
    question,
    remainingCount,
    returnedCount,
    selectOption,
    selectedOptionId,
    stageCompleteOpen,
    words,
  }
}

function buildOptions(
  correctWord: LearningWord,
  catalog: WordPair[],
  stage: 2 | 3,
  questionIndex: number,
): ChoiceOption[] {
  const getText = (word: WordPair) => stage === 2 ? word.translation : word.english
  const correctText = getText(correctWord)
  const usedTexts = new Set([correctText])
  const distractors: WordPair[] = []

  for (const candidate of catalog) {
    const candidateText = getText(candidate)
    if (candidate.id === correctWord.id || usedTexts.has(candidateText)) continue
    distractors.push(candidate)
    usedTexts.add(candidateText)
    if (distractors.length === 3) break
  }

  const choices = [...distractors]
  choices.splice(questionIndex % 4, 0, correctWord)

  return choices.map((word, index) => ({
    id: word.id,
    label: String.fromCharCode(65 + index),
    text: getText(word),
  }))
}
