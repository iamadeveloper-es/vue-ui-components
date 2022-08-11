<template>
  <div 
  class="ui-spinner"
  :class="spinnerClasses"
  :style="[
    getOuterBackground, 
    getOuterSize, 
    {opacity: outerOpacity}
  ]"
  v-if="showSpinner"
  >
    <div class="ui-spinner__wrapper"
    :style="[getInnerSize]"
    >
      <svg class="ui-spinner__svg" viewBox="0 0 50 50">
          <circle 
          class="ui-spinner__path" 
          cx="25"
          cy="25"
          r="20"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
          ></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ui-spinner',
    props:{
      show: {
        type: Boolean,
        default: false
      },
      innerSize :{
        type: Object,
        default () {
          return {
            width: '80px',
            height: '80px'
          }
        }
      },
      strokeColor: {
        type: String,
        default: 'rgb(177, 177, 177)'
      },
      strokeWidth: {
        type: Number,
        default: 4
      },
      spinnerClasses : {
        type: String,
        // default: 'full'
      },
      outerSize: {
        type: Object,
        default () {
          return {
            width: '80px',
            height: '80px'
          }
        }
      },
      outerBackground: {
        type: String,
        default: '#363636'
      },
      outerOpacity: {
        type: String,
        default: '.4'
      }
    },
    data(){
      return {
        showSpinner: false
      }
    },
    watch: {
      show: function (){
        this.showSpinner = this.show
      }
    },
    computed: {
          getInnerSize(){
            return {'width': this.innerSize.width, height: this.innerSize.height}
          },
          getOuterSize(){
            return this.spinnerClasses !== 'full' 
              ? {'width': this.outerSize.width, height: this.outerSize.height}
              : {'width': 'auto', height: 'auto'}
          },
          getOuterBackground(){
            return {'background-color': this.outerBackground}
          }
    },
    destroyed(){
      this.showSpinner = false
    }
}
</script>

<style>
</style>