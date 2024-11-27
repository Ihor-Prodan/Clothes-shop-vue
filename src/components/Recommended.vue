<script lang="ts" setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
  import ProductCard from './ProductCard.vue';
  import UIbutton from './UIcomponents/UIbutton.vue';
  import { useProductStore } from '@/stores/product';
  import Line from './UIcomponents/UIline.vue';
  import { useRouter } from 'vue-router';

  interface Props {
    title: string;
  }

  const { title } = defineProps<Props>();
  const router = useRouter();

  const productsArr = useProductStore();
  const products = computed(() => productsArr.products);
  const screenWidth = ref(window.innerWidth);

  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
    productsArr.fetchProducts();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenWidth);
  });

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

    const maxItems = (() => {
      if (screenWidth.value <= 900) {
        return 2;
      }
      if (screenWidth.value <= 1324) {
        return 3;
      }
      return 4;
    })();

    if (isArrivals) {
      return productsCopy.sort((a, b) => b.price - a.price).slice(0, maxItems);
    } else {
      return productsCopy
        .sort((a, b) => b.rating - a.rating)
        .slice(0, maxItems);
    }
  });

  onMounted(() => {
    productsArr.fetchProducts();
  });

  const goToShop = () => {
    router.push('/shop');
    productsArr.fetchProducts();
  };
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
          @click="goToShop"
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

  @media (min-width: 901px) and (max-width: 1324px) {
    .recommended {
      &-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 36px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 900px) {
    .recommended {
      &-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 36px;
      }
    }
  }
</style>
