<template>
  <div class="ui-spinner-demo">
    <ui-button
    :classes="['ui-button--regular']"
    :btnText="!spinnerStatus ? 'Show Spinner' : 'Hide Spinner'"
    @clicked="toggleSpinner"
    ></ui-button>
    <ui-spinner
    :show="spinnerStatus"
    ></ui-spinner>
  </div>
</template>

<script>
import UiButton from '../../ui-button'
export default {
    name: 'ui-spinner-demo',
    components: {
        UiButton
    },
    data(){
        return {
            spinnerStatus: false
        }
    },
    methods: {
        toggleSpinner(){
            this.spinnerStatus = !this.spinnerStatus
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-spinner';
@import '../mixins/transitions';

$base: ();

.ui-spinner{
    @include spinner($base)
}
</style>