<template>
    <div class="min-h-screen bg-background dark:bg-darkBackground text-text dark:text-darkText">
      <button @click="toggleTheme" class="fixed top-4 right-4 p-2 rounded-xl bg-primary text-white">
      {{ darkMode ? "☀️ Light Mode" : "🌙 Dark Mode" }}
    </button>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</div>
</template>

<script setup lang="ts">
import NuxtLayout from './layouts/default.vue'
import { ref, watch } from 'vue';

const darkMode = ref(false);

// Load theme from localStorage
if (process.client) {
  darkMode.value = localStorage.getItem("theme") === "dark";
  document.documentElement.classList.toggle("dark", darkMode.value);
}

// Toggle dark mode
const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
  localStorage.setItem("theme", darkMode.value ? "dark" : "light");
};
</script>
