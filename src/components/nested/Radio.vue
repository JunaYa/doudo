<template>
  <label class="radio">
    <span class="sr-only">Checkbox</span>
    <input type="radio" class="radio__input" name="radio" :checked="checked" />
    <span class="radio__checkmark"></span>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Radio extends Vue {
  @Prop({ type: Boolean, default: false })
  checked!: boolean;
}
</script>

<style lang="scss" scoped>
.radio {
  &__checkmark {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
