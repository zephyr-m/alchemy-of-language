export type AnswerState = 'idle' | 'correct' | 'wrong'

export interface ChoiceOption {
  id: string
  label: string
  text: string
}
