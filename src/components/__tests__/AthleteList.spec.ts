import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AthleteList from '../AthleteList.vue'
import type { Athlete } from '@/types/Athlete'

const athletes: Athlete[] = [
  { id: 1, name: 'Spieler A', sport: 'Fußball', position: 'Sturm', team: 'Team A', rating: 80 },
  { id: 2, name: 'Spieler B', sport: 'Fußball', position: 'Abwehr', team: 'Team B', rating: 75 },
]

describe('AthleteList', () => {
  it('rendert einen Eintrag pro Athlet', () => {
    const wrapper = mount(AthleteList, { props: { title: 'Test', athletes } })
    expect(wrapper.findAll('li.athlete')).toHaveLength(2)
    expect(wrapper.text()).toContain('Spieler A')
  })
})
