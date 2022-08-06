import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentsView from '@/pages/ui-view-components'

Vue.use(VueRouter)

export const routes = [
  {
    name: 'Atoms',
    path: '/atoms',
    component: ComponentsView,
    children: []
  },
  {
    name: 'Molecules',
    path: '/molecules',
    component: ComponentsView,
    children: []
  },
  {
    name: 'Cells',
    path: '/cells',
    component: ComponentsView,
    children: []
  },
  {
    name: 'Organisms',
    path: '/organisms',
    component: ComponentsView,
    children: []
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
