<template>
  <span class="ui-icon"
  :class="[setIcon, model.class]"
  :style="[hasListener ? {cursor: 'pointer'} : {'pointer-events': 'none'}]"
  v-on="model.action ? {click : handleEvent } : null"
  >
  </span>
</template>

<script>
// Using FontAwesome V5.15.4
import UiMixinRippleEffect from '../../../mixin/rippleEffect'
export default {
  name: 'ui-icon',
  mixins: [
      UiMixinRippleEffect
  ],
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  computed:{
        
        hasListener(){
            return Object.keys(this.$listeners).length && this.model.action
        },
        setIcon(){
          const iconTypes = {
            'solid': 'fas',
            'regular': 'far',
            'light': 'fal',
            'brands': 'far',
            'default': 'fas'
          }
          const chossenType = iconTypes[this.model.type] ? iconTypes[this.model.type] : iconTypes['default']
          return `${chossenType} fa-${this.model.icon}`
        }
  },
  methods: {
    
    handleEvent(ev){
      this.rippleEffect(ev)
      this.$emit('iconClicked', ev)
    }
  }
}
</script>

<style>

</style>