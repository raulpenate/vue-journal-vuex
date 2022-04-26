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
    <textarea placeholder="Que sucedio hoy?">{{  }}</textarea>
  </div>
  <Fab icon="fa-save"/>

  <img
    src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
    alt="entryPicture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from 'vuex'; //

export default {
  props:{
    id:{
      type: String,
      required: true
    }
  },
  computed:{
    ...mapGetters('journal',['getEntriesById']),
    entryById(){
      return this.getEntriesById(this.id)
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  methods: {
    loadEntry(){
      
    }
  },
  created() {
    // console.log(this.$route.params.id);
    console.log(this.id);
  }
};
</script>

<style lang="scss" scopped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>