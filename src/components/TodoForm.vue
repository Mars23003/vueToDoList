<template>
  <div>
    <input type="text" v-model="newItem" />
    <button class="btn" @click="addNew()">提交</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  methods: {
    addNew() {
      this.$store.dispatch("addNew", this.newItem);
    }
  }
};
</script>
