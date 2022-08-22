<template>
    <div
    class="ui-input-wrapper ui-floating-label"
    :class="[(hasFloatingActive ? 'is-focused' : ''), {'input-disabled': disabled}]"
    >
      <input
      class="ui-input-field"
      :disabled="disabled"
      :type="inputType"
      :placeholder="placeholderLabel"
      :required="required"
      :readonly="readOnly"
      :aria-label="placeholderLabel || label"
      :aria-labelledby="ariaLabelledby"
      :name="inputRef"
      :id="inputRef"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="floatingLabel ? floatingActive() : null"
      @blur="floatingLabel ? floatingRemove() : null"
      />
      <label 
      class="ui-label"
      :class="[{'ui-label-float' : floatingLabel}, {'label-disabled': disabled}]"
      :for="inputRef"
      >{{ label }}
      </label>
    </div>
</template>

<script>
import UiMixinRandomId from '../../../mixin/randomId'
export default {
  name: "ui-input-field",
  mixins: [
    UiMixinRandomId
  ],
  props: {
    inputType: String,
    label: {
      type: String,
      default: "",
    },
    placeholderLabel: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
    floatingLabel: {
      type: Boolean,
      default: false,
    },
    ariaLabelledby: {
      type: String,
      default: 'Select Input'
    }
  },
  data() {
    return {
      isfloatingLabel: false,
      inputRef: undefined
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
    }
  },
  mounted(){
    this.inputRef = `app-select-field-${this._uid}`
  }
};
</script>

<style>
</style>