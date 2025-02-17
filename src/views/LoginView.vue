<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required /> <br>
      
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required /> <br>
      
      <button type="submit">Iniciar Sesión</button>

    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')

const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value)
    router.push('/admin')
  } catch (error) {
    console.error('Credenciales incorrectas', error.message);
  }

}

</script>

<style scoped>

</style>