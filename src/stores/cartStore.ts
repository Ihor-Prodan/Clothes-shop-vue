import type { Product } from '@/Types/Product';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    productsInCart: [] as (Product & { quantity: number })[],
  }),
  actions: {
    addProductToCart(product: Product) {
      const existingProduct = this.productsInCart.find(
        (p) => p.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.productsInCart.push({ ...product, quantity: 1 });
      }
    },
    removeProductFromCart(productId: number) {
      const productIndex = this.productsInCart.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        if (this.productsInCart[productIndex].quantity > 1) {
          this.productsInCart[productIndex].quantity -= 1;
        } else {
          this.productsInCart.splice(productIndex, 1);
        }
      }
    },
    deleteProductById(productId: number) {
      const productIndex = this.productsInCart.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        this.productsInCart.splice(productIndex, 1);
      }
    },
  },
});
