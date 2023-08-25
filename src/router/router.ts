/**
* @description: 创建路由对象
* @author: 'miaowang'
* @date : 2023-01-15 13:37:42
*/

import { createRouter, createWebHistory } from 'vue-router';
import baseRouter from './modules/base'

const routes = [...baseRouter]
console.log("routers", routes)

const router = createRouter({
    history: createWebHistory(),
    routes
});
console.log("routers", router)

export default router
