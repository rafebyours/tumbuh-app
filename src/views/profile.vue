<template>
    <div class="min-h-screen bg-white pb-20 relative">
      <!-- Profile Header -->
      <div class="relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-[#638872] opacity-10 overflow-hidden">
          <div
            v-for="i in 5"
            :key="i"
            class="absolute rounded-full bg-[#638872] opacity-20"
            :style="`width: ${60 + i * 20}px; height: ${60 + i * 20}px; top: ${Math.random() * 100}px; left: ${Math.random() * 100}%;`"
          ></div>
        </div>
  
        <!-- Header Content -->
        <div class="relative pt-10 pb-16 px-6">
          <!-- Back Button -->
          <button class="absolute top-6 left-4 text-[#638872]">
            <i class="fa fa-arrow-left"></i>
          </button>
  
          <!-- Settings Button -->
          <button class="absolute top-6 right-4 text-[#638872]">
            <i class="fa fa-cog"></i>
          </button>
  
          <!-- Profile Image -->
          <div class="flex justify-center mb-4">
            <div class="relative">
              <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                <img src="" alt="Profile" class="w-full h-full object-cover" />
              </div>
              <button
                class="absolute bottom-0 right-0 bg-[#638872] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
              >
                <i class="fa fa-camera text-xs"></i>
              </button>
            </div>
          </div>
  
          <!-- User Info -->
          <div class="text-center">
            <h1 class="text-xl font-medium text-gray-800">{{ user.name }}</h1>
            <p class="text-gray-500 text-sm">@{{ user.username }}</p>
          </div>
        </div>
      </div>
  
      <!-- Stats Bar -->
      <div class="px-6 mb-8">
        <div class="bg-gray-50 rounded-xl p-4 flex justify-around shadow-sm">
          <div class="text-center">
            <p class="text-2xl font-medium text-[#638872]">{{ user.plants }}</p>
            <p class="text-xs text-gray-500">Tanaman</p>
          </div>
          <div class="text-center border-l border-r border-gray-200 px-6">
            <p class="text-2xl font-medium text-[#638872]">{{ user.flowering }}</p>
            <p class="text-xs text-gray-500">Berbunga</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-medium text-[#638872]">{{ user.sick }}</p>
            <p class="text-xs text-gray-500">Sakit</p>
          </div>
        </div>
      </div>
  
      <!-- Sections -->
      <div class="px-6 space-y-6 pb-6">
        <!-- Activity Section -->
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-medium text-gray-800">Aktivitas Terbaru</h2>
            <button class="text-sm text-[#638872]">Lihat Semua</button>
          </div>
  
          <div class="space-y-3">
            <!-- Activity Item -->
            <div class="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872]">
                <i class="fa fa-leaf"></i>
              </div>
              <div class="flex-1">
                <p class="text-sm text-gray-800">Menanam <span class="font-medium">Monstera Deliciosa</span></p>
                <p class="text-xs text-gray-500">Kemarin, 15:30</p>
              </div>
            </div>
  
            <div class="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872]">
                <i class="fa fa-tint"></i>
              </div>
              <div class="flex-1">
                <p class="text-sm text-gray-800">Menyiram <span class="font-medium">5 Tanaman</span></p>
                <p class="text-xs text-gray-500">Hari ini, 08:45</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Plant Collection -->
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-medium text-gray-800">Koleksi Tanaman</h2>
            <button class="text-sm text-[#638872]">Lihat Semua</button>
          </div>
  
          <div class="flex overflow-x-auto pb-4 gap-4 -mx-1 px-1">
            <!-- Plant Card -->
            <div
              v-for="(plant, i) in plantCollection"
              :key="i"
              class="min-w-[140px] rounded-lg overflow-hidden shadow-sm bg-white border border-gray-100"
            >
              <div class="h-20 bg-gray-200 relative">
                <img :src="plant.image" alt="Plant" class="w-full h-full object-cover" />
                <div class="absolute top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <i class="fa fa-heart text-xs text-[#638872]"></i>
                </div>
              </div>
              <div class="p-3">
                <p class="text-sm font-medium text-gray-800">{{ plant.name }}</p>
                <p class="text-xs text-gray-500">{{ plant.age }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Bottom Navigation -->
      <div
        class="fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg border-t border-gray-100 py-2 px-4 z-50"
      >
        <BottomNavbar />
      </div>
    </div>
  </template>
  
  <script>
  import BottomNavbar from '../components/Navbar.vue';
  
  export default {
    name: 'ProfilePage',
    components: {
      BottomNavbar
    },
    data() {
      return {
        user: {
          name: 'Ayu Jisoo',
          username: 'plantsloverjisoo',
          plants: 24,
          flowering: 14,
          sick: 3
        },
        plantCollection: [
          { name: 'Monstera', age: '3 bulan', image: '' },
          { name: 'Calathea', age: '1 bulan', image: '' },
          { name: 'Fiddle Fig', age: '6 bulan', image: '' }
        ]
      };
    }
  };
  </script>
  