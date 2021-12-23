import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/scss/style.scss';

import i18n from "@/plugins/i18n";

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');

