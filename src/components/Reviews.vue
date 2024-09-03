<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { Pagination, Navigation } from 'swiper/modules';
  import { useReviewsStore } from '@/stores/reviews';
  import { computed } from 'vue';
  import ReviewCard from './ReviewCard.vue';

  const reviewsArr = useReviewsStore();
  const reviews = computed(() => reviewsArr.reviews);

  console.log(reviews);
</script>

<template>
  <div class="wrapper">
    <section class="reviews">
      <div class="reviews-titleContainer">
        <h2 class="reviews-title">OUR HAPPY CUSTOMERS</h2>
        <div class="reviews-titleContainer-button">
          <img
            class="slider-button-left"
            alt="slider-button"
            src="../assets/svg/sliderArrow.svg"
          />
          <img
            class="slider-button-right"
            alt="slider-button"
            src="../assets/svg/sliderArrow.svg"
          />
        </div>
      </div>
      <Swiper
        :modules="[Pagination, Navigation]"
        :space-between="30"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        navigation
      >
        <SwiperSlide
          v-for="review in reviews"
          :key="review.id"
        >
          <ReviewCard v-bind="review" />
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .reviews {
    margin: 80px 0 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-titleContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      &-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }
    }
  }

  .slider-button-right {
    transform: rotate(180deg);
  }

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
