<template>
  <div class="input-conteiner">
    <img
      class="search-icon"
      src="../../assets/svg/search.svg"
      alt="search"
    />
    <input
      class="input"
      placeholder="Search for products..."
    />
  </div>
</template>

<style scoped lang="scss">
  @import '@/assets/_mixins.scss';

  .input-conteiner {
    width: 28rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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
</style>
