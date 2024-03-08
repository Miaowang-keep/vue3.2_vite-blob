import { UserInfo } from "@api/users/type"

export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const setToken = (token: string) => {
  window.localStorage.setItem('token', token)
}

export const removeToken = () => {
  window.localStorage.removeItem('token');
}

export const getUserinfo = () => {
  return window.localStorage.getItem('userinfo')
}

export const setUserinfo = (userinfo: UserInfo) => {
  window.localStorage.setItem('userinfo', JSON.stringify(userinfo))
}

export const removeUserinfo = () => {
  window.localStorage.removeItem('userinfo')
}


