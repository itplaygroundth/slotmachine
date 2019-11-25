<template>
  <div id="app">
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Zean@SlotMachine</b-navbar-brand>

     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="home">Portal</b-nav-item>
        <b-nav-item v-if="this.$store.state.logged" @click="admin">ADMIN</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
          <b-dropdown-item @click="login">{{ !this.$store.state.logged ? 'เข้าสู่ระบบ' : 'ออกจากระบบ'}}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<br />
<h1 style="color:#ffffff">SLOTMACHINE BY Zeancasino</h1>
    <br />
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    login () {
      
      if(!this.$store.state.logged) {
      this.$router.replace('login')
      } else 
      {
        this.$store.state.logged = !this.$store.state.logged
        if(this.$router.path !== 'portal')
        this.$router.replace('portal')
      }
    },
    admin () {
      if (this.$route.path !== '/data') 
      this.$router.push('data')
    },
    home () {
      if (this.$route.path !== '/portal') 
      this.$router.push('portal')
    }
  }
}
</script>
<style>
html,body {
  background-image: url('assets/imgs/bg2.jpg');
  background-size: cover;
  height: 100%;
  /* overflow: hidden; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: transparent;
 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
