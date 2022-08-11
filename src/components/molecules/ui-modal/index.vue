<template>
    <transition 
    :name="transition">
        <div class="ui-modal"
        ref="ui-modal"
        @click="hide($event)"
        v-show="isModalVisible"
        >
            <div class="ui-modal__content" data-dismiss="modal">
                <div class="ui-modal__dialog">
                    <div class="ui-modal__dialog__header">
                        <slot name="header"></slot>
                        <ui-button
                        v-if="backDrop"
                        data-dismiss="modal"
                        :classes="['ui-button--close']"
                        :isCloseBtn="true"
                        @clicked="hide($event)"
                        >
                        </ui-button>
                    </div>
                    <div
                    v-if="this.$slots.body"
                    class="ui-modal__dialog__body">
                        <slot name="body"></slot>
                    </div>
                    <div
                    v-if="this.$slots.footer"
                    class="ui-modal__dialog__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import UiButton from '../ui-button'
export default {
    name: 'ui-modal',
    components: {
        UiButton
    },
    props: {
        backDrop: {
            type: Boolean,
            default: true
        },
        transition: {
            type: String,
            default: 'modal-fade'
        }
    },
    mounted(){
        this.$emit('modal', this)
    },
    data () {
        return {
            isModalVisible: false
        }
    },
    methods: {
        show(){
            this.isModalVisible = true
        },
        hide(ev){
            if(ev.target.getAttribute('data-dismiss') === 'modal' && this.backDrop){
                this.isModalVisible = false
            }
        }
    }
}
</script>

<style lang="scss">
//- modal styles
// .app-modal{
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     width: 100%;
//     height: 100vh;
//     z-index: 999;
//     button[data-dismiss="modal"] span{
//         pointer-events: none;
//     }
//     .app-modal-content{
//         background-color: rgba(54, 54, 54, .7);
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .app-modal-dialog{
//         max-width: 546px;
//         background-color: var(--white);
//         border-radius: 5px;
//         box-shadow: 2px 2px 6px var(--black);
//         overflow-y: scroll;
//         max-height: calc(100vh - 10rem);
//     }
//     .app-modal-header, 
//     .app-modal-body, 
//     .app-modal-footer{
//         padding: 15px 20px;
//     }
//     .app-modal-header{
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//     }
// }
// //- hide scrollbar
// .app-modal-dialog::-webkit-scrollbar {
//   display: none; /* Chrome, Safari and Opera */
// }
// .app-modal-dialog {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }
/* //- transitions
.modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
} */
</style>