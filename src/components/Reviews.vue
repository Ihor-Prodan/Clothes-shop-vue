<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { Navigation } from 'swiper/modules';
  import { useReviewsStore } from '@/stores/reviews';
  import { computed, ref } from 'vue';
  import ReviewCard from './ReviewCard.vue';
  import { useScreenWidth } from '@/Hooks/useScreenWidth';

  const reviewsArr = useReviewsStore();
  const { screenWidth } = useScreenWidth();
  const reviews = computed(() =>
    reviewsArr.reviews.filter((rev) => rev.stars > 3)
  );

  const slidesPerView = computed(() => {
    if (screenWidth.value <= 1000) {
      return 2;
    }
    return 3;
  });

  const prevEl = ref(null);
  const nextEl = ref(null);
</script>

<template>
  <div class="wrapper">
    <section class="reviews">
      <div class="reviews-titleContainer">
        <h2 class="reviews-title">OUR HAPPY CUSTOMERS</h2>
        <div class="reviews-titleContainer-button">
          <img
            ref="prevEl"
            class="slider-button-left"
            alt="slider-button"
            src="../assets/svg/sliderArrow.svg"
          />
          <img
            ref="nextEl"
            class="slider-button-right"
            alt="slider-button"
            src="../assets/svg/sliderArrow.svg"
          />
        </div>
      </div>
      <div class="reviews-container">
        <Swiper
          :loop="true"
          :modules="[Navigation]"
          :space-between="20"
          :slides-per-view="slidesPerView"
          :slides-per-group="slidesPerView"
          effect="fade"
          :speed="700"
          :navigation="{ prevEl: prevEl, nextEl: nextEl }"
        >
          <SwiperSlide
            v-for="review in reviews"
            :key="review.id"
          >
            <ReviewCard v-bind="review" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .reviews {
    margin: 80px 0 80px 0;
    display: flex;
    flex-direction: column;

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

  .my-swiper {
    width: 100%;
  }

  .my-swiper-slide {
    display: flex;
    justify-content: center;
  }
</style>
