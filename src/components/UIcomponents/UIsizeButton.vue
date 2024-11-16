<script setup lang="ts">
  import { useCartStore } from '@/stores/cartStore';
  import { useFilterStore } from '@/stores/filterStore';
  import { onMounted, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const filterStore = useFilterStore();
  const cartStore = useCartStore();

  const props = defineProps<{ sizes: string[]; isProductInfo: boolean }>();

  const selectedSize = ref<string>('');
  const route = useRoute();
  const router = useRouter();

  const selectSize = (size: string) => {
    if (props.isProductInfo) {
      filterStore.setSelectedSize(size || 'ALL');

      selectedSize.value = size || 'ALL';
    }

    const queryParams = { ...route.query, size: size || 'ALL' };

    router.push({ path: route.path, query: queryParams });
  };

  onMounted(() => {
    if (route.query.size) {
      selectedSize.value = route.query.size as string;
      if (props.isProductInfo) {
        filterStore.setSelectedSize(route.query.size as string);
      }
    }
  });

  watch(
    () => route.query.size,
    (newSize) => {
      if (newSize) {
        selectedSize.value = newSize as string;
        filterStore.setSelectedSize(newSize as string);
      } else {
        selectedSize.value = 'ALL';
        filterStore.setSelectedSize(selectedSize.value);
      }
    },
    { immediate: true }
  );
</script>

<template>
  <div
    v-for="s in sizes"
    :key="s"
    :class="[
      'size',
      {
        'size-active':
          selectedSize === s ||
          (cartStore.productsInCart.some(
            (item) => item.size === s && item.id.toString() === route.params.id
          ) &&
            isProductInfo),
      },
    ]"
    @click="selectSize(s)"
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
    cursor: pointer;

    &:hover {
      background: #bcbaba;
      color: #fff;
    }
  }

  .size-active {
    background: #000;
    color: #fff;
  }
</style>
