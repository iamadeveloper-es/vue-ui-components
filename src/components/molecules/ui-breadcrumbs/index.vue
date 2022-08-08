<template>
  <nav class="ui-breadcrumbs">
    <ul
    class="flex-md"
    >
        <li
        v-for="(item, index) in items"
        :key="index"
        :class="classes"
        >
            <router-link 
            :event="index !== isDisabled ? 'click' : ''"
            :class="index === isDisabled ? 'disbaledLink' : ''"
            :to="item.route"
            >{{item.label}}
                <span
                v-if="divider && index < items.length - 1"
                >{{divider}}</span>
            </router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'ui-breadcrumbs',
    props: {
        items: {
            type: Array,
            required: true
        },
        divider: {
            type: String,
            default: '/'
        },
        classes: {
            type: [String, Array]
        }
    },
    computed: {
        isDisabled(){
            const currentRoute = this.$route.name
            return this.items.findIndex(item => item.route.name === currentRoute)
        }
    },
}
</script>

<style lang="scss" scoped>
.ui-breadcrumbs{
    .disbaledLink{
        color: var(--tertiary-grey);
        cursor: auto;
    }
}
</style>