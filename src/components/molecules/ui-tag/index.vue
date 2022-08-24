<template>
  <div 
  v-if="showTag"
  class="ui-tag"
  :class="[
  `ui-tag--bg-${bgColor}`, `ui-tag--text-${textColor}`,
  cClass,
  outlined ? 'ui-tag--outlined' : '',
  pill ? 'ui-tag--pill' : '']"
  >
    <span
    v-if="filterIcon"
    class="ui-tag__filter-icon"
    >
      <ui-icon
      :model="filterIcon"
      ></ui-icon>
    </span>
    <span
    class="ui-tag__label"
    :class="[filterIcon ? 'ml-1' : '',
    close ? 'mr-1' : '']"
    >{{label}}</span>
    <span
    v-if="close"
    class="ui-tag__close"
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
    name: 'ui-tag',
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
      },
      filterIcon: {
        type: Object
      }
    },
    data() {
      return {
        iconModel: {
            icon: 'times',
            action: this.closeChip
        },
        showTag: true
      }
    },
    methods: {
      closeChip(ev){
        this.showTag = !this.showTag
        this.$emit('closeAction', ev)
      }
    }
}
</script>

<style>

</style>