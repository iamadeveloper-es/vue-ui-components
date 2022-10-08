<template>
  <div class="ui-stepper-demo">
    <ui-stepper
    :steps="steps"
    :current="current"
    ></ui-stepper>
    <div class="text-center mt-3">
        <ui-button
        :classes="['ui-button--regular mr-3']"
        btnText="Prev"
        @clicked="prevStep"
        ></ui-button>
        <ui-button
        :classes="['ui-button--regular']"
        btnText="Next"
        @clicked="nextStep"
        ></ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from '../../ui-button'
import UiStepper from '../../ui-stepper'
export default {
    name: 'ui-stepper-demo',
    components: {
        UiButton,
        UiStepper
    },
    data(){
        return {
            steps: [
                {
                    label: 'Step 1',
                    completed: false,
                    current: false
                },
                {
                    label: 'Step 2',
                    completed: false,
                    current: false
                },
                {
                    label: 'Step 3',
                    completed: false,
                    current: false
                }
            ],
            current: 0
        }
    },
    methods: {
        prevStep(){
            this.current--
        },
        nextStep(){
            this.current++
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-stepper';

$base: ();
.ui-stepper{
    @include stepper($base);
}
</style>