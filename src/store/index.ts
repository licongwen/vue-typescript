import Vue from 'vue'
import Vuex,{ ActionTree, MutationTree } from 'vuex'
import user from './modules/user'
import app from './modules/app'
//import getters from './getter'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        user,
        app
    },
    //getters
})

export default store;