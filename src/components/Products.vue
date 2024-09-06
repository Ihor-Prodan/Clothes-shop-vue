<script setup lang="ts">
  import { useProductStore } from '@/stores/product';
  import ProductCard from './ProductCard.vue';
  import UIdrobdown from './UIcomponents/UIdrobdown.vue';
  import { computed, onMounted, ref, watch } from 'vue';
  import Filter from './Filter.vue';
  import Line from './UIcomponents/UIline.vue';
  import Pagination from './Pagination.vue';
  import type { Product } from '@/Types/Product';
  import { useFilterStore } from '@/stores/filterStore';

  const productsArr = useProductStore();
  const productsList = computed(() => productsArr.products);

  const filteredProducts = ref<Product[]>(productsList.value);

  const updateFilteredProducts = (filtered: Product[]) => {
    filteredProducts.value = filtered;
  };

  onMounted(() => {
    productsArr.fetchProducts();
    filteredProducts.value = productsList.value;
  });

  watch(productsList, () => {
    if (!useFilterStore().hasActiveFilters) {
      filteredProducts.value = productsList.value;
    }
  });
</script>

<template>
  <div class="wrapper">
    <section class="products">
      <Line />
      <div class="products-link-container">
        <p class="link-home">Home</p>
        <img
          class="link-icon"
          src="../assets/svg/linkIcon.svg"
        />
        <p class="link-product">Casual</p>
      </div>
      <div class="products-container-andProducts">
        <Filter
          :products-list="productsList"
          @update-products="updateFilteredProducts"
        />

        <div class="products-container">
          <div class="product-type-container">
            <div class="product-typeAndTitle">
              <p class="product-type">Casual</p>
              <div class="product-type-container-filter">
                <UIdrobdown />
              </div>
            </div>
            <div class="products-grid">
              <template
                v-for="product in filteredProducts"
                :key="product.id"
              >
                <ProductCard :product="product" />
              </template>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .products {
    margin-bottom: 80px;

    &-link-container {
      margin: 30px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 25px;
    }

    .products-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
    }

    .products-container-andProducts {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    .product-typeAndTitle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .product-type {
      font-size: 24px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }

    .product-type-container-filter {
      margin-bottom: 30px;
      display: flex;
    }
  }
</style>
