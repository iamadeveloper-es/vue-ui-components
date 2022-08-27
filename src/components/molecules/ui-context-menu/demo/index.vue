<template>
  <div class="ui-context-menu-demo">
    <ui-context-menu
    :display="showContextMenu" ref="menu"
    >
      <ul>
        <li>item</li>
      </ul>
    </ui-context-menu>
    <ui-button
      :classes="['ui-button--regular']"
      btnText="context menu"
      @clicked="openContextMenu"
      ></ui-button>
  </div>
</template>

<script>
import UiButton from '../../ui-button'
import UiContextMenu from '../../ui-context-menu'
export default {
    name: 'ui-context-menu-demo',
    components: {
      UiButton,
      UiContextMenu
    },
    data() {
      return { 
        showContextMenu: false 
      }
    },
    methods: {
      openContextMenu(e) {
          this.$refs.menu.open(e);
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-context-menu';

$base : ();

.ui-context-menu{
    @include contextMenu($base);
}
</style>