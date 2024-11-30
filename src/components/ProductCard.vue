<script setup lang="ts">
  import type { Product } from '@/Types/Product';
  import { computed } from 'vue';

  const props = defineProps<{ product: Product }>();

  const processedImages = computed(() => {
    const baseUrl = import.meta.env.BASE_URL || '/';

    return props.product.images.map((image) => `${baseUrl}${image}`);
  });
</script>

<template>
  <section class="productCard">
    <img
      class="productCard-image"
      alt="productCard-image"
      :src="processedImages[0]"
    />
    <p class="productCard-title">{{ product.name.toUpperCase() }}</p>
    <div>
      <div class="productCard-ratingContainer">
        <div class="productCard-rating-stars">
          <img
            v-for="(star, index) in Number(props.product.rating.toString()[0])"
            :key="index"
            class="productCard-rating"
            alt="rating"
            src="../assets/svg/rating.svg"
          />
        </div>
        <p class="productCard-ratingNumber">
          {{ product.rating.toString()[0] }}/5
        </p>
      </div>
      <div class="productCard-priceContainer">
        <p class="productCard-priceContainer-price">
          {{
            product.discountPrice > 0 ? product.discountPrice : product.price
          }}
        </p>
        <template v-if="product.discountPrice > 0">
          <p class="productCard-priceContainer-priceDiscount">
            {{ product.price }}
          </p>
          <div class="productCard-priceContainer-priceDiscountPrcent">
            {{ product.discount }}%
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import '@/assets/variables.scss';

  .productCard {
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition:
      box-shadow 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    max-height: 440px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.4);
      transition:
        box-shadow 0.3s ease-in-out,
        transform 0.3s ease-in-out;
    }

    &-image {
      max-width: 295px;
      max-height: 298px;
      object-fit: cover;
      padding-left: 1px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      background: #f0eeed;
      object-position: top;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.02);
        transition: transform 0.3s ease-in-out;
      }
    }

    &-title {
      color: $primary-color-black;
      font-size: 20px;
      font-weight: 700;
    }

    &-ratingContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 13px;
    }

    &-rating-stars {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }

    &-ratingNumber {
      margin-top: 2px;
      color: $primary-color-black;
      font-size: 14px;
      font-weight: 400;
    }

    &-priceContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      &-price {
        color: #000;
        font-size: 24px;
        font-weight: 700;
      }

      &-priceDiscount {
        color: rgba(0, 0, 0, 0.4);
        font-size: 24px;
        font-weight: 700;
        text-decoration: line-through;
      }

      &-priceDiscountPrcent {
        display: flex;
        width: 58px;
        padding: 6px 14px;
        justify-content: center;
        align-items: center;
        gap: 12px;
        border-radius: 62px;
        background: rgba(255, 51, 51, 0.1);
        color: #f33;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1324px) {
    .productCard {
      &-image {
        max-width: 100%;
      }
    }
  }
</style>
