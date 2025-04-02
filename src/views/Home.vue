<template>
  <Navbar />
    <div class="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 class="text-2xl md:text-4xl font-bold">Welcome to Tumbuh App</h1>
      <p class="text-sm md:text-lg text-gray-600">Aplikasi untuk membantu pertumbuhan</p>
      <router-link to="/about" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Tentang Kami</router-link>
    </div>
  </template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
  