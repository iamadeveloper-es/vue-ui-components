<template>
    <div class="ui-accordion">
        <div 
        class="ui-accordion__header" 
        :ref="componentId"
        :id="componentId"
        @click="handleEvent">
            <ui-icon
            v-if="setIconModel"
            :model="setIconModel"
            ></ui-icon>
            <span 
            name="header" 
            class="ui-accordion__header--title">{{ title }}</span>
        </div>
        <transition
        name="accordion"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        >
        <div 
        class="ui-accordion__body" 
        v-show="isItemSelected">
            <div 
            class="ui-accordion__body--inner"
            >
                <slot name="content"></slot>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
import UiIcon from '../../atoms/ui-icon'
import UiMixinRandomId from '../../../mixin/randomId'
export default {
    name: 'ui-accordion',
    components: {
        UiIcon
    },
    mixins: [
        UiMixinRandomId
    ],
    props: {
        title: {
            type: String
        },
        isOpened: {
            type: Boolean,
            default: false
        },
        selectedId: {
            type: String,
            default: ''
        }
    },
    computed: {
        isItemSelected(){
            return this.selectedId === this.componentId && this.selectedId !== null

        },
        setIconModel(){
            let iconModel = {
                icon: 'chevron-down'
            }
            iconModel.class = this.isItemSelected && this.selectedId === this.componentId 
            ? 'ui-collapse-open' 
            : 'ui-collapse-close'
            return iconModel;
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        hasOpened(){
            if(this.isOpened){
                return this.isShow = this.isOpened
            }
        },
        handleEvent(){
            this.isShow = !this.isShow
            this.$nextTick()
            this.$emit('clicked', this.componentId)
        },
        beforeEnter(el) {
            el.style.height = '0';
        },
        enter(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        beforeLeave(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        leave(el) {
            el.style.height = '0';
        }
    },
    mounted() {
        this.setId('app-accordion')
        this.hasOpened();
    }
}
</script>

<style>
</style>
