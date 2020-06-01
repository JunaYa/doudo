<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">SignIn</router-link>
      <router-link to="/todo">Todo</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  box-sizing: border-box;
}
/* === SETUP === */
*,
*::before,
*::after {
  box-sizing: border-box;
  font-weight: 400;

  @media screen and (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
}
::selection {
  text-shadow: none;
  color: $white;
  background-color: $primary-light;
}
html {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
