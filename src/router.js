import { createWebHistory, createRouter } from "vue-router";
import Title from './components/Title.vue';
import Portfolio from './components/Portfolio.vue';
import About from './components/About.vue';


const routes = [
  {
    path: "/",
    component: Title,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 