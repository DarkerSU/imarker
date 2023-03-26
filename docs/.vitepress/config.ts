import { defineConfig } from 'vitepress';
import nav from './config/nav';
import sidebar from './config/sidebar';
import algolia from './config/algolia';
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
        algolia
    }
})