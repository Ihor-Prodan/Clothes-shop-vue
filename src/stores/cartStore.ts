import type { Product } from '@/Types/Product';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    productsInCart: [] as (Product & { quantity: number; size: string })[],
  }),
  actions: {
    addProductToCart(product: Product, size: string) {
      const existingProduct = this.productsInCart.find(
        (p) => p.id === product.id && p.size === size
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.productsInCart.push({ ...product, quantity: 1, size });
      }
    },
    removeProductFromCart(productId: number, size: string) {
      const productIndex = this.productsInCart.findIndex(
        (product) => product.id === productId && product.size === size
      );
      if (productIndex !== -1) {
        if (this.productsInCart[productIndex].quantity > 1) {
          this.productsInCart[productIndex].quantity -= 1;
        } else {
          this.productsInCart.splice(productIndex, 1);
        }
      }
    },
    deleteProductById(productId: number, size: string) {
      const productIndex = this.productsInCart.findIndex(
        (product) => product.id === productId && product.size === size
      );
      if (productIndex !== -1) {
        this.productsInCart.splice(productIndex, 1);
      }
    },
  },
});
