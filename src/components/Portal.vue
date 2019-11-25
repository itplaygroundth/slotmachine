<template>
<div>
    <!-- <h1 style="color:#ffffff">{{ msg }}</h1> -->
    <div class="itembar" v-for="i in items" :key="i.id">
    <ItemBar :caption="i.name" :data=i :bgcolor="randomcolor()"></ItemBar>
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
    },
    methods: {
        randomcolor () {
            return Math.floor(Math.random()*16777215).toString(16)
        //    var letters = "0123456789ABCDEF"; 
        //    var color = ''; 
        //     for (var i = 0; i < 6; i++) 
        //         color += letters[(Math.floor(Math.random() * 16))]; 
        //         return color
        }
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