<template>
  <div class="ui-radio-demo">
    <fieldset>
      <legend class="mb-1">Chosse a color</legend>
      <ui-radio
      v-for="(item, index) in radioColors"
      :key="index"
      :activeColor="item.color"
      :initialStatus="item.status"
      :disabled="item.disabled"
      :label="item.label"
      inputName="color"
      :selected="formData.color"
      v-model="item.val"
      @change="getRadioValue($event, 'color')"
      ></ui-radio>
    </fieldset>
    <p v-if="formData.color">Chossen color option: {{formData.color}}</p>
    <fieldset>
      <legend class="mb-1">Chosse an age</legend>
      <ui-radio
      v-for="(item, index) in radioAges"
      :key="index"
      :activeColor="item.color"
      :initialStatus="item.status"
      :disabled="item.disabled"
      :label="item.label"
      inputName="age"
      :selected="formData.age"
      v-model="item.val"
      @change="getRadioValue($event, 'age')"
      ></ui-radio>
    </fieldset>
    <p v-if="formData.age">Chossen age option: {{formData.age}}</p>
  </div>
</template>

<script>
import UiRadio from '../../ui-radio' 
export default {
    name: 'ui-radio-demo',
    components: {
        UiRadio
    },
    data(){
      return {
        radioColors: [
          {
            color: 'primary',
            val: 'red',
            label: 'Color Red'
          },
          {
            color: 'primary',
            status: true,
            val: 'blue',
            label: 'Color Blue'
          },
          {
            color: 'primary',
            val: 'green',
            label: 'Color Green'
          }
        ],
        radioAges: [
          {
            color: 'primary',
            status: true,
            val: '18',
            label: 'Age 18'
          },
          {
            color: 'primary',
            val: '22',
            label: 'Age 22'
          },
          {
            color: 'primary',
            val: '26',
            label: 'Age 26'
          }
        ],
        formData: {
          color: undefined,
          age: undefined
        }
      }
    },
    methods:{
      getRadioValue(ev, field){
        this.formData[field] = ev.value
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-radio';

$base: ();

.ui-radio {
    @include radio($base);
}
</style>