type SN = string | number

export interface LoginParams {
    username: string,
    password: string
}

export interface Userinfo {
    userid: SN,
    username: string,
    userState: Boolean,
    phone: SN
}
export interface LoginRes {
    userinfo:Userinfo,
    token: string
}