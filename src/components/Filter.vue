<script setup lang="ts">
  import Line from './UIcomponents/UIline.vue';
  import UIrange from './UIcomponents/UIrange.vue';
  import UIsizeButton from './UIcomponents/UIsizeButton.vue';
  import { computed, onMounted, watch } from 'vue';
  import { useFilterStore } from '@/stores/filterStore';
  import type { Product } from '@/Types/Product';

  const filterStore = useFilterStore();
  const emit = defineEmits(['update-products']);
  const props = defineProps<{ productsList: Product[] }>();

  const filterClothesType = [
    'T-shirts',
    'Shorts',
    'Shirts',
    'Hoodie',
    'Dress',
    'Trousers',
  ];
  const filterStyleType = ['Casual', 'Formal', 'Party', 'Gym'];

  const selectedClothesType = computed(() => filterStore.selectedClothesType);
  const selectedStyleType = computed(() => filterStore.selectedStyleType);
  const selectedSize = computed(() => filterStore.selectedSize);
  const priceRange = computed(() => filterStore.priceRange);
  const hasActiveFilters = computed(() => filterStore.hasActiveFilters);

  const filteredItems = computed(() => {
    if (!hasActiveFilters.value) {
      return props.productsList;
    } else {
      return props.productsList.filter((item) => {
        const matchesType =
          !selectedClothesType.value.length ||
          selectedClothesType.value.some((selected) => selected === item.type);
        const matchesStyle =
          !selectedStyleType.value.length ||
          selectedStyleType.value.some((selected) => selected === item.style);
        const matchesSize =
          !selectedSize.value || item.large.includes(selectedSize.value);
        const matchesPrice =
          item.price >= priceRange.value[0] &&
          item.price <= priceRange.value[1];

        return matchesType && matchesStyle && matchesSize && matchesPrice;
      });
    }
  });

  watch(
    [selectedClothesType, selectedStyleType, selectedSize, priceRange],
    () => {
      emit('update-products', filteredItems.value);
    }
  );

  const updateSelectedClothesType = (type: string) => {
    filterStore.resetFilters();
    filterStore.setSelectedClothesType([type]);
  };

  const updateSelectedStyleType = (style: string) => {
    filterStore.resetFilters();
    filterStore.setSelectedStyleType([style]);
  };

  const updatePriceRange = (range: [number, number]) => {
    filterStore.resetFilters();
    filterStore.setPriceRange(range);
  };

  onMounted(() => {
    filterStore.setSelectedClothesType(selectedClothesType.value);
    filterStore.setSelectedStyleType(selectedStyleType.value);
    filterStore.setSelectedSize(selectedSize.value);
    filterStore.setPriceRange(priceRange.value);
  });
</script>

<template>
  <section class="filters">
    <p class="filters-title">Filters</p>
    <div class="line-container">
      <Line />
    </div>
    <p class="filters-container-filter-name">Type</p>
    <div class="filters-container">
      <div
        v-for="type in filterClothesType"
        :key="type"
        class="filters-container-filter-type"
        @click="updateSelectedClothesType(type)"
      >
        <p class="filters-container-filter-text">{{ type }}</p>
        <img
          class="filters-container-filter-icon"
          src="../assets/svg/linkIcon.svg"
        />
      </div>
      <div class="line-container">
        <Line />
      </div>
      <div class="filters-container-filter-price">
        <p class="filters-container-filter-name">Price</p>
        <UIrange
          v-model="priceRange"
          @change="updatePriceRange"
        />
      </div>
      <Line />
      <div class="filters-container-filter-size">
        <p class="filters-container-filter-name">Size</p>
        <div class="filters-container-filter-size-container">
          <UIsizeButton v-model="selectedSize" />
        </div>
      </div>
      <Line />
      <p class="filters-container-filter-name">Style</p>
      <div
        v-for="type in filterStyleType"
        :key="type"
        class="filters-container-filter-type"
        @click="updateSelectedStyleType(type)"
      >
        <p class="filters-container-filter-text">{{ type }}</p>
        <img
          class="filters-container-filter-icon"
          src="../assets/svg/linkIcon.svg"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/_mixins.scss';

  .filters {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 1000px;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    padding: 10px;

    &-title {
      text-align: center;
      color: #000;
      font-size: 20px;
      font-weight: 700;
    }

    &-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      &-filter-type {
        padding: 3px 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e4e4e4;
        border-radius: 10px;
        transition: box-shadow 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
      }

      &-filter-text {
        color: rgba(0, 0, 0, 0.6);
        @include fontBase;

        &:hover {
          font-weight: 500;
        }
      }

      &-filter-name {
        display: flex;
        margin-block: 10px;
        color: #000;
        font-size: 16px;
        font-weight: 700;
      }

      &-filter-size {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-container {
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
    }
  }

  .line-container {
    width: 100%;
    margin: 10px 0 15px 0;
  }
</style>
