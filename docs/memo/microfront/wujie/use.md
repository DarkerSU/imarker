# wujie(无界) - 腾讯
无界微前端方案基于 WebComponent 容器 + iframe 沙箱

能够完善的解决适配成本、样式隔离、运行性能、页面白屏、子应用通信、子应用保活、多应用激活、vite 框架支持、应用共享等
:::tip 优势
- 多应用同时激活在线
- 组件式的使用方式
- 应用级别的 keep-alive
- 纯净无污染
- 性能和体积兼具
- 开箱即用
:::
## 使用（Vue2示例）
安装无界
```shell
npm i wujie-vue2 -S
```

### 主应用
mian.js注册无界
```js
import Vue from 'vue'
// 引入wujie
import WujieVue from 'wujie-vue2';

// 注册
Vue.use(WujieVue)
```
其他配置

```js
const { bus, setupApp, preloadApp, destroyApp } = WujieVue;

setupApp({
    name: 'app5',
    url: '//localhost:8085'
})
// 预加载某个子应用
preloadApp({
    name: 'app5',
    url: '//localhost:8085',
    exec: true,//默认为false，设置为true，在应用空闲的时候将子应用提前渲染出来，可以进一步提升子应用打开时间
})
// 详细配置见：[wujie preloadApp](https://wujie-micro.github.io/doc/api/preloadApp.html)
```
配置router
```js
// 为子应用配置一个路由
{
    path: '/app3',
    name: 'app3',
    component: () => import('@/views/mirco/app3'),
},
```
组件使用
```vue
<template >
    <div>
        <WujieVue width="100%" height="100%" :name="$route.name" :url="url" :sync="true"></WujieVue>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url:''
        }
    },
    mounted(){
        this.url=this.$route.query.url
    }
}
</script>
```
### 子应用
**配置main.js**
```js
if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    // const router = new VueRouter({ routes });
    instance = new Vue({ render: (h) => h(App) }).$mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.$destroy();
  };
} else {
  new Vue({ render: (h) => h(App) }).$mount("#app");
}
```

**配置vue.config.js**
```js
devServer:{
    port:8083,
    headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
    }
}
```
### 开启应用
1. 第一步先开启子应用，确保子应用能都独立运行
2. 启动主应用，