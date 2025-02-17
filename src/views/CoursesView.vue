<template>
    <div class="container">
    <h1>Libros Disponibles</h1>

    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

const books = ref([]);

const fetchBooks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'books'));
    querySnapshot.forEach((doc) => {
      books.value.push( {title: doc.title, ...doc.data() })
    })
  } catch (error) {
    console.error('Error obteniendo cursos:', error);
  }
};

onMounted(fetchBooks);

</script>

<style scoped>

.container {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 12px;
  border: 1px solid #ddd;
}

th {
  background-color: #0b0b0b;
  color: white;
  text-transform: uppercase;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #ddd;
}

</style>