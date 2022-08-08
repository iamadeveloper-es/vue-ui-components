import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentsView from '@/pages/ui-view-components'

import UiIconDemo from '@/components/atoms/ui-icon/demo'
import UiImageDemo from '@/components/atoms/ui-image/demo'

import UiButtonDemo from '@/components/molecules/ui-button/demo'
import UiLinkDemo from '@/components/molecules/ui-link/demo'

Vue.use(VueRouter)

export const routes = [
  {
    name: 'Atoms',
    path: '/atoms',
    component: ComponentsView,
    children: [
      {
        name: 'Ui-icon',
        path: '/icon-demo',
        component: UiIconDemo,
      },
      {
        name: 'Ui-image',
        path: '/image-demo',
        component: UiImageDemo,
      },
    ]
  },
  {
    name: 'Molecules',
    path: '/molecules',
    component: ComponentsView,
    children: [
      {
        name: 'Ui-button',
        path: '/button-demo',
        component: UiButtonDemo,
      },
      {
        name: 'Ui-link',
        path: '/link-demo',
        component: UiLinkDemo,
      }
    ]
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
