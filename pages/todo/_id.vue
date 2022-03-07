<template>
  <div>
    <p>{{ todo }}</p>
    <p>id : {{ todo.id }}</p>
    <p>completed : {{ todo.title }}</p>

    <p>{{ count }}</p>
    <p>{{ countText }}</p>
    <button type="button" @click="increase">increase</button>
    <button type="button" @click="decrease">decrease</button>

    <p>globalCoubnt : {{ globalCount }}</p>
    <button type="button" @click="globalIncrease">increase</button>
    <button type="button" @click="globalDecrease">decrease</button>
  </div>
</template>

<script setup>
import { useStore, useFetch, useRoute } from '@nuxtjs/composition-api'
import { ref, computed } from '@nuxtjs/composition-api'
import { onBeforeMount, onMounted } from '@nuxtjs/composition-api'

const store = useStore();
const route = useRoute();

const { id } = route.value.params;

/* start : todo */
const todo = ref({});
const lifeCycle = ref(0);

useFetch(async () => {
  console.log('useFetch', ++lifeCycle.value)
  todo.value = await store.dispatch('todo/show', { id: id });
})

onBeforeMount(() => {
  console.log('onBeforeMount', ++lifeCycle.value)
})

onMounted(() => {
  console.log('onMounted', ++lifeCycle.value)
})

/* start : count */
const count = ref(0)
const countText = computed(() => `count : ${count.value}`)

const increase = () => count.value++
const decrease = () => count.value--

/* start : global count */
const globalCount = computed(() => store.state.count.index);

const globalIncrease = () => store.commit('count/increase')
const globalDecrease = () => store.commit('count/decrease')
</script>
