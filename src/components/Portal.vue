<template>
<div>
    <!-- <h1 style="color:#ffffff">{{ msg }}</h1> -->
    <div class="itembar" v-for="i in items" :key="i.id">
    <ItemBar :caption="i.name" :data=i></ItemBar>
    </div>
</div>
</template>
<script>
import ItemBar from '@/components/ItemBar'
 import { get,sync } from "vuex-pathify"
export default {
    components:{ ItemBar },
    props: {
    msg: String
    },
    data () {
        return {
         
        }
    },
    computed: {
        items:get('items'),
          ...sync('items')
    }
}
</script>
<style scoped>
    .itembar {
        display: inline-flex;
        flex-wrap: wrap;
        padding: 5px;
    }
</style>