<script setup lang="ts">
  import Brands from '@/components/Brands.vue';
  import Header from '@/components/Header.vue';
  import Hero from '@/components/Hero.vue';
  import Recommended from '@/components/Recommended.vue';
  import Styles from '@/components/Styles.vue';
  import Reviews from '@/components/Reviews.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <Hero />
  <Brands />
  <div class="container">
    <Recommended title="NEW ARRIVALS" />
    <Recommended title="TOP SELLING" />
    <Styles />
    <Reviews />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-inline: 100px;
  }
</style>
