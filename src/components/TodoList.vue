<template>
  <div>
    <h4 v-for="todo in $store.state.todo" :key="todo.id">
      {{todo.item}}
      <button class="btn"></button>
    </h4>
  </div>
</template>

<script>
export default {
  name: "TodoList"
};
</script>
