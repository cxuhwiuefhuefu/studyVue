import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import './assets/style/reset.css'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
