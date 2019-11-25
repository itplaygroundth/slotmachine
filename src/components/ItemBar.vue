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
         <b-card bg-variant="primary" text-variant="white" class="overflow-hidden text-left" id="card" :header="data.name" :style="`background-color:${'#'+bgcolor} !important;color:${invertColor('#'+bgcolor)}!important;`" footer="Card Footer"
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
        data: {},
        bgcolor: String
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
            
        },
        invertHex(hex) {
        return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
        },
        adjust(color, amount) {
            return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
        },
        invertColor(col){
            const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
            let inverseColor = '#'
            col.replace('#','').split('').forEach(i => {
                const index = colors.indexOf(i)
                inverseColor += colors.reverse()[index]
            })
            return inverseColor
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
/* #card {
    background-color: chocolate !important;
} */
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #card {
    max-width: 540px;
    height:auto;
  }
}
@media only screen and (min-width: 1024px) {
  /* For mobile phones: */
  #card {
    max-width: 540px;
    height:450px;
  }
}
</style>