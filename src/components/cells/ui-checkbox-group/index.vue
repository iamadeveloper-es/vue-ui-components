<template>
  <div class="ui-checkbox-group">
    <ui-checkbox
    v-for="(checkbox, index) in checkboxes"
    :key="index"
    :activeColor="checkbox.color"
    :initialStatus="checkbox.status"
    :disabled="checkbox.disabled"
    :label="checkbox.label"
    v-model="checkbox.val"
    @change="getValue"
    ></ui-checkbox>
  </div>
</template>

<script>
import UiCheckbox from '../../atoms/ui-checkbox'
export default {
    name: 'ui-checkbox-group',
    components: {
        UiCheckbox
    },
    props: {
        checkboxes: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            checkboxValues: []
        }
    },
    methods: {
        getValue(ev){
            if (ev.checked && !this.checkboxValues.includes(ev.value)) {
                this.checkboxValues.push(ev.value);
            }
            else{
                this.checkboxValues.forEach((item, index) => {
                    if(item === ev.value){
                        this.checkboxValues.splice(index, 1);
                    }
                })
            }
            this.$emit('checkboxValues', this.checkboxValues);
            
        }
    }
}
</script>

<style>

</style>