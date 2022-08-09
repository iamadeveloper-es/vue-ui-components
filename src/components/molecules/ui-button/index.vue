<template>
    <button 
    class="ui-button"
    :class="classes"
    :type="btnType"
    :disabled="disabled"
    @click.stop="handleEvent($event), rippleEffect($event)"
    >
    <span
    class="ui-button--pointers-none"
    >{{btnText}}</span>
    <span
    v-if="isCloseBtn"
    class="ui-button--pointers-none"
    >&#x2715;</span>
    <ui-icon
    v-if="icon"
    :icon="icon"
    ></ui-icon>
    </button>
</template>
<script>
import UiIcon from '../../atoms/ui-icon'
import UiMixinRippleEffect from '../../../mixin/rippleEffect'
export default {
    name: 'ui-button',
    components: {
        UiIcon
    },
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
        },
        icon :{
            type: Object
        }
    },
    methods:{
        
        handleEvent(ev){
            this.$emit('clicked', ev)
        }
    }
}
</script>

<style>
</style>
