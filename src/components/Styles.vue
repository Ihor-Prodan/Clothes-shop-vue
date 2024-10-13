<script lang="ts" setup>
  import casual from '../assets/image/casual.png';
  import formal from '../assets/image/formal.png';
  import party from '../assets/image/party.png';
  import gym from '../assets/image/gym.png';
  import { useRouter } from 'vue-router';
  import { useProductStore } from '@/stores/product';

  const dressStyles = [
    { title: 'Casual', imageSrc: casual, size: 'small' },
    { title: 'Formal', imageSrc: formal, size: 'large' },
    { title: 'Party', imageSrc: party, size: 'large' },
    { title: 'Gym', imageSrc: gym, size: 'small' },
  ];

  const router = useRouter();
  const productsArr = useProductStore();

  const goToShop = (style: string) => {
    router.push({ path: '/shop', query: { style } });
    productsArr.fetchProducts();
  };
</script>

<template>
  <div class="wrapper">
    <section
      id="styles"
      class="styles"
    >
      <div class="styles-container">
        <h2 class="styles-title">BROWSE BY DRESS STYLE</h2>
        <div class="styles-container-image">
          <template
            v-for="style in dressStyles"
            :key="style.title"
          >
            <div :class="style.size">
              <p class="styles-container-image-title">{{ style.title }}</p>
              <img
                class="image"
                :src="style.imageSrc"
                :alt="style.title"
                @click="goToShop(style.title.toLowerCase())"
              />
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .styles {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1239px;
    height: 866px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #f0f0f0;

    &-container {
      gap: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-container-image {
      padding-inline: 60px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 12px;

      &-title {
        position: absolute;
        left: 30px;
        top: 20px;
        color: #000;
        font-size: 24px;
        font-weight: 700;
        z-index: 4;
      }
    }
  }

  .image {
    width: 100%;
    max-height: 294px;
    border-radius: 20px;
    background: #fff;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      transition: transform 0.3s ease-in-out;
      box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.4);
    }
  }

  .small {
    position: relative;
    width: 407px;
    height: auto;
  }

  .large {
    position: relative;
    width: 684px;
    height: auto;
  }
</style>
