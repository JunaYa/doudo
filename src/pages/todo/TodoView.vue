<template>
  <div class="root">
    <div class="layout-todo">
      <TodoItem
        v-for="(item, index) in list"
        :key="item.index"
        :item="item"
        @click="result => onItemSelected(index, result)"
      />
    </div>
    <div class="btn-add-wrapper">
      <div
        :class="{ 'btn-undo--disable': !canUndo }"
        class="btn-undo"
        @click="undo"
      >
        undo
      </div>
      <div
        :class="{ 'btn-undo--disable': !canRedo }"
        class="btn-redo"
        @click="redo"
      >
        redo
      </div>
      <div class="btn-add" @click="addNewTodo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
/* eslint-disable no-unused-vars */
import { Todo } from '@/store/module/todo/types';

import TodoItem from '@/pages/todo/TodoItem.vue';

const namespace: string = 'todo';

@Component({
  components: {
    TodoItem
  }
})
export default class TodoView extends Vue {
  @Action('undo', { namespace }) undo: any;
  @Action('redo', { namespace }) redo: any;
  @Action('add', { namespace }) add: any;
  @Action('remove', { namespace }) remove: any;
  @Action('update', { namespace }) update: any;

  get list(): Todo[] {
    return this.$store.state.todo.list;
  }

  get canUndo(): boolean {
    return this.$store.state.todo.canUndo;
  }

  get canRedo(): boolean {
    return this.$store.state.todo.canRedo;
  }

  addNewTodo() {
    const param: Todo = {
      id: 'todo' + this.list.length,
      index: this.list.length,
      title: `TITLE - ${this.list.length}`,
      content: `CONTENT - ${this.list.length}`,
      checked: false
    };
    const todoData = {
      index: this.list.length,
      data: param
    };
    this.add(todoData);
  }

  onItemSelected(index: number, item: Todo) {
    item.checked = !item.checked;
    this.update({ index, data: item });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-add-wrapper {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

.btn-add {
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  background-color: #333333;
  border-radius: 50%;
  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
}

.btn-add::before {
  position: absolute;
  top: 50%;
  left: 50%;
  content: '';
  width: 1.2rem;
  height: 3px;
  background-color: #ffffff;
  border-radius: 3px;
  transform: translate(-50%, -50%);
}

.btn-add::after {
  position: absolute;
  top: 50%;
  left: 50%;
  content: '';
  width: 3px;
  height: 1.2rem;
  background-color: #ffffff;
  border-radius: 3px;
  transform: translate(-50%, -50%);
}

.btn-undo,
.btn-redo {
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #333333;
  border-radius: 50%;
  margin-bottom: 8px;
  line-height: 2.4rem;
  width: 2.4rem;
  height: 2.4rem;
  text-align: center;
  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
}
.btn-undo--disable,
.btn-redo--disable {
  background-color: #999999;
  transition: all 0.3s;
}
</style>
