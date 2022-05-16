<template>
  <div>
    <ul>      
      <TodoItem v-for="(todo, i) in todos" v-bind:todo="todo" :key="todo.id" v-on:remove-todo="removeTodo" v-bind:index="i"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue"
  export default {
    props: ["todos"],
    components: {
      TodoItem
    },
    methods: {
      removeTodo(id) {
        console.log(id)
        this.$emit('remove-todo', id)
      }
    }
  }
</script>

<style scoped>
ul {
  list-style: none;
  margin-top: 10px;
  padding: 0;
}

</style>