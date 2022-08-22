import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentsView from '@/pages/ui-view-components'

import UiIconDemo from '@/components/atoms/ui-icon/demo'
import UiImageDemo from '@/components/atoms/ui-image/demo'

import UiAvatarDemo from '@/components/molecules/ui-avatar/demo'
import UiBreadcrumbsDemo from '@/components/molecules/ui-breadcrumbs/demo'
import UiButtonDemo from '@/components/molecules/ui-button/demo'
import UiCardDemo from '@/components/molecules/ui-card/demo'
import UiCheckboxDemo from '@/components/molecules/ui-checkbox/demo'
import UiLinkDemo from '@/components/molecules/ui-link/demo'
import UiModalDemo from '@/components/molecules/ui-modal/demo'
import UiRating from '@/components/molecules/ui-rating/demo'
import UiSnackbar from '@/components/molecules/ui-snackbar/demo'
import UiSpinner from '@/components/molecules/ui-spinner/demo'
import UiTabDemo from '@/components/molecules/ui-tab/demo'

import UiCheckboxGroupDemo from '@/components/cells/ui-checkbox-group/demo'


import UiBottomNavigationDemo from '@/components/organisms/ui-bottom-navigation/demo'

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
        name: 'Ui-avatar',
        path: '/avatar-demo',
        component: UiAvatarDemo,
      },
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
        name: 'Ui-card',
        path: '/card-demo',
        component: UiCardDemo,
      },
      {
        name: 'Ui-checkbox',
        path: '/checkbox-demo',
        component: UiCheckboxDemo,
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
        name: 'Ui-rating',
        path: '/rating-demo',
        component: UiRating,
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
    name: 'Cells',
    path: '/cells',
    component: ComponentsView,
    children: [
      {
        name: 'Ui-checkbox-group',
        path: '/checkbox-group-demo',
        component: UiCheckboxGroupDemo,
      }
    ]
  },
  {
    name: 'Organisms',
    path: '/organisms',
    component: ComponentsView,
    children: [
      {
        name: 'Ui-bottom-navigation',
        path: '/bottom-navigation-demo',
        component: UiBottomNavigationDemo,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
