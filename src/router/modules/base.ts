/**
* @description: 静态路由
* @author: 'miaowang'
* @date : 2023-01-15 13:37:07
*/
export default [
    {
        name: 'login',
        path: '/login',
        component: () => import("../../views/login.vue")
    }
]