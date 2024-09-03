<script setup lang="ts">
  import UIbutton from './UIcomponents/UIbutton.vue';
  import Line from './UIcomponents/UIline.vue';
  import UIrange from './UIcomponents/UIrange.vue';
  import UIsizeButton from './UIcomponents/UIsizeButton.vue';

  const filterClosesType = [
    'T-shirts',
    'Shorts',
    'Shirts',
    'Hoodie',
    'Dress',
    'Trousers',
  ];

  const filterButtonStyle = `
    display: flex;
    width: 210px;
    height: 42px;
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

  const filterStyleType = ['Casual', 'Formal', 'Party', 'Gym'];
</script>

<template>
  <section class="filters">
    <p class="filters-title">Filters</p>
    <div class="line-container">
      <Line />
    </div>
    <p class="filters-container-filter-name">Type</p>
    <div class="filters-container">
      <div
        v-for="type in filterClosesType"
        :key="type"
        class="filters-container-filter-type"
      >
        <p class="filters-container-filter-text">{{ type }}</p>
        <img
          class="filters-container-filter-icon"
          src="../assets/svg/linkIcon.svg"
        />
      </div>
      <div class="line-container">
        <Line />
      </div>
      <div class="filters-container-filter-price">
        <p class="filters-container-filter-name">Price</p>
        <UIrange />
      </div>
      <Line />
      <div class="filters-container-filter-size">
        <p class="filters-container-filter-name">Size</p>
        <div class="filters-container-filter-size-container">
          <UIsizeButton />
        </div>
      </div>
      <Line />
      <p class="filters-container-filter-name">Style</p>
      <div
        v-for="type in filterStyleType"
        :key="type"
        class="filters-container-filter-type"
      >
        <p class="filters-container-filter-text">{{ type }}</p>
        <img
          class="filters-container-filter-icon"
          src="../assets/svg/linkIcon.svg"
        />
      </div>
      <div class="button-container">
        <UIbutton
          :is-white="false"
          :style="filterButtonStyle"
          title="Apply Filter"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/_mixins.scss';

  .filters {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 80%;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    padding: 10px;

    &-title {
      text-align: center;
      color: #000;
      font-size: 20px;
      font-weight: 700;
    }

    &-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      &-filter-type {
        padding: 3px 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e4e4e4;
        border-radius: 10px;
        transition: box-shadow 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
      }

      &-filter-text {
        color: rgba(0, 0, 0, 0.6);
        @include fontBase;

        &:hover {
          font-weight: 500;
        }
      }

      &-filter-name {
        display: flex;
        margin-block: 10px;
        color: #000;
        font-size: 16px;
        font-weight: 700;
      }

      &-filter-size {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-container {
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
    }
  }

  .line-container {
    width: 100%;
    margin: 10px 0 15px 0;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 15px;
  }
</style>
