<template>
  <div class="page-todo-detail">
    <button type="button" @click="$router.go(-1)">back</button>

    <todo-detail :todo="todo" />

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
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from '@nuxtjs/composition-api'

const store = useStore();
const route = useRoute();

const { id } = route.value.params;

/* todo */
const todo = ref({});

useFetch(async () => {
  todo.value = await store.dispatch('todo/show', { id: id });
})

/* lifeCycle */
const lifeCycle = ref(0);

useFetch(async () => console.log('useFetch', ++lifeCycle.value))
onBeforeMount(() => console.log('onBeforeMount', ++lifeCycle.value))
onMounted(() => console.log('onMounted', ++lifeCycle.value))
onBeforeUnmount(() => console.log('onBeforeUnmount', ++lifeCycle.value))
onUnmounted(() => console.log('onUnmounted', ++lifeCycle.value))

/* count */
const count = ref(0)
const countText = computed(() => `count : ${count.value}`)

const increase = () => count.value++
const decrease = () => count.value--

/* global count */
const globalCount = computed(() => store.state.count.index);

const globalIncrease = () => store.commit('count/increase')
const globalDecrease = () => store.commit('count/decrease')
</script>
