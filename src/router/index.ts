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
  ],
});

router.afterEach(() => {
  const activeElement = document.activeElement as HTMLInputElement;

  if (!activeElement || activeElement.type !== 'range') {
    window.scrollTo(0, 0);
  }
});

router.beforeEach((to, from, next) => {
  const previous = from.name
    ? typeof from.name === 'string'
      ? from.name.toLowerCase()
      : from.name.toString().toLowerCase()
    : null;
  if (previous) {
    localStorage.setItem('previousRoute', previous);
  }
  next();
});

export default router;
