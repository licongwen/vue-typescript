

import * as types from '../mutation-types'
import { Commit } from 'vuex'
import { getLogin, getuserdata } from '@/api/user'
import { setToken, setLoginName, setUserId, ClearStorage } from '@/utils/auth'

interface State{
    name:String,
    age:Number,
    login:Boolean,
    token:String
}
const userObj: State ={
    name:'i am example',
    age:20,
    login:false,
    token:''
} 

const mutations = {
    [types.ADD_AGE](state:State,val:number){
        state.age = val
    },
    [types.TOKEN](state:State,val:string){
        setToken(val)
    },
    [types.USER_ID](state:State,val:string){
        setUserId(val)
    },
    [types.SET_USER_LOGIN_NAME](state:State,val:string){
        setLoginName(val)
    },
    [types.CLEAR_LOCALSTORAGE](stet:State,val:string){
        ClearStorage();
    }
}
const actions = {
    changeAge(context: { commit: Commit },val:number){
        context.commit(types.ADD_AGE,val)
    },
    login(context:{commit:Commit},val:string){
        return new Promise((resolve,reject)=>{
            getLogin(val).then(response=>{
                context.commit(types.USER_ID,response.data.id)
                context.commit(types.SET_USER_LOGIN_NAME,response.data.loginname)
                resolve(response);
            },err=>{
                reject(err);
            })
        })
    },
    getUserData(context:{commit:Commit},val:string){
        return new Promise((resolve,reject)=>{
            getuserdata(val).then((response:any)=>{
                resolve(response)
            },(err:any)=>{
                reject(err)
            })
        })
    },
    clearStorage(context:{commit:Commit}){
        context.commit(types.CLEAR_LOCALSTORAGE)
    }
}
const user ={
    state:userObj,
    mutations,
    actions
}
export default user;