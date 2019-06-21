const TOKEN = 'TOKEN'
const LOGIN_NAME = 'LOGIN_NAME'
const USER_ID = 'USER_ID'

export function setToken(token:string){
    localStorage.setItem(TOKEN,token)
}
export function getToken(){
    return localStorage.getItem(TOKEN)
}
export function setLoginName(name:string){
    localStorage.setItem(LOGIN_NAME,name)
}

export function setUserId(id:string){
    localStorage.setItem(USER_ID,id)
}
export function ClearStorage(){
    localStorage.removeItem(TOKEN)
    localStorage.removeItem(LOGIN_NAME)
    localStorage.removeItem(USER_ID)
}