<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  defineProps({
    filteredProducts: Number,
    productsList: Number,
    sortCriteria: String,
    updateSortCriteria: Function,
  });
  const isDropdownOpen = ref(false);
  const emit = defineEmits(['update-sort-criteria']);
  const router = useRouter();
  const route = useRoute();

  const selectSortOption = (option: string) => {
    router.push({
      query: {
        ...route.query,
        sort: option,
      },
    });
    isDropdownOpen.value = false;
  };

  watch(
    () => route.query.sort,
    (newSortCriteria) => {
      if (newSortCriteria) {
        emit('update-sort-criteria', newSortCriteria);
      }
    },
    { immediate: true }
  );

  const sortOptions = [
    { label: 'Most Cheapers', value: 'Most Cheapers' },
    { label: 'Most Expensive', value: 'Most Expensive' },
    { label: 'Most Popular', value: 'Most Popular' },
  ];
</script>

<template>
  <section class="filter">
    <div class="filter-container">
      <p class="filter-text">
        Showing {{ filteredProducts }} of {{ productsList }} Products
      </p>
      <div class="filter-sort">
        <p class="filter-text">Sort by:</p>
        <span
          class="filter-text-bold"
          @click="isDropdownOpen = !isDropdownOpen"
          >{{ sortCriteria }}</span
        >
        <img
          class="filter-sort-icon"
          src="../../assets/svg/linkIcon.svg"
        />
        <ul
          v-if="isDropdownOpen"
          class="filter-sort-list"
        >
          <li
            v-for="option in sortOptions"
            :key="option.value"
            class="filter-sort-list-item"
            @click="selectSortOption(option.value)"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../../assets/_mixins.scss';

  .filter {
    width: 100%;

    &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      width: 100%;
    }

    &-text {
      color: rgba(0, 0, 0, 0.6);
      @include fontBase;
      text-wrap: nowrap;

      &-bold {
        color: #000;
        font-weight: 500;
      }
    }

    &-sort-icon {
      transform: rotate(90deg);
    }
  }

  .filter-sort {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .filter-sort-list {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    width: 100%;
    z-index: 10;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 13px;
  }

  .filter-sort-list-item {
    padding: 10px;
    cursor: pointer;
  }

  .filter-sort-list-item:hover {
    background-color: #e6e5e5;
    border-radius: 10px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.3);
  }
</style>
