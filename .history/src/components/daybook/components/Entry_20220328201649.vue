<template>
  <div class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fs-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021</span>
    </div>

    <div class="entry-description">
        Tempor nostrud nulla voluptate proident ex. Est mollit officia dolor mollit eiusmod. Nisi labore cillum deserunt dolor fugiat aute non incididunt. Exercitation id dolore velit in. Veniam mollit deserunt quis aliquip.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-description{
    text-align: left;
}

.entry-container{
    border: 2px solid #b0b6bd;
    transition: 0.2s all ease-out;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }
}
</style>