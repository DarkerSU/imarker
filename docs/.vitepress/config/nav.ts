export default [
    { text: 'Env', link: '/environment/', activeMatch: '^/environment/' },
    { text: 'Server', link: '/tools/', activeMatch: '^/tools/' },
    {
        text: 'Marker',activeMatch: '^/marker/',
        items: [
            { text: 'Doc - 文档类', link: '/marker/doc' },
            { text: 'Vue3', link: 'https://cn.vuejs.org/' },
            { text: 'Vite', link: 'https://cn.vitejs.dev/' },
        ]
    },
    { text: 'Tools', link: '/tools/', activeMatch: '^/tools/' },
    { text: '备忘录', link: '/memo/', activeMatch: '^/memo/' },
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