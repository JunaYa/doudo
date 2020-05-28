<template>
  <div class="home">
    <div class="container">
      <div :style="{ width: width + 'px' }" class="scalable">
        <div class="content">
          side
        </div>
        <div
          class="separator"
          @mousedown="onStartDrag"
          @mouseover="onDrag"
          @mouseup="onStopDrag"
        >
          <i></i><i></i>
        </div>
      </div>
      <div class="main">
        <div>content</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private startX: number = 0;
  private startWidth: number = 0;
  private width: number = 200;

  onStartDrag(e: MouseEvent) {
    console.log('onStartDrag', e);
    this.startX = e.clientX;
  }

  onDrag(e: MouseEvent) {
    console.log(e);
    this.width = this.startWidth + e.clientX - this.startX;
  }

  onStopDrag(e: MouseEvent) {
    console.log('onStopDrag', e);
  }
}
</script>

<style scoped lang="scss">
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
  background-color: yellow;
  flex: 1;
}
.content {
  padding: 20px;
}
.scalable .separator {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 14px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.35);
  cursor: col-resize;
}
.scalable .separator i {
  display: inline-block;
  height: 14px;
  width: 1px;
  background-color: #e9e9e9;
}
.scalable .content {
  padding-right: 14px;
}
</style>
