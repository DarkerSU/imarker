# NVM - 本地Node版本管理神器
:::danger 注：
    安装nvm前先**卸载/删除**本地已经安装node环境
:::
## 一、什么是nvm
nvm是一个node的版本管理工具，可以简单操作node版本的切换、安装、查看等等，与npm不同的是，npm是依赖包的管理工具。

## 二、nvm安装
1. **下载nvm安装包**

[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)，下载`nvm-setup.zip`或`nvm-setup.exe`

<img src="/nvm/nvm-setup.png"/>

2. **解压（直接）安装nvm-setup**

根据自身情况自定义选择路径盘，路径不要出现空格或中文符号（路径最好是在路径盘的根目录下，如C盘、D盘下的根目录），我自己选择D盘根目录。选好后点击next
<img src="/nvm/stickPicture.png"/>

3. **选择nodejs安装位置**

可以根据自身情况自定义选择路径盘，路径不要出现空格或中文符号（路径最好是在路径盘的根目录下新建一个文件夹，如C盘、D盘下的根目录），我自己在D盘根目录下新建一个nodejs文件夹。选好后点击next
<img src="/nvm/stickPicture1.png"/>

4. **检查是否安装成功**
<img src="/nvm/nvm-cmd.png"/>

## 三、配置nvm镜像（可选）
### 方式1

在终端执行命令
```shell
# 设置nodejs下载源
nvm node_mirror https://npmmirror.com/mirrors/node/
# 设置npm源
nvm node_mirror https://npmmirror.com/mirrors/npm/ 
```

### 方式2
进入nvm-windows安装目录，编辑settings.txt，增加如下内容
```shell
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
增加后如下：
<img src="/nvm/nvm-setting.png"/>
```
第一行是nvm安装路径
第二行是nodejs路径
第三行是node下载镜像
第四行是npm下载镜像
```

## 四、安装及使用node
```shell
nvm list available        #查看可安装的node.js版本号

nvm list        #查看本地安装的所有nodejs版本；
nvm ls        #查看本地安装的所有nodejs版本；

nvm install 版本号         #安装指定版本（如：nvm install 14.19.1）；
nvm use 版本号         #切换到指定版本（如：nvm use 14.19.1）；
nvm uninstall 版本号        #卸载指定版本（如：nvm uninstall 14.19.1）；

nvm current        #显示当前版本；
```

## 五、踩坑
- **命令乱码**

解决： 安装路径不要出现特殊字符或中文，修改安装路径为全英文

- **exit status 1:xxx报错**

解决：需使用管理员身份打开终端，再执行命令

- **下载nodejs速度慢**

解决：配置国内源，如：淘宝源