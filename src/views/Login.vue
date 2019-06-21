<template>
    <div id="login-box">
        <mu-appbar class="title">登陆</mu-appbar>
        <main class="main">
            <mu-text-field v-model="value" label="Access Token" labelFloat/>
            <mu-raised-button @click='login' label='登陆' class="demo-raised-button" primary/>
        </main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action } from 'vuex-class'
import { setToken } from '../utils/auth'

@Component({})
export default class Login extends Vue {
    value:string='640e7f6d-d7aa-41c0-9c6e-a67dd22608fb'
    @Action('login') getLogin:any
    /* eslint-disable */ 
    login () {
        this.getLogin(this.value).then((response:any) => {
            if(response.status == 200){
                setToken(this.value)
                this.$router.push({
                    path:'/personal'
                })
            }
        },(err:any) => {
            alert('状态码：'+err.response.status)
        })
    }
}
</script>
<style lang="scss">
#login-box{
    display: flex;
    flex-direction: column;
    .title{
        text-align: center;
        height: 5rem;
    }
    .main{
        flex: 1;
		margin: 5rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    }
    .demo-raised-button{
		margin-top: 2rem;
		width:100%;
	}
}
</style>

