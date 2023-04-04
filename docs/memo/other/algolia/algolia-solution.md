# vitepress 无法搜索问题解决方案

:::danger 为什么？
vitepress配置无误，algolia数据爬虫成功，仍无法搜索？
:::

## 导致原因
vitepress 做了版本升级，crawlerConfig.json配置文件需要新增配置

alpha.36及以下版本按照上文配置确实可以实现搜索，但alpha.37版本开始，出现无法搜索的情况。
是因为爬虫配置文件导致无法搜索


## 解决方案
### 方案1：增加配置
在爬虫文件中新增如下相关配置即可解决vitepress高版本无法搜索的情况
```json
{
  "index_name": "***",
  "start_urls": ["***"],
  "rateLimit": 8,
  "maxDepth": 10,
  "selectors": {
    "lvl0": {
      "selector": "",
      "defaultValue": "Documentation"
    },
    "lvl1": ".content h1",
    "lvl2": ".content h2",
    "lvl3": ".content h3",
    "lvl4": ".content h4",
    "lvl5": ".content h5",
    "content": ".content p, .content li",
    "lang": {   //[!code ++]
      "selector": "/html/@lang",    //[!code ++]
      "type": "xpath",  //[!code ++]
      "global": true    //[!code ++]
    }
  },
  "selectors_exclude": [
    "aside",
    ".page-footer",
    ".next-and-prev-link",
    ".table-of-contents"
  ],
  "custom_settings": {  //[!code ++]
    "attributesForFaceting": ["lang", "tags"]   //[!code ++]
  },    //[!code ++]
  "js_render": true
}
```
### 方案2：采用 docSearch
docSearch是官方提供的爬虫方案之一，所有可以采用它完成爬虫查询，不过docSearch申请需要一定时间，申请地址如下：

[docsearch 申请地址](https://docsearch.algolia.com/apply/)
> 如果表单提交不成功，需要使用科学上网。

这里有几点需要注意：

> 您必须是该网站的所有者，或至少有更新其内容的权限
> 你的网站必须是公开的
> 你的网站必须是一个开源项目或技术博客的技术文档，不授权于商业内容
> 你的网站必须到生产环境

from [who-can-apply](https://docsearch.algolia.com/docs/who-can-apply/)

其实一般是 GitHub 上的开源项目都会申请通过的，我是大概等了 2 天样子，会收到如下类似的邮件回复，根据 key 和 id 来替换过去旧的即可。
<img src="/images/algolia/algolia-email.png" />
