import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Buefy from 'buefy'
import { store } from '@/store'

Vue.use(Buefy)

Vue.mixin({
  methods: {
    // rewrite? currently takes 1-4999
    romanize (num) {
      if (!+num) {
        return NaN
      }
      let digits = String(+num).split('')
      let key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
        '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
      let roman = ''
      let i = 3
      while (i--) {
        roman = (key[+digits.pop() + (i * 10)] || '') + roman
      }
      return Array(+digits.join('') + 1).join('M') + roman
    },
    randomNumberInRange (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
