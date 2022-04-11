<template>
  <button class="btn btn-primary">
      <i class="fa fa-2x {{ icono }}"></i>
  </button>
</template>

<script>
export default {
  props: ['icono']
}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 10px;
    height: 70px;
    position: fixed;
    right: 10px;
    width: 70px;
}
</style>