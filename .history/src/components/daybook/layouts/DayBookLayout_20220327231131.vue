<template>
  <h1>Daybook Layout</h1>
  <Navbar/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar.vue'))
  },
};
</script>

<style>
</style>