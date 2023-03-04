<template lang="pug">
    router-link.ui-link(
        :class="classes"
        :to="route"
        @click.native="rippleEffect($el)"
    )
        span {{ label }}
        ui-con(
            v-if="iconModel"
            :model="iconModel"
        )
</template>
<script>
import UiMixinRippleEffect from '../../../mixin/rippleEffect'
import UiIcon from '../../atoms/ui-icon'
export default {
    name: 'ui-link',
    components: {
        UiIcon
    },
    mixins: [
        UiMixinRippleEffect
    ],
    props: {
        route:{
            type: [String, Object],
            required: true
        },
        label:{
            type: String
        },
        classes: {
            type: [Array, String]
        },
        iconModel :{
            type: Object
        }
    }
}
</script>

<style>
</style>
