<template>
  <div>
    <ul>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">{{ $t('aside.inbox') }}</h2>
      </li>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">{{ $t('aside.today') }}</h2>
      </li>
      <li class="secstion">
        <Radio :checked="true" />
        <h2 class="engrave">{{ $t('aside.upcomming') }}</h2>
      </li>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">{{ $t('aside.anytime') }}</h2>
      </li>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">{{ $t('aside.someday') }}</h2>
      </li>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 class="engrave">{{ $t('aside.logbook') }}</h2>
      </li>
      <li class="secstion">
        <Radio :checked="false" />
        <h2 :class="{ 'item--checked': true }" class="item engrave">
          {{ $t('aside.trash') }}
        </h2>
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
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.engrave {
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  white-space: nowrap;
  &--checked {
    color: $primary;
  }
}
</style>
