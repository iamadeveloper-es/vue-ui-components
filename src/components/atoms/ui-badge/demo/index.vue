<template lang="pug">
  .ui-badge-demo
    .notification
      ui-avatar(:avatarModel="avatarModel1")
      ui-badge(
        :count="count",
        :active="active",
        :maxCount="120")
    div
      template(v-if="this.active")
        ui-button(
          :classes="['ui-button--regular', 'mr-4']",
          btnText="Send notification",
          @clicked="counterIncrement")
        ui-button(
          :classes="['ui-button--regular', 'mx-auto']",
          btnText="Clear notification",
          @clicked="clearCounter")
      template(v-else)
        ui-button(
          :classes="['ui-button--regular', 'mx-auto']",
          btnText="Reset Badge",
          @clicked="resetCounter")
</template>

<script>
import UiButton from '@/components/molecules/ui-button'
import UiAvatar from '@/components/molecules/ui-avatar';
import UiBadge from '../../ui-badge'
export default {
    name: 'ui-badge-demo',
    components: {
        UiButton,
        UiAvatar,
        UiBadge
    },
    data(){
      return {
        count: 88,
        active: true,
        avatarModel1: {
            class: 'mx-auto',
            image: {
                src: 'dummy-user.jpg',
                alt: 'User',
                class: 'ui-image--fluid'
            }
        }
      }
    },
    methods:{
        counterIncrement(){
          this.count++
        },
        clearCounter(){
          this.count = 0
          this.active = false
        },
        resetCounter(){
          this.count = 88
          this.active = true
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-badge';

.notification{
  position: relative;
  display: inline-block;
  margin: 2rem 0;
}

//- component styles
$base: (
  'font-size': 11px);

.ui-badge {
    @include badge($base);
}
</style>