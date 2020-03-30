import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/user', component: '@/layout/LoginLayout',
      routes: [
        { path: '/user', component: '@/pages/user' }
      ]
    },
    {
      path: '/', component: '@/layout/GeneralLayout',
      routes: [
        { path: '/about', component: '@/pages/pages/AboutPage' },
        { path: '/', component: '@/pages/pages/HomePage', }
      ]
    }
  ]
});
