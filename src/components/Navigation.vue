<script setup lang="ts">
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const navigation = reactive([
    {
      title: 'Shop',
      href: '/shop',
      style: 'All styles',
    },
    {
      title: 'On Sale',
      href: '#sale',
    },

    {
      title: 'New Arrivals',
      href: '#new-arrivals',
    },
    {
      title: 'Dress Styles',
      href: '#styles',
    },
  ]);

  const navigate = (href: string, style: string | null) => {
    if (href === '/shop') {
      if (style) {
        router.push({ query: { style }, path: href });
      } else {
        router.push({ path: href });
      }
    } else {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
</script>

<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li
        v-for="nav of navigation"
        :key="nav.title"
        class="navigation-item"
        :href="nav.href"
        @click="navigate(nav.href, nav.style ?? null)"
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
      padding: 20px 0;
      @include fontBase;
      cursor: pointer;
      position: relative;

      &:hover {
        text-shadow: 0 0 0.03px #000;
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 10px;
        width: 0;
        height: 4px;
        border-radius: 8px;
        background-color: #000;
        transition: all 0.4s ease;
        transform: translateX(-50%);
      }

      &:hover::after {
        width: 100%;
        left: 0;
        transform: translateX(0);
      }
    }
  }

  @media (min-width: 768px) and (max-width: 815px) {
    .navigation {
      &-list {
        gap: 14px;
      }

      &-item {
        font-size: 14px;
      }
    }
  }
</style>
