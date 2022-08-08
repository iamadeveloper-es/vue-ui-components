<template>
    <router-link
    class="ui-link"
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
        icon :{
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.ui-link{
    text-decoration: underline;
    color: #00a2ff;
}
</style>
