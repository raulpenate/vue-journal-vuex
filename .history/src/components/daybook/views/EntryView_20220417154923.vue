<template>
  <div class="entry-title d-flex justify-content-between p-3">
    <div>
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">{{ month }}</span>
      <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
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
    <textarea placeholder="Que sucedio hoy?" v-model="entry.text"> </textarea>
  </div>
  <Fab icon="fa-save" />

  <img
    src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
    alt="entryPicture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("journal", ["getEntriesById"]),
    entryById() {
      return this.getEntriesById(this.id);
    },
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  data() {
    return {
      entry: null,
    };
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  methods: {
    loadEntry() {
      const entry = this.getEntriesById(this.id);
      if (!entry) this.$router.push({ name: "no-entry" });

      this.entry = entry;
    },
  },
  created() {
    this.loadEntry();
  },
  watch:{
    id( value, oldValue ){
      console.log(value, oldValue);
    }
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