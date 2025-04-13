<template>
    <div class="min-h-screen bg-gradient-to-b from-emerald-50 to-white font-sans relative">
      <!-- Main content -->
      <div class="flex items-center justify-center px-4 py-12 pb-24">
        <div class="w-full max-w-md">
          <!-- Result card with organic shape -->
          <div class="relative rounded-2xl overflow-hidden bg-white shadow-lg">
            <!-- Decorative curved shape -->
            <div class="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-emerald-100"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-50"></div>
            
            <!-- Content with relative positioning to overlay the shapes -->
            <div class="relative pt-8 pb-6 px-8">
              <!-- Title with leaf icon -->
              <div class="flex items-center justify-center space-x-2 mb-8">
                <span class="inline-block w-8 h-8 text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 18c4.411 0 8-3.589 8-8a7.962 7.962 0 0 0-2.065-5.339C17.005 8.803 14.625 10 12 10c-2.625 0-5.005-1.197-6.935-3.339A7.962 7.962 0 0 0 3 12c0 4.411 3.589 8 8 8zm0-13.586l2.121-2.121 1.415 1.414L12.414 9 15 11.586l-1.414 1.414L12 11.414 9.414 14 8 12.586 10.586 10 8.464 7.879 9.879 6.464 12 8.586z" />
                  </svg>
                </span>
                <h2 class="text-xl font-medium text-emerald-800">Hasil Deteksi Penyakit Tomat</h2>
              </div>
              
              <!-- Result info with custom styling -->
              <div class="space-y-6 mb-8">
                <!-- Disease name -->
                <div class="bg-red-50 rounded-lg p-4">
                  <div class="flex items-center justify-between">
                    <span class="text-red-800 font-medium">Penyakit</span>
                    <span class="text-red-600 font-semibold">{{ disease }}</span>
                  </div>
                </div>
                
                <!-- Confidence with custom progress circle -->
                <div class="flex items-center justify-between bg-emerald-50 rounded-lg p-4">
                  <span class="text-emerald-800 font-medium">Kecocokan</span>
                  <div class="flex items-center space-x-2">
                    <!-- Custom circular progress indicator -->
                    <div class="relative w-10 h-10">
                      <svg class="w-full h-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#d1fae5" stroke-width="2"></circle>
                        <circle 
                          cx="18" cy="18" r="16" 
                          fill="none" 
                          stroke="#059669" 
                          stroke-width="2" 
                          stroke-dasharray="100" 
                          stroke-dashoffset="0"
                          :stroke-dasharray="100"
                          :stroke-dashoffset="100 - confidence"
                          transform="rotate(-90 18 18)"
                        ></circle>
                      </svg>
                      <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-emerald-800">
                        {{ confidence }}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Recommendation with paper-like styling -->
              <div class="mb-8 bg-amber-50 border-l-4 border-amber-300 rounded-r-lg p-4">
                <h3 class="text-amber-800 font-medium mb-2">Rekomendasi</h3>
                <p class="text-amber-900 text-sm leading-relaxed">{{ solution }}</p>
              </div>
              
              <!-- Custom button with leaf icon -->
              <router-link
                to="/plantdetect"
                class="block w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-center rounded-lg text-sm font-medium transition-colors group"
              >
                <span class="flex items-center justify-center">
                  <span class="mr-2">Scan Lagi</span>
                  <span class="inline-block w-4 h-4 transform group-hover:rotate-45 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
                    </svg>
                  </span>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Bottom Navigation Bar -->
      <div class="fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg border-t border-gray-100 py-2 px-4">
        <BottomNavbar />
      </div>
    </div>
  </template>
  
  <script>
  import BottomNavbar from '../components/Navbar.vue';
  
  export default {
    components: {
      BottomNavbar,
    },
    computed: {
      disease() {
        return this.$route.query.disease || 'Tidak diketahui';
      },
      confidence() {
        return parseFloat(this.$route.query.confidence || 0).toFixed(1);
      },
      solution() {
        return this.$route.query.solution || 'Tidak ada rekomendasi.';
      }
    }
  };
  </script>