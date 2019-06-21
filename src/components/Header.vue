<template>
<!--eslint-disable-->
    <div id='header'>
        <mu-appbar class="title" title='Vue.js中文社区'>
            <mu-icon-button slot='left'>
                <img class="logo" src='https://www.vue-js.com/public/images/vue.png'/>>
            </mu-icon-button>
            <mu-icon-menu slot="right" icon="more_vert" :value='theme' >
				<mu-menu-item title='LIGHT' value='teal'/> 
				<mu-menu-item title='CARBON' value='teal'/>
				<mu-menu-item title='TEAL' value='teal'/> 
			</mu-icon-menu>
        </mu-appbar>
    </div>
</template>
<script lang='ts'>
/* eslint-disable */
    import Vue from 'vue';
    import Component from 'vue-class-component'

    @Component

    export default class Header extends Vue {
        theme:string = 'teal'
    }
</script>
<style lang="scss">
#header{
    .title{
		text-align: center;
		height: 5rem;
	}
	.mu-icon-button{
		padding:0.4rem;
	}
}
</style>


