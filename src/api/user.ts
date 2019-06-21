import request from '../utils/request';

export function getLogin(val:string){
    return request({
        url:'/v1/accesstoken',
        method:'post',
        data:{
            accesstoken:val
        }
    })
}

export function getuserdata(val:string){
    return request({
        url:'/v1/user/'+val,
        method:'get',
    })
}