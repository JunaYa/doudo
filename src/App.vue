<template>
  <div id="app">
    <Todo v-show="false" />
    <SignIn />
  </div>
</template>

<script>
import SignIn from './pages/sigin/SignIn.vue';
import Todo from './components/Todo.vue';

export default {
  name: 'App',
  components: {
    SignIn,
    Todo
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  --button-width: 2.2rem;
  --button-height: 1.3rem;
  --toggle-diameter: 1rem;
  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  --toggle-shadow-offset: 10px;
  --toggle-wider: 1rem;
  --color-grey: #e9e9e9;
  --color-dark-gray: #39393d;
  --color-green: #ef334e;

  --text-color-white: #ffffff;
  --text-color-gray: #666666;
  --text-color-black: #333333;
  --text-color-gold: #dbaa00;
  --text-color-primary: #ef334e;

  --divider-color: #eeeeee;
  --bg-color1: #f85141;
  --bg-color2: #f02f4c;
}

input {
  outline: none;
  border: none;
}
</style>
