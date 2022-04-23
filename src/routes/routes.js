import MainLayout from '@/layouts/MainLayout.vue';

const routes = [
  {
    mode: 'history',
    name: 'Home',
    path: '/home',
    component: MainLayout
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
];

export default routes;
