<template>
    <div class="entry-list-container">

        <div class="px-2 pt-2">
            <input 
            type="text"
            class="form-control"
            placeholder="Buscar entradas"
            v-model="term"
            />
        </div>

        <div class="entry-scrollarea">
            <Entry
            v-for="entry in entriesByTerm"
            :key="entry.id">
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
        ...mapGetters('journal', ['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm(this.term)
        }
    },
    data(){
        return{
            term: ''
        }
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