<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" height="100" width="100">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{encabezado}}</h1>
    <MisPeliculas msg="Carrito de Pelis
    " idioma="Cow"></MisPeliculas>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MisPeliculas from './components/MisPeliculas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MisPeliculas,
  },
  data(){
    return {
      encabezado:'Carrito de Pelis'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
