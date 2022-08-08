<template>
    <div class="ui-tab">
        <ul>
            <li v-for="(option, index) in options" :key="index">
              <ui-button
              @clicked="handleAction(option.action)"
              :classes="option.action === itemSelected ? 'ui-button--tab ui-button--tab-active' : 'ui-button--tab'"
              :btnText="option.label"
              >
              </ui-button>
            </li>
        </ul>
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

<style lang="scss" scoped>
.ui-tab{
  ul{
    display: flex;
  }
  ul li{
    padding: .2rem .5rem;
  }
}
</style>