<!--
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-28 20:02:12
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-28 20:02:12
 * @FilePath: \src\pages\login.vue
 * @Description: 
-->
<template>
  <h2> 这里是登录页面 </h2>
  <br />
  <router-link to="/">点击跳转至首页</router-link>
  <br /><br />
  <router-link to="/user">点击跳转至user页面</router-link>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'LoginPage'
  });
</script>
