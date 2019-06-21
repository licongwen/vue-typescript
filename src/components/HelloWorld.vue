<template>
  <div class="hello">
    <input v-model='accesstoken'/>
    <button @click='getLogin'>登陆</button>
  </div>
</template>

<script lang='ts'>

import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'

@Component

export default class HelloWorld extends Vue {
  accesstoken:string = ''
  @State(state => state.user.name) loginnanme:any
  @State(state => state.user.age) loginage:any
  @Action('changeAge') actionchangeAge:any
  @Action('login') login:any

  msg:string = 'welcom to ts vue world'
  created () {
    // console.log(this.msg)
    // console.log(this.loginnanme)
  }
  getLogin () {
    this.login(this.accesstoken)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
