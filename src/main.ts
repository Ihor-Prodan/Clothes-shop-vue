import '@/assets/main.scss';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import pinia from './components/pinia/pinia';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith('vue-range-component');

app.mount('#app');
