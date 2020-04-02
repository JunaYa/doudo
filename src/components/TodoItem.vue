<template>
  <div
    class="item"
    @click="$emit('click')"
  >
    <input
      class="checkbox"
      :checked="item.checked"
      type="checkbox"
    >
    <span class="index">{{ item.index || 0 }}</span>
    <span class="title">{{ item.title || ' ' }}</span>
    <span class="content">{{ item.content || ' ' }}</span>
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

    computed: {
      dd() {
        console.log('computed', this.item)
        return this.item
      },
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
  margin-bottom: 2px;
  border-radius: 2px;
  cursor: pointer;
}

.checkbox {
  margin-right: 4px;
  background-color: #333333;
  padding: 8px;
}

.index {
  text-align: left;
  color: #666666;
  font-size: 1rem;
  margin-right: 8px;
}

.title {
  text-align: center;
  color: #333333;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 16px;
}

.content {
  text-align: left;
  font-size: 1rem;
  color: #666666;
}


</style>