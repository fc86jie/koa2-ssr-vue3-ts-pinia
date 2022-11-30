/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-28 19:55:54
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-28 19:55:55
 * @FilePath: \src\store\index.ts
 * @Description:
 */
import { createPinia } from 'pinia';
import useUserStore from './user';

export default () => {
  const pinia = createPinia();

  useUserStore(pinia);

  return pinia;
};
