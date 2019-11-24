<template>
  <b-container>
    <!-- <h1 style="color:#ffffff">SLOTMACHINE BY Zeancasino</h1> -->
    <div style="max-width:768px;">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row class="my-1">
       <b-col sm="3">
      <label for="input-1">ไอดีเกมส์:</label>
    </b-col>
      <b-col sm="6">
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="ไอดีเกมส์"
        ></b-form-input>
      </b-col></b-row>
        <b-row class="my-1">
           <b-col sm="3">
      <label for="input-2">ชื่อเกมส์:</label>
    </b-col>
      <b-col sm="6">

     
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="ชื่อเกมส์"
        ></b-form-input>
     
 </b-col></b-row>
        <b-row class="my-1">
           <b-col sm="3">
      <label for="input-3">รูปหน้าปกเกมส์:</label>
    </b-col>
      <b-col sm="6">
             <b-form-input
          id="input-3"
          v-model="form.img"
          required
          placeholder="รูปหน้าปกเกมส์"
        ></b-form-input>
         </b-col></b-row>
       <b-row class="my-1 pb-5"></b-row>
   <b-row class="my-1">
             <b-col sm="6"></b-col>
              <b-col sm="*" class="pr-2"><b-button type="submit" style="width:120px;" variant="primary">บันทึก</b-button></b-col>
      <b-col sm="*">
      <b-button type="reset" style="width:120px;" variant="danger">ยกเลิก</b-button>
      </b-col>
   </b-row>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ items }}</pre>
    </b-card>
  </div>
  </b-container>
  </template>
<script>
import { get,sync } from "vuex-pathify"
  export default {
    data() {
      return {
        form: { 
          id:'',name:'',img:'', total: 0,win: 0
        },
        // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
     computed: {
        items:get('items'),
          ...sync('items')
    },
    methods: {
       onSubmit(evt) {
        evt.preventDefault()
        const updated = new Promise((resolve) => {
          
          resolve(this.$store.state.items.push(this.form))
        })
        updated.then(() => {
          // this.$nextTick(() => {
          //         this.form.id = ''
          //         this.form.name = ''
          //         this.form.img = null
          //           })
                  })
        //  
        // alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.name = ''
        this.form.img = null
        // this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>