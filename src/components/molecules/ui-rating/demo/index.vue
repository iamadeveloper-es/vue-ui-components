<template>
  <div class="ui-rating-demo">
    <ui-rating
    @ratingStats="getRatingStats($event)"
    ></ui-rating>
    <div class="output"
    v-if="stats"
    >
      <div>
        <span>Total items: {{stats.totalItems}}</span>
      </div>
      <div>
        <span>Rating: {{stats.rating}}</span>
      </div>
      <div>
        <span>Percent calc: {{stats.percent}}%</span>
      </div>
    </div>
  </div>
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
        stats: undefined
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