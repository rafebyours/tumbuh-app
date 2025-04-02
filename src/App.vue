<template>
  <!-- <SplashScreen v-if="showSplash" />  -->
  <!-- <router-view v-else /> -->
  <router-view />
</template>

<script>
import { ref, onMounted } from 'vue';
import SplashScreen from '@/components/SplashScreen.vue';

export default {
  components: { SplashScreen },

  setup() {
    const showSplash = ref(true);

    onMounted(() => {
      setTimeout(() => {
        showSplash.value = false;
      }, 5000); // Sama seperti di SplashScreen.vue
    });

    return { showSplash };
  },
};
</script>
