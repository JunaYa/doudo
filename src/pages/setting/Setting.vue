<template>
  <div class="settting-root">
    <ul>
      <li class="session">
        <USwitch :checked="false" />
        <h2 class="engrave">{{ $t('setting.theme') }}</h2>
      </li>
      <li class="session">
        <USwitch :checked="false" />
        <h2 class="engrave">{{ $t('setting.language') }}</h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import USwitch from '@/components/nested/Switch.vue';

@Component({
  components: {
    USwitch
  }
})
export default class Setting extends Vue {}
</script>

<style lang="scss" scoped>
.settting-root {
  text-align: center;
}

ul {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  li {
    @include f-r-b;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: $standard-radius;
    background: $background;
    box-shadow: outset-shadow();
  }
}

.engrave {
  margin: 0;
}
</style>
