type SN = string | number

export interface LoginParams {
    username: string,
    password: string
}

export interface LoginRes {
    userid: SN,
    username: string,
    userstate: SN,
    roleid: SN
}