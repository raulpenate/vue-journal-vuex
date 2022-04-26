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
            <Entry
            v-for="item in getEntriesByTerm"
            :key="item">
                entry
            </Entry>
        </div>

    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex'

export default {
    components:{
        Entry: defineAsyncComponent(() => import('./Entry.vue')),
    },
    computed: {
        ...mapGetters('journal', ['getEntriesByTerm'])
    }
}
</script>

<style style="scss" scoped>
inputdd
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh);
}
.entry-scrollarea{
    height: calc(100vh - 105px);
    overflow: scroll;
     overflow-x: hidden;
}

</style>