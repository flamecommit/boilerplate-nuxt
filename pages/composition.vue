<template>
  <div>
    <p>Composition</p>
    <p>countWithUnit : {{ countWithUnit }}</p>
    <button type="button" @click="increase">plus</button>
    <button type="button" @click="decrease">minus</button>
    <ul>
      <li v-for="dummy in dummyList" :key="dummy.id">{{ dummy.title }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, useFetch, useStore } from '@nuxtjs/composition-api'

// computed 예제
const useCount = () => {
  const count = ref(0);
  const countWithUnit = computed(() => count.value + ' 입니다!')

  const increase = () => ++count.value;
  const decrease = () => --count.value;

  return { countWithUnit, increase, decrease }
}

const useDummy = () => {
  const store = useStore();
  const dummyList = ref({});

  useFetch(async () => dummyList.value = await store.dispatch('dummy/index'));

  return { dummyList }
}

export default {
  name: 'CompositionPage',
  setup() {
    const { countWithUnit, increase, decrease } = useCount()
    const { dummyList } = useDummy()

    return { 
      countWithUnit, increase, decrease,
      dummyList
    }
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  }
}
</script>
