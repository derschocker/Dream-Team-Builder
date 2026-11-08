<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Dream Team Builder</h1>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 2rem;
}
h1 {
  font-weight: 700;
}
</style>
