<template>
  <div class="settting-root">
    <ul>
      <li class="session">
        <USwitch :checked="false" @change="onChangeTheme" />
        <h2 class="engrave">{{ $t('setting.theme') }}</h2>
      </li>
      <li class="session">
        <USwitch :checked="language === 'zh'" @change="onChangeLanguage" />
        <span>{{ $t(language === 'zh' ? 'setting.zh' : 'setting.en') }}</span>
        <h2 class="engrave">{{ $t('setting.language') }}</h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import USwitch from '@/components/nested/USwitch.vue';
import { Mutation } from 'vuex-class';

const namespace = 'setting';

@Component({
  components: {
    USwitch
  }
})
export default class Setting extends Vue {
  get language() {
    return this.$store.getters['setting/language'];
  }

  @Mutation('updateLanguage', { namespace }) updateLanguage: any;

  onChangeTheme(isDark: boolean) {
    console.log('isDark', isDark);
  }

  onChangeLanguage(isZH: boolean) {
    console.log('onChangeLanguage', isZH);
    this.$i18n.locale = isZH ? 'zh' : 'en';
    this.updateLanguage(isZH ? 'zh' : 'en');
  }
}
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
