export interface LoginParam {
    username: string
    password: string
}

export interface StringObj {
    [key:string]:any
}

export interface  Userinfo {
    userid:number
    userState:Boolean
    phone:string
    username: string

}

export interface Response {
    code: number,
    data:StringObj,
    error:string,
    msg:string
}
