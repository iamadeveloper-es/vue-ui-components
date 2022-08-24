<template>
  <div 
  v-if="showChip"
  class="ui-chip"
  :class="[
  `ui-chip--bg-${bgColor}`, `ui-chip--text-${textColor}`,
  cClass,
  outlined ? 'ui-chip--outlined' : '',
  pill ? 'ui-chip--pill' : '']"
  >
    <span
    class="ui-chip__label"
    >{{label}}</span>
    <span
    v-if="close"
    class="ui-chip__close"
    >
      <ui-icon
      :model="iconModel"
      @iconClicked="iconModel.action($event)"
      ></ui-icon>
    </span>
  </div>
</template>

<script>
import UiIcon from '../../atoms/ui-icon'
export default {
    name: 'ui-chip',
    components: {
      UiIcon
    },
    props: {
      cClass: {
        type: [String, Array]
      },
      label: {
        type: String,
        default: 'Chip'
      },
      bgColor: {
        type: String,
        default: 'grey'
      },
      textColor: {
        type: String,
        default: 'dark'
      },
      outlined: {
        type: Boolean,
        default: false
      },
      pill: {
        type: Boolean,
        default: false
      },
      close: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        iconModel: {
            icon: 'times',
            class: 'ml-1',
            action: this.closeChip
        },
        showChip: true
      }
    },
    methods: {
      closeChip(ev){
        this.showChip = !this.showChip
        this.$emit('close', ev)
      }
    }
}
</script>

<style>

</style>