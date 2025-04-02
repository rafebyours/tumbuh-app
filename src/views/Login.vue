<template>
  <div class="flex items-end justify-center min-h-screen bg-[#638872] p-4 relative">
    <div class="bg-white p-8 rounded-t-2xl shadow-lg w-full max-w-none absolute h-[75vh] bottom-0 left-0 right-0">
      <div class="text-left">
        <h2 class="text-2xl font-bold text-gray-800">Masuk</h2>
      </div>
      <form @submit.prevent="handleLogin" class="mt-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <div class="relative mt-1">
            <span class="absolute inset-y-0 left-3 flex items-center">
              <i class="fa fa-envelope text-gray-700"></i>
            </span>
            <input type="email" v-model="email" class="pl-10 p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
          </div>
        </div>
        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <div class="relative mt-1">
            <span class="absolute inset-y-0 left-3 flex items-center">
              <i class="fa fa-lock text-gray-700"></i>
            </span>
            <input type="password" v-model="password" class="pl-10 p-3 w-full border rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100" required />
          </div>
        </div>
        <button type="submit" class="w-full mt-6 bg-[#638872] text-white py-3 rounded-full hover:bg-[#4e6a5a] transition">Next</button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">Belum memiliki akun? <a href="/register" class="text-green-500 hover:underline">Daftar</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      console.log('Email:', this.email, 'Password:', this.password);
      // Tambahkan logika autentikasi di sini
    }
  }
};
</script>

<style>
.bg-green-700 {
  background-color: #2f855a;
}
</style>
