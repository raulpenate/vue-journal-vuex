<template>
  <Navbar/>
  <h1>Daybook Layout</h1>

  <div class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  },
};
</script>

<style>
</style>