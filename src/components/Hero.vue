<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import Button from './UIcomponents/UIbutton.vue';
  import { useProductStore } from '@/stores/product';
  const router = useRouter();
  const productsArr = useProductStore();

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

  const goToShop = () => {
    router.push('/shop');
    productsArr.fetchProducts();
  };
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
          @click="goToShop"
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

  @media (min-width: 768px) and (max-width: 1230px) {
    .hero {
      background-size: cover;
      background-position: center;

      &-title {
        font-size: 44px;
        font-weight: 700;
        line-height: 64px;
      }

      &-content {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 32px;

        &-benefits {
          margin-top: 40px;
          padding-right: 32px;
        }
      }

      &-container {
        padding: 76px 0 36px 50px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 815px) {
    .hero {
      &-title {
        font-size: 34px;
        font-weight: 700;
      }

      &-content {
        gap: 22px;

        &-benefits {
          margin-top: 60px;
          padding-right: 12px;

          &-title {
            color: $primary-color-black;
            font-size: 30px;
            font-weight: 700;
          }
        }
      }

      &-container {
        padding: 76px 0 36px 50px;
      }
    }
  }
</style>
