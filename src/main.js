import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
