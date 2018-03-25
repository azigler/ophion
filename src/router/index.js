import Vue from 'vue'
import Router from 'vue-router'

// Components
import PageGame from '@/components/PageGame'
import PageAbout from '@/components/PageAbout'
import PageGuide from '@/components/PageGuide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Game',
      component: PageGame
    },
    {
      path: '/about',
      name: 'About',
      component: PageAbout
    },
    {
      path: '/guide',
      name: 'Guide',
      component: PageGuide
    }
  ]
})
