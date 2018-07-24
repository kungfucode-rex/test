<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Album :images="images"></Album>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Album from './components/Album.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Album
  },
  data () {
    return {
      images: [
        'http://f.hiphotos.baidu.com/image/h%3D300/sign=a2c66a85292dd42a400907ab33395b2f/e4dde71190ef76c6d203c4c79116fdfaae51670c.jpg', 
        'http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b129b3b9d1c451da80cb3e17.jpg'
      ]
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
