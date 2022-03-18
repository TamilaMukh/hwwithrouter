import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import main from '@/components/mainpage.vue'
import first from '@/components/1.vue'
import second from '@/components/2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'back-to-main',
      component: main
    },
    {
      path: '/first-page',
      name: 'first-set',
      component: first
    },
    {
      path: '/second-page',
      name: 'second-set',
      component: second
    }
  ]
})


