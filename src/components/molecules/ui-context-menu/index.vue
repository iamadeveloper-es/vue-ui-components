<template>
    <div class="ui-context-menu" v-show="show" :style="style" ref="context" tabindex="0" @blur="close">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'ui-context-menu',
    props: {
        display: Boolean, // prop detect if we should show context menu
    },
    data() {
        return {
            left: 0, // left position
            top: 0, // top position
            show: false, // affect display of context menu
        };
    },
    computed: {
        // get position of context menu
        style() {
            return {
                top: this.top + 'px',
                left: this.left + 'px',
            };
        },
    },
    methods: { 
        // closes context menu 
        close() {
            this.show = false;
            this.left = 0;
            this.top = 0;
        },
        open(evt) {
            // updates position of context menu 
            this.left = evt.pageX || evt.clientX;
            this.top = evt.pageY || evt.clientY;
            // make element focused 
            // @ts-ignore
            Vue.nextTick(() => this.$el.focus());
            this.show = true;
        },
    }
}
</script>

<style>

</style>