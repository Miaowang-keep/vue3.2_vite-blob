/*
 * @Author: miaowang
 * @Description:
 * @Date: 2023-04-06 17:06:37
 * @LastEditTime: 2023-04-06 21:28:18
 * @LastEditors: miaowang
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import './router/index'
// import './index.css'
import "tailwindcss/tailwind.css"
//element plus 的全局样式
import 'element-plus/dist/index.css'
createApp(App).use(createPinia()).use(router).mount('#app')
