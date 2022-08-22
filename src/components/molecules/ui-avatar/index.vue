<template>
  <div class="ui-avatar"
  :class="[
  avatarModel.class,
  setColor,
  setBackground, 
  rounded ? 'ui-avatar--rounded': '', 
  hasListener ? 'cursor-pointer' : '',
  ]"
  v-on="hasListener ? {click : handleEvent} : null"
  >
    <ui-image
    v-if="avatarModel.image"
    :imgData="avatarModel.image"
    ></ui-image>
    <div 
    class="ui-avatar__initials"
    v-if="avatarModel.initials"
    >
        <span>{{setInitials}}</span>
    </div>
  </div>
</template>

<script>
import UiImage from '../../atoms/ui-image';
import UiMixinRippleEffect from '../../../mixin/rippleEffect'
export default {
    name: 'ui-avatar',
    components: {
        UiImage
    },
    mixins: [
        UiMixinRippleEffect
    ],
    props: {
        rounded: {
            type: Boolean,
            default: true
        },
        avatarModel:{
            type: Object
        }
    },
    computed: {
        hasListener(){
            return Object.keys(this.$listeners).length
        },
        setInitials(){
            const words = this.avatarModel.initials.name.split(' ').slice(0,2);
            const formatedWords = words.map(word => word.charAt(0).toUpperCase());
            return formatedWords.toString().replace(',', '')
        },
        setColor(){
            return this.avatarModel.initials && this.avatarModel.initials.color
            ? `ui-avatar--text-${this.avatarModel.initials.color}` : ''
        },
        setBackground(){
            return this.avatarModel.initials && this.avatarModel.initials.background
            ? `ui-avatar--bg-${this.avatarModel.initials.background}` : ''
        }
    },
    methods:{
        handleEvent(ev){
            this.rippleEffect(ev)
            this.$emit('avatarClicked', ev)
        }
    }
}
</script>

<style>

</style>