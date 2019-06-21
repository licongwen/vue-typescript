<template>
    <div id='home'>
        <header class="header"></header>
        <p>头信息</p>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script lang='ts'>
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '../components/Header.vue'
import BottomNav from '../components/BottomNavigation.vue'

@Component({
    components:{Header,BottomNav}
})

export default class HomePage extends Vue {}

</script>
<style lang="scss">
#home{
	display: flex;
	flex-direction: column;
	.header{
		position: fixed;		
		top: 0;
	    left: 0;
	    right: 0;
	    z-index: 1;
	}
	.tab{
		flex: 1;
    	margin: 9rem 0 5rem 0;
	}
}
</style>

