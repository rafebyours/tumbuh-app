<template>
    <div v-if="showSplash" class="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div class="flex flex-col items-center space-y-4">
        <img src="@/assets/logo-black.gif" alt="Logo" class="w-64 animate-fade-in" :class="{ show: animate }" />
      </div>
  
      <!-- Footer -->
      <div class="absolute bottom-5 flex flex-col items-center">
        <p class="text-sm font-semibold text-gray-600 tracking-wide animate-fade-in" :class="{ show: animate }">
          COLLABORATED WITH
        </p>
        <img src="@/assets/hataki.jpg" alt="Partner Logo" class="w-20 mt-2 animate-fade-in" :class="{ show: animate }" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSplash: true,
        animate: false,
      };
    },
    mounted() {
      setTimeout(() => {
        this.animate = true;
      }, 100); // Animasi dimulai sedikit setelah render
  
      setTimeout(() => {
        this.showSplash = false;
      }, 5000); // Splash screen hilang setelah 5 detik
    },
  };
  </script>
  
  <style scoped>
  .animate-fade-in {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  
  .animate-fade-in.show {
    opacity: 1;
    transform: scale(1);
  }
  </style>
  