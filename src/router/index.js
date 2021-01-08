import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/components/List'
import Write from '@/components/Write'
import Detail from '@/components/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/write/:id?',
    name: 'Write',
    component: Write
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
