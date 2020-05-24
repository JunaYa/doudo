<template>
  <div class="item">
    <Checkbox :checked="item.checked" @click="$emit('click', item)" />
    <span class="index">{{ item.index || 0 }}</span>
    <span
      v-show="editType !== 'title'"
      class="title"
      @dblclick="onEdit('title')"
      >{{ item.title || ' ' }}</span
    >
    <input
      ref="inputTitle"
      v-show="editType === 'title'"
      v-model="item.title"
      type="text"
      autofocus
      @keyup.13="cancelEdit"
      @blur="cancelEdit"
      @focus="onFocus"
      class="input input-title"
    />
    <span
      v-show="editType !== 'content'"
      class="content"
      @dblclick="onEdit('content')"
      >{{ item.content || ' ' }}</span
    >
    <input
      v-show="editType === 'content'"
      v-model="item.content"
      type="text"
      autofocus
      @blur="cancelEdit"
      class="input input-content"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Checkbox from '@/components/nested/Checkbox.vue';
/* eslint-disable no-unused-vars */
import { Todo } from '@/store/module/todo/types';

@Component({
  components: {
    Checkbox
  }
})
export default class TodoItem extends Vue {
  @Prop({ type: Object, default: () => {} })
  item!: Todo;

  editType: string = 'idle';

  onBlur() {}

  onFocus() {}

  /**
   * 编辑内容
   */
  onEdit(type: string) {
    this.editType = type;
  }
  /**
   * 取消编辑
   */
  cancelEdit() {
    this.$emit('click', this.item);
    this.editType = 'idle';
  }
}
</script>

<style scoped lang="scss">
.item {
  @include f-r;
  justify-content: flex-start;
  line-height: 2.4rem;
  padding: 4px 16px;
  margin-bottom: 16px;
  border-radius: 2px;
  user-select: none;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.2);
  }
}

.index {
  text-align: left;
  color: #666666;
  font-size: 1rem;
  margin: 0 8px;
  user-select: none;
}

.title {
  text-align: center;
  color: $text-color-black;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 16px;
  user-select: none;
}

.content {
  text-align: left;
  font-size: 1rem;
  color: #666666;
  user-select: none;
}

.input {
  font-size: 0.8rem;
  color: inherit;
  border-radius: 2px;
  border-width: 0;
  padding: 8px 8px;
}
</style>
