<template>
    <div
    class="ui-input-wrapper ui-custom-select-field"
    >
      <ui-button
      :btnText="selectedOption ? selectedOption.label : setSelectedOption()"
      :disabled="disabled"
      @clicked="toggleOptions()"
      @focus="handleFocus()"
      @blur="handleBlur()"
      ></ui-button>
      <ol
      v-show="show"
      class="ui-custom-select-field__options"
      role="listbox"
      :tabindex="show ? -1 : 0"
      :value="value"
      @input="handleEvent($event)"
      >
        <li
        class="ui-custom-select-field__li"
        v-for="(option, index) in filteredOptions"
        :key="index"
        role="option"
        :aria-labelledby="`foo-list-item-${index}`"
        >
          <input
          class="ui-custom-select-field__input"
          aria-hidden="true"
          role="radio"
          type="radio"
          :id="`foo-list-item-${index}`"
          :name="inputName"
          :disabled="option.disabled"
          :hidden="option.disabled"
          :value="option.value"
          @change="updateSelected(option)"
          >
          <span
          class="ui-custom-select-field__span"
          >
            <label
            class="ui-custom-select-field__label"
            :for="`foo-list-item-${index}`">{{option.label}}</label>
          </span>
        </li>
      </ol>
    </div>
</template>

<script>
import UiButton from '../ui-button'
import UiMixinRandomId from '../../../mixin/randomId'
export default {
  name: "ui-custom-select-field",
  components: {
    UiButton
  },
  mixins: [
    UiMixinRandomId
  ],
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
        type: [String, Number, Object],
        default: '',
        required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inputName: {
      type: String
    }
  },
  data() {
    return {
      show: false,
      selectedOption: undefined
    };
  },
  computed: {
    /**
     * Filtra las opciones validas para el listado
     * @return {Array} con las opciones
     */
    filteredOptions(){
      return this.options.filter(option => {
        return !option.disabled
      });
    }
  },
  methods: {
    /**
     * Muestra/Oculta el listado con las opciones
     */
    toggleOptions(){
      this.show = !this.show
    },
    handleFocus(){
      console.log('Hay foco!')
    },
    handleBlur(){
      console.log('No hay foco!')
    },
    /**
     * Emite evento con el valor del input
     * @param {Event} ev Evento
     */
    handleEvent(ev){
      console.log(ev.target.value)
      this.$emit('input', ev.target.value)
    },
    /**
     * Acualiza el valor de la opción seleccionada
     * @param {Event} ev Evento con el valor
     */
    updateSelected(ev){
      this.selectedOption = ev
      // this.toggleOptions()
    },
    /**
     * Determina la opción seleccionada
     */
    setSelectedOption(){
      const selected = this.options.find(option => option.selected)
      this.selectedOption =  selected ? selected : this.options[0]

    },
    /**
     * Setea el valor inicial del componente
     */
    setInitValue(){
      if(!this.selectedOption.disabled){
        this.$emit('input', this.selectedOption.value)
      }
    },
    /**
     * Configura los datos iniciales del componente
     */
    configComponent(){
      let id = 1;
      this.options.map(item => item.id = id++)
      this.setSelectedOption();
      this.setInitValue();
    }
  },
  mounted(){
    this.configComponent()
  }
};

</script>

<style>
</style>