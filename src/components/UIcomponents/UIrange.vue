<script setup lang="ts">
  import { useFilterStore } from '@/stores/filterStore';
  import { ref } from 'vue';

  const filterStore = useFilterStore();
  const priceRange = ref<[number, number]>([...filterStore.priceRange]);

  const updatePriceRange = (range: [number, number]) => {
    filterStore.resetFilters();
    filterStore.setPriceRange(range);
  };
</script>

<template>
  <div class="price-filter">
    <label for="min-price">Minimum price: {{ priceRange[0] }}</label>
    <input
      id="min-price"
      v-model="priceRange[0]"
      type="range"
      min="0"
      max="100"
      @input="updatePriceRange(priceRange)"
    />

    <label for="max-price">Maximum price: {{ priceRange[1] }}</label>
    <input
      id="max-price"
      v-model="priceRange[1]"
      type="range"
      min="0"
      max="100"
      @input="updatePriceRange(priceRange)"
    />

    <p>Selected range: {{ priceRange[0] }} - {{ priceRange[1] }}</p>
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
