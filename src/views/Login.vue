<template>
<b-container>
   <b-card bg-variant="secondary" text-variant="white" header="เข้าสู่ระบบ" class="text-center" id="login">
<b-form @submit="onSubmit" @reset="onReset" v-if="show">       
  <b-row class="my-1">
      <b-col sm="3">
      <label for="input-1">ชื่อผู้ใช้:</label>
    </b-col>
    <b-col sm="7">
      <b-form-input 
        id="input-1"  
        v-model="form.username"
        required 
        placeholder="ชื่อผู้ใช้ (admin)"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="my-1">
      <b-col sm="3">
      <label for="input-2">รหัสผ่าน:</label>
    </b-col>
    <b-col sm="7">
      <b-form-input 
        id="input-2"  
        type="password"
        v-model="form.password"
        required 
        placeholder="รหัสผ่าน (luckynumber)"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="my-1 pb-5"></b-row>
   <div>
      <b-col sm="*" class="pr-2"><b-button type="submit" style="width:120px;" variant="primary">เข้าสู่ระบบ</b-button>
            <b-button type="reset" style="width:120px;" variant="danger">ยกเลิก</b-button>
      </b-col>
   </div>
  </b-form>
    </b-card>
  </b-container>
  </template>
<script>
// import { get,sync } from "vuex-pathify"
  export default {
    data() {
      return {
        form: { 
          username: '',
          password: ''
        },
        // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
     computed: {
        // items:get('items'),
        //   ...sync('items')
    },
    methods: {
       onSubmit(evt) {
        evt.preventDefault()
        const updated = new Promise((resolve) => {
          if(this.form.username === 'admin' && this.form.password === '1688')
          {
           
            resolve(true)
          } else {
            resolve(false)
          }
        })
        updated.then((r) => {
          this.$store.set('logged',r)
          if(r)
          {
            this.$router.replace('/')
            
          } else 
          {
           // this.makeToast('danger','เข้าสู่ระบบไม่สำเร็จ')
          }

        })
        if(this.$store.state.logged)
        this.makeToast('success','เข้าสู่ระบบสำเร็จ')
        else
        this.makeToast('danger','เข้าสู่ระบบไม่สำเร็จ')
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = null
        // this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
       makeToast(variant = null,content = '') {
        this.$bvToast.toast(content, {
          title: `แจ้งผล`,
          variant: variant,
          solid: true
        })
      }
    }
  }
</script>
<style scoped>
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #login {
    width: 100%;
  }
}
@media only screen and (min-width: 1024px) {
  /* For mobile phones: */
  #login {
    width: 30%;
   position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    
  }
}
</style>