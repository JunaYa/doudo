<template>
  <label class="container">
    <input
      class="checkbox"
      type="checkbox"
      :checked="checked"
      @click="onClick"
    />
    <span class="checkmark" />
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
  @Prop({ type: Boolean, default: false })
  checked!: boolean;

  onClick() {
    this.$emit('click');
  }
}
</script>

<style scoped lang="scss">
.container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 1.2rem;
  width: 1.2rem;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1rem;
  width: 1rem;
  background-color: #ffffff;
  border: 2px solid $text-color-primary;
  border-radius: 2px;
}

.container:hover input ~ .checkmark {
  background-color: #e4e4e4;
}

.container input:checked ~ .checkmark {
  background-color: $text-color-primary;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 0.2rem;
  top: -0.1rem;
  width: 0.25rem;
  height: 0.55rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  border-radius: 2px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
