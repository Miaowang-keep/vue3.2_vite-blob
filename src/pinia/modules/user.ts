import { defineStore } from "pinia";
import { computed, ref, reactive } from "vue";
import { LoginParam } from '../../views/login/type'


interface UserInfo {
    userid: string | number,
    username: string,
    roleid: string | number,
    userstate: string | number,
}

export const useUserStore = defineStore('userStore', () => {

    const userInfoObj = ref<UserInfo>({
        userid: '',
        username: '',
        roleid: '',
        userstate: ''
    })

    const nowToken = ref<string>(window.localStorage.getItem('token') || '')

    const setToken = (token: string) => {
        nowToken.value = token
    }
    const setUserinfo = (userinfo: UserInfo) => {
        userInfoObj.value = userinfo
    }

    return { userInfoObj, nowToken, setToken }

})