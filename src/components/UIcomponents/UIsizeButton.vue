<script setup lang="ts">
  import { useFilterStore } from '@/stores/filterStore';
  import { onMounted, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const filterStore = useFilterStore();
  defineProps<{ sizes: string[] }>();

  const selectedSize = ref<string>('');
  const route = useRoute();
  const router = useRouter();

  const selectSize = (size: string) => {
    filterStore.setSelectedSize(size);
    selectedSize.value = size;

    const queryParams = { ...route.query, size: size };
    router.push({ path: route.path, query: queryParams });
  };

  onMounted(() => {
    if (route.query.size) {
      selectedSize.value = route.query.size as string;
      filterStore.setSelectedSize(route.query.size as string);
    }
  });

  watch(
    () => route.query.size,
    (newSize) => {
      if (newSize) {
        selectedSize.value = newSize as string;
        filterStore.setSelectedSize(newSize as string);
      }
    },
    { immediate: true }
  );
</script>

<template>
  <div
    v-for="s in sizes"
    :key="s"
    :class="['size', { 'size-active': selectedSize === s }]"
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
