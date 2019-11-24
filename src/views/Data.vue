<template>
  <b-container>
    <h1 style="color:#ffffff">SLOTMACHINE BY Zeancasino</h1>
    <div style="max-width:768px;">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="ไอดีเกมส์:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.id"
          required
          placeholder="ไอดีเกมส์"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="ชื่อเกมส์:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="ชื่อเกมส์"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="รูปหน้าปกเกมส์:" label-for="input-3">
        <b-form-input
          id="input-2"
          v-model="form.img"
          required
          placeholder="รูปหน้าปกเกมส์"
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">บันทึก</b-button>
      <b-button type="reset" variant="danger">ยกเลิก</b-button>
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