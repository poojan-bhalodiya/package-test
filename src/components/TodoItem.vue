<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
});

defineEmits(['toggle', 'delete']);
</script>

<template>
  <li :class="{ completed: todo.completed }">
    <input 
      type="checkbox"
      :checked="todo.completed"
      @change="$emit('toggle', todo.id)"
    >
    <span>{{ todo.text }}</span>
    <button @click="$emit('delete', todo.id)">Delete</button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

li.completed span {
  text-decoration: line-through;
  color: #888;
}

li button {
  background-color: #f44336;
  margin-left: auto;
}

li button:hover {
  background-color: #da190b;
}
</style>