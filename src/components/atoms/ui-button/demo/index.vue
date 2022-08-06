<template>
    <div class="ui-button-demo">
        <ui-button
        :classes="['ui-button--regular']"
        :btnText="btnData.label"
        @clicked="counterIncrement($event)"
        ></ui-button>
        <div class="mt-3">
            <span>{{`clicked ${clickedTimes} times`}}</span>
        </div>
    </div>
</template>

<script>
import UiButton from '@/components/atoms/ui-button'
export default {
  components: { UiButton },
    name: 'ui-button-demo',
    data(){
        return{
            btnData:{
                label: 'I am a button',
            },
            clickedTimes: 0
        }
    },
    methods:{
        counterIncrement(){
            this.clickedTimes++
        }
    }
}
</script>

<style lang="scss" scoped>

</style>