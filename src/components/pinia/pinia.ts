import { createPinia } from 'pinia';
import { localStoragePlugin } from './storegePlugin';

const pinia = createPinia();

pinia.use(localStoragePlugin);

export default pinia;
