<template lang="pug">
    .ui-radio(
        :class="[{'disabled': disabled}, cClass]" 
        :ref="componentId"
    )
        .ui-radio__wrapper
            span.ui-radio__icon(
                aria-hidden="true",
                :class="isActive ? setActiveColor : ''"
            )
                svg.v-icon__svg(
                    xmlns="http://www.w3.org/2000/svg",
                    viewBox="0 0 24 24",
                    role="img",
                    aria-hidden="true"
                )
                    path(
                        v-if="!isActive",
                        d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"
                    )
                    path(
                        v-else,
                        d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z"
                    )
            input.ui-radio__input(
                :aria-checked="initialStatus"
                :id="componentId"
                :disabled="disabled"
                :checked="isActive"
                role="radio"
                type="radio" 
                :name="inputName"
                :value="value"
                @change="handleEvent($event)"
            )
        label.ui-radio__label(
            :for="componentId" 
        ) {{label}}
</template>

<script>
import UiMixinRandomId from '../../../mixin/randomId'
export default {
    name: 'ui-radio',
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
            default: '',
            required: true
        },
        label: {
            type: String,
            default: 'Checkbox label'
        },
        inputName: {
            type: String,
            default: 'option'
        },
        cClass:{
            type: [String, Array],
        },
        activeColor: {
            type: String,
            default: 'primary'
        },
        selected: {
            type: String,
            required: true,
            default: ''
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
    watch:{
        /**
         * Vigila si el valor seleccionado coincide con el valor del radio button
         */
        isSelected() {
            if (this.selected === this.value) {
                this.isActive = true
            }
            else{
                this.isActive = false
            }
        }
    },
    computed:{
        /**
         * Determina el modificador de clase para mostrar el SVG cuando esté activo
         * @return {String} Con el modificador de la clase ya formada
         */
        setActiveColor(){
            return `ui-radio__icon--${this.activeColor}`
        },
        /**
         * Devuelve el estado inicial del input
         * @return {Boolean} true / false
         */
        isChecked(){
            return this.initialStatus
        },
        /**
         * Devuelve el valor seleccionado
         * @return {Boolean} true/false 
         */
        isSelected(){
            return this.selected
        }
    },
    methods: {
        /**
         * Emite evento con el valor del input
         * @param {Event} ev Evento
         */
        handleEvent(ev){
            let val = {
                value: ev.target.value
            }
            this.isActive = ev.target.checked
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
                    value: this.value
                }
                this.emitEvent(val)
            }
        }
    },
    created(){
        this.configComponent()
    },
    mounted() {
        this.setId('ui-radio')
    }
    
}
</script>

<style>

</style>