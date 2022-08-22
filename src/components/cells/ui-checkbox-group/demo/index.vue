<template>
  <div class="checkbox-group-demo">
    <ui-checkbox-group
    :checkboxes="checkboxes"
    @checkboxValues="setValues"
    ></ui-checkbox-group>
    <p>Selected values: {{selectedValues}}</p>
  </div>
</template>

<script>
import UiCheckboxGroup from '../../ui-checkbox-group'
export default {
    name: 'checkbox-group-demo',
    components: {
        UiCheckboxGroup
    },
    data(){
        return {
            checkboxes: [
                {
                    color: 'primary',
                    status: true,
                    val: 'Jhon',
                    label: 'User Jhon'
                },
                {
                    color: 'info',
                    val: 'Richard',
                    label: 'User Richard'
                },
                {
                    color: 'danger',
                    val: 'Jack',
                    label: 'User Jack'
                },
                {
                    color: 'success',
                    val: 'Daniel',
                    label: 'User Daniel'
                },
                {
                    color: 'success',
                    disabled: true,
                    val: 'Paul',
                    label: 'User Paul'
                }
            ],
            selectedValues: []
        }
    },
    methods:{
        setValues(ev){
            this.selectedValues = ev
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-checkbox-group';

$base: ();

.ui-checkbox-group {
    @include checkboxGroup($base);
}
</style>