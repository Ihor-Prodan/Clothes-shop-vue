<script setup lang="ts">
  const size = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
</script>

<template>
  <div
    v-for="s in size"
    :key="s"
    class="size"
  >
    {{ s }}
  </div>
</template>

<style lang="scss" scoped>
  .size {
    width: 30%;
    display: flex;
    padding: 5px 20px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 20px;
    background: #f0f0f0;
    font-size: 14px;
    font-weight: 500;
  }

  .size-active {
    background: #000;
    color: #fff;
  }
</style>
