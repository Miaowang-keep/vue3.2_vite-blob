import { Request } from './request'
import { RequestConfig } from './type'
import { AxiosResponse } from 'axios'
import { config } from 'process'

//公用返回接口
export interface comonResponse<T> {
    code: number,
    result: T
}

/**
 *@generic T 请求参数
 *@generic D 响应结构
  @type   request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
 */
interface testRequest<T, R> extends RequestConfig<comonResponse<R>> {
    data?: T
}

const request = new Request({
    baseURL: '/lowerCode',
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => config,
        // 响应拦截器
        responseInterceptors: (result: AxiosResponse) => {
            console.log("实例响应请求111")
            return result
        },
    },
})

/**
 *@generic T 请求参数
 *@generic R 响应结构
  @type   request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
 */
const testRequestInstance = <T = any, R = any>(config: testRequest<any, R>) => {
    const { method = 'GET' } = config
    if (method === 'get' || method === 'GET') {
        config.params = config.data //这里的data就是请求参数
    }
    console.log(request)
    return request.request<comonResponse<R>>(config)
}
export default testRequestInstance