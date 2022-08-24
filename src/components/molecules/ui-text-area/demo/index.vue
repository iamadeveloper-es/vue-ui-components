<template>
    <div class="ui-text-area-demo">
        <div
        v-for="(data, index) in dummyData"
        :key="index"
        >
            <ui-text-area
            :label="data.label"
            :floatingLabel="data.floatingLabel"
            :borderBottomOnly="data.borderBottomOnly"
            v-model="data.value"
            ></ui-text-area>
            <div class="output mt-2 mb-3">
                <span>{{data.value}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import UiTextArea from '../../ui-text-area'
export default {
    name: 'ui-text-area-demo',
    components: { UiTextArea },
    data () {
        return {
            dummyData : [
                {
                    label: 'Text field with floating label',
                    floatingLabel: true,
                    value: ''
                },
                {
                    label: 'Text field with floating label and border bottom',
                    floatingLabel: true,
                    borderBottomOnly: true,
                    value: ''
                },
                {
                    label: 'Text field with no floating label',
                    value: ''
                }
            ]
        }
    }

}
</script>

<style lang="scss">
@import '../mixins/ui-text-area';

$field-base: ();
$label-base: ();

.ui-text-area-field {
    @include textArea($field-base);
}
.ui-floating-label{
    @include floatingLabel($label-base);
}
</style>