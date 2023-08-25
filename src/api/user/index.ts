import request from "../../utils/axios";
import type { LoginParams, LoginRes } from './type'

export const loginByUsername = (data: LoginParams) => {
    return request<LoginParams, LoginRes>({
        url: '/user/login',
        method: 'post',
        data,
        interceptors: {
            requestInterceptors(res) {
                console.log('接口请求拦截')

                return res
            },
            responseInterceptors<T>(result) {
                console.log("🚀 ~ file: index.ts:28 ~ loginByUsername ~ result:", result)
                const LoginRes = {
                    code: result.code,
                    result: {
                        userinfo: result.data.data,
                        token: result.data.token
                    }

                }
                return LoginRes
            },
        }

    })
}