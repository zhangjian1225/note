import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import sgin from '@/components/sgin'
import home from '@/components/home'
import watch from '@/components/watch'
import note from '@/components/note'
import more from '@/components/more'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/sgin',
      name: 'sgin',
      component: sgin
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/',
          name: 'note',
          component: note
        },
        {
          path: '/watch',
          name: 'watch',
          component: watch
        },
        {
          path: '/more',
          name: 'more',
          component: more
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine
        }]
    }
  ]
})
