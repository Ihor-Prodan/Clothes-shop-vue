<script setup lang="ts">
  import Cart from '@/components/Cart.vue';
</script>

<template>
  <div class="container">
    <Cart />
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
