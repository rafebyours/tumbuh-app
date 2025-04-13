<template>
    <div class="min-h-screen bg-white pb-20">
      <!-- Header -->
      <div class="relative bg-[#638872] pt-12 pb-8 px-6">
        <!-- Back Button -->
        <button class="absolute top-6 left-4 text-white">
          <i class="fa fa-arrow-left"></i>
        </button>
        
        <h1 class="text-xl font-medium text-white text-center mt-2">Tutorial</h1>
        
        <!-- Progress Indicator -->
        <div class="flex justify-center mt-4 space-x-2">
          <div v-for="i in 4" :key="i" 
               class="w-2 h-2 rounded-full"
               :class="currentStep === i ? 'bg-white' : 'bg-white bg-opacity-30'"></div>
        </div>
      </div>
      
      <!-- Tutorial Content -->
      <div class="px-6 -mt-6">
        <div class="bg-white rounded-xl shadow-md p-5">
          <!-- Tutorial Steps -->
          <div v-if="currentStep === 1">
            <div class="flex justify-center mb-6">
              <div class="w-48 h-48 bg-[#e8f0ec] rounded-full flex items-center justify-center">
                <img src="" alt="Scan plant" class="w-32 h-32 object-contain" />
              </div>
            </div>
            
            <h2 class="text-lg font-medium text-gray-800 text-center mb-3">Buat <span class="text-red-500">Tomat</span> Anda</h2>
            
            <p class="text-sm text-gray-600 text-center mb-6">
              Gunakan kamera ponsel Anda untuk memindai tanaman dan mendeteksi jenis atau masalah pada tanaman.
            </p>
            
            <div class="flex justify-center items-center space-x-2 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872]">
                <span class="text-sm font-medium">1</span>
              </div>
              <p class="text-sm text-gray-700">Arahkan kamera ke daun tanaman</p>
            </div>
            
            <div class="flex justify-center items-center space-x-2 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872]">
                <span class="text-sm font-medium">2</span>
              </div>
              <p class="text-sm text-gray-700">Pastikan pencahayaan yang cukup</p>
            </div>
            
            <div class="flex justify-center items-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872]">
                <span class="text-sm font-medium">3</span>
              </div>
              <p class="text-sm text-gray-700">Tunggu hasil deteksi muncul</p>
            </div>
          </div>
          
          <div v-if="currentStep === 2">
            <div class="flex justify-center mb-6">
              <div class="w-48 h-48 bg-[#e8f0ec] rounded-full flex items-center justify-center">
                <img src="" alt="Plant tracking" class="w-32 h-32 object-contain" />
              </div>
            </div>
            
            <h2 class="text-lg font-medium text-gray-800 text-center mb-3">Catat Perkembangan</h2>
            
            <p class="text-sm text-gray-600 text-center mb-6">
              Catat pertumbuhan dan perkembangan tanaman Anda untuk memantau kondisi kesehatan.
            </p>
            
            <div class="space-y-3 mb-4">
              <div class="bg-gray-50 rounded-lg p-3 flex items-center">
                <div class="w-8 h-8 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872] mr-3">
                  <i class="fa fa-calendar-check text-sm"></i>
                </div>
                <p class="text-sm text-gray-700">Catat tanggal penyiraman & pemupukan</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3 flex items-center">
                <div class="w-8 h-8 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872] mr-3">
                  <i class="fa fa-seedling text-sm"></i>
                </div>
                <p class="text-sm text-gray-700">Pantau pertumbuhan daun & tunas baru</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3 flex items-center">
                <div class="w-8 h-8 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872] mr-3">
                  <i class="fa fa-camera text-sm"></i>
                </div>
                <p class="text-sm text-gray-700">Ambil foto untuk melihat perkembangan</p>
              </div>
            </div>
          </div>
          
          <div v-if="currentStep === 3">
            <div class="flex justify-center mb-6">
              <div class="w-48 h-48 bg-[#e8f0ec] rounded-full flex items-center justify-center">
                <img src="" alt="Plant care" class="w-32 h-32 object-contain" />
              </div>
            </div>
            
            <h2 class="text-lg font-medium text-gray-800 text-center mb-3">Dapatkan Rekomendasi</h2>
            
            <p class="text-sm text-gray-600 text-center mb-6">
              Terima rekomendasi perawatan berdasarkan jenis tanaman dan kondisi lingkungan.
            </p>
            
            <div class="bg-[#e8f0ec] rounded-lg p-4 mb-4">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#638872] mr-2">
                  <i class="fa fa-lightbulb text-sm"></i>
                </div>
                <p class="text-sm font-medium text-[#4e6c59]">Tips Perawatan</p>
              </div>
              <p class="text-sm text-[#4e6c59] ml-10">
                Monstera menyukai cahaya tidak langsung dan penyiraman saat tanah mengering.
              </p>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#638872] mr-2">
                  <i class="fa fa-bell text-sm"></i>
                </div>
                <p class="text-sm font-medium text-gray-700">Pengingat Otomatis</p>
              </div>
              <p class="text-sm text-gray-600 ml-10">
                Dapatkan notifikasi untuk menyiram, memupuk, dan merawat tanaman Anda.
              </p>
            </div>
          </div>
          
          <div v-if="currentStep === 4">
            <div class="flex justify-center mb-6">
              <div class="w-48 h-48 bg-[#e8f0ec] rounded-full flex items-center justify-center">
                <img src="" alt="Community" class="w-32 h-32 object-contain" />
              </div>
            </div>
            
            <h2 class="text-lg font-medium text-gray-800 text-center mb-3">Bergabung dengan Komunitas</h2>
            
            <p class="text-sm text-gray-600 text-center mb-6">
              Terhubung dengan sesama pencinta tanaman untuk berbagi tips dan pengalaman.
            </p>
            
            <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-4 flex items-start">
                <img src="" alt="User" class="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p class="text-sm font-medium text-gray-800">Rina Wijaya</p>
                  <p class="text-xs text-gray-500 mb-2">2 jam yang lalu</p>
                  <p class="text-sm text-gray-700">Monstera saya akhirnya bertunas daun baru setelah saya ikuti tips penyiraman dari aplikasi ini!</p>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-4 flex items-start">
                <img src="" alt="User" class="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p class="text-sm font-medium text-gray-800">Budi Santoso</p>
                  <p class="text-xs text-gray-500 mb-2">Kemarin</p>
                  <p class="text-sm text-gray-700">Ada yang punya saran untuk mengatasi daun calathea yang menguning?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <div class="px-6 mt-6 flex justify-between">
        <button 
          @click="prevStep" 
          class="px-4 py-2 border border-[#638872] text-[#638872] rounded-lg text-sm"
          :class="{ 'opacity-50': currentStep === 1 }"
          :disabled="currentStep === 1"
        >
          Sebelumnya
        </button>
        
        <button 
          @click="nextStep" 
          class="px-6 py-2 bg-[#638872] text-white rounded-lg text-sm"
        >
          {{ currentStep === 4 ? 'Mulai' : 'Selanjutnya' }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TutorialPage",
    data() {
      return {
        currentStep: 1,
        totalSteps: 4
      };
    },
    methods: {
      nextStep() {
        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
        } else {
          // Navigate to home or main screen when tutorial is completed
          this.$router.push('/home');
        }
      },
      prevStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      }
    }
  };
  </script>