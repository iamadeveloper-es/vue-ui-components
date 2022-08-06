<template>
    <button 
    class="ui-button"
    :class="classes"
    :type="btnType"
    :disabled="disabled"
    @click="handleEvent($event), rippleEffect($event)"
    >
    {{btnText}}
    <span
    v-if="isCloseBtn"
    class="close"
    >&#x2715;</span>
    </button>
</template>
<script>
import UiMixinRippleEffect from '@/mixin/rippleEffect'
export default {
    name: 'ui-button',
    mixins: [
        UiMixinRippleEffect
    ],
    props: {
        btnText:{
            type: String
        },
        btnType:{
            type: String,
            default: 'button'
        },
        classes: {
            type: [Array, String],
        },
        disabled:{
            type: Boolean,
            default: false
        },
        isCloseBtn: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleEvent(ev){
            this.$emit('clicked', ev)
        }
    }
}
</script>

<style lang="scss" scoped>
.ui-button{
    position: relative;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    &--regular{
        background-color: #2d86cf;
        color: white;
        padding: 14px 10px;
        margin: 5px;
        border-radius: 3px;
        border: none;
        line-height: 1.4;
    }
    &--small{
        background-color: #2d86cf;
        color: white;
        padding: 4px 8px;
        margin: 5px;
        border-radius: 3px;
        border: none;
        line-height: 1.4;
    }
    &--close{
        padding: 10px;
        margin-left: 10px;
    }
    &--tab{
        color: black;
    }
    &--tab-active{
        border-bottom: 3px solid var(--primary-blue)
    }
  &:hover{
      opacity: .9;
  }
  .close{
    pointer-events: none;
  }
}
</style>
