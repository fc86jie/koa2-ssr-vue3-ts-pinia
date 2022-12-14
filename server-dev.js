/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-24 21:23:08
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-12-01 11:28:09
 * @FilePath: \server-dev.js
 * @Description:
 */

// import fs from 'node:fs';
// import path from 'node:path';
// import Koa from 'koa';
// import koaConnect from 'koa-connect';
// import { createServer } from 'vite';
// const __dirname = path.resolve();

const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const koaConnect = require('koa-connect');

const vite = require('vite');

(async () => {
  const app = new Koa();
  // 创建 vite 服务
  const viteServer = await vite.createServer({
    appType: 'custom',
    server: {
      middlewareMode: true
    }
  });

  // 注册 vite 的 Connect 实例作为中间件（注意：vite.middlewares 是一个 Connect 实例）
  app.use(koaConnect(viteServer.middlewares));

  app.use(async (ctx) => {
    try {
      // 1. 获取index.html
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
      template = await viteServer.transformIndexHtml(ctx.path, template);

      // 3. 加载服务器入口, vite.ssrLoadModule 将自动转换
      const { render } = await viteServer.ssrLoadModule('/src/entry-server.ts');

      //  4. 渲染应用的 HTML
      const [renderedHtml, state] = await render(ctx, {});

      const html = template
        .replace('<!--pinia-state-->', state)
        .replace('<!--ssr-outlet-->', renderedHtml);

      ctx.type = 'text/html';
      ctx.body = html;
    } catch (e) {
      viteServer && viteServer.ssrFixStacktrace(e);
      console.log(e.stack);
      ctx.throw(500, e.stack);
    }
  });

  app.listen(9000, () => {
    console.log('server is listening in 9000');
  });
})();
