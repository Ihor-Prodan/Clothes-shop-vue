import type { Product } from '@/Types/Product';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    productsInCart: [] as Product[],
  }),
  actions: {
    addProductToCart(product: Product) {
      this.productsInCart.push(product);
    },
    removeProductFromCart(productId: number) {
      this.productsInCart = this.productsInCart.filter(
        (product: Product) => product.id !== productId
      );
    },
  },
});
