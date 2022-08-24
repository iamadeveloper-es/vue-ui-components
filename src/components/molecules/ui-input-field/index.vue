<template>
    <div
    class="ui-input-wrapper ui-floating-label"
    :class="[
    (hasFloatingActive ? 'is-focused' : ''), 
    ]"
    >
      <input
      class="ui-input-field"
      :class="[{'border-bottom-only': borderBottomOnly}, {'input-disabled': disabled}]"
      :disabled="disabled"
      :type="inputType"
      :placeholder="placeholderLabel"
      :required="required"
      :readonly="readOnly"
      :aria-label="placeholderLabel || label"
      :aria-labelledby="ariaLabelledby"
      :name="componentId"
      :id="componentId"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="floatingLabel ? floatingActive() : null"
      @blur="floatingLabel ? floatingRemove() : null"
      />
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
  name: "ui-input-field",
  mixins: [
    UiMixinFloatingLabel,
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
    return {};
  }
};
</script>

<style>
</style>