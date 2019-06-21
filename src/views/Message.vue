<template>
    <div id='subscribe'>
        <p>Message</p>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script lang ='ts'>
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'
import BottomNav from '../components/BottomNavigation.vue'

@Component({
    components:{ BottomNav }
})

export default class Message extends Vue {}
</script>

<style lang="scss">
#subscribe{
    color: red;
}
</style>