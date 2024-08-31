<script setup lang="ts">
  import Line from './UIcomponents/UIline.vue';
  import UIrange from './UIcomponents/UIrange.vue';

  const filterClosesType = [
    'T-shirts',
    'Shorts',
    'Shirts',
    'Hoodie',
    'Dressy',
    'Trousers',
  ];
</script>

<template>
  <section class="filters">
    <p class="filters-title">Filters</p>
    <div class="line-container">
      <Line />
    </div>
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
        <p class="filters-container-filter-text">Price</p>
        <UIrange />
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
    height: auto;
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
      }

      &-filter-text {
        color: rgba(0, 0, 0, 0.6);
        @include fontBase;
      }
    }
  }

  .line-container {
    width: 100%;
    margin: 10px 0 15px 0;
  }
</style>
