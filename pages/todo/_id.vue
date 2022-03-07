<template>
  <div>
    <p>id : {{ todo.id }}</p>
    <p>completed : {{ todo.title }}</p>
  </div>
</template>

<script>
import { defineComponent, ref, computed, useRoute, useStore, useFetch, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();

    const id = computed(() => route.value.params.id);

    const todo = useAsync(async () => await store.dispatch('todo/show', { id: id.value }));

    return { 
      todo: todo.value
    }
  },
})
</script>
