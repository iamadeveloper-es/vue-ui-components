<template>
  <div class="ui-rating">
    <div
    class="ui-rating__wrapper">
      <div class="ui-rating__item"
      v-for="(item, index) in stars"
      :key="index"
      @click="rateAction(item.elementIndex), handleRate(item.elementIndex)"
      :class="{'clicked' : indexSelected === item.elementIndex}"
      >
        <svg 
        viewBox="0 0 100 100"
        class="ui-rating__svg rating"
        :class="{'hovered' : item.hovered}"
        
        :data-rating="item.elementIndex"
        @mouseenter="hoverStars(item.elementIndex, true)"
        @mouseleave="hoverStars(item.elementIndex)"
        >
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" 
          :fill="item.active ? item.fill : initialFill"
          style="fill-rule:nonzero;"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
//FIXME: Añadir a svg tag
// viewBox="0 0 100 100" 
// preserveAspectRatio="none"
export default {
    name: 'ui-rating',
    props: {
      count: {
        type: Number,
        default: 8
      },
      initialFill: {
        type: String,
        default: '#d8d8d8'
      },
      activeFill :{
        type: String,
        default: '#ffd055'
      }
    },
    data () {
      return {
        stars: [],
        indexSelected: null,
        finalRate: undefined
      }
    },
    methods: {
      configComponent(){
        let arrayFromCount = Array.from(Array(this.count).keys())
        arrayFromCount.forEach(item => {
          this.stars.push(
            {
              elementIndex: item,
              fill: this.activeFill,
              active: false,
              hovered: false
            }
          )
        })
      },
      rateAction(itemIndex){
        this.indexSelected = itemIndex
        return this.stars.map((item, index) => {
          item.active = false
          if(index <= itemIndex){
            item.active = true
          }
        })
      },
      handleRate(ev){
        this.finalRate = {
          totalItems: this.count,
          rating: ev+1,
          percent: this.setRateStats(ev+1)
        }
        this.$emit('ratingStats', this.finalRate)
      },
      setRateStats(rate){
        let total = 0;
        total = rate * 100 / this.count
        return total.toFixed(2)
      },
      hoverStars(itemIndex, status = false){
        return this.stars.map((item, index) => {
          item.hovered = false
          if(index <= itemIndex && status){
            item.hovered = true
          }
        })
      }
    },
    mounted (){
      this.configComponent();
    }
}
</script>

<style>
</style>