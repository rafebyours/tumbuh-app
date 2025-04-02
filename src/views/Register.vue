<template>
    <div class="flex items-end justify-center min-h-screen bg-[#638872] p-4 relative">
        <div class="bg-white p-8 rounded-t-2xl shadow-lg w-full max-w-none absolute bottom-0 left-0 right-0 min-h-[60vh] max-h-[85vh] overflow-y-auto pb-6">
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800">Daftar</h2>
        </div>
        <form @submit.prevent="handleRegister" class="mt-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nama</label>
            <div class="relative mt-1">
              <span class="absolute inset-y-0 left-3 flex items-center">
                <i class="fa fa-user text-gray-500"></i>
              </span>
              <input type="text" v-model="name" class="pl-10 p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <div class="relative mt-1">
              <span class="absolute inset-y-0 left-3 flex items-center">
                <i class="fa fa-envelope text-gray-500"></i>
              </span>
              <input type="email" v-model="email" class="pl-10 p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Kata Sandi</label>
            <div class="relative mt-1">
              <span class="absolute inset-y-0 left-3 flex items-center">
                <i class="fa fa-lock text-gray-500"></i>
              </span>
              <input type="password" v-model="password" class="pl-10 p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Konfirmasi Kata Sandi</label>
            <div class="relative mt-1">
              <span class="absolute inset-y-0 left-3 flex items-center">
                <i class="fa fa-lock text-gray-500"></i>
              </span>
              <input type="password" v-model="confirmPassword" class="pl-10 p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Jenis Petani</label>
            <select v-model="farmerType" class="p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100">
              <option value="mandiri">Menanam Mandiri</option>
              <option value="kelompok">Bergabung dengan Kelompok Tani</option>
            </select>
          </div>
          <div v-if="farmerType === 'kelompok'" class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Nama Kelompok Tani</label>
            <input type="text" v-model="groupName" class="p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
          </div>
          <div v-if="farmerType === 'kelompok'" class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Lokasi</label>
            <input type="text" v-model="location" class="p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
          </div>
          <button type="submit" class="w-full mt-6 bg-[#638872] text-white py-3 rounded-full hover:bg-[#4e6a5a] transition">Daftar</button>
        </form>
        <p class="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="/login" class="text-green-500 hover:underline">Masuk</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        farmerType: 'mandiri',
        groupName: '',
        location: ''
      };
    },
    methods: {
      handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        console.log('Email:', this.email, 'Password:', this.password, 'Farmer Type:', this.farmerType, 'Group Name:', this.groupName, 'Location:', this.location);
        // Tambahkan logika registrasi di sini
      }
    }
  };
  </script>
  
  <style>
  .bg-green-700 {
    background-color: #2f855a;
  }
  </style>