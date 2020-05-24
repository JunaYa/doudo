import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/pages/home/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/pages/signin/SignIn.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('@/pages/todo/TodoView.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
