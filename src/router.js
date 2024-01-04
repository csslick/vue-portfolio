// import { createWebHistory, createRouter } from "vue-router";
import { createRouter, createWebHashHistory } from 'vue-router'
import Title from './components/Title.vue';
import Portfolio from './components/Portfolio.vue';
import About from './components/About.vue';
import Detail from './components/Detail.vue';

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
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router; 