<template>
  <div id="nav">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    login() {
      this.$store.commit('Login')
    },
    logout() {
      this.$store.commit('Logout')
    }
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
