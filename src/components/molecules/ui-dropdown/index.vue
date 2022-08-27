<template>
  <span 
  class="ui-dropdown"
  v-on="openOnHover ? mouseOverhandlers : {click: toggleMenu}"
  >
    <span
    class="ui-dropdown__title cursor-pointer"
    >{{title}}
    <ui-icon
    :model="setModelIcon"
    ></ui-icon>
    </span>
    <ul
    class="ui-dropdown__menu"
    :class="[{ 'ui-dropdown__menu--show' : isOpen}, 
    elevation ? `elevation--${elevation}` : '']"
    >
      <li
      class="ui-dropdown__menu-li"
      v-for="(action, index) in linkActions"
      :key="index"
      >
        <ui-link
        :route="action.route"
        :label="action.label"
        ></ui-link>
      </li>
    </ul>
  </span>
</template>

<script>
import UiLink from '../ui-link'
import UiIcon from '../../atoms/ui-icon'
export default {
    name: 'ui-dropdown',
    components: {
        UiLink,
        UiIcon
    },
    props: {
      title: {
        type: String,
        default: 'Dropdown menu'
      },
      linkActions: {
        type: Array
      },
      openOnHover: {
        type: Boolean,
        default: false
      },
      elevation: {
        type: Number
      }
    },
    data() {
      return {
        isOpen: false,
        mouseOverhandlers: {
          mouseover: this.showMenu,
          mouseleave: this.hideMenu
        }
      }
    },
    computed: {
      setModelIcon(){
        const modelIcon = {
          type: 'far',
          icon: 'angle-down'
        }

        if(!this.isOpen){
          modelIcon
        }
        else{
          modelIcon.class = 'ui-icon--rotate-180-deg'
        }

        return modelIcon 
      }
    },
    methods: {
      toggleMenu(){
        this.isOpen = !this.isOpen
      },
      showMenu() {
          this.isOpen = true;
      },
      hideMenu() {
        this.isOpen = false;
      }
    }
}
</script>

<style>

</style>