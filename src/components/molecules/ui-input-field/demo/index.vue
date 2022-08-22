<template>
    <div class="ui-input-field-demo">
        <div
        v-for="(data, index) in dummyData"
        :key="index"
        >
            <ui-input-field
            :label="data.label"
            :floatingLabel="data.floatingLabel"
            v-model="data.value"
            ></ui-input-field>
            <div class="output mt-3">
                <span>{{data.value}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import UiInputField from '../../ui-input-field'
export default {
    name: 'ui-input-field-demo',
    components: { UiInputField },
    data () {
        return {
            dummyData : [
                {
                    label: 'Text field with floating label',
                    floatingLabel: true,
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
@import '../mixins/ui-input-field';

$field-base: ();
$label-base: ();

.ui-input-field {
    @include inputField($field-base);
}
.ui-floating-label{
    @include floatingLabel($label-base);
}
</style>