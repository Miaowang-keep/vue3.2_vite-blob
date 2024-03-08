import { defineConfig } from 'vite'

import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.development'
import viteProConfig from './vite.production'
const path = require('path')

const envResolver = {
    'bulid': () => {
        return ({ ...viteBaseConfig, ...viteProConfig })
    },
    'serve': () => {
        return ({ ...viteBaseConfig, ...viteDevConfig })
    }
}

export default defineConfig(({ command, mode }) => {
    console.log("command",command)
    return envResolver[command]();
})
