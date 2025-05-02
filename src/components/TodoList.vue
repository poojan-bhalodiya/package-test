<script setup>
import TodoItem from './TodoItem.vue';

defineProps({
  todos: {
    type: Array,
    required: true
  }
});

defineEmits(['toggle-todo', 'delete-todo']);
</script>

<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle-todo', $event)"
      @delete="$emit('delete-todo', $event)"
    />
  </ul>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}
</style>