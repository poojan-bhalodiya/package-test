<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-todo']);
const newTodo = ref('');

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    emit('add-todo', newTodo.value);
    newTodo.value = '';
  }
};
</script>

<template>
  <div class="add-todo">
    <input 
      v-model="newTodo"
      @keyup.enter="handleSubmit"
      placeholder="Add new todo..."
      type="text"
    >
    <button @click="handleSubmit">Add</button>
  </div>
</template>

<style scoped>
.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-todo input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>