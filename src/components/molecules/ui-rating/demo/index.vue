<template lang="pug">
  .ui-rating-demo
    div
      ui-rating(@ratingStats="getRatingStats($event)")
      .output(v-if="stats")
        div
          span Total items: {{stats.totalItems}}
        div
          span Rating: {{stats.rating}}
        div
          span Percent calc: {{stats.percent}}%
    hr
    div
      p Read Only
      ui-rating(:readOnly="readOnlyModel")
</template>

<script>
import UiRating from '@/components/molecules/ui-rating'
export default {
    name: 'ui-rating-demo',
    components:{
        UiRating
    },
    data(){
      return {
        stats: undefined,
        readOnlyModel: {
          status: true,
          activeItems: 3
        }
      }
    },
    methods: {
      getRatingStats(ev){
        console.log(ev)
        this.stats = ev
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-rating';
@import '../mixins/transitions';

$base: ();

.ui-rating{
  @include rating($base);
}
</style>