<template>
  <section class="item">
    <div class="title-layout">
      <Checkbox :checked="item.checked" @click="$emit('click', item)" />
      <input
        ref="inputTitle"
        v-model="item.title"
        type="text"
        @keyup.13="cancelEdit"
        @blur="onBlur"
        @focus="onFocus"
        class="input title"
      />
    </div>
    <div v-show="isExpanded" class="content-layout">
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
  </section>
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

  editType = 'idle';
  isExpanded = false;

  onBlur() {
    this.isExpanded = false;
  }

  onFocus() {
    this.isExpanded = true;
  }

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
  padding: 16px 22px;
  margin-bottom: 16px;
  border-radius: 2px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.2);
  }
}

.title-layout {
  @include f-r;
  justify-content: flex-start;
  flex-wrap: nowrap;
  line-height: 1.4rem;
}

.content {
  text-align: left;
  font-size: 1rem;
  color: #666666;
  user-select: none;
}

.title {
  flex: 1;
  text-align: left;
  color: $text-color-black;
  font-size: 1rem;
  font-weight: 500;
  color: inherit;
  border-radius: 2px;
  border-width: 0;
  padding: 12px 16px;
  margin-left: 16px;
  background-color: $background;
  box-shadow: outset-shadow();
  &:focus-within {
    box-shadow: inset-shadow();
  }
}
</style>
