import '@/assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith('vue-range-component');

app.mount('#app');
