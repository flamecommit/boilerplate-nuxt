<template>
  <div class="page-todo-index">
    <p>Todo List</p>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <nuxt-link :to="`/todo/${todo.id}`">{{ todo.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { 
  useStore, useFetch, useRoute,
  ref, watch,
  onUpdated
} from '@nuxtjs/composition-api'

const store = useStore();
const todoList = ref({});
const route = useRoute();

console.log(route.value);

useFetch(async () => {
  todoList.value = await store.dispatch('todo/index')
})

onUpdated(() => {
  console.log('onUpdated');
})
</script>
