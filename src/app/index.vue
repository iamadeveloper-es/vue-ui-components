<template>
  <div id="app">
    <ui-view-dashboard></ui-view-dashboard>
  </div>
</template>
<script>
import UiViewDashboard from '@/components/templates/ui-view-dashboard'
export default {
  name: 'app',
  components: { UiViewDashboard },
}
</script>

<style lang="scss">
@import "../static/scss/main";
</style>
