import { ref } from "vue";
import { useLocalStorage } from "@imtapan/re-storage";

export function useTodos() {
  const initialValue = JSON.stringify([]);
  const todoStorage = useLocalStorage("todos", initialValue);
  const storedValue = todoStorage.get();
  
  // Safely parse the stored value or use empty array if parsing fails
  let parsedTodos = [];
  try {
    parsedTodos = storedValue ? JSON.parse(storedValue) : [];
  } catch (e) {
    todoStorage.set(initialValue);
  }
  
  const todos = ref(parsedTodos);

  const addTodo = (text) => {
    if (text.trim()) {
      const todo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      todos.value.push(todo);
      todoStorage.set(JSON.stringify(todos.value));
    }
  };

  const toggleTodo = (id) => {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      todoStorage.set(JSON.stringify(todos.value));
    }
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
    todoStorage.set(JSON.stringify(todos.value));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
