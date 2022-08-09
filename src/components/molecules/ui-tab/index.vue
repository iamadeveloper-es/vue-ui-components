<template>
    <div class="ui-tab">
        <ul class="ui-tab__ul">
            <li 
            class="ui-tab__li"
            v-for="(option, index) in options" 
            :key="index">
              <ui-button
              @clicked="handleAction(option.action)"
              :classes="option.action === itemSelected ? 'ui-button--tab ui-button--tab-active' : 'ui-button--tab'"
              :btnText="option.label"
              >
              </ui-button>
            </li>
        </ul>
        <div
        v-if="this.$slots['tab-content']"
        class="ui-tab__hidden-blocks"
        >
          <slot name="tab-content"></slot>
        </div>
    </div>
</template>

<script>
import UiButton from '../ui-button'
export default {
  name: "ui-tab",
  components: {
    UiButton
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    itemSelected: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAction(ev) {
      this.$emit("tabAction", ev);
    },
  },
};

</script>

<style>
</style>