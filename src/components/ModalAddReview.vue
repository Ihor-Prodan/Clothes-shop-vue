<template>
  <section class="modal">
    <p class="modal-title">Add review</p>
    <textarea class="modal-text"></textarea>
  </section>
</template>

<style lang="scss">
  .modal {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    padding: 20px;

    &-title {
      font-size: 18px;
      color: #000;
    }

    &-text {
      padding: 20px;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
</style>
