<script setup lang="ts">
  import Line from './UIcomponents/UIline.vue';
  import UIswiper from './UIcomponents/IUswiper.vue';
  import UIsizeButton from './UIcomponents/UIsizeButton.vue';
  import UIbutton from './UIcomponents/UIbutton.vue';
  import ReviewCard from './ReviewCard.vue';

  import { useProductStore } from '@/stores/product';
  import { computed, onMounted, ref, watch } from 'vue';
  import { useReviewsStore } from '@/stores/reviews';
  import Recommended from './Recommended.vue';
  import { useRoute } from 'vue-router';
  import { useCartStore } from '@/stores/cartStore';
  import ModalAddReview from './ModalAddReview.vue';
  import type { Reviews } from '@/Types/reviews';
  const productsArr = useProductStore();
  const productsCart = useCartStore();

  const route = useRoute();
  const productId = ref(route.params.id);
  const selectedSize = ref<string>('');
  const cartSelectedSize = ref<string>('');
  const errorMessage = ref<string>('');
  const isProductInfo = true;
  const showReviewModal = ref(false);
  const visibleReviewsCount = ref(6);

  const product = computed(() =>
    productsArr.products.find((p) => p.id.toString() === productId.value)
  );

  const reviewsArr = useReviewsStore();

  const reviewsFiltred = computed(() =>
    reviewsArr.reviews.filter(
      (rev) => Number(rev.productID) === product.value?.id
    )
  );

  const limitedReviews = computed(() =>
    reviewsFiltred.value.slice(0, visibleReviewsCount.value)
  );

  const loadMoreReviews = () => {
    visibleReviewsCount.value += 6;
  };

  const reviews = reviewsFiltred;

  const updateSelectedSize = () => {
    if (route.query.size) {
      selectedSize.value = route.query.size as string;
    }
  };

  const updateCartSize = (size: string) => {
    cartSelectedSize.value = size;
    errorMessage.value = '';
  };

  onMounted(() => {
    productsArr.fetchProducts();

    updateSelectedSize();
  });

  watch(
    () => route.query.size,
    (newSize) => {
      if (newSize) {
        selectedSize.value = newSize as string;
      }
    }
  );

  watch(
    () => route.params.id,
    (newId) => {
      productId.value = newId;
      productsArr.fetchProducts();
    }
  );

  const prevLink = computed(() => {
    const storedRoute = localStorage.getItem('previousRoute');
    if (storedRoute) {
      const firstLetter = storedRoute.charAt(0).toUpperCase();
      const remainingLetters = storedRoute.slice(1).toLowerCase();
      return firstLetter + remainingLetters;
    }
    return null;
  });

  const addToCart = () => {
    const product = productsArr.products.find(
      (p) => p.id.toString() === productId.value
    );
    if (product && selectedSize.value) {
      productsCart.addProductToCart(product, selectedSize.value);
    } else {
      errorMessage.value = 'Choose size';
    }
  };

  const activeProduct = computed(() => {
    return productsCart.productsInCart.find(
      (p) =>
        p.id.toString() === productId.value && p.size === selectedSize.value
    );
  });

  const deleteProductFromCart = (productId: number) => {
    productsCart.deleteProductById(productId, selectedSize.value);
  };

  const handleButtonClick = () => {
    if (activeProduct.value) {
      deleteProductFromCart(Number(productId.value));
    } else {
      addToCart();
    }
  };

  function handleAddReview(newReview: Reviews) {
    reviewsArr.addReview(newReview);

    showReviewModal.value = false;
  }

  watch(selectedSize, (newSize) => {
    if (newSize) {
      updateCartSize(newSize);
    }
  });

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
    border: none;
  `;

  const addedProductButton = `
    display: flex;
    width: 400px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    background: #FFF;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid rgba(0, 0, 0, 0.10);
  `;

  const infoReviewButton = `
    display: flex;
    width: 166px;
    height: 48px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    border-radius: 62px;
    background: #000;
    border: none;
`;

  const loadReviev = `
    margin-top: 30px;
    display: flex;
    width: 230px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    border: 1px solid rgba(0, 0, 0, 0.10);
`;
</script>

<template>
  <div class="wrapper">
    <section class="product-info">
      <Line />
      <div class="link-container">
        <p class="link-home">{{ prevLink }}</p>
        <img
          class="link-icon"
          src="../assets/svg/linkIcon.svg"
        />
        <p class="link-product">{{ product?.style }}</p>
        <img
          class="link-icon"
          src="../assets/svg/linkIcon.svg"
        />
        <p class="link-product">{{ product?.type }}</p>
      </div>

      <div
        v-if="product"
        class="product-info-container"
      >
        <UIswiper :images="product.images" />
        <div class="product-info-container-info">
          <div class="product-info-container-info-type">
            <h1 class="product-info-container-info-title">
              {{ product.name }}
            </h1>
            <div class="product-info-container-info-review">
              <img
                v-for="(star, index) in Number(product.rating.toString()[0])"
                :key="index"
                class="product-info-container-info-review-icon"
                src="../assets/svg/rating.svg"
              />
              <p class="product-info-container-info-review-text">
                {{ product.rating.toString()[0] }}/5
              </p>
            </div>
            <div class="product-info-container-info-price">
              <p
                v-if="product.discount > 0"
                class="product-info-priceNew"
              >
                {{ product.discountPrice }}
              </p>

              <p
                :class="
                  product.discount > 0
                    ? 'product-info-priceDiscount'
                    : 'product-info-priceNew'
                "
              >
                {{ product.price }}
              </p>
              <div
                v-if="product.discount > 0"
                class="product-info-priceDiscountPrcent"
              >
                {{ product.discount }}%
              </div>
            </div>
            <p class="product-info-container-info-text">
              {{ product.description }}
            </p>
          </div>
          <div class="sizeAndbuttons">
            <Line />
            <div class="product-info-container-info-size">
              <p class="product-info-container-info-size-title">Size:</p>
              <div class="product-info-container-info-size-container">
                <UIsizeButton
                  v-model="selectedSize"
                  :is-product-info="isProductInfo"
                  :sizes="product?.large"
                  @select-size="updateCartSize(selectedSize)"
                />
              </div>
            </div>
            <Line />
            <div class="product-info-container-info-buttons">
              <UIbutton
                v-if="!errorMessage"
                :title="activeProduct ? 'Remove from Cart' : 'Add to Cart'"
                :is-white="false"
                :style="activeProduct ? addedProductButton : infoButtonStyle"
                @click="handleButtonClick"
              />
              <UIbutton
                v-if="errorMessage"
                :title="errorMessage"
                :is-white="false"
                :style="activeProduct ? addedProductButton : infoButtonStyle"
                @click="handleButtonClick"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="product-info-review-container">
        <div class="review-titleAndButton">
          <h3 class="review-title">All Reviews</h3>
          <UIbutton
            title="Write a Review"
            :is-white="false"
            :style="infoReviewButton"
            @click="showReviewModal = true"
          />
        </div>
        <div
          v-if="reviews.length > 0"
          class="review-grid"
        >
          <ReviewCard
            v-for="review in limitedReviews"
            :key="review.id"
            v-bind="review"
          />
        </div>
        <div
          v-else
          class="review-grid-empty"
        >
          <p class="review-grid-empty-text">
            Looks like no one has reviewed this product. You could be the first!
          </p>
        </div>
        <ModalAddReview
          v-if="showReviewModal"
          @close="showReviewModal = false"
          @submit-review="handleAddReview"
        />
        <div
          v-if="reviewsFiltred.length > visibleReviewsCount"
          class="addReview-container"
        >
          <UIbutton
            title="Load More Reviews"
            :is-white="true"
            :style="loadReviev"
            @click="loadMoreReviews"
          />
        </div>
      </div>
      <div class="recommended-container">
        <Recommended title="YOU MIGHT ALSO LIKE" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .product-info {
    display: flex;
    flex-direction: column;

    &-container {
      display: flex;
      flex-direction: row;
      gap: 40px;
      margin-top: 30px;

      &-info {
        width: 100%;
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

  .product-info-review-container {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .review-titleAndButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .review-title {
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }

  .review-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;

    &-empty {
      display: flex;
      flex-direction: row;
      gap: 25px;
      align-items: center;
      justify-content: center;
      width: 100%;

      &-text {
        margin-top: 90px;
        display: flex;
        color: rgba(0, 0, 0, 0.4);
        font-size: 34px;
        font-weight: 400;
        text-align: center;
      }
    }
  }

  .addReview-container {
    display: flex;
    justify-content: center;
  }

  .recommended-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    width: 100%;
  }
</style>
