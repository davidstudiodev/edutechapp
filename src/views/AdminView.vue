<template>
  <div v-if="isAuthenticated">
    <h1>Panel de Administración</h1>
    <p>Bienvenido, {{ user?.email }}</p>

    <h2>Agregar Nuevo Libro</h2>

    <!-- Formulario para agregar un nuevo libro -->
    <form @submit.prevent="handleAddBook">
      <div>
        <label for="booktitle">Título:</label>
        <input v-model="book.title" type="text" required />
      </div>

      <div>
        <label for="bookauthor">Autor:</label>
        <input v-model="book.author" type="text" required />
      </div>

      <div>
        <label for="bookstock">Stock:</label>
        <input v-model="book.stock" type="number" required />
      </div>

      <button type="submit">Añadir Libro</button>
    </form>

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
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.user)

const logout = () => {
  authStore.logout()
}

const book = ref({
  title: '',
  author: '',
  stock: 0
})

const handleAddBook = async () => {
  try {
      const docRef = await addDoc(collection(db, 'books'), {
      title: book.value.title,
      author: book.value.author,
      stock: book.value.stock
    })
    console.log('Document:', docRef.id);
    
    book.value = {
      title: '',
      author: '',
      stock: 0
    }
    alert('Libro añadido con éxito.')
    
  } catch (error) {
    console.error('Error al añadir libro:', error);
    
  }
}

</script>

<style scoped>

</style>