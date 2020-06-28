<template>
  <div class="home">
    <div class="container">
      <div class="scalable">
        <div class="content">
          <Aside />
        </div>
        <div class="separator"><i></i><i></i></div>
      </div>
      <div class="main">
        <div class="content"><TodoVIew /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Aside from '@/pages/aside/Aside.vue';
import TodoVIew from '@/pages/todo/TodoView.vue';
import { Vue, Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
/* eslint-disable no-unused-vars */
import { Structure } from '@/store/module/setting/types';

const namespace = 'setting';

@Component({
  components: {
    Aside,
    TodoVIew
  }
})
export default class Home extends Vue {
  private startX = 0;
  private startWidth = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Mutation('get_structure', { namespace }) getStructure: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Mutation('update_structure', { namespace }) updateStructure: any;

  get structure(): Structure {
    return this.$store.getters['setting/structure'];
  }

  mounted() {
    this.getStructure();
    this.startWidth = this.structure.separator || this.getScalableDivWidth();
    const scalable = document.querySelector('.scalable') as HTMLDivElement;
    scalable.style.width = this.startWidth + 'px';

    const separator = document.querySelector('.separator') as HTMLDivElement;
    separator.addEventListener('mousedown', this.onStartDrag);
  }

  onStartDrag(e: MouseEvent) {
    this.startX = e.clientX;
    this.startWidth = this.getScalableDivWidth();

    document.documentElement.addEventListener('mousemove', this.onDrag);
    document.documentElement.addEventListener('mouseup', this.onStopDrag);
  }

  onDrag(e: MouseEvent) {
    const scalable = document.querySelector('.scalable') as HTMLDivElement;
    scalable.style.width = this.startWidth + e.clientX - this.startX + 'px';
  }

  onStopDrag() {
    this.startWidth = this.getScalableDivWidth();
    document.documentElement.removeEventListener('mouseup', this.onStartDrag);
    document.documentElement.removeEventListener('mousemove', this.onDrag);

    // 更新保存最新设置
    this.structure.separator = this.startWidth;
    this.updateStructure(this.structure);
  }

  getScalableDivWidth() {
    const separator = document.querySelector('.scalable') as HTMLDivElement;
    return parseInt(window.getComputedStyle(separator).width, 10);
  }
}
</script>

<style scoped lang="scss">
.home {
  background: $background;
  color: $grey-5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
.scalable {
  position: relative;
  background-color: #eeeeee;
  min-width: 200px;
}
.main {
  background-color: #ffffff;
  flex: 1;
  min-width: 50vw;
}
.content {
  padding: 20px;
  height: 100vh;
}
.scalable .separator {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 8px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: raised-shadow();
  cursor: col-resize;
}
.scalable .separator i {
  display: inline-block;
  height: 14px;
  width: 4px;
  background-color: #e9e9e9;
}
.scalable .content {
  padding-right: 18px;
}

@media screen and (max-width: 640px) {
  .scalable {
    display: none;
  }
}
</style>
