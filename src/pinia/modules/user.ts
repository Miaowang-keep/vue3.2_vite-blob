import { defineStore } from "pinia";
import { computed, ref, reactive } from "vue";
import { LoginParam } from '../../views/login/type';
import { getToken,setToken as LsetToken ,getUserinfo,setUserinfo as LsetUserinfo,removeUserinfo,removeToken } from "../../utils/cache/localstorage";
import {isUndef} from "../../utils/shared/index";

type SN = string | number


export interface UserInfo {

    userid: SN,
    username: string,
    userState: Boolean,
    phone: SN
}

export const useUserStore = defineStore('userStore', () => {

    const userInfoObj = ref<UserInfo>({
        userid: '',
        username: '',
        phone: '',
        userState: false
    })

    const nowToken = ref<string>(getToken() || '')

    const setToken = (token: string) => {    
        //先清理localStorage 中存储的的token
        isUndef(getToken())?void(0):removeToken()
        nowToken.value = token
        LsetToken(token)
    }
    const setUserinfo = (userinfo: UserInfo) => {
        userInfoObj.value = userinfo
        isUndef(getUserinfo())?void(0):removeUserinfo()
        LsetUserinfo(userinfo)
    }

    return { userInfoObj, nowToken, setToken, setUserinfo }

})