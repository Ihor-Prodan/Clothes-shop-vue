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
  import { useRoute, useRouter } from 'vue-router';

  const productsArr = useProductStore();
  const productsList = computed(() => productsArr.products);

  const filteredProducts = ref<Product[]>(productsList.value);

  const currentPage = ref(1);
  const productsPerPage = ref(9);
  const sortCriteria = ref('Most Popular');

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * productsPerPage.value;
    const end = start + productsPerPage.value;
    return sortedProducts.value.slice(start, end);
  });

  const updateSortCriteria = (newCriteria: string) => {
    sortCriteria.value = newCriteria;
  };

  const sortedProducts = computed(() => {
    return [...filteredProducts.value].sort((a, b) => {
      if (sortCriteria.value === 'Most Popular') {
        return b.rating - a.rating;
      } else if (sortCriteria.value === 'Most Cheapest') {
        return a.price - b.price;
      } else if (sortCriteria.value === 'Most Expensive') {
        return b.price - a.price;
      }
      return 0;
    });
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / productsPerPage.value);
  });

  const goToNextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1;
    }
  };

  const goToPreviousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value -= 1;
    }
  };

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

  const route = useRoute();
  const router = useRouter();
  const selectedStyle = ref(route.query.style as string | undefined);

  const queryTitle = computed(() => {
    if (selectedStyle.value) {
      return (
        selectedStyle.value.charAt(0).toUpperCase() +
        selectedStyle.value.slice(1).toLowerCase()
      );
    }
    return 'All styles';
  });

  const updateQueryParams = () => {
    const queryParams: any = { ...route.query };

    queryParams.page = currentPage.value;

    router.push({ path: '/shop', query: queryParams });
  };

  watch(
    () => route.query.page,
    (newPage) => {
      currentPage.value = parseInt(newPage as string) || 1;
    },
    { immediate: true }
  );

  watch(
    () => route.query.style,
    (newStyle) => {
      selectedStyle.value = newStyle as string | undefined;
    }
  );

  onMounted(() => {
    currentPage.value = parseInt(route.query.page as string, 10) || 1;
  });
</script>

<template>
  <div class="wrapper">
    <section class="products">
      <Line />
      <div class="products-link-container">
        <p
          class="link-home"
          @click="router.push('/')"
        >
          Home
        </p>
        <img
          class="link-icon"
          src="../assets/svg/linkIcon.svg"
        />
        <p class="link-product">{{ queryTitle }}</p>
      </div>
      <div class="products-container-andProducts">
        <Filter
          :products-list="productsList"
          @update-products="updateFilteredProducts"
        />

        <div class="products-container">
          <div class="product-type-container">
            <div class="product-typeAndTitle">
              <p class="product-type">{{ queryTitle }}</p>
              <div
                v-if="filteredProducts.length"
                class="product-type-container-filter"
              >
                <UIdrobdown
                  :filtered-products="filteredProducts.length"
                  :products-list="productsList.length"
                  :sort-criteria="sortCriteria"
                  @update-sort-criteria="updateSortCriteria"
                />
              </div>
            </div>
            <div
              v-if="!filteredProducts.length"
              class="products-message"
            >
              <p class="no-products-message">
                No products found matching your filters.
              </p>
            </div>
            <div
              v-else
              class="products-grid"
            >
              <template
                v-for="product in paginatedProducts"
                :key="product.id"
              >
                <router-link :to="`/product/${product.id}`">
                  <ProductCard :product="product"
                /></router-link>
              </template>
            </div>
            <Pagination
              v-if="filteredProducts.length"
              :current-page="currentPage"
              :total-pages="totalPages"
              @next-page="goToNextPage"
              @previous-page="goToPreviousPage"
              @go-to-page="
                (page) => {
                  currentPage = page;
                  updateQueryParams();
                }
              "
            />
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
      min-height: 1113px;
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

  .products-message {
    text-align: center;
    padding: 40px;
    font-size: 2.6em;
    color: #555;
  }

  .no-products-message {
    color: #555;
  }
</style>
