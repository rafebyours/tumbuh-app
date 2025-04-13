<template>
  <div class="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-white flex justify-around py-3 rounded-2xl shadow-lg border border-gray-100">
    <!-- Garden Button -->
    <router-link to="/home" class="group relative flex flex-col items-center" active-class="text-[#638872]">
      <i class="fa fa-seedling text-xl mb-1 text-gray-600 group-hover:text-[#638872] transition-colors duration-300"></i>
      <span class="text-xs text-gray-500 group-hover:text-[#638872] transition-colors duration-300">Kebun</span>
      
      <!-- Animated indicator bar -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#638872] transition-all duration-300"
           :class="currentRoute === '/home' ? 'w-6' : 'w-0'"></div>
    </router-link>
    
    <!-- Plantbook Button -->
    <router-link to="/plantbook" class="group relative flex flex-col items-center" active-class="text-[#638872]">
      <i class="fa fa-book text-xl mb-1 text-gray-600 group-hover:text-[#638872] transition-colors duration-300"></i>
      <span class="text-xs text-gray-500 group-hover:text-[#638872] transition-colors duration-300">Buku</span>
      
      <!-- Animated indicator bar -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#638872] transition-all duration-300"
           :class="currentRoute === '/plantbook' ? 'w-6' : 'w-0'"></div>
    </router-link>
    
    <!-- Camera Button -->
    <router-link to="/plantdetect" class="group relative flex flex-col items-center" active-class="text-[#638872]">
      <i class="fa fa-camera text-xl mb-1 text-gray-600 group-hover:text-[#638872] transition-colors duration-300"></i>
      <span class="text-xs text-gray-500 group-hover:text-[#638872] transition-colors duration-300">Scan</span>
      
      <!-- Animated indicator bar -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#638872] transition-all duration-300"
           :class="currentRoute === '/plantdetect' ? 'w-6' : 'w-0'"></div>
    </router-link>
    
    <!-- Profile Button -->
    <router-link to="/profile" class="group relative flex flex-col items-center" active-class="text-[#638872]">
      <i class="fa fa-user text-xl mb-1 text-gray-600 group-hover:text-[#638872] transition-colors duration-300"></i>
      <span class="text-xs text-gray-500 group-hover:text-[#638872] transition-colors duration-300">Profil</span>
      
      <!-- Animated indicator bar -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#638872] transition-all duration-300"
           :class="currentRoute === '/profile' ? 'w-6' : 'w-0'"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      currentRoute: ''
    }
  },
  created() {
    // Set initial route
    this.currentRoute = this.$route.path;
    
    // Listen for route changes
    this.$router.afterEach((to) => {
      this.currentRoute = to.path;
      
      // Add a small animation effect when changing routes
      this.animatePageTransition();
    });
  },
  methods: {
    animatePageTransition() {
      // You could add custom page transition logic here if needed
      // For example, triggering animations when routes change
    }
  }
}
</script>

<style scoped>
/* Animation for page transitions */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Add active styles with router-link-active */
.router-link-active i, 
.router-link-active span {
  color: #638872;
  font-weight: 500;
}

/* Hover effects */
.group:hover i,
.group:hover span {
  transform: translateY(-2px);
}

i, span {
  transition: transform 0.2s, color 0.3s;
}
</style>