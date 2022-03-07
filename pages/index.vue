<template>
  <div>
    <p>Index</p>
    <p>{{ person1.name }} : {{ person1.age }}</p>
    <p>{{ dummy }}</p>
    <button type="button" @click="handleClick">click</button>
  </div>
</template>

<script>
import { ref, watchEffect, useStore, useFetch } from '@nuxtjs/composition-api'

<<<<<<< HEAD
export default Vue.extend({
  name: 'IndexPage'
})
</script>
=======
export default {
  name: 'IndexPage',
  setup(props) {
    const store = useStore();

    /* start : dummy */
    const dummy = ref({});

    useFetch(async () => dummy.value = await store.dispatch('dummy/index'));

    console.log(dummy);
    /* end : dummy */

    const person1 = ref({
      name: 'nkh',
      age: 32
    });

    console.log('setup', store);

    const handleClick = () => {
      person1.value.age++;
    };

    watchEffect(() => {
      console.log(
        "person1 value가 정의됬기에 search가 바뀔때마다 실행된다",
        person1.value.age
      );
    });

    return { person1, handleClick, dummy };
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  }
}
</script>
>>>>>>> 6425144ae971bf07dfa31b373f63de0813427518
