<template>
    <div class="ui-select-field-demo">
        <div
        v-for="(data, index) in dummyData"
        :key="index"
        >
            <ui-select-field
            :floatingLabel="data.floatingLabel"
            :borderBottomOnly="data.borderBottomOnly"
            :options="data.options"
            v-model="data.selectValue"
            ></ui-select-field>
            <div 
            class="output mt-2 mb-3" 
            v-if="data.options">
                <span>Value selected: {{data.selectValue ? data.selectValue : 'Nothing yet!'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import UiSelectField from '@/components/molecules/ui-select-field'
export default {
    name: 'ui-select-field-demo',
    components: { UiSelectField },
    data () {
        return {
            dummyData: [
                {
                    options: [
                        { label: 'Default', value: 'default' },
                        { label: 'Spain', value: 'spain' },
                        { label: 'France', value: 'france' },
                        { label: 'Italy', value: 'italy' }
                    ],
                    floatingLabel: true,
                    selectValue: ''
                },
                {
                    options: [
                        { label: 'Default', value: 'default' },
                        { label: 'Spain', value: 'spain' },
                        { label: 'France', value: 'france' },
                        { label: 'Italy', value: 'italy' }
                    ],
                    floatingLabel: true,
                    borderBottomOnly: true,
                    selectValue: ''
                },
                {
                    options: [
                        { label: 'Select text', value: null },
                        { label: 'Volvo', value: 'volvo' },
                        { label: 'BMW', value: 'bmw' },
                        { label: 'Ferrari', value: 'ferrari' }
                    ],
                    selectValue: ''
                }
            ],
            selectValue: ''
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-select-field';

$field-base: ();
$label-base: ();

.ui-input-select {
    padding-left: 5px;
    @include selectField($field-base);
}
.ui-floating-label{
    @include floatingLabel($label-base);
}
</style>