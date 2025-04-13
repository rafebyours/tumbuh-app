<template>
     <!-- Navbar sticky -->
  <div class="sticky top-0 bg-white z-50 shadow">
    <Navbar />
  </div>
  <div class="min-h-screen bg-white flex flex-col items-center justify-start pt-6 px-4 pb-32 sm:pb-36">
      <!-- Tab Switcher -->
      <div class="flex w-64 bg-gray-200 rounded-full overflow-hidden mb-6">
        <button
          :class="isScan ? activeTabClass : inactiveTabClass"
          class="w-1/2 py-2 text-sm font-medium"
          @click="switchTab(true)"
        >
          Scanner
        </button>
        <button
          :class="!isScan ? activeTabClass : inactiveTabClass"
          class="w-1/2 py-2 text-sm font-medium"
          @click="switchTab(false)"
        >
          Upload
        </button>
      </div>
  
        <!-- Scanner View -->
        <div v-if="isScan" class="w-full max-w-sm relative flex flex-col items-center px-4">
        <!-- Informational Text -->
        <div class="mb-6 text-center text-gray-700 space-y-1">
            <p class="text-base font-semibold">Scan Tanaman Kamu</p>
            <p class="text-xs text-gray-400 mt-3">Posisikan tanaman di dalam kotak putih</p>
        </div>

        <!-- Video Camera -->
        <div class="w-full aspect-square bg-black rounded-xl overflow-hidden relative shadow-md">
            <video ref="video" autoplay playsinline class="object-cover w-full h-full rounded-xl" />
            <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-48 h-48 border-4 border-white rounded-xl"></div>
            </div>
        </div>

        <!-- Shutter Button -->
        <button
        class="w-16 h-16 bg-white border-4 border-[#638872] rounded-full mt-6 shadow-lg active:scale-95 transition"
        @click="takePhoto"
        >
        <i class="fa fa-camera text-[#638872] text-xl"></i>
        </button>


        <div class="mb-6 text-center text-gray-700 space-y-1 pt-6">
            <p class="text-sm">Deteksi gejala penyakit pada tanaman secara otomatis.</p>
            <p class="text-xs text-gray-500 leading-relaxed mt-2">
            Untuk hasil yang lebih akurat, arahkan kamera ke bagian <span class="font-medium text-[#4e6c59]">daun</span>, <span class="font-medium text-[#4e6c59]">batang</span>, atau <span class="font-medium text-[#4e6c59]">buah</span> tanaman dari jarak dekat.
            </p>
        </div>       

        </div>


  
<!-- Upload View -->
<div v-else class="w-full max-w-sm flex flex-col items-center px-4 text-center">
  <p class="text-base font-semibold mb-2">Upload Foto Tanaman</p>
  <p class="text-xs text-gray-500 mb-4">
    Pilih gambar dari galeri untuk mendeteksi gejala penyakit tanaman.
  </p>

  <input
    type="file"
    accept="image/*"
    @change="handleImageUpload"
    class="mb-4 border border-gray-300 rounded-lg px-4 py-2 w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-[#638872] file:text-white hover:file:bg-[#4e6c59]"
  />

  <div v-if="previewImage" class="w-full mb-4">
    <img :src="previewImage" class="rounded-xl shadow w-full object-cover" />
  </div>

  <button
    class="px-6 py-2 bg-[#638872] text-white rounded-full shadow hover:bg-[#4e6c59] disabled:opacity-50 disabled:cursor-not-allowed"
    @click="scanImage"
    :disabled="!previewImage"
  >
    Scan Sekarang
  </button>
</div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    components: { Navbar },
    data() {
      return {
        isScan: true,
        previewImage: null,
        stream: null,
      };
    },
    computed: {
      activeTabClass() {
        return 'bg-[#638872] text-white';
      },
      inactiveTabClass() {
        return 'bg-transparent text-gray-700';
      }
    },
    mounted() {
      this.startCamera();
    },
    methods: {
      switchTab(scanMode) {
        this.isScan = scanMode;
        if (scanMode) {
          this.startCamera();
        } else {
          this.stopCamera();
        }
      },
      async startCamera() {
        try {
          this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
          this.$refs.video.srcObject = this.stream;
        } catch (error) {
          console.error("Error accessing camera:", error);
          alert("Gagal mengakses kamera.");
        }
      },
      stopCamera() {
        if (this.stream) {
          this.stream.getTracks().forEach(track => track.stop());
          this.stream = null;
        }
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.previewImage = URL.createObjectURL(file);
        }
      },
      scanImage() {
        alert("Scanning uploaded image...");
        // logic for image scan goes here
      },

      takePhoto() {
        alert("Tombol shutter ditekan (fitur ambil gambar belum diimplementasikan)");
     }

    },
    beforeDestroy() {
      this.stopCamera();
    }
  };
  </script>
  
  <style scoped>
  input[type="file"] {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
  }
  </style>
  