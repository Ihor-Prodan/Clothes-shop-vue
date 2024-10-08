<script lang="ts" setup>
  import UIbutton from './UIcomponents/UIbutton.vue';
  import Line from './UIcomponents/UIline.vue';

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
      <div class="cart-container-product">
        <div class="cart-container-product-info">
          <div class="product-cards-container">
            <div class="product-cards">
              <div class="cart-container-product-info-container">
                <img class="cart-container-product-info-img" />
                <div class="cart-container-product-info-img-container-info">
                  <p
                    class="cart-container-product-info-img-container-info-title"
                  >
                    Gradient Graphic T-shirt
                  </p>
                  <p
                    class="cart-container-product-info-img-container-info-size"
                  >
                    Size:
                  </p>
                  <p
                    class="cart-container-product-info-img-container-info-price"
                  >
                    $145
                  </p>
                </div>
              </div>
              <div class="cart-container-product-info-quantity">
                <img class="delete-icon" />
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
              </div>
            </div>
            <Line />
            <div class="product-cards">
              <div class="cart-container-product-info-container">
                <img class="cart-container-product-info-img" />
                <div class="cart-container-product-info-img-container-info">
                  <p
                    class="cart-container-product-info-img-container-info-title"
                  >
                    Gradient Graphic T-shirt
                  </p>
                  <p
                    class="cart-container-product-info-img-container-info-size"
                  >
                    Size:
                  </p>
                  <p
                    class="cart-container-product-info-img-container-info-price"
                  >
                    $145
                  </p>
                </div>
              </div>
              <div class="cart-container-product-info-quantity">
                <img
                  class="delete-icon"
                  src="../assets/svg/delete.svg"
                />
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
              </div>
            </div>
            <Line />
            <div class="product-cards">
              <div class="cart-container-product-info-container">
                <img class="cart-container-product-info-img" />
                <div class="cart-container-product-info-img-container-info">
                  <p
                    class="cart-container-product-info-img-container-info-title"
                  >
                    Gradient Graphic T-shirt
                  </p>
                  <p
                    class="cart-container-product-info-img-container-info-size"
                  >
                    Size: M
                  </p>
                  <p
                    class="cart-container-product-info-img-container-info-price"
                  >
                    $145
                  </p>
                </div>
              </div>
              <div class="cart-container-product-info-quantity">
                <img
                  class="delete-icon"
                  src="../assets/svg/delete.svg"
                />
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
              </div>
            </div>
          </div>

          <div class="cart-container-product-summary">
            <p class="cart-container-product-summary-title">Order Summary</p>
            <div class="cart-container-product-summary-info">
              <div class="cart-container-product-summary-info-text-container">
                <p class="cart-container-product-summary-info-text">Subtotal</p>
                <p class="cart-container-product-summary-info-price">$565</p>
              </div>
              <div class="cart-container-product-summary-info-text-container">
                <p class="cart-container-product-summary-info-text">
                  Discount (<span class="discount">-20%</span>)
                </p>
                <p class="cart-container-product-summary-info-price discount">
                  -$113
                </p>
              </div>
              <div class="cart-container-product-summary-info-text-container">
                <p class="cart-container-product-summary-info-text">
                  Delivery Fee
                </p>
                <p class="cart-container-product-summary-info-price">$15</p>
              </div>
              <Line />
              <div class="cart-container-product-summary-info-text-container">
                <p class="cart-container-product-summary-info-text">Total</p>
                <p class="cart-container-product-summary-info-price">$467</p>
              </div>
              <div class="button-container">
                <UIbutton
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

    &-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 24px;
      gap: 16px;
      justify-content: space-between;
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
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

      &-container-info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-title {
          color: #000;
          font-size: 16px;
          font-weight: 500;
        }

        &-size {
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
          font-weight: 400;
        }

        &-price {
          color: #000;
          font-size: 16px;
          font-weight: 500;
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
</style>
