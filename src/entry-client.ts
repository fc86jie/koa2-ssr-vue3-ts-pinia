/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-24 11:34:57
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-28 21:15:08
 * @FilePath: \src\entry-client.ts
 * @Description:
 */

import { createApp } from './main';
import { createRouter } from './router';
import createStore from '@/store';

const router = createRouter('client');
const pinia = createStore();

const { app } = createApp();

app.use(router);
app.use(pinia);

// 初始化 pinia
// 注意：__INITIAL_STATE__需要在 src/types/shims-global.d.ts中定义
console.log('------------------', import.meta.env);
if (window.__INITIAL_STATE__) {
  pinia.state.value = JSON.parse(window.__INITIAL_STATE__);
}

router.isReady().then(() => {
  app.mount('#app', true);
});
