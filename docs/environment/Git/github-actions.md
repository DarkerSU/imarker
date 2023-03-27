# VitePress 使用 GitHub Actions 部署到腾讯云服务器

1. 在 GitHub 上创建需要部署的项目仓库
2. 生成 Actions 部署文件

进入仓库后选择 `actions`创建一个 `.yml`文件。默认点击 `actions`后会自动生成一个名为 `main.yml`文件，文件名可以自定义。
![github](https://note.youdao.com/yws/res/3955/WEBRESOURCEbfa28a1d345aec3d690bfec9f5901204)
<img src="https://note.youdao.com/yws/res/3955/WEBRESOURCEbfa28a1d345aec3d690bfec9f5901204" title="youdao">
<img src="/public/images/github-actions.png">


1. 填写 `main.yml`内容
```shell
name: Deploy

# 触发workflow的条件
on:
  push:
    # 只有 main 分支发生 push 事件时，才会触发 workflow
    branches:
      - main

# jobs表示执行的一项或多项任务
jobs:
  deploy: # 任务的 job_id，具体名称自定义
    runs-on: ubuntu-latest # runs-on 字段指定运行所需要的虚拟机环境。注意：这个是必填字段
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn

      - name: Build
        run: yarn build

      - name: Deploy
        uses: appleboy/scp-action@master # 这里使用别人写好的方法
        with:
          # 需要部署的文件地址
          source: 'dist/*'
          # SSH address  服务器地址
          host: ${{ secrets.REMOTE_HOST }}
          # Remote dir path  服务器下部署文件存放路径
          target: ${{ secrets.REMOTE_PATH }}
          # SSH Port  服务器端口
          port: ${{ secrets.REMOTE_PORT }}
          # SSH User name   用户名
          username: ${{ secrets.USER_NAME }}
          # SSH User password  用户密码
          #  password: ${{ secrets.PASSWORD }}
          # key  密匙
          key: ${{ secrets.SSH_KEY }}

```
4. 上面文件中有部分信息属于敏感信息，所以这里使用 GitHub 的secret来定义全局变量，保障信息的安全。
>仓库 -> Settings -> Secrets -> Actions -> New repository -> secret
<img src="/images/github-actions-secret.png">
![github](https://xxy5.com/images/git/github-actions-secret.png)

定义好的全局变量：
<img src="/images/github-repository-secret.png">
<img src="https://xxy5.com/images/git/github-repository-secrets.png">
https://xxy5.com/images/git/github-repository-secrets.png
![github](https://xxy5.com/images/git/github-repository-secrets.png)

如果使用SSH_KEY登录，则需要在服务器上生成，下面给出在“宝塔面板”中的生成方法：
<img src="/images/SSH_KEY.png">
![ssh](https://xxy5.com/images/git/SSH_KEY.png)

到这里就完成了整个部署过程了，接下了就可以通过git push来实现自动化部署了。

:::tip
这里需要注意的是，每次自动部署的时候腾讯云服务器都会有一个异常登录的提示，可以将这些由 GitHub 自动部署登录的服务器加入白名单。
:::