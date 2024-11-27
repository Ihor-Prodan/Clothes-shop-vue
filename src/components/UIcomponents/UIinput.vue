<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useProductStore } from '@/stores/product';
  import type { Product } from '@/Types/Product';
  import { useRouter } from 'vue-router';

  const productStore = useProductStore();
  const router = useRouter();

  const searchQuery = ref('');
  const showMenu = ref(false);

  const filteredProducts = computed(() =>
    productStore.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );

  const selectProduct = (product: Product) => {
    router.push({ name: 'info', params: { id: product.id } });
    searchQuery.value = '';
    showMenu.value = false;
  };

  const hideMenu = () => {
    setTimeout(() => {
      showMenu.value = false;
    }, 300);
  };
</script>

<template>
  <div class="input-container">
    <img
      class="search-icon"
      src="../../assets/svg/search.svg"
      alt="search"
    />
    <input
      v-model="searchQuery"
      class="input"
      placeholder="Search for products..."
      @focus="showMenu = true"
      @blur="hideMenu"
    />
    <div
      v-if="showMenu"
      class="dropdown-menu"
    >
      <div
        v-if="searchQuery.trim() === ''"
        class="dropdown-empty"
      >
        Enter text to search for products...
      </div>

      <div
        v-for="product in filteredProducts"
        v-else-if="filteredProducts.length > 0"
        :key="product.id"
        class="dropdown-item"
        @click="selectProduct(product)"
      >
        <img
          class="dropdown-item-image"
          :src="product.images[0]"
          alt="product image"
        />
        <div class="dropdown-item-info">
          <p class="dropdown-item-name">{{ product.name }}</p>
          <p class="dropdown-item-price">
            {{ product.discountPrice || product.price }}
          </p>
        </div>
      </div>

      <div
        v-else
        class="dropdown-empty"
      >
        No products match the selected parameters.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/assets/_mixins.scss';

  .input-container {
    width: 28rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .search-icon {
    position: absolute;
    left: 16px;
    top: 12px;
    z-index: 1;
  }

  .input {
    @include fontBase;
    display: flex;
    padding: 12px 46px;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
    border-radius: 62px;
    background: #f0f0f0;
    color: rgba(0, 0, 0, 0.4);
    border: transparent;
    cursor: pointer;

    &:hover {
      border: 1px solid #e0e0e0;
      padding: 11px 45px;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 48px;
    left: 0;
    width: 100%;
    max-height: 250px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow-y: auto;
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #f7f7f7;
    }
  }

  .dropdown-item-image {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 12px;
  }

  .dropdown-item-info {
    display: flex;
    flex-direction: column;
  }

  .dropdown-item-name {
    font-weight: bold;
    font-size: 14px;
    color: #333;
  }

  .dropdown-item-price {
    font-size: 12px;
    color: #666;
  }

  .dropdown-empty {
    padding: 12px;
    font-size: 14px;
    text-align: center;
    color: #888;
  }

  @media (min-width: 768px) and (max-width: 1230px) {
    .input-container {
      width: 18rem;
    }
  }
</style>
