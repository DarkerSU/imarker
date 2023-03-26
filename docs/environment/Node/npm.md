# npm 相关

目前所有镜像源地址

```shell
# npm 
 https://registry.npmjs.org/
# yarn
 https://registry.yarnpkg.com/
# cnpm 
 http://r.cnpmjs.org/
# taobao
 https://registry.npm.taobao.org/
# nj
 https://registry.nodejitsu.com/
# npmMirror
 https://skimdb.npmjs.com/registry/
# edunpm 
 http://registry.enpmjs.org/
```

## 镜像

```shell
# 查看镜像源
npm get registry
# 切换镜像源
npm set registry <镜像源地址>
#或
npm config set registry <镜像源地址>
```
## 辅助命令
```shell
# 本地联调
npm link
# 取消本地联调
npm unlink
# 查看安装了多少包
npm ls
# 查看node安装路径
npm get prefix
# 查看全局node包
npm root -g
# 清理缓存
npm cache clean -f
```
## npm 发包
:::danger 提醒
发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包！ 
:::
```shell
# 当前登录用户：
npm who am i 或 npm whoami
# 注册：
npm adduser
# 初始化
npm init
# 登录
npm login （初次发包）
# 发包 
npm publish
# 撤销包
npm unpublish 包名 --force # 即可从 npm 删除已发布的包。
npm unpublish #命令只能删除 72 小时以内发布的包
npm unpublish 删除的包 #在 24 小时内不允许重复发布
# 删除包
npm deprecate 包名 [@版本] “描述”
# 版本修改：
npm version patch：1.0.0会变成1.0.1
npm version major：1.0.0会变成2.0.0
npm version minor：1.0.0会变成1.1.0
```