<template>
<div class="ui-checkbox"
:class="[{'disabled': disabled}, cClass]" 
:ref="componentId"
>
  <div class="ui-checkbox__wrapper">
    <span 
    aria-hidden="true" 
    class="ui-checkbox__icon"
    :class="isActive ? setActiveColor : ''"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
            <path
            v-if="!isActive"
            d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"></path>
            <path
            v-else
            d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z"></path>
        </svg>
    </span>
    <input 
    class="ui-checkbox__input" 
    :aria-checked="initialStatus" 
    :id="componentId" 
    :disabled="disabled"
    :checked="isActive"
    role="checkbox" 
    type="checkbox" 
    :value="value"
    @change="handleEvent($event)"
    >
  </div>
    <label 
    :for="componentId" 
    class="ui-checkbox__label">{{label}}</label>
  </div>
</template>

<script>
import UiMixinRandomId from '../../../mixin/randomId'
export default {
    name: 'ui-checkbox',
    mixins: [
        UiMixinRandomId
    ],
    props: {
        initialStatus: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            default: 'Checkbox label'
        },
        cClass:{
            type: [String, Array],
        },
        activeColor: {
            type: String,
            default: 'primary'
        }
    },
    /**
     * @Override
     */
    data(){
        return {
            ariaChecked: false,
            isActive: false,
            
        }
    },
    computed:{
        /**
         * Determina el modificador de clase para mostrar el SVG cuando esté activo
         * @return {String} Con el modificador de la clase ya formada
         */
        setActiveColor(){
            return `ui-checkbox__icon--${this.activeColor}`
        },
        /**
         * Devuelve el estado inicial del input
         * @return {Boolean} true / false
         */
        isChecked(){
            return this.initialStatus
        }
    },
    methods: {
        /**
         * Emite evento con el valor del input
         * @param {Event} ev Evento
         */
        handleEvent(ev){
            let val = {
                checked: ev.target.checked,
            }
            this.isActive = ev.target.checked
            if(this.value){
                val.value = ev.target.value
            }
            else{
                val.value = ev.target.checked
            }
            this.$emit('change', val)
        },
        emitEvent(value){
            this.$emit('change', value)
        },
        /**
         * Configuración inicial del componente
         */
        configComponent(){
            this.isActive = this.isChecked
            this.ariaChecked = this.isActive

            if(this.initialStatus){
                let val = {
                    checked: true,
                }
                if(this.value){
                    val.value = this.value
                }
                else{
                    val.value = true
                }
                this.emitEvent(val)
            }
        },
        foo(){
            debugger
        }
    },
    created(){
        this.configComponent()
    },
    mounted() {
        this.setId('ui-checkbox')
    }
    
}
</script>

<style>

</style>