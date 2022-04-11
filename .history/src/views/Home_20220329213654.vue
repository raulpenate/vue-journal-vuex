<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <button @click="goToDayBook" class="m-5 btn btn-primary">Vamos</button>
  <button @click="goToDayBook" class="m-5 btn btn-info">Nos</button>
  <button @click="goToDayBook" class="m-5 btn btn-secondary">Ya</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
