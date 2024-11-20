import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from './components/FrontPage.vue';

const routes = [
  { path: '/', component: FrontPage, name: 'Front' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;