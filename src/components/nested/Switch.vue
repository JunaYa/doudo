<template>
  <label class="switch-alt">
    <span class="sr-only">Switch</span>
    <input class="switch-alt__input" type="checkbox" :checked="checked" />
    <span class="switch-alt__slider"></span>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Switch extends Vue {
  @Prop({ type: Boolean, default: false })
  checked!: boolean;
}
</script>

<style lang="scss" scoped>
.switch {
  width: 3rem;
  height: 2rem;
}
</style>
