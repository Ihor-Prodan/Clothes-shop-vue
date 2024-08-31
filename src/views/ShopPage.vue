<script setup lang="ts">
  import Footer from '@/components/Footer/Footer.vue';
  import Header from '@/components/Header.vue';
  import Products from '@/components/Products.vue';
</script>

<template>
  <Header />
  <div class="container">
    <Products />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
  .container {
    padding-inline: 100px;
  }
</style>
