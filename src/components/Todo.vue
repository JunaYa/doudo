<template>
  <div class="root">
    <div class="layout-todo">
      <TodoItem
        v-for="(item, index) in list"
        :key="item.index"
        :item="item"
        @click="onItemSelected(index, item)"
      />
    </div>
    <div class="btn-add-wrapper">
      <div
        class="btn-add"
        @click="addNewTodo"
      />
    </div>
  </div>
</template>

<script>

import TodoItem from '@/components/TodoItem.vue'

import {
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  name: 'Todo',

  components: {
    TodoItem,
  },

  computed: {
    ...mapGetters([
      'list',
    ]),
  },

  methods: {
    ...mapMutations([
      'add',
      'remove',
      'update',
    ]),

    addNewTodo() {
      this.add({
        index: this.list.length,
        title: `TITLE - ${this.list.length}`,
        content: `CONTENT - ${this.list.length}`,
        checked: false,
      })
    },

    onItemSelected(index, item) {
      item.checked = !item.checked
      this.update({ index, newData: item })
    }
  },

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
  box-shadow: 4px 4px 13px rgba(0, 0, 0, .3);
  cursor: pointer;
}

.btn-add::before {
  position: absolute;
  top: 50%;
  left: 50%;
  content: '';
  width: 1.2rem;
  height: 3px;
  background-color: #FFFFFF;
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
  background-color: #FFFFFF;
  border-radius: 3px;
  transform: translate(-50%, -50%);
}
</style>
