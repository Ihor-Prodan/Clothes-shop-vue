<template>
  <section class="productCard">
    <img
      class="productCard-image"
      alt="productCard-image"
      src="../assets/image/card.png"
    />
    <p class="productCard-title">T-SHIRT WITH TAPE DETAILS</p>
    <div>
      <div class="productCard-ratingContainer">
        <div class="productCard-rating-stars">
          <img
            class="productCard-rating"
            alt="rating"
            src="../assets/svg/rating.svg"
          />
          <img
            class="productCard-rating"
            alt="rating"
            src="../assets/svg/rating.svg"
          />
          <img
            class="productCard-rating"
            alt="rating"
            src="../assets/svg/rating.svg"
          />
        </div>
        <p class="productCard-ratingNumber">3/5</p>
      </div>
      <div class="productCard-priceContainer">
        <p class="productCard-priceContainer-price">$240</p>
        <p class="productCard-priceContainer-priceDiscount">$260</p>
        <div class="productCard-priceContainer-priceDiscountPrcent">-20%</div>
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
    max-width: 296px;
    max-height: 440px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 10px;

    &-image {
      max-width: 295px;
      max-height: 298px;
      padding-left: 1px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      background: #f0eeed;
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
</style>
