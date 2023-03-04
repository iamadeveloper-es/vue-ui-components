import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentsView from '@/pages/ui-view-components'

import UiCheckboxDemo from '@/components/atoms/ui-checkbox/demo'
import UiIconDemo from '@/components/atoms/ui-icon/demo'
import UiImageDemo from '@/components/atoms/ui-image/demo'
import UiLinkDemo from '@/components/atoms/ui-link/demo'
import UiMoneyDemo from '@/components/atoms/ui-money/demo'
import UiRadioDemo from '@/components/atoms/ui-radio/demo'


import UiAccordionDemo from '@/components/molecules/ui-accordion/demo'
import UiAvatarDemo from '@/components/molecules/ui-avatar/demo'
import UiBreadcrumbsDemo from '@/components/molecules/ui-breadcrumbs/demo'
import UiButtonDemo from '@/components/molecules/ui-button/demo'
import UiCardDemo from '@/components/molecules/ui-card/demo'
import UiContextMenuDemo from '@/components/molecules/ui-context-menu/demo'
import UiCustomSelectFieldDemo from '@/components/molecules/ui-custom-select-field/demo'
import UiDropdownDemo from '@/components/molecules/ui-dropdown/demo'
import UiInputFieldDemo from '@/components/molecules/ui-input-field/demo'
import UiModalDemo from '@/components/molecules/ui-modal/demo'
import UiRatingDemo from '@/components/molecules/ui-rating/demo'
import UiSelectFieldDemo from '@/components/molecules/ui-select-field/demo'
import UiSnackbarDemo from '@/components/molecules/ui-snackbar/demo'
import UiSpinnerDemo from '@/components/molecules/ui-spinner/demo'
import UiStepperDemo from '@/components/molecules/ui-stepper/demo'
import UiTabDemo from '@/components/molecules/ui-tab/demo'
import UiTableDemo from '@/components/molecules/ui-table/demo'
import UiTagDemo from '@/components/molecules/ui-tag/demo'
import UiTextAreaDemo from '@/components/molecules/ui-text-area/demo'

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
        name: 'Ui-checkbox',
        path: '/checkbox-demo',
        component: UiCheckboxDemo,
      },
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
      {
        name: 'Ui-link',
        path: '/link-demo',
        component: UiLinkDemo,
      },
      {
        name: 'Ui-money',
        path: '/money-demo',
        component: UiMoneyDemo,
      },
      {
        name: 'Ui-radio',
        path: '/radio-demo',
        component: UiRadioDemo,
      },
    ]
  },
  {
    name: 'Molecules',
    path: '/molecules',
    component: ComponentsView,
    children: [
      {
        name: 'Ui-accordion',
        path: '/accordion-demo',
        component: UiAccordionDemo,
      },
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
        name: 'Ui-context-menu',
        path: '/context-menu-demo',
        component: UiContextMenuDemo,
      },
      {
        name: 'Ui-custom-select-field',
        path: '/custom-select-field-demo',
        component: UiCustomSelectFieldDemo,
      },
      {
        name: 'Ui-dropdown',
        path: '/dropdown-demo',
        component: UiDropdownDemo,
      },
      {
        name: 'Ui-input-field',
        path: '/input-field-demo',
        component: UiInputFieldDemo,
      },
      {
        name: 'Ui-modal',
        path: '/modal-demo',
        component: UiModalDemo,
      },
      {
        name: 'Ui-rating',
        path: '/rating-demo',
        component: UiRatingDemo,
      },
      {
        name: 'Ui-select-field',
        path: '/select-field-demo',
        component: UiSelectFieldDemo,
      },
      {
        name: 'Ui-snackbar',
        path: '/snackbar-demo',
        component: UiSnackbarDemo,
      },
      {
        name: 'Ui-spinner',
        path: '/spinner-demo',
        component: UiSpinnerDemo,
      },
      {
        name: 'Ui-stepper',
        path: '/stepper-demo',
        component: UiStepperDemo,
      },
      {
        name: 'Ui-tab',
        path: '/tab-demo',
        component: UiTabDemo,
      },
      {
        name: 'Ui-table',
        path: '/table-demo',
        component: UiTableDemo,
      },
      {
        name: 'Ui-tag',
        path: '/tag-demo',
        component: UiTagDemo,
      },
      {
        name: 'Ui-text-area',
        path: '/text-area-demo',
        component: UiTextAreaDemo,
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
