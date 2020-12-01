<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Todo</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    TodoForm,
    TodoList
  }
};
</script>
