import { getReviews } from '@/fetchDATA/fechAPI';
import type { Reviews } from '@/Types/reviews';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useReviewsStore = defineStore('reviews', () => {
  const reviews = ref<Reviews[]>([]);

  function loadReviewsFromLocalStorage() {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      reviews.value = JSON.parse(storedReviews);
    }
  }

  async function fetchReviews() {
    try {
      const response = await getReviews();
      reviews.value = response;

      localStorage.setItem('reviews', JSON.stringify(reviews.value));
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  }

  function addReview(newReview: Reviews) {
    reviews.value.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews.value));

    loadReviewsFromLocalStorage();
  }

  loadReviewsFromLocalStorage();

  watch(reviews, (newReviews) => {
    localStorage.setItem('reviews', JSON.stringify(newReviews));
  });

  return { fetchReviews, reviews, addReview };
});
