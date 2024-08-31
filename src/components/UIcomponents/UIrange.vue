<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useProductStore } from '@/stores/product';

  const { products } = useProductStore();

  const minPrice = ref(0);
  const maxPrice = ref(100);

  const filteredProducts = computed(() => {
    return products.filter((product) => {
      return product.price >= minPrice.value && product.price <= maxPrice.value;
    });
  });

  const updateFilteredProducts = () => {
    filteredProducts.value;
  };
</script>

<template>
  <div class="price-filter">
    <label for="min-price">Minimum price: {{ minPrice }}</label>
    <input
      id="min-price"
      v-model="minPrice"
      type="range"
      min="0"
      :max="maxPrice"
      @input="updateFilteredProducts"
    />

    <label for="max-price">Maximum price: {{ maxPrice }}</label>
    <input
      id="max-price"
      v-model="maxPrice"
      type="range"
      :min="minPrice"
      max="100"
      @input="updateFilteredProducts"
    />

    <p>Selected range: {{ minPrice }} - {{ maxPrice }}</p>
  </div>
</template>

<style scoped>
  .price-filter {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
</style>
