<template>
    <div class="entry-list-container">

        <div class="px-2 pt-2">
            <input 
            type="text"
            class="form-control"
            placeholder="Buscar entradas"
            />
        </div>

        <div class="entry-scrollarea">
            <h2
            v-for="item in 100"
            :key="item">
                entry
            </h2>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>