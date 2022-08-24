<template>
    <div
    class="ui-text-area-wrapper ui-floating-label"
    :class="[
    (hasFloatingActive ? 'is-focused' : ''), 
    ]"
    >
      <textarea
      class="ui-text-area-field"
      :class="[{'border-bottom-only': borderBottomOnly}, {'text-area-disabled': disabled}]"
      :rows="rows"
      :maxLength="maxLength"
      :minLength="minLength"
      :disabled="disabled"
      :placeholder="placeholderLabel"
      :required="required"
      :readonly="readOnly"
      :aria-label="placeholderLabel || label"
      :aria-labelledby="ariaLabelledby"
      :name="componentId"
      :id="componentId"
      :value="value"
      aria-placeholder="dsf"
      @input="$emit('input', $event.target.value)"
      @focus="floatingLabel ? floatingActive() : null"
      @blur="floatingLabel ? floatingRemove() : null"
      ></textarea>
      <label 
      class="ui-label"
      :class="[{'ui-label-float' : floatingLabel}, {'label-disabled': disabled}]"
      :for="componentId"
      >{{ label }}
      </label>
    </div>
</template>

<script>
import UiMixinFloatingLabel from '../../../mixin/floatingLabel'
import UiMixinRandomId from '../../../mixin/randomId'
export default {
  name: "ui-text-area-field",
  mixins: [
    UiMixinFloatingLabel,
    UiMixinRandomId
  ],
  props: {
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
    borderBottomOnly: {
      type: Boolean,
      default: false
    },
    ariaLabelledby: {
      type: String,
      default: 'Select Input'
    },
    rows: {
      type: Number,
      default: 4
    },
    maxLength: {
      type: Number
    },
    minLength: {
      type: Number
    }
  },
  data() {
    return {};
  },
  mounted(){
    this.setId('ui-text-area')
  }
};
</script>

<style>
</style>