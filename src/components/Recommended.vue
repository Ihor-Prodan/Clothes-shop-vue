<script lang="ts" setup>
  import ProductCard from './ProductCard.vue';
  import UIbutton from './UIcomponents/UIbutton.vue';

  interface Props {
    title: string;
  }

  const { title } = defineProps<Props>();

  const styleButton = `
    display: flex;
    width: 218px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
  `;

  const isArrivals = title.includes('ARRIVALS');
</script>

<template>
  <div class="wrapper">
    <section class="recommended">
      <h2
        class="recommended-title"
        :id="isArrivals ? 'new-arrivals' : 'sale'"
      >
        {{ title }}
      </h2>
      <div class="recommended-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <UIbutton
        title="View All"
        :style="styleButton"
      />
      <div
        class="line"
        v-if="isArrivals"
      ></div>
    </section>
  </div>
</template>

<style lang="scss">
  .recommended {
    // padding-inline: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 72px;
    background: #fff;

    &-title {
      color: #000;
      text-align: center;
      font-size: 48px;
      font-weight: 700;
    }

    &-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 36px;
    }
  }

  .line {
    margin-top: 64px;
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    padding-inline: -100px;
  }
</style>
