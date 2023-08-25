/**
* @description: 静态路由
* @author: 'miaowang'
* @date : 2023-01-15 13:37:07
*/
export default [
    {
        name: 'home',
        path: '/',
        component: () => import("../../views/dashbord.vue")
    },
    {
        name: 'login',
        path: '/login',
        component: () => import("../../views/login/login.vue")
    },
    {
        name:'lowerCode',
        path:'/lowerCode',
        component:() =>import("../../views/lowerCodeMain/index.vue")
    }
]