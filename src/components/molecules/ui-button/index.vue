<template lang="pug">
    button.ui-button(
        :class="classes",
        :type="btnType",
        :disabled="disabled"
        @click.stop="handleEvent($event), rippleEffect($event)"
    )
        span.ui-button--pointers-none {{btnText}}
        span.ui-button--pointers-none(
            v-if="isCloseBtn"
        ) &#x2715;
        ui-icon(
            v-if="iconModel"
            :model="iconModel"
        )
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
        iconModel :{
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
