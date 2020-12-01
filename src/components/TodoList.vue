<template>
  <div>
    <h4 v-for="todo in $store.state.todo" :key="todo.id">
      {{todo.item}}
      <button class="btn" @click="delItem($index)">刪除</button>
    </h4>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  methods: {
    delItem: function(index) {
      this.$store.state.todo.splice(index, 1);
    }
  }
};
</script>
