<template>
  <div class="max-w-lg w-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-10 rounded-lg shadow-2xl text-center">
    <h1 class="text-5xl font-bold text-white">Create Your Account</h1>
    <p class="text-xl text-gray-300 mt-4">Sign up to activate your game.</p>

    <!-- Serial Number Display -->
    <div v-if="serial" class="mt-4 text-lg text-gray-400">
      <p>Registering for Serial:</p>
      <p class="text-white font-bold text-2xl">{{ serial }}</p>
    </div>

    <!-- GitHub Login -->
    <button @click="signIn('github')"
      class="mt-6 w-full flex items-center justify-center space-x-3 px-6 py-3 text-xl bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-lg">
      <Icon name="uil:github" class="w-6 h-6" />
      <span>Continue with GitHub</span>
    </button>

    <button @click="signIn('google')"
      class="mt-6 w-full flex items-center justify-center space-x-3 px-6 py-3 text-xl bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-lg">
      <Icon name="uil:google" class="w-6 h-6" />
      <span>Continue with Google</span>
    </button>

    <button @click="signIn('facebook')"
      class="mt-6 w-full flex items-center justify-center space-x-3 px-6 py-3 text-xl bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-lg">
      <Icon name="uil:facebook" class="w-6 h-6" />
      <span>Continue with Facebook</span>
    </button>

    <p class="text-gray-400 text-sm mt-6">
      By signing up, you agree to our <NuxtLink to="/terms" class="text-primary hover:underline">Terms</NuxtLink>.
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();
const serial = route.query.serial || null;
const { signIn } = useAuth();
</script>
