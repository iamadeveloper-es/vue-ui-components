<template>
    <transition name="snackbar-fade">
        <div class="ui-snackbar"
        v-show="isShow"
        >
            <div class="flex-md flex-md--between flex-md--align-center">
                <p class="my-0">{{model.headerText}}</p>
                <ui-icon
                v-if="model.iconModel && Object.keys(model.iconModel).length"
                :model="model.iconModel"
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
            return (this.model.iconModel && this.model.iconModel.action === 'close') 
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

<style>
</style>