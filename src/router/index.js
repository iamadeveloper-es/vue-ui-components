import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentsView from '@/pages/ui-view-components'

import UiIconDemo from '@/components/atoms/ui-icon/demo'
import UiImageDemo from '@/components/atoms/ui-image/demo'

import UiBreadcrumbsDemo from '@/components/molecules/ui-breadcrumbs/demo'
import UiButtonDemo from '@/components/molecules/ui-button/demo'
import UiLinkDemo from '@/components/molecules/ui-link/demo'
import UiModalDemo from '@/components/molecules/ui-modal/demo'
import UiSnackbar from '@/components/molecules/ui-snackbar/demo'
import UiSpinner from '@/components/molecules/ui-spinner/demo'
import UiTabDemo from '@/components/molecules/ui-tab/demo'

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
      }
    ]
  },
  {
    name: 'Molecules',
    path: '/molecules',
    component: ComponentsView,
    children: [
      {
        name: 'Ui-breadcrums',
        path: '/breadcrums-demo',
        component: UiBreadcrumbsDemo,
      },
      {
        name: 'Ui-button',
        path: '/button-demo',
        component: UiButtonDemo,
      },
      {
        name: 'Ui-link',
        path: '/link-demo',
        component: UiLinkDemo,
      },
      {
        name: 'Ui-modal',
        path: '/modal-demo',
        component: UiModalDemo,
      },
      {
        name: 'Ui-snackbar',
        path: '/snackbar-demo',
        component: UiSnackbar,
      },
      {
        name: 'Ui-spinner',
        path: '/spinner-demo',
        component: UiSpinner,
      },
      {
        name: 'Ui-tab',
        path: '/tab-demo',
        component: UiTabDemo,
      }
    ]
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
