<template>
  <div>
    <p>id : {{ id }}</p>
  </div>
</template>

<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const id = computed(() => route.value.params.id)

    return { id }
  },
})
</script>
