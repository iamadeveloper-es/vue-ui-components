<template>
  <div class="ui-card"
  :class="[
  cClass, elevation ? `elevation--${elevation}` : '',
  hasListener ? 'cursor-pointer' : '']"
  :style="{'width': width}"
  v-on="hasListener ? {click : handleEvent} : null"
  >
    <div 
    class="ui-card__header"
    v-if="this.$slots.header"
    >
        <slot name="header"></slot>
    </div>
    <div 
    class="ui-card__body"
    v-if="this.$slots.body"
    >
        <slot name="body"></slot>
    </div>
    <div 
    class="ui-card__footer"
    v-if="this.$slots.footer"
    >
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import UiMixinRippleEffect from '../../../mixin/rippleEffect'
export default {
    name: 'ui-card',
    mixins: [
        UiMixinRippleEffect
    ],
    props: {
        cClass: {
            type:[Array, String]
        },
        width: {
            type: String,
            default: '100%'
        },
        elevation: {
            type: Number
        }
    },
    computed:{
        hasListener(){
            return Object.keys(this.$listeners).length
        },
    },
    methods:{
        handleEvent(ev){
            this.rippleEffect(ev)
            this.$emit('cardClicked', ev)
        }
    }
}
</script>

<style>

</style>