<template>
  <div>
    <p>Todo List</p>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <nuxt-link :to="`/todo/${todo.id}`">{{ todo.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, useFetch, useStore } from '@nuxtjs/composition-api'

const getTodoList = () => {
  const store = useStore();
  const todoList = ref({});

  useFetch(async () => todoList.value = await store.dispatch('todo/index'));

  return { todoList }
}

export default {
  name: 'CompositionPage',
  setup() {
    const { todoList } = getTodoList()

    return { todoList }
  }
}
</script>
