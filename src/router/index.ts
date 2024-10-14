import HomePage from '@/views/HomePage.vue';
import ShopPage from '@/views/ShopPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
    },
    {
      path: '/product/:id',
      name: 'info',
      component: () => import('../views/ProductInfoPage.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartPage.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('');
    // }
  ],
});

router.afterEach(() => {
  const activeElement = document.activeElement as HTMLInputElement;

  if (!activeElement || activeElement.type !== 'range') {
    window.scrollTo(0, 0);
  }
});
export default router;
