import type { Product } from '@/Types/Product';
import productsData from '../../mocks/productsAPI.json';
import reviewsData from '../../mocks/reviewsData.json';
import type { Reviews } from '@/Types/reviews';

export function getProducts(): Promise<Product[]> {
  return Promise.resolve(productsData);
}

export function getReviews(): Promise<Reviews[]> {
  return Promise.resolve(reviewsData);
}
