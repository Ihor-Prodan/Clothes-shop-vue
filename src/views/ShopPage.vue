<script setup lang="ts">
  import Products from '@/components/Products.vue';
</script>

<template>
  <div class="container">
    <Products />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-inline: 100px;
  }

  @media (min-width: 768px) and (max-width: 1053px) {
    .container {
      padding-inline: 50px;
    }
  }
</style>
