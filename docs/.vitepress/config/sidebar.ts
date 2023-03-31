
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
                { text: '快捷工具', link: '/marker/doc' }
            ]
        },
        {
            text: 'Design - 设计类', link: ''
        }
    ],
    '/memo/': <IItems[]>[
        {
            text: 'TypeScript', items: [
                { text: '基础', link: '/memo/typescript/index' }
            ]
        },
        {
            text: 'Axios', items: [
                { text: 'axios封装', link: '/memo/axios/axios封装' }
            ]
        },
        {
            text: 'Nuxt', items: [
                { text: 'Api', link: '/memo/nuxt/api' },
                { text: 'Config', link: '/memo/nuxt/config' },
            ]
        },
        {
            text: '微前端', items: [
                { text: '介绍', link: '/memo/microweb/base' },
                { text: '微前端方案', link: '/memo/microweb/example' },
            ]
        }
    ]
} as ISidebarProps