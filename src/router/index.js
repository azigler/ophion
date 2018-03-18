import Vue from 'vue'
import Router from 'vue-router'

// Components
import Game from '@/components/Game'
import About from '@/components/About'
import Guide from '@/components/Guide'
import Contact from '@/components/Contact'
import HelloWorld from '@/components/HelloWorld'

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
