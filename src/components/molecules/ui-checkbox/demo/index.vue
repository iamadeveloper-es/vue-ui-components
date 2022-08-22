<template>
  <div class="ui-checkbox-demo">
    <ui-checkbox
    :activeColor="checkboxModel.color"
    :initialStatus="checkboxModel.status"
    :disabled="checkboxModel.disabled"
    :label="checkboxModel.label"
    v-model="checkboxModel.val"
    @change="getCheckValue"
    ></ui-checkbox>
    <p>{{formData.user}}</p>
  </div>
</template>

<script>
import UiCheckbox from '../../ui-checkbox' 
export default {
    name: 'ui-checkbox-demo',
    components: {
        UiCheckbox
    },
    data(){
      return {
        checkboxModel: {
          color: 'primary',
          status: true,
          val: 'Jhon',
          label: 'User Jhon'
        },
        formData: {
          user: undefined
        }
      }
    },
    methods:{
      getCheckValue(ev){
        if(ev.checked){
          this.formData.user = ev.value
        }
        else{
          this.formData.user = undefined
        }
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-checbox';

$base: ();

.ui-checkbox {
    @include checkbox($base);
}
</style>