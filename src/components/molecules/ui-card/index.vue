<template>
  <div class="ui-card"
  :class="[cClass, elevation ? `elevation--${elevation}` : '']"
  :style="{'width': width}"
  >
    <div 
    class="ui-card__header"
    v-if="this.$slots.header"
    >
        <slot name="header"></slot>
    </div>
    <div 
    class="ui-card__body"
    v-if="this.$slots.body"
    >
        <slot name="body"></slot>
    </div>
    <div 
    class="ui-card__footer"
    v-if="this.$slots.footer"
    >
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ui-card',
    props: {
        cClass: {
            type:[Array, String]
        },
        width: {
            type: String,
            default: '100%'
        },
        elevation: {
            type: Number
        }
    }
}
</script>

<style>

</style>