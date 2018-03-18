import Vue from 'vue'
import Router from 'vue-router'

// Components
import HelloWorld from '@/components/HelloWorld'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
