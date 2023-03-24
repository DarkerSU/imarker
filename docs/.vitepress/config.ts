import { defineConfig } from 'vitepress';
import nav from './config/nav';
import sidebar from './config/sidebar';
export default defineConfig({
    base: '/iMarker/',
    title: 'IT-Marker',
    description: '技术永不褪色',
    head: [
        ['meta', { name: 'theme-color', content: '#646cff' }],
        ["meta", { name: 'referrer', content: 'no-referrer' }]
    ],
    themeConfig: {
        nav,
        sidebar,
        algolia:{
            appId:'TT98URW4E7',
            apiKey:'95ddb6f2e6f911858408217b80c13d9b',
            indexName:'iMarker'
        }
    }
})