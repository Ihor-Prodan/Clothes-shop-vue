<script setup lang="ts">
  import Brands from '@/components/Brands.vue';
  import Hero from '@/components/Hero.vue';
  import Recommended from '@/components/Recommended.vue';
  import Styles from '@/components/Styles.vue';
  import Reviews from '@/components/Reviews.vue';
</script>

<template>
  <Hero />
  <Brands />
  <div class="container">
    <Recommended title="NEW ARRIVALS" />
    <Recommended title="TOP SELLING" />
    <Styles />
    <Reviews />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-inline: 100px;
  }

  @media (min-width: 768px) and (max-width: 1230px) {
    .container {
      padding-inline: 50px;
    }
  }
</style>
