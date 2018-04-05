import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Buefy from 'buefy'
import { store } from '@/store'

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
