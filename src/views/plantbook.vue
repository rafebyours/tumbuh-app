<template>
    <Navbar />
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div class="bg-[#638872] p-8 rounded-b-2xl shadow-lg w-full max-w-none absolute h-[25vh] top-0 left-0 right-0">
    <h1 class="text-3xl font-bold text-left text-white">Plantbook</h1>
</div>
  
      <div class="absolute w-full h-[65vh] overflow-hidden pt-1 pb-10">
        <div class="carousel flex items-center justify-center relative h-full">
          <div 
            v-for="(hobby, index) in hobbies" 
            :key="hobby.title" 
            class="absolute transition-transform transform duration-300 flex flex-col items-center justify-center"
            :class="getCardClass(index)"
            @touchstart="startSwipe($event)"
            @touchmove="moveSwipe($event)"
            @touchend="endSwipe">
            <div class="bg-white p-6 rounded-xl shadow-lg w-80 flex flex-col items-center">
              <img :src="hobby.image" class="rounded-xl mb-4 w-[250px] h-[330px]" alt="Hobby image" />
              <h2 class="text-xl font-semibold">{{ hobby.title }}</h2>
              <button @click="readMore" class="mt-4 px-4 py-2 text-[#638872] rounded hover:bg-white">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Book1 from "../assets/Book1.jpeg"
  import Book2 from "../assets/Book2.jpeg"

  export default {
    components: {
    Navbar,
  },

    data() {
      return {
        hobbies: [
          { title: "Painting", image: Book1 },
          { title: "Photography", image: Book2 },
          { title: "Cooking", image: "https://example.com/cooking.png" }
        ],
        currentIndex: 0,
        startX: 0,
        endX: 0
      };
    },
    methods: {
      startSwipe(event) {
        this.startX = event.touches[0].clientX;
      },
      moveSwipe(event) {
        this.endX = event.touches[0].clientX;
      },
      endSwipe() {
        if (this.startX - this.endX > 50) {
          this.nextHobby();
        } else if (this.endX - this.startX > 50) {
          this.prevHobby();
        }
      },
      nextHobby() {
        this.currentIndex = (this.currentIndex + 1) % this.hobbies.length;
      },
      prevHobby() {
        this.currentIndex = (this.currentIndex - 1 + this.hobbies.length) % this.hobbies.length;
      },
      readMore() {
        alert(`Read more about ${this.hobbies[this.currentIndex].title}`);
      },
      getCardClass(index) {
        const position = index - this.currentIndex;
        if (position === 0) return "scale-110 z-10 shadow-xl translate-y-0 translate-x-0";
        if (position === 1 || position === -this.hobbies.length + 1) return "scale-90 opacity-70 z-0 translate-y-16 translate-x-24";
        if (position === -1 || position === this.hobbies.length - 1) return "scale-90 opacity-70 z-0 translate-y-16 -translate-x-24";
        return "hidden";
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    width: 100%;
    position: relative;
  }
  </style>