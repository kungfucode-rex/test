import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

Vue.config.productionTip = false

new Vue({
  router: new VueRouter({routes: []}),
  render: h => h(App)
}).$mount('#app')
