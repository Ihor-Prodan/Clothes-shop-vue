<script lang="ts" setup>
  import { computed, onMounted } from 'vue';
  import ProductCard from './ProductCard.vue';
  import UIbutton from './UIcomponents/UIbutton.vue';
  import { useProductStore } from '@/stores/product';

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
    background: #FFF;
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
          <ProductCard :product="product" />
        </template>
      </div>
      <div class="button-container">
        <UIbutton
          title="View All"
          :style="styleButton"
        />
      </div>
      <div
        v-if="isArrivals"
        class="line"
      ></div>
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

  .line {
    margin-top: 64px;
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    padding-inline: -100px;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
</style>
