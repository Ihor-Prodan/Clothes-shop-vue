<script setup lang="ts"></script>

<template>
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
      <div class="swiper-container">
        <img
          class="swiper-image"
          src="../assets/img/productInfo.png"
        />
        <img
          class="swiper-image"
          src="../assets/img/productInfo.png"
        />
        <img
          class="swiper-image"
          src="../assets/img/productInfo.png"
        />
        <img
          class="swiper-image"
          src="../assets/img/productInfo.png"
        />
      </div>
      <div class="product-info-container-info">
        <h1 class="product-info-container-info-title">Title</h1>
        <div class="product-info-container-info-review">
          <img
            class="product-info-container-info-review-icon"
            src="../assets/svg/star.svg"
          />
          <p class="product-info-container-info-review-text">/5</p>
        </div>
        <div class="product-info-container-info-price">
          <p class="product-info-container-info-review-text">$260</p>
          <p class="product-info-container-info-review-text">$300</p>
        </div>
        <div class="productCard-priceContainer-priceDiscountPrcent">10%</div>
        <p class="product-info-container-info-text">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
    </div>
  </section>
</template>
