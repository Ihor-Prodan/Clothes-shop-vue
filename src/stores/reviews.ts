import { getReviews } from '@/fetchDATA/fechAPI';
import type { Reviews } from '@/Types/reviews';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useReviewsStore = defineStore('rewiews', () => {
  const reviews = ref<Reviews[]>([]);

  async function fetchReviews() {
    try {
      const response = await getReviews();

      reviews.value = response;
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  }

  return { fetchReviews, reviews };
});
