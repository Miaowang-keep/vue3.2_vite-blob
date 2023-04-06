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
console.log("router", router)
createApp(App).use(createPinia()).use(router).mount('#app')
