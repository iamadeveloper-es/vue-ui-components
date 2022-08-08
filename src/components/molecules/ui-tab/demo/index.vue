<template>
    <div class="ui-tab-demo">
        <ui-tab
            :options="navOptions"
            :itemSelected="blockSelected"
            @tabAction="setBlockSelected($event)"
        ></ui-tab>
        <div class="hidden-blocks">
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

<style lang="scss" scoped>
.hidden-blocks{
    margin-top: 1rem;
    padding: 1rem;
    border: 2px solid var(--secondary-grey);
    border-radius: var(--radius-small);
}
</style>