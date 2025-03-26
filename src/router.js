import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from './components/FrontPage.vue';
import Services from './components/Services.vue';
import About from './components/About.vue';
import Pages from './components/Pages.vue';



const routes = [
  {
    path: '/',
    component: FrontPage,
    name: 'Frontpage' 
  },
  {
    path: '/services',
    component: Services,
    name: 'Services' 
  },
  {
    path: '/about',
    component: About,
    name: 'about' 
  },
  {
    path: '/pages',
    component: Pages,
    name: 'pages' 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;