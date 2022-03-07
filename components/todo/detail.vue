<template>
  <div>
    <p>id : {{ todo.id }}</p>
    <p>title : {{ todo.title }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['todo']);
</script>
