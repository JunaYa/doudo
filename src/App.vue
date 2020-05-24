<template>
  <div id="app">
    <SignInPage />
    <TodoView v-if="false" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoView from './components/TodoView.vue';
import SignInPage from './pages/sigin/SignIn.vue';

@Component({
  components: {
    SignInPage,
    TodoView
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
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
