<script setup lang="ts">
  import { reactive } from 'vue';

  const navigation = reactive([
    {
      title: 'Shop',
      href: '/shop',
    },
    {
      title: 'On Sale',
      href: '/sale',
    },

    {
      title: 'New Arrivals',
      href: '/new-arrivals',
    },
    {
      title: 'Brands',
      href: '/brands',
    },
  ]);
</script>

<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li
        v-for="nav of navigation"
        :key="nav.title"
        class="navigation-item"
        :href="nav.href"
      >
        {{ nav.title }}
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @import '@/assets/_mixins.scss';

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: 24px;
    }

    &-item {
      @include fontBase;
      cursor: pointer;

      &:hover {
        text-shadow: 0 0 0.01px #000;
      }
    }
  }
</style>
