import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Buefy from 'buefy'
import Ophion from '@/lib'

Vue.use(Buefy)
Vue.use(Ophion)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
