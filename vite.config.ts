import { defineConfig } from 'vite'

import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.development'
import viteProConfig from './vite.production'

const envResolver = {
    'bulid': () => {
        console.log("生产模式")
        return ({ ...viteBaseConfig, ...viteProConfig })
    },
    'serve': () => {
        console.log("开发模式")
        return ({ ...viteBaseConfig, ...viteDevConfig })
    }
}

export default defineConfig(({ command, mode }) => {
    return envResolver[command]();
})