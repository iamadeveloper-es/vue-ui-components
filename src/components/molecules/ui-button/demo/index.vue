<template>
    <div class="ui-button-demo">
        <div class="flex-md">
            <div class="mr-4 text-center">
                <ui-button
                :classes="['ui-button--regular', 'mx-auto']"
                :btnText="btnData1.label"
                @clicked="counterIncrement(btnData1)"
                ></ui-button>
                <div class="mt-3">
                    <strong>Regular button</strong><br>
                    <span>{{`clicked ${btnData1.clickedTimes} times`}}</span>
                </div>
            </div>
            <div class="mr-4 text-center">
                <ui-button
                :classes="['ui-button--regular', 'mx-auto']"
                :btnText="btnData2.label"
                :icon="{class: 'fas fa-plus ml-2'}"
                @clicked="counterIncrement(btnData2)"
                ></ui-button>
                <div class="mt-3">
                    <strong>Regular button with an icon</strong><br>
                    <span>{{`clicked ${btnData2.clickedTimes} times`}}</span>
                </div>
            </div>
        </div>
        <div class="flex-md mt-3">
            <div class="mr-4 text-center">
                <ui-button
                :classes="['ui-button--small', 'mx-auto']"
                :btnText="btnData3.label"
                @clicked="counterIncrement(btnData3)"
                ></ui-button>
                <div class="mt-3">
                    <strong>Small button</strong><br>
                    <span>{{`clicked ${btnData3.clickedTimes} times`}}</span>
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
                label: 'Click me',
                clickedTimes: 0
                
            },
            btnData2: {
                label: 'Click me',
                icon: {
                    class: 'fas fa-plus ml-2'
                },
                clickedTimes: 0
            },
            btnData3: {
                label: 'Click me',
                clickedTimes: 0
                
            }
        }
    },
    methods:{
        counterIncrement(item){
            item.clickedTimes++
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-button';

$base : (
    'primary-color' : var(--primary-blue), 
    'primary-text-color': var(--primary-text-color), 
    'size-regular': 14px 10px,
    'size-small': 4px 8px,
    'radius-size': 3px
    );

.ui-button{
    @include button($base);
}
</style>