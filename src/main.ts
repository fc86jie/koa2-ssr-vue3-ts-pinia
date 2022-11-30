// import { createApp } from 'vue';
// import './style.css';
// import App from './App.vue';

// createApp(App).mount('#app');

import { createSSRApp } from 'vue';
import App from './App.vue';

// 为了保证数据的互不干扰，每次请求需要导出一个新的实例
export const createApp = () => {
  const app = createSSRApp(App);
  return { app };
};
