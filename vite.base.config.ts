/**
* @description: vite的基础通用配置
* @author: 'miaowang'
* @date : 2023-01-09 16:43:40
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import commonjs from 'vite-plugin-commonjs'
import postcssPresetEnv from "postcss-preset-env";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vueJsx from '@vitejs/plugin-vue-jsx'


/* function resolve(path) {
    return path.resolve(__dirname, path)
} */


export default defineConfig({
    base: '',
    plugins: [vue(),
        vueJsx(),
    commonjs(),
    AutoImport({
        resolvers: [ElementPlusResolver()],
    }),
    Components({
        resolvers: [ElementPlusResolver()]
    })
    ],
    mode: 'development', //开发模式
    publicDir: 'public', // 静态资源服务的文件夹
    resolve: {
        alias: {   //别名
            "@": resolve('./src'),
            "@utils": resolve('./src/utils'),
            "@components": resolve('./src/components'),
            '@pinia': resolve('./src/pinia'),
            '@img': resolve('./src/assets/img')
        },
        extensions: ['.js', '.ts', '.jsx', '.json', '.vue'],  //省略的扩展名 
    },
    server: {
        https: false, //是否开启https
        port: 9530, //端口号
        host: '0.0.0.0', //监听所有端口
        open: true, //服务启动时是否打开浏览器
        cors: true, // 允许跨域
        proxy: {
            '/lowerCode': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
            }
        },
    },
    css: {
        modules: { //css 模块化配置
            localsConvention: 'camelCaseOnly', //修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
            scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
            generateScopedName: "[name]_[local]_[hash:5]",
            globalModulePaths: [], // 代表你不想参与到css模块化的路径
        },
        preprocessorOptions: { //预处理器的配置
            sass: {
                additionalData: '@import "./src/assets/scss/common.scss";' // scss 的入口文件
            }
        },
        /*         postcss: {
                    plugins: [postcssPresetEnv()]
                }, */
        devSourcemap: false  //关闭css的sourcemap功能

    },
    json: {
        namedExports: true, // 是否支持从.json文件中进行按名导入
        stringify: false, //  开启此项，导入的 JSON 会被转换为 export default JSON.parse("...") 会禁用按名导入
    },


})