<script lang="ts" setup>
  import { useCartStore } from '@/stores/cartStore';
  import UIbutton from './UIcomponents/UIbutton.vue';
  import Line from './UIcomponents/UIline.vue';
  import { computed, ref, watch } from 'vue';
  import type { Product } from '@/Types/Product';
  import { useRouter } from 'vue-router';

  const productsCart = useCartStore();
  const products = ref(productsCart.productsInCart);
  const router = useRouter();

  const goToProduct = (product: Product) => {
    router.push({ name: 'info', params: { id: product.id } });
  };

  const buttonStyle = `
    max-width: 200px;
    display: flex;
    height: 50px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 62px;
    background: #000;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    border: none;
`;

  const deleteProductFromCart = (productId: number, size: string) => {
    productsCart.deleteProductById(productId, size);
  };

  const totalPrice = computed(() => {
    return products.value.reduce(
      (total, product) =>
        total +
        (product.discountPrice || product.price) * (product.quantity || 1),
      0
    );
  });

  watch(
    () => productsCart.productsInCart,
    (newProducts) => {
      products.value = newProducts;
    }
  );
  const deliveryFee = 15;

  const totalWithDiscount = computed(() => {
    return (totalPrice.value + deliveryFee).toFixed(2);
  });

  const increaseProductQuantity = (product: Product, size: string) => {
    productsCart.addProductToCart(product, size);
  };

  const decreaseProductQuantity = (productId: number, size: string) => {
    productsCart.removeProductFromCart(productId, size);
  };

  watch(
    () => productsCart.productsInCart,
    (newProducts) => {
      products.value = newProducts;
    }
  );
</script>

<template>
  <section class="cart">
    <Line />
    <div class="link-container">
      <p class="link-home">Home</p>
      <img
        class="link-icon"
        src="../assets/svg/linkIcon.svg"
      />
      <p class="link-product">Cart</p>
    </div>
    <div class="cart-container">
      <h3 class="cart-container-title">Your Cart</h3>
      <div
        v-if="products.length === 0"
        class="cart-container-empty"
      >
        <img
          class="cart-container-empy"
          src="../assets/image/cartEmpy.webp"
        />
      </div>

      <div
        v-if="products.length > 0"
        class="cart-container-product"
      >
        <div class="cart-container-product-info">
          <div class="product-cards-container">
            <transition-group
              name="fade"
              tag="div"
              class="product-cards-container"
            >
              <template
                v-for="(product, index) in products"
                :key="product.id"
              >
                <div
                  class="product-cards"
                  @click="goToProduct(product)"
                >
                  <div class="cart-container-product-info-container">
                    <img
                      class="cart-container-product-info-img"
                      :src="product.images[0]"
                    />
                    <div class="cart-container-product-info-img-container-info">
                      <p
                        class="cart-container-product-info-img-container-info-title"
                      >
                        {{ product.name }}
                      </p>
                      <p
                        class="cart-container-product-info-img-container-info-size"
                      >
                        Size: {{ product.size }}
                      </p>
                      <p
                        class="cart-container-product-info-img-container-info-price"
                      >
                        {{ product.discountPrice || product.price }}
                      </p>
                    </div>
                  </div>
                  <div class="cart-container-product-info-quantity">
                    <div class="counter-button">
                      <img
                        class="minus"
                        src="../assets/svg/minus.svg"
                        @click.stop="
                          decreaseProductQuantity(product.id, product.size)
                        "
                      />
                      <p class="countainer-button-text">
                        {{ product.quantity }}
                      </p>
                      <img
                        class="plus"
                        src="../assets/svg/plus.svg"
                        @click.stop="
                          increaseProductQuantity(product, product.size)
                        "
                      />
                    </div>
                  </div>
                  <img
                    class="cart-container-product-info-delete"
                    src="../assets/svg/delete.svg"
                    @click.stop="
                      deleteProductFromCart(product.id, product.size)
                    "
                  />
                </div>
                <Line v-if="index !== products.length - 1" />
              </template>
            </transition-group>
          </div>

          <div class="cart-container-product-summary">
            <p class="cart-container-product-summary-title">Order Summary</p>
            <div class="cart-container-product-summary-info">
              <div class="cart-container-product-summary-info-text-container">
                <p class="cart-container-product-summary-info-text">Subtotal</p>
                <p class="cart-container-product-summary-info-price">
                  €{{ totalPrice.toFixed(2) }}
                </p>
              </div>
              <div class="cart-container-product-summary-info-text-container">
                <p class="cart-container-product-summary-info-text">
                  Delivery Fee
                </p>
                <p class="cart-container-product-summary-info-price">
                  €{{ deliveryFee }}
                </p>
              </div>
              <Line />
              <div class="cart-container-product-summary-info-text-container">
                <p class="cart-container-product-summary-info-text">Total</p>
                <p class="cart-container-product-summary-info-price">
                  €{{ totalWithDiscount }}
                </p>
              </div>
              <div class="button-container">
                <UIbutton
                  :disabled="false"
                  title="Go to Checkout"
                  :is-white="false"
                  :style="buttonStyle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .cart {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    &-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;

      &-title {
        color: #000;
        font-size: 24px;
        font-weight: 500;
      }

      &-product-info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        align-self: stretch;
      }
    }
  }

  .product-cards {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;

    &-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 24px;
      gap: 16px;
      justify-content: space-between;
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      transition: 0.3s;
    }

    &:hover .cart-container-product-info-img {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
      transition: transform 0.3s;
    }

    &:hover .counter-button {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }

    &:hover .cart-container-product-info-img-container-info-title {
      transform: scale(1.1);
    }
    &:hover .cart-container-product-info-img-container-info-size {
      transform: scale(1.1);
    }

    &:hover .cart-container-product-info-img-container-info-price {
      transform: scale(1.1);
    }

    &:hover .cart-container-product-info-delete {
      transform: scale(1.1);
    }
  }

  .cart-container-product-info {
    &-container {
      display: flex;
      flex-direction: row;
      gap: 26px;
      align-items: center;
      justify-content: space-between;
    }

    &-img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      background-color: #000;
      object-fit: cover;
      transition: 0.3s;

      &-container-info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-title {
          color: #000;
          font-size: 16px;
          font-weight: 500;
          transition: 0.3s;
        }

        &-size {
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
          font-weight: 400;
          transition: 0.3s;
        }

        &-price {
          color: #000;
          font-size: 16px;
          font-weight: 500;
          transition: 0.3s;
        }
      }
    }
  }

  .cart-container-product-info-quantity {
    display: flex;
    flex-direction: column;
    gap: 26px;
    align-items: flex-end;
    justify-content: space-between;
  }

  .counter-button {
    max-width: 120px;
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 62px;
    background: #f0f0f0;
    transition: 0.3s;
  }

  .cart-container-product-summary {
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &-title {
      color: #000;
      font-size: 24px;
      font-weight: 400;
    }

    &-info {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
      justify-content: space-between;

      &-text-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      &-text {
        color: rgba(0, 0, 0, 0.6);
        font-size: 16px;
        font-weight: 400;
      }

      &-price {
        color: #000;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  .discount {
    color: #f33;
    font-size: 16px;
    font-weight: 700;
  }

  .button-container {
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .cart-container-product-info-delete {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    position: absolute;
    top: -7px;
    right: -3px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }

  .cart-container-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }
</style>
