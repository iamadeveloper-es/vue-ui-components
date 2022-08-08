<template>
  <div class="ui-snackbar-demo">
    <ui-button
    :classes="['ui-button--regular']"
    btnText="Open Snackbar"
    @clicked="showSnackbar"
    ></ui-button>
    <ui-snackbar
    :model="snackbarModel"
    ></ui-snackbar>
  </div>
</template>

<script>
import UiButton from '../../ui-button'
import UiSnackbar from '../../ui-snackbar'
export default {
    name: 'ui-snackbar-demo',
    components: {
        UiButton,
        UiSnackbar
    },
    data(){
        return {
            snackbarModel: {
                show: false,
                headerText: 'i am a snackbar!',
                icon: {
                    class: 'fas fa-times ml-2',
                    action: 'close'
                },
                // closeText : {
                //     text: 'CLOSE',
                //     action: 'close'
                // }
            }
        }
    },
    methods: {
        showSnackbar(){
            this.snackbarModel.show = !this.snackbarModel.show
        }
    }
}
</script>

<style>

</style>