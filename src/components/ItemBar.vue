<template>
  <b-container fluid class="bv-example-row bv-example-row-flex-cols">
    <div class="rectangle">
        <b-row>
        <b-col align-self="center">
        <h1>{{tofix(((data.total-data.win)/data.total)*100)}}</h1>
        </b-col>
        <b-col >{{data.name}}</b-col>
        <b-col >{{`total:${data.total},win:${data.win}`}}</b-col>
        </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
    props: {
        caption: String,
        data: {}
    },
    methods:{
        tofix(val){
            let result = '0.0%'
            if(isNaN(val)) { result = '0.0%' 
            } else {
                result = (100-val).toFixed(2)+ '%'
            }
            return result
        }
    }
}
</script>
<style scoped>
.rectangle {
    width:320px;
    height: 120px;
    background-color:rgb(0, 93, 155);
}
</style>