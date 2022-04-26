<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({ name:'entry', params:{ id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fs-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021</span>
    </div>

    <div class="entry-description">
    {{ shortText }}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    entry: {
      type: Object,
      required: true
    },
  },
  computed:{
    shortText(){
      return ( this.entry.text.length > 130 )
              ? this.entry.text.substring(0, 130) + '...'
              : this.entry.text
    },
    dateArray(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.entry-description{
    text-align: left;
}

.entry-container{
    border-bottom: 2px solid #b0b6bd;
    transition: 0.2s all ease-out;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }
}
</style>