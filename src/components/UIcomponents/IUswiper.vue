<script lang="ts" setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Swiper as SwiperClass } from 'swiper';
  import { ref, onMounted } from 'vue';
  import 'swiper/swiper-bundle.css';

  import SwiperCore from 'swiper';
  import { EffectFade, Thumbs } from 'swiper/modules';
  SwiperCore.use([Thumbs, EffectFade]);

  const props = defineProps<{ images: string[] }>();

  const thumbsSwiper = ref<SwiperClass | null>(null);
  const mainSwiper = ref<SwiperClass | null>(null);

  const setThumbsSwiper = (swiperInstance: SwiperClass) => {
    thumbsSwiper.value = swiperInstance;
  };

  const setMainSwiper = (swiperInstance: SwiperClass) => {
    mainSwiper.value = swiperInstance;
  };

  onMounted(() => {
    if (thumbsSwiper.value && mainSwiper.value) {
      mainSwiper.value.thumbs.swiper = thumbsSwiper.value;
    }
  });
</script>

<template>
  <div class="swiper-container">
    <div class="swiper-container gallery-top">
      <swiper
        ref="mainSwiper"
        :slides-per-view="1"
        :space-between="10"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :thumbs="{ swiper: thumbsSwiper }"
        @swiper="setMainSwiper"
      >
        <swiper-slide
          v-for="(image, index) in props.images"
          :key="index"
        >
          <img
            class="swiper-image"
            :src="image"
            alt="product image"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="swiper-container gallery-thumbs">
      <swiper
        ref="thumbsSwiper"
        :slides-per-view="4"
        :space-between="10"
        watch-slides-progress
        slide-to-clicked-slide
        @swiper="setThumbsSwiper"
      >
        <swiper-slide
          v-for="(image, index) in props.images"
          :key="index"
        >
          <img
            class="swiper-thumbnail"
            :src="image"
            alt="product thumbnail"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .swiper-container {
    max-width: 600px;
    height: auto;
  }

  .gallery-top {
    width: 100%;
    margin-bottom: 20px;
  }

  .gallery-thumbs {
    width: 100%;

    .swiper-thumbnail {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
    }

    .swiper-thumbnail:hover {
      transform: scale(1.05);
    }
  }

  .swiper-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
</style>
