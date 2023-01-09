/**
* @description: 解决ts不识别.vue的问题 ，做一个ts的全局声明
* @author: 'miaowang'
* @date : 2023-01-09 16:42:34
*/

/// <reference types="vite/client" />

declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}