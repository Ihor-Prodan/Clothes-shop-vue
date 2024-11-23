<script setup lang="ts">
  import { ref } from 'vue';
  import type { Reviews } from '@/Types/reviews';

  const props = defineProps<Reviews>();
  const isExpanded = ref(false);

  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
  };
</script>

<template>
  <section
    class="reviews"
    :class="{ 'reviews--expanded': isExpanded }"
    @mouseenter="toggleExpand"
    @mouseleave="toggleExpand"
  >
    <div class="reviews-star-container">
      <img
        v-for="(star, index) in props.stars"
        :key="index"
        class="reviews-star"
        src="../assets/svg/rating.svg"
        alt="star"
      />
    </div>
    <div class="reviews-titleContainer">
      <p class="reviews-title">{{ props.name }}</p>
      <img
        class="reviews-title-image"
        src="../assets/svg/confirm.svg"
        alt="quote"
      />
    </div>
    <p
      class="reviews-text"
      :class="{ 'reviews-text--clamped': !isExpanded }"
    >
      {{ props.text }}
    </p>
  </section>
</template>

<style scoped lang="scss">
  @import '../assets/_mixins.scss';

  .reviews {
    display: flex;
    max-width: 400px;
    min-height: 240px;
    padding: 28px 32px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px 342px;
    flex-shrink: 0;
    flex-wrap: wrap;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: height 0.3s ease-in-out;

    &--expanded {
      height: auto;
    }

    &-star-container {
      display: flex;
      align-items: flex-start;
      gap: 6.487px;
    }

    &-titleContainer {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    &-text {
      @include fontBase;
      color: rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s ease-in-out;

      &--clamped {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
    }
  }
</style>
