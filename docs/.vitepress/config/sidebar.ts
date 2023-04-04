
interface IItems {
    text: string,
    link: string,
    collapsible?: boolean,
    items?: IItems[]
}
interface ISidebarProps {
    [k: string]: IItems[]
}
export default {
    '/environment/': <IItems[]>[
        {
            text: 'Git',
            items: [
                { text: 'Git 常用命令', link: '/environment/Git/common' },
                { text: 'Git commit 规范约定', link: '/environment/Git/commit-standard' },
                { text: 'Git ignore', link: '/environment/Git/ignore' },
                { text: 'Github Actions自动化部署', link: '/environment/Git/github-actions' }
            ]
        },
        {
            text: 'Node 环境',
            items: [
                { text: 'nvm - node版本管理', link: '/environment/Node/nvm' },
                { text: 'npm', link: '/environment/Node/npm' },
                { text: 'nrm - npm镜像源管理' },
            ]
        }
    ],
    '/marker/': <IItems[]>[
        {
            text: 'Doc - 文档类', items: [
                { text: '开发者文档', link: '/marker/doc' },
                // { text: '快捷工具', link: '/marker/doc' }
            ]
        },
        {
            text: 'Design - 设计类', link: ''
        }
    ],
    '/memo/nuxt/': <IItems[]>[
        {
            text: '基础', items: [
                { text: 'Api', link: '/memo/nuxt/api' },
                { text: 'Config', link: '/memo/nuxt/config' },
            ]
        },
    ],
   
    '/memo/typescript/': <IItems[]>[
        {
            text: '基础', items: [
                { text: 'type和interface', link: '/memo/typescript/type和interface' },
                { text: 'tsconfig.json详解', link: '/memo/typescript/tsconfig配置文件' }
            ]
        },
        {
            text: '高阶', items: [
                { text: '高阶用法', link: '/memo/typescript/高阶' }
            ]
        },
    ],
    '/memo/microfront/': <IItems[]>[
        {
            text: '基础', items: [
                { text: '介绍', link: '/memo/microfront/base' }
            ]
        },
        {
            text: 'qiankun - 阿里', items: [
                { text: '使用', link: '/memo/microfront/qiankun/use' },
                { text: '踩坑', link: '/memo/microfront/qiankun/solution' },
            ]
        },
        {
            text: 'wujie - 腾讯', items: [
                { text: '使用', link: '/memo/microfront/wujie/use' },
            ]
        },
        {
            text: 'microapp - 京东', items: [
                { text: '使用', link: '/memo/microfront/microapp/use' },
            ]
        },
    ],
    '/memo/other/': <IItems[]>[
        {
            text: 'Axios', items: [
                { text: 'axios封装', link: '/memo/other/axios/axios封装' }
            ]
        },
        {
            text: 'Algolia', items: [
                { text: 'vitepress 接入algolia', link: '/memo/other/algolia/vitepress-algolia' },
                { text: 'vitepress 无法搜索（解决）', link: '/memo/other/algolia/algolia-solution' },
                {text:'VitePress 添加本地搜索功能',link:'/memo/other/algolia/local-search'}
            ]
        },
    ],
} as ISidebarProps