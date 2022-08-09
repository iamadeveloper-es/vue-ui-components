<template>
    <router-link
    class="ui-link"
    :class="classes"
    :to="route"
    >
        <span>{{ label }}</span>
        <ui-icon
        v-if="icon"
        :icon="icon"
        ></ui-icon>
    </router-link>
</template>
<script>
import UiIcon from '../../atoms/ui-icon'
export default {
    name: 'ui-link',
    components: {
        UiIcon
    },
    props: {
        route:{
            type: [String, Object],
            required: true
        },
        label:{
            type: String
        },
        classes: {
            type: [Array]
        },
        icon :{
            type: Object
        }
    }
}
</script>

<style>
</style>
