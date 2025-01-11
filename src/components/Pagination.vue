<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
  import { computed, watch } from 'vue';

  const { currentPage, totalPages } = defineProps<{
    currentPage: number;
    totalPages: number;
  }>();

  const emit = defineEmits(['previous-page', 'next-page', 'go-to-page']);
  const route = useRoute();
  const router = useRouter();

  const pageFromQuery = computed(() => {
    return parseInt(route.query.page as string, 10) || currentPage;
  });

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push({ query: { ...route.query, page } });
      emit('go-to-page', page);
    }
  };

  const generatePageNumbers = computed(() => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1, 2);

      if (pageFromQuery.value <= 4) {
        pageNumbers.push(3, 4, 5);
        pageNumbers.push('...');
      } else if (pageFromQuery.value >= totalPages - 3) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages - 4, totalPages - 3, totalPages - 2);
      } else {
        pageNumbers.push('...');
        pageNumbers.push(
          pageFromQuery.value - 1,
          pageFromQuery.value,
          pageFromQuery.value + 1
        );
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages - 1, totalPages);
    }

    return pageNumbers;
  });

  watch(
    () => route.query.page,
    (newPage) => {
      const pageNumber = parseInt(newPage as string, 10) || currentPage;
      emit('go-to-page', pageNumber);
    }
  );
</script>

<template>
  <div
    v-if="totalPages > 1"
    class="pagination"
  >
    <button
      class="buttons"
      :disabled="pageFromQuery === 1"
      @click="goToPage(pageFromQuery - 1)"
    >
      <img src="../assets/svg/buttonArow.svg" />
      Previous
    </button>

    <ul class="page-container">
      <li
        v-for="(page, index) in generatePageNumbers"
        :key="index"
        class="page-numbers"
        :class="{ active: page === pageFromQuery, ellipsis: page === '...' }"
        @click="typeof page === 'number' && goToPage(page)"
      >
        <span v-if="typeof page === 'string'">{{ page }}</span>
        <span v-else>{{ page }}</span>
      </li>
    </ul>

    <button
      class="buttons"
      :disabled="pageFromQuery === totalPages"
      @click="goToPage(pageFromQuery + 1)"
    >
      Next
      <img
        class="icon"
        src="../assets/svg/buttonArow.svg"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .pagination {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .icon {
    transform: rotate(180deg);
  }

  .page-numbers {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.06);
    cursor: pointer;

    &:hover {
      box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.4);
      transition: box-shadow 0.3s ease-in-out;
      font-weight: 600;
    }

    &.active {
      background: #000;
      color: #fff;
    }

    &.ellipsis {
      font-weight: 500;
      font-size: 18px;
      border-radius: 4px;
      background: none;
      cursor: default;
      &:hover {
        box-shadow: none;
      }
    }
  }

  .buttons {
    display: flex;
    padding: 8px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.4);
      transition: box-shadow 0.3s ease-in-out;
      font-weight: 600;
    }
  }

  .page-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 768px) and (max-width: 1324px) {
    .page-numbers {
      width: 20px;
      height: 20px;
    }

    .buttons {
      height: 22px;
    }
  }
</style>
