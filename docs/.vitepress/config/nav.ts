export default [
    { text: 'Env', link: '/environment/', activeMatch: '^/environment/' },
    // { text: 'Server', link: '/tools/', activeMatch: '^/tools/' },
    {
        text: 'Marker', activeMatch: '^/marker/',
        items: [
            { text: 'Doc - 文档类', link: '/marker/doc' },
            { text: 'Vue3', link: 'https://cn.vuejs.org/' },
            { text: 'Vite', link: 'https://cn.vitejs.dev/' },
        ]
    },
    // { text: 'Tools', link: '/tools/', activeMatch: '^/tools/' },
    {
        text: '备忘录', activeMatch: '^/memo/',
        items: [
            { text: 'TypeScript', link: '/memo/typescript/type和interface' },
            { text: 'Nuxt', link: '/memo/nuxt/api' },
            { text: '微前端', link: '/memo/microfront/base' },
            { text: '其他', link: '/memo/other/index' },
        ]
    },
    {
        text: '常用库', items: [
            { text: 'Vue2', link: 'https://v2.cn.vuejs.org/' },
            { text: 'Vue3', link: 'https://cn.vuejs.org/' },
            { text: 'Vite', link: 'https://cn.vitejs.dev/' },
            { text: 'React官网', link: 'https://react.dev/' },
            { text: 'React中文网', link: 'https://react.docschina.org/' }
        ]
    }
]