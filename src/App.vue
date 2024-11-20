<template>
  <RouterView></RouterView>
</template>

<script>
import FrontPage from './components/FrontPage.vue';

export default {
  name: 'App',
  components: {
    FrontPage, 
  },
};
</script>

<style scoped>
.section-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform: translateZ(0); /* This can help with rendering */
  }
  
  .section-hover:hover {
    transform: scale(1.05) translateZ(0); /* Apply scale without layout shift */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    .fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }

    .fade-out {
      animation: fadeOut 0.8s ease-out forwards;
    }
</style>
