<template>
  <div class="entry-title d-flex justify-content-between p-3">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary">
        Subir foto <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy?"></textarea>
  </div>
  <Fab />

  <img src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" alt="entryPicture" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
};
</script>

<style lang="scss" scopped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}
</style>