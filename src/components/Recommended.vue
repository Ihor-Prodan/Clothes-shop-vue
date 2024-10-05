<script lang="ts" setup>
  import { computed, onMounted } from 'vue';
  import ProductCard from './ProductCard.vue';
  import UIbutton from './UIcomponents/UIbutton.vue';
  import { useProductStore } from '@/stores/product';
  import Line from './UIcomponents/UIline.vue';

  interface Props {
    title: string;
  }

  const { title } = defineProps<Props>();

  const productsArr = useProductStore();
  const products = computed(() => productsArr.products);

  const styleButton = `
    display: flex;
    width: 218px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    border: 1px solid rgba(0, 0, 0, 0.10);
  `;

  const isArrivals = title.includes('ARRIVALS');

  const sortedProducts = computed(() => {
    const productsCopy = [...products.value];

    if (isArrivals) {
      return productsCopy.sort((a, b) => b.price - a.price).slice(0, 4);
    } else {
      return productsCopy.sort((a, b) => b.rating - a.rating).slice(0, 4);
    }
  });

  onMounted(() => {
    productsArr.fetchProducts();
  });
</script>

<template>
  <div class="wrapper">
    <section class="recommended">
      <h2
        :id="isArrivals ? 'new-arrivals' : 'sale'"
        class="recommended-title"
      >
        {{ title }}
      </h2>
      <div class="recommended-container">
        <template
          v-for="product in sortedProducts"
          :key="product.id"
        >
          <router-link :to="`/product/${product.id}`">
            <ProductCard :product="product" />
          </router-link>
        </template>
      </div>
      <div class="button-container">
        <UIbutton
          :is-white="true"
          title="View All"
          :style="styleButton"
        />
      </div>
      <template v-if="isArrivals">
        <div class="line-container">
          <Line />
        </div>
      </template>
    </section>
  </div>
</template>

<style lang="scss">
  .recommended {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 72px;
    background: #fff;

    &-title {
      color: #000;
      text-align: center;
      font-size: 48px;
      font-weight: 700;
    }

    &-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 36px;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  .line-container {
    margin-top: 64px;
  }
</style>
