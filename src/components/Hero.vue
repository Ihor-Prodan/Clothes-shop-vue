<script setup lang="ts">
  import Button from './UIcomponents/UIbutton.vue';

  const benefitsList = [
    {
      title: '200+',
      subtitle: 'International Brands',
    },
    {
      title: '2,000+',
      subtitle: 'High-Quality Products',
    },
    {
      title: '30,000+',
      subtitle: 'Happy Customers',
    },
  ];

  const heroButtonStyle = `
    display: flex;
    width: 210px;
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
    border: transparent;
  `;
</script>

<template>
  <div class="wrapper">
    <section class="hero">
      <div class="hero-container">
        <h1 class="hero-title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p class="hero-subtitle">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button
          :is-white="false"
          title="Shop Now"
          :style="heroButtonStyle"
        />
        <div class="hero-content">
          <div
            v-for="item of benefitsList"
            :key="item.subtitle"
            class="hero-content-benefits"
          >
            <p class="hero-content-benefits-title">{{ item.title }}</p>
            <p class="hero-content-benefits-subtitle">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @import '../assets/variables.scss';
  @import '../assets/_mixins.scss';

  .hero {
    background-image: url(../assets/image/hero.png);
    height: 663px;
    position: relative;

    &-container {
      max-width: 576px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 106px 0 106px 100px;
    }

    &-title {
      color: $primary-color-black;
      font-size: 64px;
      font-weight: 700;
      line-height: 64px;
    }

    &-subtitle {
      @include fontBase;
      color: rgba(0, 0, 0, 0.6);
    }

    &-content {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 32px;

      &-benefits {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        padding-right: 32px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);

        &-title {
          color: $primary-color-black;
          font-size: 40px;
          font-weight: 700;
        }

        &-subtitle {
          @include fontBase;
          color: rgba(0, 0, 0, 0.6);
          text-wrap: nowrap;
        }
      }
    }
  }

  .starBig {
    position: absolute;
    top: 86px;
    right: 81px;
  }

  .starSmall {
    position: absolute;
    top: 297px;
    right: 634px;
  }
</style>
