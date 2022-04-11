<template>
<div class="entry-title d-flex justify-content-between p-3">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">Borrar <i class="fa fa-trash-alt"></i></button>

        <button class="btn btn-primary">Subir foto <i class="fa fa-upload"></i></button>
    </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy?"></textarea>
    </div>
    
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>

vue