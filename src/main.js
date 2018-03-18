import Vue from 'vue'
import Root from './Root'
import router from './router'
import Buefy from 'buefy'

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  components: { Root },
  template: '<Root/>'
})
