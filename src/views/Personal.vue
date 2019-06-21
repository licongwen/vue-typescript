<template>
    <div id='personal'>
        <mu-appbar class="title" title='个人中心'></mu-appbar>
        <main>
            <img :src='user.avatar_url'/>
            <span class="name">{{userData.loginname}}</span>
            <div class="timer">
                <span>积分: {{userData.score}}</span>
                <span>注册时间: {{userData.create_at}}</span>
            </div>
            <section class="content">
                <mu-list>
                    <mu-list-item class="list" title="最近主题" v-if='userData.recent_topics' :open='false' toggleNested>
                        <mu-icon class="icon" slot='left'/>
                        <mu-list-item v-for="item in userData.recent_topics" :key='item.id' :title="item.title" slot="nested">
                            <mu-icon class="icon" slot='left' value='description'></mu-icon>
                        </mu-list-item>
                        <span class="count">{{userData.recent_topics.length}} 个</span>
                    </mu-list-item>
                    <mu-list-item class="list" title="最近回复" v-if='userData.recent_replies' :open='false' toggleNested>
                        <mu-icon class="icon" slot='left'/>
                        <mu-list-item v-for="item in userData.recent_replies" :key='item.id' :title="item.title" slot="nested">
                            <mu-icon class="icon" slot='left' value='description'></mu-icon>
                        </mu-list-item>
                        <span class="count">{{userData.recent_replies.length}} 个</span>
                    </mu-list-item>
                    <mu-list-item class="list" title="收藏主题" v-if='userData.collect_topics' :open='false' toggleNested>
                        <mu-icon class="icon" slot='left'/>
                        <mu-list-item v-for="item in userData.collect_topics" :key='item.id' :title="item.title" slot="nested">
                            <mu-icon class="icon" slot='left' value='description'></mu-icon>
                        </mu-list-item>
                        <span class="count">{{userData.collect_topics.length}} 个</span>
                    </mu-list-item>
                </mu-list>
            </section>
            <mu-raised-button @click="logout" class="demo-raised-button" label="退出登录"/>
        </main>
        <BottomNav class="bottom"></BottomNav>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action } from 'vuex-class'
import { getToken } from '../utils/auth'
import BottomNav from '../components/BottomNavigation.vue'
/* eslint-disable */
@Component({
    components:{ BottomNav }
})

export default class Personal extends Vue {
    accesstoken:string =''
    user:Object={}
    userData:Object={}

    @Action('login') login:any
    @Action('getUserData') getuserdata:any
    @Action('clearStorage') clearstorage:any

    
    created () {
        this.getDate()
    }

    getDate () {
        this.login(getToken()).then((response:any) => {
            this.user = response.data;
            this.getUserData(response.data.loginname)
        })
    }
    getUserData (val:string) {
        this.getuserdata(val).then((response:any) => {
            this.userData = response.data.data;
        })
    }
    logout () {
        this.clearstorage()
        this.$router.push({
            path:'/login'
        })
    }
}

</script>

<style lang="scss">
#personal{
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    .personal{
		display: flex;
		flex-direction: column;
		background-color: #f8f8f8;
	}
	.title {
	    text-align: center;
	    height: 5rem;
	}

	main {
	    flex: 1;
	    margin: 5rem 0;
	   	
	    display: flex;
	    flex-direction: column;
	    /*justify-content: center;*/
	    align-items: center;
	    padding: 1rem;
	    background-color: #f8f8f8;
	}

	.demo-raised-button {
	    width: 100%;
	    background: #009688;
	    color:#f8f8f8;
	}

	main>img {
	    width: 8rem;
	    height: 8rem;
	    border-radius: 50%;
	    margin: 1rem 0;
	}

	.name {
	    color: #009688;
	    font-weight: 700;
	    font-size: 24px;
	}

	.timer {
	    display: flex;
	    justify-content: space-around;
	    width: 100%;
	    margin: 1rem 0;
	}

	.content {
	    flex: 1;
	    width: 100%;
	    height:180px;
	    overflow-y: auto;
	    margin-bottom: 1rem;
	}

	.mu-list {
	    padding: 0;
	}

	.list:first-child {
	    border-top: 1px solid #009688;
	}

	.count {
	    background-color: #009688;
	    color: #fff;
	    padding: 0.1rem 0.6rem;
	    border-radius: 0.2rem;
	    margin-top: 2rem;
	}

	.icon {
	    color: #009688;
	}
}
</style>
