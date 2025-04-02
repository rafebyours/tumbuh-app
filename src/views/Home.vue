<template>
  <Navbar />
  <div class="pt-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-left pl-6">My garden</h1>
    <p class="text-gray-600 text-left pl-6">{{ currentDate }}</p>
  
    
    <div class="p-6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="plant in plants" :key="plant.name" class="bg-[#f0f9f6] p-6 pr-12 pb-12 rounded-lg shadow-md relative overflow-visible">
    <!-- Bagian teks -->
    <div class="flex flex-col">
      <h2 class="text-lg font-semibold text-gray-800">{{ plant.name }}</h2>
      <p class="text-gray-500 text-sm">Date planted: {{ plant.datePlanted }}</p>
      
      <!-- Status -->
      <span v-if="plant.status" class="px-3 py-1 mt-3 text-sm bg-white text-gray-800 rounded-full shadow inline-block w-max">
        {{ plant.status }} ✅
      </span>
    </div>

    <!-- Gambar keluar dari kartu -->
    <img src="../assets/plant.png" alt="plant.name"
     class="absolute -bottom-4 -right-4 w-32 h-32 object-contain">
  </div>
</div>

    <div class="flex justify-center mt-6">
  <button class="px-4 py-2 text-[#638872] rounded-lg hover:bg-[#638872] hover:text-white transition">
    <h2 class="text-1xl font-bold text-left">+ Add a new plant</h2>
  </button>
</div>

  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },

  data() {
    return {
      activeFilter: "All plants",
      plants: [
        {
          name: "Basil",
          datePlanted: "23/04/22",
          image: "https://via.placeholder.com/50", // Replace with actual image URL
          icons: ["💧", "☀️"],
        },
        {
          name: "Cucumber",
          datePlanted: "03/03/22",
          image: "https://via.placeholder.com/50",
          icons: ["💧", "🌱", "☀️"],
        },
        {
          name: "Oregano",
          datePlanted: "11/05/20",
          image: "https://via.placeholder.com/50",
          status: "All good today",
        },
      ],

      currentDate: this.getFormattedDate(),
    };
  },

  methods: {
    getFormattedDate() {
      const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
      return new Date().toLocaleDateString("id-ID", options);
    },
  },
};
</script>

<style>
button {
  transition: background 0.3s;
  text-align: center;
  white-space: nowrap;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>