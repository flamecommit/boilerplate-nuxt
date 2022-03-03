<template>
  <div>
    <p>Composition</p>
  </div>
</template>

<script>
import composition from '@nuxtjs/composition-api'

export default {
  name: 'CompositionPage',
  setup(props) {
    console.log('composition', composition);
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  }
}
</script>
