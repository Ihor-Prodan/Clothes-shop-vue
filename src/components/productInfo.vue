<script setup lang="ts">
  import Line from './UIcomponents/UIline.vue';
  import UIswiper from './UIcomponents/IUswiper.vue';
  import UIsizeButton from './UIcomponents/UIsizeButton.vue';
  import UIbutton from './UIcomponents/UIbutton.vue';

  import { useProductStore } from '@/stores/product';
  import { computed } from 'vue';
  const productsArr = useProductStore();
  const productsList = computed(() => productsArr.products);

  const infoButtonStyle = `
   display: flex;
    width: 400px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    background: #000;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    border: none;
  `;
</script>

<template>
  <div class="wrapper">
    <section class="product-info">
      <Line />
      <div class="products-link-container">
        <p class="link-home">Home</p>
        <img
          class="link-icon"
          src="../assets/svg/linkIcon.svg"
        />
        <p class="link-product">Casual</p>
        <img
          class="link-icon"
          src="../assets/svg/linkIcon.svg"
        />
        <p class="link-product">Info</p>
        <img
          class="link-icon"
          src="../assets/svg/linkIcon.svg"
        />
        <p class="link-product">Info</p>
      </div>

      <div class="product-info-container">
        <UIswiper :images="productsList[0].images" />
        <div class="product-info-container-info">
          <div class="product-info-container-info-type">
            <h1 class="product-info-container-info-title">
              {{ productsList[0].name }}
            </h1>
            <div class="product-info-container-info-review">
              <img
                v-for="(star, index) in Number(
                  productsList[0].rating.toString()[0]
                )"
                :key="index"
                class="product-info-container-info-review-icon"
                src="../assets/svg/rating.svg"
              />
              <p class="product-info-container-info-review-text">
                {{ productsList[0].rating.toString()[0] }}/5
              </p>
            </div>
            <div class="product-info-container-info-price">
              <p class="product-info-priceNew">
                {{ productsList[0].discountPrice }}
              </p>
              <p class="product-info-priceDiscount">
                {{ productsList[0].price }}
              </p>
              <div class="product-info-priceDiscountPrcent">
                {{ productsList[0].discount }}%
              </div>
            </div>
            <p class="product-info-container-info-text">
              {{ productsList[0].description }}
            </p>
          </div>
          <div class="sizeAndbuttons">
            <Line />
            <div class="product-info-container-info-size">
              <p class="product-info-container-info-size-title">Size:</p>
              <div class="product-info-container-info-size-container">
                <UIsizeButton :sizes="productsList[0].large" />
              </div>
            </div>
            <Line />
            <div class="product-info-container-info-buttons">
              <div class="counter-button">
                <img
                  class="minus"
                  src="../assets/svg/minus.svg"
                />
                <p class="countainer-button-text">1</p>
                <img
                  class="plus"
                  src="../assets/svg/plus.svg"
                />
              </div>
              <UIbutton
                title="Add to Cart"
                :is-white="false"
                :style="infoButtonStyle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .product-info {
    display: flex;
    flex-direction: column;
    padding-inline: 100px;

    &-container {
      display: flex;
      flex-direction: row;
      gap: 40px;
      margin-top: 30px;

      &-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &-info-size {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-title {
          font-size: 16px;
          font-weight: 500;
        }

        &-container {
          display: flex;
          flex-direction: row;
          gap: 10px;
        }
      }

      &-info-buttons {
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }

    &-priceDiscount {
      color: rgba(0, 0, 0, 0.4);
      font-size: 24px;
      font-weight: 700;
      text-decoration: line-through;
    }

    &-priceNew {
      color: #000;
      font-size: 24px;
      font-weight: 700;
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

  .products-link-container {
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .product-info-container {
    display: flex;
    flex-direction: row;

    &-info-title {
      color: #000;
      font-size: 40px;
      font-weight: 700;
    }

    &-info-text {
      margin: 10px 0;
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    }

    &-info-review {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      align-items: center;

      &-icon {
        margin-bottom: 2px;
      }

      &-text {
        color: #000;
        font-size: 16px;
        font-weight: 400;
      }
    }

    &-info-price {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

  .counter-button {
    display: flex;
    width: 170px;
    height: 52px;
    padding: 16px 20px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 62px;
    background: #f0f0f0;
  }

  .sizeAndbuttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
