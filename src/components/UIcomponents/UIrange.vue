<script setup lang="ts">
  import { useFilterStore } from '@/stores/filterStore';
  import { onMounted, reactive, watch } from 'vue';

  const filterStore = useFilterStore();

  const priceRange = reactive({
    min: filterStore.priceRange[0],
    max: filterStore.priceRange[1],
  });

  watch(priceRange, (newRange) => {
    filterStore.setPriceRange([newRange.min, newRange.max]);
  });

  onMounted(() => {
    priceRange.min = filterStore.priceRange[0];
    priceRange.max = filterStore.priceRange[1];
  });
</script>

<template>
  <div class="price-filter">
    <label for="min-price">Minimum price: {{ priceRange.min }}</label>
    <input
      id="min-price"
      v-model="priceRange.min"
      type="range"
      min="0"
      max="100"
    />

    <label for="max-price">Maximum price: {{ priceRange.max }}</label>
    <input
      id="max-price"
      v-model="priceRange.max"
      type="range"
      min="0"
      max="100"
    />

    <p>Selected range: {{ priceRange.min }} - {{ priceRange.max }}</p>
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
