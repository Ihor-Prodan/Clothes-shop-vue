import type { Product } from '@/Types/Product';
import productsData from '../../mocks/productsAPI.json';

export function getProducts(): Promise<Product[]> {
  return Promise.resolve(productsData);
}
