<template>
    <div class="ui-button-demo">
        <div class="flex-md">
            <div class="mr-4">
                <ui-button
                :classes="['ui-button--regular']"
                :btnText="btnData1.label"
                @clicked="counterIncrement1($event)"
                ></ui-button>
                <div class="mt-3">
                    <span>{{`clicked ${clickedTimes1} times`}}</span>
                </div>
            </div>
            <div>
                <ui-button
                :classes="['ui-button--regular']"
                :btnText="btnData2.label"
                :icon="{class: 'fas fa-plus ml-2'}"
                @clicked="counterIncrement2($event)"
                ></ui-button>
                <div class="mt-3">
                    <span>{{`clicked ${clickedTimes2} times`}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiButton from '@/components/molecules/ui-button'
export default {
  components: { UiButton },
    name: 'ui-button-demo',
    data(){
        return{
            btnData1: {
                label: 'I am a button',
                
            },
            btnData2: {
                label: 'I am a button with an icon',
                icon: {
                    class: 'fas fa-plus ml-2'
                }
            },
            clickedTimes1: 0,
            clickedTimes2: 0,
        }
    },
    methods:{
        counterIncrement1(){
            this.clickedTimes1++
        },
        counterIncrement2(){
            this.clickedTimes2++
        }
    }
}
</script>

<style lang="scss" scoped>

</style>