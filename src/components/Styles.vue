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
        <div class="styles-grid">
          <div class="containerImg">
            <div class="grid-item small">
              <p class="styles-container-image-title">Casual</p>
              <img
                class="image"
                :src="dressStyles[0].imageSrc"
                :alt="dressStyles[0].title"
                @click="goToShop(dressStyles[0].title.toLowerCase())"
              />
            </div>
            <div class="grid-item large">
              <p class="styles-container-image-title">Formal</p>
              <img
                class="image"
                :src="dressStyles[1].imageSrc"
                :alt="dressStyles[1].title"
                @click="goToShop(dressStyles[1].title.toLowerCase())"
              />
            </div>
          </div>

          <div class="containerImg">
            <div class="grid-item large">
              <p class="styles-container-image-title">Party</p>
              <img
                class="image"
                :src="dressStyles[2].imageSrc"
                :alt="dressStyles[2].title"
                @click="goToShop(dressStyles[2].title.toLowerCase())"
              />
            </div>
            <div class="grid-item small">
              <p class="styles-container-image-title">Gym</p>
              <img
                class="image"
                :src="dressStyles[3].imageSrc"
                :alt="dressStyles[3].title"
                @click="goToShop(dressStyles[3].title.toLowerCase())"
              />
            </div>
          </div>
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
    width: 100%;
    height: 800px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #f0f0f0;

    &-container {
      padding-inline: 50px;
      width: 100%;
      gap: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-container-image {
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

  .containerImg {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 12px;
    margin-bottom: 12px;
  }

  .image {
    width: 100%;
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
    display: flex;
    position: relative;
    max-width: 354px;
    max-height: 251px;
    height: auto;
  }

  .large {
    display: flex;
    position: relative;
    max-width: 642px;
    max-height: 251px;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 915px) {
    .styles {
      height: 650px;
    }
  }
</style>
