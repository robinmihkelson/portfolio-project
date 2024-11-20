<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const menuVisible = ref(false);
const router = useRouter();

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const navigateTo = (route) => {
  router.push(route);
};

const goToContact = () => navigateTo('/contact');
const goToHome = () => navigateTo('/home');
const goToAbout = () => navigateTo('/about');
const goToService = () => navigateTo('/service');
const goToWork = () => navigateTo('/work')


</script>

<template>
<section>

    
</section>
<nav class="flex justify-evenly flex-col sm:flex-row bg-slate-800 text-emerald-400 p-3 items-center w-1/3 mx-auto rounded-sm border-emerald-400 border-solid border-2 shadow-2xl">
  <button @click="goToHome" class="w-12 md:w-24 mb-2 sm:mb-0 italic"><strong>KEN.</strong></button>
  
  <button class="sm:hidden mb-2" @click="toggleMenu">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
    </svg>
  </button>
  
  <div 
    class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0"
    :class="{ 'hidden sm:flex': !menuVisible, 'flex': menuVisible }">
    <button @click="goToService" class="mx-3 cursor-pointer hover:text-emerald-300 transition-colors duration-300">SERVICES</button>
    <button @click="goToWork" class="mx-3 cursor-pointer hover:text-emerald-300 transition-colors duration-300">WORK</button>
    <button @click="goToAbout" class="mx-3 cursor-pointer hover:text-emerald-300 transition-colors duration-300">ABOUT</button>
  </div>
  
  <button 
    @click="goToContact"
    class="bg-emerald-400 text-slate-900 p-2 font-satoshi rounded-sm mt-2 sm:mt-0 hover:bg-emerald-300 transition-colors duration-300">
    LET'S TALK
  </button>
</nav>

</template>