# VitePress 添加本地搜索功能 
## flexsearch 插件
### 安装插件
```bash
npm i vitepress-plugin-search markdown-it flexsearch -D
```
### 添加和配置插件
:::warning 注意坑点

1. `README` 没写在哪个目录下存放`vite.config.ts`，依据经验放在根目录下不管用，放在`.vitepress`也不生效，最后挨个试才发现需要放在docs

2. 示例没有引入`flexSearchIndexOptions`，需要手动从`flexsearch`中引入

3. 引入后发现之前搜索框样式没了，需要在`.vitepress/theme/styles/index.css`下重新覆盖样式

:::

<img src="/images/algolia/flexsearch.png" />

```ts
//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});

```
### 样式覆盖
```css
.DocSearch-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: transparent;
  transition: border-color 0.25s;
}
@media (min-width: 768px) {
  .DocSearch-Button {
    justify-content: flex-start;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 10px 0 12px;
    width: 100%;
    height: 40px;
    background-color: var(--vp-c-bg-alt);
  }
}
@media (max-width: 768px) {
  .DocSearch-Button-Keys {
    display: none;
  }
  .VPNavBarHamburger {
    height: 32px !important;
    width: 32px !important;
    border-radius: 4px;
  }
}
.DocSearch-Button:hover {
  background-color: #f5f5f6;
}
```