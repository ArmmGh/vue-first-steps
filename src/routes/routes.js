const routes = [
  {
    mode: 'history',
    name: 'Home',
    path: '/home',
    component: () => import('@/layouts/MainLayout.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
];

export default routes;
