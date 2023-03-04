<template>
    <div class="ui-custom-select-field-demo">
        <div
        v-for="(data, index) in dummyData"
        :key="index"
        >
            <ui-custom-select-field
            :options="data.options"
            :inputName="data.inputName"
            :disabled="data.disabled"
            v-model="data.selectValue"
            ></ui-custom-select-field>
            <div 
            class="output mt-2 mb-3" 
            v-if="data.options">
                <span>Value selected: {{data.selectValue ? data.selectValue : 'Nothing yet!'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import UiCustomSelectField from '@/components/molecules/ui-custom-select-field'
export default {
    name: 'ui-custom-select-field-demo',
    components: { UiCustomSelectField },
    data () {
        return {
            dummyData: [
                {
                    options: [
                        { label: 'Default', value: 'default', selected: true, disabled: true },
                        { label: 'Spain', value: 'spain' },
                        { label: 'France', value: 'france' },
                        { label: 'Italy', value: 'italy' }
                    ],
                    inputName: 'items1',
                    floatingLabel: true,
                    disabled: true,
                    selectValue: ''
                },
                {
                    options: [
                        { label: 'Default', value: 'default' },
                        { label: 'Spain', value: 'spain', selected: true },
                        { label: 'France', value: 'france' },
                        { label: 'Italy', value: 'italy' }
                    ],
                    inputName: 'items2',
                    floatingLabel: true,
                    borderBottomOnly: true,
                    selectValue: ''
                },
                {
                    options: [
                        { label: 'Select text', value: '', selected: true, disabled: true },
                        { label: 'Volvo', value: 'volvo' },
                        { label: 'BMW', value: 'bmw' },
                        { label: 'Ferrari', value: 'ferrari' }
                    ],
                    inputName: 'items3',
                    selectValue: ''
                },
                {
                    options: [
                        { label: 'Mac', value: 'mac' },
                        { label: 'Windows', value: 'windows' },
                        { label: 'Linux', value: 'linux' }
                    ],
                    inputName: 'items4',
                    selectValue: ''
                }
            ],
            selectValue: ''
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-custom-select-field';

$field-base: ();
$label-base: ();

.ui-custom-select-field {
    padding-left: 5px;
    @include customSelectField($field-base);
}

.ui-custom-select-field__options:focus{
    border: 1px solid red;
    background-color: red;
    color: blue;
}

.ui-custom-select-field__input:focus{
    border: 1px solid red;
    background-color: red;
    color: blue;
    .ui-custom-select-field__li{
        color: blue;
    }
}
</style>