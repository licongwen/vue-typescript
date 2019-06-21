<template>
<!-- eslint-disable -->
    <div id='nav'>
        <mu-paper class="bottom_nav">
            <mu-bottom-nav :value='bottomnav' @change="changeVal">
                <mu-bottom-nav-item to='/home' value='首页' title='首页' icon='home' />
                <mu-bottom-nav-item to='/subscribe' value='发布' title='发布' icon='subject' />
                <mu-bottom-nav-item to='/message' value='消息' title='消息' icon='message' />
                <mu-bottom-nav-item :to='mytab' value='我的' title='我的' icon='person'/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { getToken } from '../utils/auth'
import { Watch } from 'vue-property-decorator'

@Component({})

export default class BottomNav extends Vue {
    bottomnav:string = '首页'
    mytab:string = '/login'
    /* eslint-disable */
    created(){
        this.changeRouter();
    }

    @Watch('$route')
    changeRouter1(val:string,oldVal:string){
        this.changeRouter()
    }

    changeVal(val:string){
        this.bottomnav = val
    }
    changeRouter(){
        let accessKey = getToken()
        if(accessKey){
            this.mytab='/personal';
        }else{
            this.mytab='/login';
        }
        if(this.$route.path==='/login' || this.$route.path==='/personal'){
            this.bottomnav='我的';
        }
        if(this.$route.path==='/home'){
            this.bottomnav='首页';
        }
        if(this.$route.path==='/subscribe'){
            this.bottomnav='发布';	
        }
        if(this.$route.path==='/message'){
            this.bottomnav='消息'
        }
    }

}
</script>

<style lang="scss">
#nav{
   .bottom_nav .mu-bottom-nav-shift-wrapper{
       display: flex;
        justify-content: space-around;
    }
    .bottom_nav{
        height: 5rem;
        position: fixed;
        bottom:0;
        left: 0;
        right: 0;
    }
}
</style>
