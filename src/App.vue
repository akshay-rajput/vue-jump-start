<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import Sample from '@/components/Sample.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
nav {
  display: flex;
  gap: 2rem;
}
nav a {
  display: flex;
  gap: 1rem;
  color: teal;
  text-decoration: none;
}
nav a:hover {
  color: rgb(45, 173, 173);
  text-decoration: underline;
}
</style>
