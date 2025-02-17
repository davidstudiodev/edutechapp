<template>
  <div>
    <h1>Bienvenido a la plataforma</h1>
    <p>Explora los cursos disponibles</p>
    <button @click="goToCourses">Ver Cursos</button>
    <p>¿Eres admin? <button @click="loginRoute">Entrar</button></p>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()

const goToCourses = () => {
  router.push('/courses')
}

const loginRoute = () => {
  router.push('/login')
}

</script>

<style scoped>

</style>
