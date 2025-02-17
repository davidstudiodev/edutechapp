<template>
  <div v-if="isAuthenticated">
    <h1>Panel de Administración</h1>
    <p>Bienvenido, {{ user?.displayName }}</p>
    <button @click="logout">Cerrar Sesión</button>
    <!-- Aquí iría la lógica para administrar los cursos, usuarios, etc. -->
  </div>
  <div v-else>
    <p>No tienes acceso a esta sección. Debes iniciar sesión como administrador.</p>
  </div>
</template>

<script setup>

import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';

const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.user)

const logout = () => {
  authStore.logout()
}


</script>

<style scoped>

</style>