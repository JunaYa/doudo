<template>
  <div
    class="item"
  >
    <input
      class="checkbox"
      :checked="item.checked"
      type="checkbox"
      @click="$emit('click', item)"
    >
    <span
      class="index"
    >{{ item.index || 0 }}</span>
    <span
      v-show="editType !== 'title'"
      class="title"
      @dblclick="onEdit('title')"
    >{{ item.title || ' ' }}</span>
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
    >
    <span
      v-show="editType !== 'content'" 
      class="content"
      @dblclick="onEdit('content')"
    >{{ item.content || ' ' }}</span>
    <input
      v-show="editType === 'content'" 
      v-model="item.content"
      type="text"
      autofocus
      @blur="cancelEdit"
      class="input input-content"
    >
  </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        item: {
            type: Object,
            default: () => {},
        },
    },

    data() {
      return {
        editType: 'idle'
      }
    },

    computed: {
    },

    methods: {

      onBlur() {
        
      },

      onFocus() {

      },

      /**
       * 编辑内容
       */
      onEdit(type) {
        this.editType = type
      },

      /**
       * 取消编辑
       */
      cancelEdit() {
        this.$emit('click', this.item)
        this.editType = 'idle'
      }
    }

}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  line-height: 2.4rem;
  background-color: antiquewhite;
  padding: 4px 16px;
  margin-bottom: 4px;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
}

.item:hover {
  background-color: #dddddd;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, .2);
}

.checkbox {
  margin-right: 8px;
  background-color: #333333;
  padding: 8px;
  cursor: pionter;
  user-select: none;
}

.index {
  text-align: left;
  color: #666666;
  font-size: 1rem;
  margin-right: 8px;
  user-select: none;
}

.title {
  text-align: center;
  color: #333333;
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
  font-size: .8rem;
  color: inherit;
  border-radius: 2px;
  border-width: 0;
  padding: 8px 8px;
}


</style>