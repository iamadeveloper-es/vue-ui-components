<template>
  <div class="ui-bottom-navigation"
  :class="[
  {'ui-bottom-navigation--hide' : hideNav},
  elevation ? `elevation--${elevation}` : '']"
  >
    <nav class="ui-bottom-navigation__nav">
      <ul 
      class="ui-bottom-navigation__ul flex flex--center flex--wrap">
        <li 
        class="ui-bottom-navigation__li"
        v-for="(link, index) in links"
        :key="index"
        >
          <ui-link
          :route="link.route"
          :label="link.label"
          :iconModel="link.iconModel"
          :classes="link.class"
          ></ui-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import UiLink from '../../atoms/ui-link';
export default {
  name: 'ui-bottom-navigation',
  components: {
    UiLink
  },
  props: {
    links: {
      type: Array,
      // required: true
    },
    hideOnScroll: {
      type: Boolean,
      default: true
    },
    elevation: {
        type: Number
    }
  },
  data(){
    return {
      lastScroll: null,
      hideNav: false
    }
  },
  methods: {
    handleScroll() {
      const scrollTo = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTo > this.lastScroll){
        this.hideNav = false;
      } else {
          this.hideNav = true;
      }
      this.lastScroll = scrollTo <= 0 ? 0 : scrollTo;
    },
    initialScrollPos(){
      this.lastScroll = document.documentElement.scrollTop || document.body.scrollTop;
    },
    setScroll(){
      this.initialScrollPos();
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyScroll(){
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  created() {
    if(this.hideOnScroll){
      this.setScroll();
    }
  },
  destroyed() {
    if(this.hideOnScroll){
      this.destroyScroll();
    }
  }
}
</script>

<style>
</style>