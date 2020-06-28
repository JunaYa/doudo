<template>
  <div class="aside-root">
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
    <div class="btn-group" @click="onNewArea">
      <button class="button">
        <span class="engrave">{{ $t('aside.new-area') }}</span>
      </button>
      <button class="button" @click="$router.push({ name: 'Setting' })">
        <span class="engrave">{{ $t('aside.setting') }}</span>
      </button>
    </div>
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

  /**
   * new area in aside
   */
  onNewArea() {
    console.log('new area');
  }
}
</script>

<style lang="scss" scoped>
.aside-root {
  @include f-c-b;
  height: 100%;
}
ul {
  flex: 1;
  padding: 0;
  height: calc(100vh - 2rem);
  overflow: auto;
}
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
.btn-group {
  height: 2rem;
  flex: 0;
  @include f-r-b;
  width: 100%;
  .button {
    width: 24px;
    height: 18px;
    white-space: nowrap;
    > span {
      margin: 0;
    }
  }
}
</style>
