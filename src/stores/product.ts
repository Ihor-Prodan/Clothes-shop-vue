import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Product } from '@/Types/Product';
import { getProducts } from '@/fetchDATA/fechAPI';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);

  async function fetchProducts() {
    try {
      const response = await getProducts();
      products.value = response;
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }

  const getProductById = (id: number) => {
    return products.value.find((product) => product.id === id);
  };

  return { fetchProducts, products, getProductById };
});
