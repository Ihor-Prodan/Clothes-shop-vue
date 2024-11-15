<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const emit = defineEmits(['submit-review', 'close']);

  const route = useRoute();
  const productId = ref(route.params.id);

  const reviewData = ref({
    stars: 1,
    name: '',
    text: '',
    id: Date.now(),
    productID: productId.value,
    posted: formatDate(new Date()),
  });

  const submitReview = () => {
    if (reviewData.value.name && reviewData.value.text) {
      emit('submit-review', { ...reviewData.value });
    }
  };

  const closeModal = () => {
    emit('close');
  };

  function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return `Posted on ${date.toLocaleDateString('en-US', options)}`;
  }
</script>

<template>
  <section class="modal">
    <button
      class="close-icon"
      @click="closeModal"
    >
      <img
        src="../assets/svg/closeIcon.svg"
        alt="Close"
      />
    </button>

    <div class="review-star">
      <label
        class="review-text"
        for="review-star-select"
        >Rating</label
      >
      <select
        id="review-star-select"
        v-model.number="reviewData.stars"
        class="review-star-select"
      >
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
    </div>

    <div class="review-user">
      <label
        class="review-text"
        for="review-user-input"
        >Name</label
      >
      <input
        id="review-user-input"
        v-model="reviewData.name"
        class="review-user-input"
        type="text"
        placeholder="Enter your name"
      />
    </div>

    <div class="review-message">
      <label
        class="review-text"
        for="review-message-text"
        >Review</label
      >
      <textarea
        id="review-message-text"
        v-model="reviewData.text"
        class="modal-textarea"
        rows="4"
        placeholder="Write your review here"
      ></textarea>
    </div>

    <button
      class="submit-button"
      @click="submitReview"
    >
      Submit Review
    </button>
  </section>
</template>

<style lang="scss">
  .modal {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    &-textarea {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border: 1px solid #e4e4e4;
      border-radius: 8px;
      outline: none;
      resize: none;
    }
  }

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .review {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-text {
      font-size: 14px;
      color: #333;
      font-weight: bold;
    }

    &-user-input,
    &-star-select,
    .modal-textarea {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border: 1px solid #e4e4e4;
      border-radius: 8px;
      outline: none;

      &:focus {
        border-color: #007bff;
      }
    }

    &-star-select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      cursor: pointer;
    }
  }

  .submit-button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    align-self: flex-start;
    transition: background-color 0.3s;

    &:hover {
      font-weight: 600;
      box-shadow: 0 3px 25px 0 rgba(24, 24, 24, 0.4);
      transition:
        box-shadow 0.3s ease-in-out,
        font-weight 0.3s ease-in-out;
    }
  }
</style>
