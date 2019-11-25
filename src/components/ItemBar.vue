<template>
  <b-container fluid class="bv-example-row bv-example-row-flex-cols">
        <!-- <b-card bg-variant="primary" text-variant="white" :header="data.name" class="text-center"  style="width: 100%;">
        <b-row>
        <b-col align-self="center">
        <h1>{{((data.win / data.total) * 100).toFixed(2)}}%</h1>
        </b-col>
        <b-col >{{`total:${data.total},win:${data.win}`}}</b-col>
        </b-row>
        <b-row>
            <b-col><b-progress :max="data.total"> <b-progress-bar :value="data.win" :label="`${((data.win / data.total) * 100).toFixed(2)}%`" show-progress animated variant="danger" :precision="2"></b-progress-bar></b-progress></b-col>
        </b-row>
         </b-card> -->
         <b-card bg-variant="primary" text-variant="white" class="overflow-hidden text-left" style="max-width: 540px;height:420px;" :header="data.name" footer="Card Footer"
      footer-tag="footer">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="`imgs/${data.img}`" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            <b-row>
        <b-col align-self="center">
        <h1>{{((data.win / data.total) * 100).toFixed(2)}}%</h1>
        </b-col>
        <b-col >{{`total:${data.total},win:${data.win}`}}</b-col>
        </b-row>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
    <b-row class="pb-3"></b-row>
        <template v-slot:footer>
        <em><b-progress :max="data.total"> <b-progress-bar :value="data.win" :label="`${((data.win / data.total) * 100).toFixed(2)}%`" show-progress animated variant="danger" :precision="2"></b-progress-bar></b-progress></em>
      </template>
  </b-card>
  </b-container>
</template>
<script>
export default {
    props: {
        caption: String,
        data: {}
    },
    computed: {
        percent () {
          return  ((this.data.total-this.data.win)/this.data.total)*100
        }
    },
    methods:{
        tofix(val){
            
            if(isNaN(val)) { this.percent = '0.0' 
            } else {
                this.percent = (100-val).toFixed(2)
            }
            
        }
    }
}
</script>
<style scoped>
h1 {
    font-size: 46pt;
}
.rectangle {
    width:320px;
    height: 220px;
    background-color:rgb(0, 93, 155);
}
</style>