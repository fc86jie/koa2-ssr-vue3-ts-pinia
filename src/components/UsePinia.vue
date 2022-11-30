<!--
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-28 20:09:28
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-28 20:09:28
 * @FilePath: \src\components\UsePinia.vue
 * @Description: 
-->
<template>
  <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
  <div>{{ userStore.name }}的年龄： {{ userStore.age }}</div
  ><br />
  <button @click="addAge">点击给{{ userStore.name }}的年龄增加一岁</button>
  <br />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import useUserStore from '@/store/user';
  export default defineComponent({
    name: 'UsePinia',
    setup() {
      const userStore = useUserStore();

      const addAge = () => {
        userStore.updateAge(++userStore.age);
      };
      return {
        userStore,
        addAge
      };
    }
  });
</script>
