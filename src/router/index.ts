/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-28 19:55:04
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-28 19:55:05
 * @FilePath: \src\router\index.ts
 * @Description:
 */

import {
  createRouter as createVueRouter,
  createMemoryHistory,
  createWebHistory,
  Router
} from 'vue-router';

export const createRouter = (type: 'client' | 'server'): Router =>
  createVueRouter({
    history: type === 'client' ? createWebHistory() : createMemoryHistory(),

    routes: [
      {
        path: '/',
        name: 'index',
        meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('@/pages/index.vue')
      },
      {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录',
          keepAlive: true,
          requireAuth: false
        },
        component: () => import('@/pages/login.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '用户中心',
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('@/pages/user.vue')
      },
      {
        path: '/vueuse',
        name: 'vueuse',
        meta: {
          title: 'vueuse',
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('@/pages/vueUse.vue')
      }
    ]
  });
