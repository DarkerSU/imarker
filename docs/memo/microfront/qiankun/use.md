# qiankun - 阿里
qiankun 是一个生产可用的微前端框架，它基于 single-spa，具备 js 沙箱、样式隔离、HTML Loader、预加载 等微前端系统所需的能力。qiankun 可以用于任意 js 框架，微应用接入像嵌入一个 iframe 系统一样简单。

## 使用方法
### 安装
```shell
npm i qiankun -S
```

### 主应用
1. 路由模式 history 路由（/router/index.ts）
```ts
const router = createRouter({
  // history模式
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
```
2. 注册子应用，开启服务（main.ts）

```ts
import { registerMicroApps, start } from 'qiankun'

// 注册子应用
registerMicroApps([
  {
    name: 'usercenter', // 子应用名称
    entry: 'http://localhost:8088', // 子应用地址，开发环境和生产环境值不同，需动态配置
    container: '#usercenter', // 子应用容器
    activeRule: '/usercenter', // 子应用触发规则（路径）
  },
])

// 开启服务
start()
```
3. 添加子应用容器（App.vue）
```html
<div id="usercenter"></div>
```
4. 添加子应用的服务代理,基座需配置子应用的服务（vue.config.js）
```js
devServer: {
    port: 8033, // 端口号
    host: '0.0.0.0',
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },//[!code focus]
    proxy: {
      '/api': {// 子应用1服务
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/spider': {// 子应用2服务
        target: process.env.VUE_APP_API_URL_SPIDER,
        changeOrigin: true,
        pathRewrite: {
          '^/spider': ''
        }
      }
    }
  }
```
### 子应用
1. 路由模式：history 路由（/router/index.ts）
```ts
const router = createRouter({
  // history模式
  history: createWebHistory('/usercenter'),// 前缀需要和基座main.ts里面配置的激活路由一致
  routes,
})
```
2. 向main(主应用)暴露接口，使main(主应用)与子应用互通（main.ts）
```ts
const temp: any = window
const isQiankun = temp.__POWERED_BY_QIANKUN__


if (isQiankun) {
  __webpack_public_path__ = temp.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

function render(props?: any) {
  ......
}

export async function mount(props: any) {
  render(props)
}

export async function unmount(props: any) {
  console.log(props)
}

export async function update(props: any) {
  console.log('update props', props)
}

isQiankun || render()
```

3. 修改子应用打包格式（vue.config.js）
```js
const { name } = require('./package')
const port = 8088
const dev = process.env.NODE_ENV === 'development'

module.exports = {
  // 配置publicPath，填写你本机的ip地址
  publicPath: dev ? `//192.168.xx.xx:${port}` : process.env.BASE_URL,

  // 自定义webpack配置
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port, // 端口号
    host: '0.0.0.0',
    disableHostCheck: true,
    // 子应用需要支持跨域
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: '/index.html',
    },

  },
}
```

## 主子应用间通信

### main(主应用)
   
**① 通信文件**（src/actions.ts）
```ts
import { initGlobalState, MicroAppStateActions } from 'qiankun'
const initialState = {}
const actions: MicroAppStateActions = initGlobalState(initialState)

export default actions 
```
**② 向子应用发送数据** (示例/login.vue) 
```ts
// 主应用通信
import actions from '@/actions'

const token = `${res.tokenType} ${res.token}`
// 登录成功后，设置 token
actions.setGlobalState({ token })
```
### child(子应用)

 **① 通信文件**（src/actions.ts）
```ts
function emptyAction() {
  // 警告：提示当前使用的是空 Action
  console.warn('Current execute action is empty!')
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args: any) {
    console.log(...args)
    // return this.actions.onGlobalStateChange(...args)
  }

  /**
   * 映射
   */
  setGlobalState(...args) {
    console.log(...args)
    // return this.actions.setGlobalState(...args)
  }
}

const actions = new Actions()
export default actions
```
**② 接收main(主应用)发送的数据**（示例 main.ts）
```ts
import actions from '@/actions'

function render(props?: any) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props)
  }
  ......
}

export async function mount(props: any) {
  console.log(props)
  // debugger
  render(props)

  // 注册观察者函数   获取主应用传递过来的参数
  // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
  props.onGlobalStateChange((state) => {
    const { token } = state
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    }
  }, true)
}
......
```

