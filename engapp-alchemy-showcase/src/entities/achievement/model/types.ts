export type MedalFilter = 'all' | 'earned' | 'locked'

export interface TieredMedal {
  id: string
  title: string
  earnedTiers: number
  current: number
  target: number
  unit: string
  nextTier: string
}

export interface SpecialMedal {
  id: string
  title: string
  description: string
  earned: boolean
}
