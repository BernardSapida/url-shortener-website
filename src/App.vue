<template>
  <div id="app">
    <!-- Target -->
    <input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

    <!-- Trigger -->
    <button class="btn" data-clipboard-target="#foo">
      <font-awesome-icon icon="fa-solid fa-clipboard" />
    </button>
    <div>
      <b-alert show variant="primary">Primary Alert</b-alert>
      <b-alert show variant="secondary">Secondary Alert</b-alert>
      <b-alert show variant="success">Success Alert</b-alert>
      <b-alert show variant="danger">Danger Alert</b-alert>
      <b-alert show variant="warning">Warning Alert</b-alert>
      <b-alert show variant="info">Info Alert</b-alert>
      <b-alert show variant="light">Light Alert</b-alert>
      <b-alert show variant="dark">Dark Alert</b-alert>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './js/clipboard.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
