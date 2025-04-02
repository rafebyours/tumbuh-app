<template>
  <div class="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-[#638872] flex justify-around py-3 rounded-full shadow-lg">
    <!-- Button Garden -->
    <router-link to="/home" class="text-white text-xl hover:bg-[#4e6a5a] p-2 rounded-full transition duration-300">
      <button class="focus:outline-none">
        <i class="fa fa-seedling"></i>
      </button>
    </router-link>
    
    <!-- Button Plantbook -->
    <router-link to="/plantbook" class="text-white text-xl hover:bg-[#4e6a5a] p-2 rounded-full transition duration-300">
      <button class="focus:outline-none">
        <i class="fa fa-book"></i>
      </button>
    </router-link>
    
    <!-- Button Notification -->
    <router-link to="/notifications" class="text-white text-xl hover:bg-[#4e6a5a] p-2 rounded-full transition duration-300">
      <button class="focus:outline-none">
        <i class="fa fa-bell"></i>
      </button>
    </router-link>
    
    <!-- Button Profile -->
    <router-link to="/profile" class="text-white text-xl hover:bg-[#4e6a5a] p-2 rounded-full transition duration-300">
      <button class="focus:outline-none">
        <i class="fa fa-user"></i>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>

<style>
/* Styling tambahan untuk hover */
button:hover {
  background-color: #4e6a5a; /* Warna hijau lebih gelap untuk hover */
}
</style>