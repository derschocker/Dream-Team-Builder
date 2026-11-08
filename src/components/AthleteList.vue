<script setup lang="ts">
import type { Athlete } from '@/types/Athlete'

defineProps<{
  title: string
  athletes: Athlete[]
}>()
</script>

<template>
  <section class="athlete-list">
    <h2>{{ title }}</h2>
    <p v-if="athletes.length === 0">Keine Athleten vorhanden.</p>
    <ul v-else>
      <li v-for="athlete in athletes" :key="athlete.id" class="athlete">
        <span class="name">{{ athlete.name }}</span>
        <span class="meta">{{ athlete.position }} · {{ athlete.team }}</span>
        <span class="rating">{{ athlete.rating }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.athlete-list {
  margin-bottom: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
.athlete {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'name rating'
    'meta rating';
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
.name {
  grid-area: name;
  font-weight: 600;
}
.meta {
  grid-area: meta;
  font-size: 0.9rem;
  opacity: 0.75;
}
.rating {
  grid-area: rating;
  align-self: center;
  font-size: 1.4rem;
  font-weight: 700;
}
</style>
