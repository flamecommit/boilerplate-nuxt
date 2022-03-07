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

<script setup>
import { useStore, useFetch } from '@nuxtjs/composition-api'
import { ref } from '@nuxtjs/composition-api'

const store = useStore();
const todoList = ref({});

useFetch(async () => {
  todoList.value = await store.dispatch('todo/index')
})
</script>
