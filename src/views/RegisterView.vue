<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handlerRegister">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required /> <br>
      
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required /> <br>
      
      <button type="submit">Registrate</button>

    </form>
  </div>
</template>

<script setup>

import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const router = useRouter()
const authStore = useAuthStore()

const handlerRegister = async () => {
  try {
    await authStore.register(email.value, password.value)
    router.push('/login')
    alert('Registro satisfactoriamente!')
  } catch (error) {
    console.error('Error al registrarse.', error.message);
    
    
  }

}

</script>

<style scoped>

</style>