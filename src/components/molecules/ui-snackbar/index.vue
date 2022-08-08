<template>
    <transition name="snackbar-fade">
        <div class="ui-snackbar"
        v-show="isShow"
        >
            <div class="flex-md flex-md__between flex-md__align-center">
                <p class="my-0">{{model.headerText}}</p>
                <ui-icon
                v-if="model.icon && Object.keys(model.icon).length"
                :icon="model.icon"
                @iconClicked="closeAction"
                ></ui-icon>
                <span
                v-if="model.closeText"
                class="cursor-pointer ml-2"
                @click="closeAction"
                >{{ model.closeText.text }}</span>
            </div>
            <slot name="snackbar-content"></slot>
        </div>
    </transition>
</template>

<script>
import UiIcon from '../../atoms/ui-icon'
export default {
    name: 'ui-snackbar',
    components: {
        UiIcon
    },
    props: {
        model: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            isShow: false,
        }
    },
    computed: {
        modelShow(){
            return this.model.show
        },
        closeAction(){
            return (this.model.icon && this.model.icon.action === 'close') 
            || (this.model.closeText && this.model.closeText.action === 'close')
            ? this.close 
            : null
        }
    },
    watch: {
        modelShow: function () {
            this.isShow = this.model.show
        },
    },
    methods: {
        handleEvent(){
            this.isShow = false
        },
        close(){
            this.isShow = false
        }
    }
}
</script>

<style lang="scss" scoped>
.ui-snackbar{
    padding: 10px 15px;
    background: #2c2c2c;
    color: #ffffff;
    border-radius: 3px;
    position: fixed;
    bottom: 1rem;
}
//- transitions
.snackbar-fade-enter,
  .snackbar-fade-leave-to {
    opacity: 0;
    transform: scale(0);
  }

.snackbar-fade-enter-active,
.snackbar-fade-leave-active {
    transition: transform .2s ease-in-out, opacity .2s ease-in-out;
}
</style>