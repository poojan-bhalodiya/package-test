<script setup>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import { useTodos } from "./composables/useTodos";

const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
</script>

<template>
  <div class="todo-app">
    <h1>Todo App</h1>
    <TodoForm @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
}
</style>
