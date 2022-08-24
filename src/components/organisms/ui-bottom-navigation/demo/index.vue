<template>
  <div class="ui-bottom-navigation-demo">
    <p>Fixed menu on the bottom of the screen, scroll up and down</p>
    <ui-bottom-navigation
    :links="bottomLinks"
    :elevation="8"
    ></ui-bottom-navigation>
  </div>
</template>

<script>
import UiBottomNavigation from '../../ui-bottom-navigation';
export default {
  name: 'ui-bottom-navigation-demo',
  components: {
    UiBottomNavigation
  },
  data(){
    return {
      bottomLinks: [
        {
            route: { name: 'Ui-button'},
            label: 'Health',
            iconModel: {
                type: 'solid',
                icon: 'heart',
                class: 'mb-1'
            },
            class: 'ui-link--icon-top'
        },
        {
            route: { name: 'Ui-bottom-navigation'},
            label: 'Contacts',
            iconModel: {
                type: 'solid',
                icon: 'user',
                class: 'mb-1'
            },
            class: 'ui-link--icon-top'
        },
        {
            route: { name: 'Ui-bottom-navigation'},
            label: 'Posts',
            iconModel: {
                type: 'solid',
                icon: 'comment-alt',
                class: 'mb-1'
            },
            class: 'ui-link--icon-top'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../mixins/ui-bottom-navigation';

$base: (
  'menu-padding': 15px 20px,
  'color': var(--white)
);

$modifiers: (
  'padding': 8px 10px
);

.ui-bottom-navigation{
    @include bottomNavigation($base, $modifiers)
}

.ui-bottom-navigation-demo {
    height: 2000px;
}
</style>