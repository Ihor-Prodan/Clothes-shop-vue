<script lang="ts" setup>
  const { currentPage, totalPages } = defineProps<{
    currentPage: number;
    totalPages: number;
  }>();

  const emit = defineEmits(['previous-page', 'next-page', 'go-to-page']);
</script>

<template>
  <div class="pagination">
    <button
      class="buttons"
      :disabled="currentPage === 1"
      @click="emit('previous-page')"
    >
      <img src="../assets/svg/buttonArow.svg" />
      Previous
    </button>
    <div class="page-container">
      <div
        v-for="page in totalPages"
        :key="page"
        class="page-numbers"
        :class="{ active: page === currentPage }"
        @click="emit('go-to-page', page)"
      >
        {{ page }}
      </div>
    </div>
    <button
      class="buttons"
      :disabled="currentPage === totalPages"
      @click="emit('next-page')"
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
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
</style>
