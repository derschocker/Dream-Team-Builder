export type Sport = 'Fußball' | 'Basketball'

export interface Athlete {
  id: number
  name: string
  sport: Sport
  position: string
  team: string
  rating: number
}
