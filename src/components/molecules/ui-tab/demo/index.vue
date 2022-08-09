<template>
    <div class="ui-tab-demo">
        <ui-tab
            :options="navOptions"
            :itemSelected="blockSelected"
            @tabAction="setBlockSelected($event)"
        >
          <div slot="tab-content">
            <div v-if="blockSelected === 'block-first'">
              {{ 'Selected block: ' + blockSelected }}
              </div>
              <div v-if="blockSelected === 'block-second'">
              {{ 'Selected block: ' + blockSelected }}
              </div>
              <div v-if="blockSelected === 'block-third'">
              {{ 'Selected block: ' + blockSelected }}
              </div>
            </div>
        </ui-tab>
    </div>
</template>

<script>
import UiTab from '../../ui-tab'
export default {
    name: 'ui-tab-demo',
    components: {
      UiTab
    },
    data() {
      return {
        navOptions: [
          {
            label: 'Option 1',
            action: 'block-first'
          },
          {
            label: 'Option 2',
            action: 'block-second'
          },
          {
            label: 'Option 3',
            action: 'block-third'
          }
        ],
        blockSelected: 'block-first'
      }
    },
    methods: {
      setBlockSelected(ev){
        this.blockSelected = ev
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-tab';

$base : (
    'horizontal-space': .5rem,
    'vertical-space': .2rem
    );

.ui-tab{
    @include tab($base);
}
</style>