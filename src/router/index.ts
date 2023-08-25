/**
* @description: 路由守卫控制
* @author: 'miaowang'
* @date : 2023-01-15 13:38:02
*/
import router from './router'
router.beforeEach(async (to, from) => {
    //返回false 取消导航
    if (to.path === '/') {
        return { name: 'login' }
    }
    if (from.path == '/login') {
        
    }
})