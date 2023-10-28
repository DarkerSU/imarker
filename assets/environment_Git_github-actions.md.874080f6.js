import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.466b0381.js";const p="/imarker/images/github-actions.png",o="/imarker/images/github-actions-secret.png",e="/imarker/images/github-repository-secrets.png",t="/imarker/images/SSH_KEY.png",m=JSON.parse('{"title":"VitePress 使用 GitHub Actions 部署到腾讯云服务器","description":"","frontmatter":{},"headers":[],"relativePath":"environment/Git/github-actions.md"}'),c={name:"environment/Git/github-actions.md"},r=l('<h1 id="vitepress-使用-github-actions-部署到腾讯云服务器" tabindex="-1">VitePress 使用 GitHub Actions 部署到腾讯云服务器 <a class="header-anchor" href="#vitepress-使用-github-actions-部署到腾讯云服务器" aria-label="Permalink to &quot;VitePress 使用 GitHub Actions 部署到腾讯云服务器&quot;">​</a></h1><ol><li>在 GitHub 上创建需要部署的项目仓库</li><li>生成 Actions 部署文件</li></ol><p>进入仓库后选择 <code>actions</code>创建一个 <code>.yml</code>文件。默认点击 <code>actions</code>后会自动生成一个名为 <code>main.yml</code>文件，文件名可以自定义。 <img src="'+p+`"></p><ol><li>填写 <code>main.yml</code>内容</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 触发workflow的条件</span></span>
<span class="line"><span style="color:#FFCB6B;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 只有 main 分支发生 push 事件时，才会触发 workflow</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># jobs表示执行的一项或多项任务</span></span>
<span class="line"><span style="color:#82AAFF;">jobs</span><span style="color:#FFCB6B;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">deploy:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 任务的 job_id，具体名称自定义</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">runs-on:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># runs-on 字段指定运行所需要的虚拟机环境。注意：这个是必填字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uses:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uses:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">node-version:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">cache:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">run:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">uses:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">appleboy/scp-action@master</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 这里使用别人写好的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 需要部署的文件地址</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">source</span><span style="color:#FFCB6B;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist/*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># SSH address  服务器地址</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">host:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.REMOTE_HOST </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># Remote dir path  服务器下部署文件存放路径</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">target:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.REMOTE_PATH </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># SSH Port  服务器端口</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">port:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.REMOTE_PORT </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># SSH User name   用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">username:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.USER_NAME </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># SSH User password  用户密码</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">password:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.PASSWORD </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># key  密匙</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">key:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.SSH_KEY </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ol start="4"><li>上面文件中有部分信息属于敏感信息，所以这里使用 GitHub 的secret来定义全局变量，保障信息的安全。</li></ol><blockquote><p>仓库 -&gt; Settings -&gt; Secrets -&gt; Actions -&gt; New repository -&gt; secret <img src="`+o+'"></p></blockquote><p>定义好的全局变量： <img src="'+e+'"></p><p>如果使用SSH_KEY登录，则需要在服务器上生成，下面给出在“宝塔面板”中的生成方法： <img src="'+t+'"></p><p>到这里就完成了整个部署过程了，接下了就可以通过git push来实现自动化部署了。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里需要注意的是，每次自动部署的时候腾讯云服务器都会有一个异常登录的提示，可以将这些由 GitHub 自动部署登录的服务器加入白名单。</p></div>',11),C=[r];function i(y,A,D,F,B,E){return a(),n("div",null,C)}const d=s(c,[["render",i]]);export{m as __pageData,d as default};