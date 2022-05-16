<template>
  <div>
    <h2>Todo</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo @add-todo="addToDo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <Loader v-if="loading"/>
    <!-- <TodoList
      v-bind:todos="todos"
      @remove-todo="removeTodoA"
      v-else-if="todos.length"
    /> -->
    <TodoList
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodoA"
      v-else-if="filteredTodos.length"
    />
    
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";
export default {
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  data() {
    return {
      todos: [
        // { id: 1, title: "Buy bread", completed: false },
        // { id: 2, title: "Buy butter", completed: false },
        // { id: 3, title: "Buy beer", completed: false },
      ],
      loading: true,
      filter: 'all'
    };
  },
  methods: {
    removeTodoA(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addToDo(todo) {
      this.todos.push(todo);
    },
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      })
  },
  watch: {
    filter(value) {
      console.log(value)
    }
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all'){
        return this.todos
      }
      if(this.filter === 'completed'){
        return this.todos.filter(t => t.completed)
      }
      if(this.filter === 'not-completed'){
        return this.todos.filter(t => !t.completed)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>