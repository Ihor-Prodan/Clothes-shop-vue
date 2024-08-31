<template>
  <section class="filter">
    <div class="filter-container">
      <p class="filter-text">Showing 1-10 of 100 Products</p>
      <p class="filter-text">Sort by:</p>
      <span class="filter-text-bold">Most Popular</span>
      <img
        class="filter-sort-icon"
        src="../../assets/svg/linkIcon.svg"
      />
    </div>
    <ul class="filter-sort-list">
      <li class="-filter-sort-list-item"></li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import '../../assets/_mixins.scss';

  .filter {
    width: 100%;

    &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      width: 100%;
    }

    &-text {
      color: rgba(0, 0, 0, 0.6);
      @include fontBase;
      text-wrap: nowrap;
      margin-left: 5px;

      &-bold {
        color: #000;
        font-weight: 500;
      }
    }

    &-sort-icon {
      transform: rotate(90deg);
    }
  }
</style>
