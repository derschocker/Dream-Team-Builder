<script setup lang="ts">
import { computed } from 'vue'
import AthleteList from '@/components/AthleteList.vue'
import type { Athlete } from '@/types/Athlete'

// Beispiel-Entitäten (später vom Spring-Backend per GET geladen)
const athletes: Athlete[] = [
  {
    id: 1,
    name: 'Erling Haaland',
    sport: 'Fußball',
    position: 'Sturm',
    team: 'Manchester City',
    rating: 91,
  },
  {
    id: 2,
    name: 'Jude Bellingham',
    sport: 'Fußball',
    position: 'Mittelfeld',
    team: 'Real Madrid',
    rating: 90,
  },
  {
    id: 3,
    name: 'Virgil van Dijk',
    sport: 'Fußball',
    position: 'Abwehr',
    team: 'Liverpool',
    rating: 89,
  },
  {
    id: 4,
    name: 'Nikola Jokić',
    sport: 'Basketball',
    position: 'Center',
    team: 'Denver Nuggets',
    rating: 97,
  },
  {
    id: 5,
    name: 'Luka Dončić',
    sport: 'Basketball',
    position: 'Point Guard',
    team: 'Los Angeles Lakers',
    rating: 95,
  },
  {
    id: 6,
    name: 'Giannis Antetokounmpo',
    sport: 'Basketball',
    position: 'Power Forward',
    team: 'Milwaukee Bucks',
    rating: 96,
  },
]

const football = computed(() => athletes.filter((a) => a.sport === 'Fußball'))
const basketball = computed(() => athletes.filter((a) => a.sport === 'Basketball'))
</script>

<template>
  <main>
    <AthleteList title="Fußball" :athletes="football" />
    <AthleteList title="Basketball" :athletes="basketball" />
  </main>
</template>
