import { defineConfig } from 'umi';
const myRouter = require('./config/routerConfig').globalRouters.routes;

export default defineConfig({
  base: '/',
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/loading',
  },
  lessLoader: { javascriptEnabled: true },
  title: '测试项目',
  theme: {
    '@primary-color': '#F3577A',
    // '@heading-color': 'rgba(255,255,255,1)',
    // 标题色
    // '@text-color': 'rgba(255,255,255,1)',
    // 主文本色
  },
  // runtimePublicPath:true,
  // publicPath:'https://abcd/develop/',  //示例链接 此处替换发布环境
  routes: myRouter,

  cssLoader: {},
  ignoreMomentLocale: true,
  hash: true,
  alias: {
    src: require('path').resolve(__dirname, './src'),
  },
  targets: {
    ie: 11,
  },
});

