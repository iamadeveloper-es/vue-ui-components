<template lang="pug">
  .ui-rating
    .ui-rating__wrapper
      .ui-rating__item(
        v-for="(item, index) in stars",
        :key="index",
        v-on="!readOnly.status ? { click: () => [rateAction(item.elementIndex), handleRate(item.elementIndex)] } : {}",
        :class="{'clicked' : indexSelected === item.elementIndex, 'pointer' : !readOnly.status}"
      )
        svg.ui-rating__svg.rating(
          viewBox="0 0 39 36",
          fill="none", 
          xmlns="http://www.w3.org/2000/svg",
          :class="{'hovered' : item.hovered}",
          :data-rating="item.elementIndex",
          @mouseenter="hoverStars(item.elementIndex, true)",
          @mouseleave="hoverStars(item.elementIndex)"
        )
          path(
            d="M19.4999 0L23.878 13.4742H38.0455L26.5837 21.8017L30.9618 35.2758L19.4999 26.9483L8.03814 35.2758L12.4162 21.8017L0.954346 13.4742H15.1219L19.4999 0Z", 
            :fill="item.active ? item.fill : initialFill"
          )
</template>

<script>
export default {
    name: 'ui-rating',
    props: {
      count: {
        type: Number,
        default: 5
      },
      initialFill: {
        type: String,
        default: '#d8d8d8'
      },
      activeFill :{
        type: String,
        default: '#ffd055'
      },
      readOnly: {
        type: Object,
        default: () => ({
          status: false,
          activeItems: undefined
        })
      },
    },
    data () {
      return {
        stars: [],
        indexSelected: null,
        finalRate: undefined
      }
    },
    methods: {
      rateAction(itemIndex){
        this.indexSelected = itemIndex
        return this.stars.map((item, index) => {
          item.active = index <= itemIndex
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
        let total = 0
        total = rate * 100 / this.count
        return total.toFixed(2)
      },
      hoverStars(itemIndex, status = false){
        if(!this.readOnly.status){
          return this.stars.map((item, index) => {
            item.hovered = false
            if(index <= itemIndex && status){
              item.hovered = true
            }
          })
        }
      },
      configComponent(){
        let arrayFromCount = Array.from(Array(this.count).keys())
        arrayFromCount.forEach((item, index) => {
          this.stars.push(
            {
              elementIndex: item,
              fill: this.activeFill,
              active: index + 1 <= this.readOnly.activeItems,
              hovered: false
            }
          )
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