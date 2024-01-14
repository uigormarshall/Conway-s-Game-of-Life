import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/maze', component: () => import('./pages/Maze.vue') },
  { path: '/game-of-life', component: () => import('./pages/GameOfLife.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
