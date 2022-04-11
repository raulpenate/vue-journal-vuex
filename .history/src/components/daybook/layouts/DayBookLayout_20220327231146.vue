<template>
  <Navbar/>
  <h1>Daybook Layout</h1>
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