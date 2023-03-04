<template lang="pug">
  span.ui-icon(
    :class="[setIcon, model.class]"
    :style="[hasListener ? {cursor: 'pointer'} : {'pointer-events': 'none'}]"
    v-on="model.action ? {click : handleEvent } : null"
  )
</template>

<script>
// Using FontAwesome V5.15.4

// Ejemplo de modelo: 
// {
//     type: 'solid',
//     icon: 'search',
//     class: 'mb-2',
//     action: this.action
// }
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
        /**
         * Determina si el icono tiene una acción según lo que recibe del modelo
         * @return {Boolean} true/false
         */
        hasListener(){
            return Object.keys(this.$listeners).length && this.model.action
        },
        /**
         * Determina la clase del icono según lo que recibe del modelo
         * @return {String} cadena con la clase del icono
         */
        setIcon(){
          const iconTypes = {
            'solid': 'fas',
            'regular': 'far',
            'light': 'fal',
            'brands': 'fab',
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

<style></style>