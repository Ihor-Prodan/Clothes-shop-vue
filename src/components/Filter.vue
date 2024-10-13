<script setup lang="ts">
  import Line from './UIcomponents/UIline.vue';
  import UIrange from './UIcomponents/UIrange.vue';
  import UIsizeButton from './UIcomponents/UIsizeButton.vue';
  import { computed, onMounted, watch } from 'vue';
  import { useFilterStore } from '@/stores/filterStore';
  import type { Product } from '@/Types/Product';
  import { useRoute, useRouter } from 'vue-router';

  const filterStore = useFilterStore();
  const emit = defineEmits(['update-products']);
  const props = defineProps<{ productsList: Product[] }>();
  const router = useRouter();
  const route = useRoute();

  const filterClothesType = [
    'All types',
    'T-shirts',
    'Shorts',
    'Shirts',
    'Hoodie',
    'Dress',
    'Trousers',
  ];
  const sizesFilter = ['ALL', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const filterStyleType = ['All styles', 'Casual', 'Formal', 'Party', 'Gym'];
  const filterSexType = ['All clothes', 'Male', 'Female'];

  const selectedClothesType = computed(() => filterStore.selectedClothesType);
  const selectedStyleType = computed(() => filterStore.selectedStyleType);
  const selectedSize = computed(() => filterStore.selectedSize);
  const priceRange = computed(() => filterStore.priceRange);
  const selectedSex = computed(() => filterStore.selectedSexType);
  const hasActiveFilters = computed(() => filterStore.hasActiveFilters);

  const filteredItems = computed(() => {
    if (!hasActiveFilters.value) {
      return props.productsList;
    } else {
      return filterStore.filteredItems(props.productsList);
    }
  });

  watch(
    [
      selectedClothesType,
      selectedStyleType,
      selectedSize,
      priceRange,
      selectedSex,
    ],
    () => {
      updateQueryParams();
      emit('update-products', filteredItems.value);
    }
  );

  const updateSelectedClothesType = (type: string) => {
    filterStore.setSelectedClothesType([type]);

    updateQueryParams();
  };

  const updateSelectedSexType = (sex: string) => {
    filterStore.setSelectedSexType([sex]);

    updateQueryParams();
  };

  const updateSelectedStyleType = (style: string) => {
    filterStore.setSelectedStyleType([style]);

    router.push({ path: '/shop', query: { style: style } });

    updateQueryParams();
  };

  watch(
    () => route.query.style,
    (newStyle) => {
      if (newStyle) {
        filterStore.setSelectedStyleType([newStyle as string]);
      }
    },
    { immediate: true }
  );

  watch(
    () => selectedSex.value,
    () => {
      updateQueryParams();
      emit('update-products', filteredItems.value);
    }
  );

  const updatePriceRange = (range: [number, number]) => {
    const minPrice = range[0];
    const maxPrice = range[1];

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      filterStore.setPriceRange([minPrice, maxPrice]);

      updateQueryParams();
    }
  };

  onMounted(() => {
    filterStore.setSelectedClothesType(selectedClothesType.value);
    filterStore.setSelectedStyleType(selectedStyleType.value);
    filterStore.setSelectedSize(selectedSize.value);
    filterStore.setPriceRange(priceRange.value);
    filterStore.setSelectedSexType(selectedSex.value);
  });

  const updateQueryParams = () => {
    const queryParams: any = { ...route.query };

    if (selectedClothesType.value.length) {
      queryParams.type = selectedClothesType.value;
    }

    if (selectedSex.value.length) {
      queryParams.sex = selectedSex.value;
    }

    if (selectedStyleType.value.length) {
      queryParams.style =
        selectedStyleType.value[0].charAt(0).toUpperCase() +
        selectedStyleType.value[0].slice(1).toLowerCase();
    }

    if (selectedSize.value) {
      queryParams.size = selectedSize.value;
    }

    if (priceRange.value) {
      queryParams.minPrice = String(priceRange.value[0]);
      queryParams.maxPrice = String(priceRange.value[1]);
    }

    router.push({ path: '/shop', query: queryParams });
  };

  watch(
    () => route.query,
    (newQuery) => {
      if (newQuery.style) {
        filterStore.setSelectedStyleType([newQuery.style as string]);
      }
      if (newQuery.minPrice && newQuery.maxPrice) {
        filterStore.setPriceRange([
          Number(newQuery.minPrice),
          Number(newQuery.maxPrice),
        ]);
      }
    },
    { immediate: true }
  );

  onMounted(() => {
    updateQueryParams();
  });
</script>

<template>
  <section class="filters">
    <p class="filters-title">Filters</p>
    <div class="line-container">
      <Line />
    </div>
    <p class="filters-container-filter-name">Sex</p>
    <div
      v-for="sex in filterSexType"
      :key="sex"
      :class="{
        filterActive: selectedSex.includes(sex),
        'filters-container-filter-type': !selectedSex.includes(sex),
      }"
      @click="updateSelectedSexType(sex)"
    >
      <p class="filters-container-filter-text">{{ sex }}</p>
      <img
        class="filters-container-filter-icon"
        src="../assets/svg/linkIcon.svg"
      />
    </div>
    <p class="filters-container-filter-name">Type</p>
    <div class="filters-container">
      <div
        v-for="type in filterClothesType"
        :key="type"
        :class="{
          filterActive: selectedClothesType.includes(type),
          'filters-container-filter-type': !selectedClothesType.includes(type),
        }"
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
          @change="
            updatePriceRange([
              parseInt(String(route.query.minPrice), 10),
              parseInt(String(route.query.maxPrice), 10),
            ])
          "
        />
      </div>
      <Line />
      <div class="filters-container-filter-size">
        <p class="filters-container-filter-name">Size</p>
        <div class="filters-container-filter-size-container">
          <UIsizeButton
            v-model="selectedSize"
            :sizes="sizesFilter"
          />
        </div>
      </div>
      <Line />
      <p class="filters-container-filter-name">Style</p>
      <div
        v-for="type in filterStyleType"
        :key="type"
        :class="{
          filterActive:
            (selectedStyleType.includes(type) &&
              !selectedStyleType.includes('All styles')) ||
            (type === 'All styles' && selectedStyleType.includes('All styles')),
          'filters-container-filter-type': !selectedStyleType.includes(type),
        }"
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
    height: max-content;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    padding: 15px 10px;

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

        &:hover .filters-container-filter-text {
          font-weight: 500;
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

  .filterActive {
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease-in-out;
    border-bottom: 1px solid #e4e4e4;
    border-radius: 10px;
    padding: 3px 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .filterActive .filters-container-filter-icon {
    transform: rotate(90deg);
    transition: transform 0.3s ease-in-out;
  }

  .filterActive .filters-container-filter-text {
    font-weight: 500;
  }

  .filters-container-filter-icon {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease-in-out;
  }
</style>
