<template>
  <div id="sample" class="p-4 flex flex-col border border-stone-600 rounded-lg bg-stone-900">
    <h1 class="text-stone-500 mb-4 text-lg">Sample Component</h1>
    <p class="mb-2">Message prop: {{ message }}</p>
    <p class="mb-2">Current date and time: {{ new Date().toLocaleString() }}</p>
    <p class="mb-2">Current environment: {{ nodeEnv }}</p>
    <p class="mb-2">Current version: {{ appVersion }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: 'Hello, World!',
  },
})

// Expose environment variables to the template
const nodeEnv = import.meta.env.MODE
const appVersion = import.meta.env.VITE_APP_VERSION // Use VITE_ prefix for custom env variables
</script>

<style scoped></style>
