<!--
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-28 20:02:06
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-28 20:02:07
 * @FilePath: \src\pages\index.vue
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="./../assets/logo.png" />
  <UsePinia />
  <br />
  <router-link to="/login">点击跳转至login</router-link>
  <br /><br />
  <router-link to="/user">点击跳转至user页面</router-link>
  <br /><br />
  <router-link to="/vueuse">点击跳转至vueuse页面</router-link>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import UsePinia from '@/components/UsePinia.vue';

  export default defineComponent({
    name: 'IndexPage',
    components: {
      UsePinia
    }
  });
</script>
