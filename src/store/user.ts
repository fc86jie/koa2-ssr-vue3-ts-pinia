/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-28 19:56:09
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-28 19:56:10
 * @FilePath: \src\store\user.ts
 * @Description:
 */
import { defineStore } from 'pinia';

export default defineStore('user', {
  state: () => {
    return {
      name: '张三',
      age: 20
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
    updateAge(age: number) {
      this.age = age;
    }
  }
});
