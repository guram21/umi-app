import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/user',
      component: '@/layout/LoginLayout',
      routes: [
        { path: '/user', component: '@/pages/user' },
        { path: '/user/register', component: '@/pages/user/UserRegister' },
      ],
    },

    {
      path: '/',
      component: '@/layout/GeneralLayout',
      routes: [
        { path: '/about', component: '@/pages/pages/AboutPage' },
        { path: '/', component: '@/pages/pages/HomePage' },
      ],
    },
  ],
});
