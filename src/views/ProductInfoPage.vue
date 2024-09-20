<script setup lang="ts">
  import Footer from '@/components/Footer/Footer.vue';
  import Header from '@/components/Header.vue';
  import ProductInfo from '@/components/ProductInfo.vue';
</script>

<template>
  <Header />
  <div class="container">
    <ProductInfo />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
  .container {
    padding-inline: 100px;
  }
</style>
