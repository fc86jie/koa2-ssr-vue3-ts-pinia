/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-28 11:30:39
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-30 18:05:49
 * @FilePath: \server-prod.js
 * @Description:
 */

// const Koa = require('koa');
// const sendFile = require('koa-send');

// const path = require('path');
// const fs = require('fs');

import fs from 'node:fs';
import path from 'node:path';
import Koa from 'koa';
import sendFile from 'koa-send';
import manifest from './dist/client/ssr-manifest.json' assert { type: 'json' };
import { render } from './dist/server/entry-server.js';
const __dirname = path.resolve();

const resolve = p => path.resolve(__dirname, p);

const clientRoot = resolve('dist/client');
const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');

(async () => {
  const app = new Koa();

  app.use(async ctx => {
    console.log('----------------', ctx.path);
    // 请求的是静态资源
    if (ctx.path.startsWith('/assets') || ctx.path === '/vite.svg') {
      await sendFile(ctx, ctx.path, { root: clientRoot });
      return;
    }

    const [renderedHtml, state, preloadLinks] = await render(ctx, manifest);
    console.log('=======11=============', renderedHtml);
    const html = template
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--pinia-state-->', state)
      .replace('<!--ssr-outlet-->', renderedHtml);
    console.log('==================', html);
    ctx.type = 'text/html';
    ctx.body = html;
  });

  app.listen(8080, () => console.log('started server on http://localhost:8080'));
})();
