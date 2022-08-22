<template>
    <div
    class="ui-input-wrapper ui-floating-label"
    :class="{'is-focused' : floatingLabel}"
    >
      <select
      class="ui-input ui-input-select"
      :class="[{'border-bottom-only': borderBottomOnly}, {'input-disabled': disabled}]"
      :name="inputRef"
      :id="inputRef"
      :disabled="disabled"
      :aria-label="selectLabel"
      :aria-labelledby="ariaLabelledby"
      @input="$emit('input', $event.target.value)"
      @focus="floatingLabel ? floatingActive() : null"
      @blur="floatingLabel ? floatingRemove() : null"
      @change="handleChange($event)"
      >
        <option
        class="option"
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :disabled="option.value === null ? true : false"
        :hidden="option.value === null ? true : false"
        :selected="option.selected || option.value === null"
        >
        {{ option.label }}
        </option>
      </select>
      <label 
      :for="inputRef"
      :class="[{'ui-label-float' : floatingLabel}, {'label-disabled': disabled}]"
      >{{ selectLabel }}
      </label>
    </div>
</template>

<script>
export default {
  name: "ui-select-field",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      default: "",
    },
    selectLabel: {
      type: String,
      default: "Selecciona una opción",
    },
    selectClass: {
      type: Array,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    floatingLabel: {
      type: Boolean,
      default: false,
    },
    borderBottomOnly: {
      type: Boolean,
      default: false
    },
    ariaLabelledby: {
        type: String,
        default: 'Select Input'
    }
  },
  data() {
    return {
        inputRef: undefined,
        isfloatingLabel: false,
        isLabel: false,
    };
  },
  computed: {
    hasFloatingActive(){
      return !this.readOnly && (this.isfloatingLabel && this.floatingLabel) || (this.floatingLabel && this.value)
    }
  },
  methods: {
    floatingActive() {
      this.isfloatingLabel = true;
    },
    floatingRemove() {
      this.isfloatingLabel = false;
    },
    handleChange(ev) {
      this.$emit("Change", ev);
    },
  },
  mounted(){
    this.inputRef = `ui-select-field-${this._uid}`
  }
};

</script>

<style>
</style>