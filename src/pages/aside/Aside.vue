<template>
  <div>
    <ul>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">列表1</h2>
      </li>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">列表2</h2>
      </li>
      <li class="secstion">
        <Radio :checked="true" />
        <h2 class="engrave">列表3</h2>
      </li>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">列表4</h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Radio from '@/components/nested/Radio.vue';

@Component({
  components: {
    Radio
  }
})
export default class Aside extends Vue {
  list: string[] = [];
}
</script>

<style lang="scss" scoped>
li {
  @include f-r;
  justify-content: flex-start;
  padding: 1rem;
}
.engrave {
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
