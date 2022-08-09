<template>
  <span class="ui-icon"
  :class="icon.class"
  :style="[hasListener ? {cursor: 'pointer'} : {'pointer-events': 'none'}]"
  v-on="icon.action ? {click : handleEvent } : null"
  >
  </span>
</template>

<script>
// Using FontAwesome V5.15.4
export default {
  name: 'ui-icon',
  props: {
    icon: {
      type: Object,
      required: true
    }
  },
  computed:{
        hasListener(){
            return Object.keys(this.$listeners).length && this.icon.action
        }
  },
  methods: {
    handleEvent(ev){
      this.$emit('iconClicked', ev)
    }
  }
}
</script>

<style>

</style>