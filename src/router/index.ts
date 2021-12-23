import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'start-screen',
    component: () => import(/* webpackChunkName: "start-screen" */ '@/pages/StartScreen.vue'),
  },
  {
    path: '/main-menu',
    name: 'main-menu',
    component: () => import(/* webpackChunkName: "main-menu" */ '@/pages/MainMenu.vue'),
  },
  {
    path: '/game',
    name: 'main-game',
    component: () => import(/* webpackChunkName: "main-game" */ '@/views/GameLayout.vue'),
    children: [
      {
        path: 'first-fight',
        name: 'first-fight',
        component: () => import(/* webpackChunkName: "main-game" */ '@/pages/FirstFight.vue'),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
