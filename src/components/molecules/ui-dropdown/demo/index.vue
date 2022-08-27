<template>
  <div class="ui-dropdown-demo">
    <div class="mb-3">
      <p>on click</p>
      <ui-dropdown
      title="Dropdown"
      :linkActions="linkActions"
      ></ui-dropdown>
    </div>
    <div class="mb-3">
      <p>on hover with prop openOnHover</p>
      <ui-dropdown
      title="Dropdown"
      :linkActions="linkActions"
      :openOnHover="true"
      ></ui-dropdown>
    </div>
    <div>
      <p>on hover with prop openOnHover and elevation</p>
      <ui-dropdown
      title="Dropdown"
      :linkActions="linkActions"
      :openOnHover="true"
      :elevation="4"
      ></ui-dropdown>
    </div>
  </div>
</template>

<script>
import UiDropdown from '../../ui-dropdown'
export default {
    name: 'ui-dropdown-demo',
    components: {
        UiDropdown
    },
    data(){
      return {
        linkActions: [
          {
            route: { name: 'Ui-link'},
            label: 'Link 1'
          },
          {
            route: { name: 'Ui-link'},
            label: 'Link 2'
          },
        ]
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-dropdown';

$base : (
  'dropdown-padding': 10px 8px,
  'icon-margin': 10px,
  'children-padding': 10px 8px,
  'menu-width': 100%,
  'menu-bg-color': var(--white)
);

.ui-dropdown{
    @include dropdown($base);
}
</style>