import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

function resolve(path) {
    return path.resolve(__dirname, path)
}


export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve('./src')
        }
    }


})