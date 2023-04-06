import request from "../../utils/axios";
import type { LoginParams, LoginRes } from './type'

export const loginByUsername = (data: LoginParams) => {
    return request<LoginParams, LoginRes>({
        url: '/user/login',
        method: 'post',
        data
    })
}