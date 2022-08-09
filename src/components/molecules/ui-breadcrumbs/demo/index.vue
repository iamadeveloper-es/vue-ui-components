<template>
  <div class="ui-breadcrumbs-demo">
    <ui-breadcrums
    :items="dummyItems1"
    classes="mr-1"
    ></ui-breadcrums>
    <ui-breadcrums
    :items="dummyItems2"
    classes="mr-1"
    divider=">"
    ></ui-breadcrums>
  </div>
</template>

<script>
import UiBreadcrums from '../../ui-breadcrumbs'
export default {
    name: 'ui-breadcrumbs-demo',
    components: {
      UiBreadcrums
    },
    data(){
      return {
        dummyItems1: [
          {
            label: 'Button',
            route: {name: 'Ui-button'}
          },
          {
            label: 'Link',
            route: {name: 'Ui-link'}
          },
          {
            label: 'Breadcrumbs',
            route: {name: 'Ui-breadcrums'},
            disabled: true
          }
        ],
        dummyItems2: [
          {
            label: 'Button',
            route: {name: 'Ui-button'}
          },
          {
            label: 'Link',
            route: {name: 'Ui-link'}
          },
          {
            label: 'Breadcrumbs',
            route: {name: 'Ui-breadcrums'},
            disabled: true
          }
        ]
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-breadcrumbs';

.ui-breadcrumbs{
  @include breadcrumbs;
}
</style>