<template>
  <viewer class='td-img-list' 
    :images="images">
    <img v-for="src in images" :src="src" :key="src">
  </viewer>
</template>

<script>
export default {
  props: {
    images: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.td-img-list img {
    height: 40px;
    margin: 5px;
}
</style>
