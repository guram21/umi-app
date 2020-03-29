import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/modules/pages/HomePage' },
    { path: '/about', component: '@/modules/pages/AboutPage' },
    { path: '/user', component: '@/modules/user' },

  ],
});
