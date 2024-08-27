<script setup lang="ts">
  import Brands from '@/components/Brands.vue';
  import Header from '@/components/Header.vue';
  import Hero from '@/components/Hero.vue';
  import Recommended from '@/components/Recommended.vue';
</script>

<template>
  <div>
    <Header />
    <Hero />
    <Brands />
    <Recommended title="NEW ARRIVALS" />
    <Recommended title="TOP SELLING" />
  </div>
</template>
