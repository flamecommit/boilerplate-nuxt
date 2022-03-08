<template>
  <div>
    <p>Index</p>
    <p><nuxt-link to="/todo">todo list</nuxt-link></p>
    <button @click="is_modal = !is_modal">modal open</button>
    <modal-outer v-if="is_modal">
      <div>modal outer</div>
    </modal-outer>
  </div>
</template>

<script setup>
let is_modal = false;
</script>