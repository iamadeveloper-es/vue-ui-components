<template>
    <div class="ui-stepper"
    v-if="setSteps.length"
    >
        <div class="ui-stepper__steps">
            <div class="ui-stepper__step step"
            v-for="(step, index) in setSteps"
            :key="index"
            :class="{'step--last': index + 1 === steps.length, 
            'step--completed': step.completed,
            'step--current': index === indexOfCurrent}"
            >
                <div class="step__label"
                :ref="`data-label-${index}`"
                >{{step.label}}</div>
                <div class="step__divider"
                v-if="index + 1 < steps.length"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
// Ejemplo de modelo prop steps:
// steps: [
//     {
//         label: 'Step 1',
//         completed: false,
//         current: false
//     },
//     {
//         label: 'Step 2',
//         completed: false,
//         current: false
//     },
//     {
//         label: 'Step 3',
//         completed: false,
//         current: false
//     }
// ],
export default {
    name: 'ui-stepper',
    props: {
        steps: {
            type: Array,
            required: true
        },
        current: {
            type: Number,
            default: 0,
            required: true
        }
    },
    computed: {
        /**
         * Encuentra el índice del paso actual con la propiedad current a true
         * @return {Number} índice del elemento current 
         */
        indexOfCurrent(){
            return this.steps.findIndex(step => step.current) >= 0 
                ? this.steps.findIndex(step => step.current)
                : 0

        },
        /**
         * Maneja los pasos según la prop current, que es el elemento activo
         * @return {Array} con los pasos actualizados
         */
        setSteps(){
            return this.steps.map((item, index) => {
                if(index < this.current){
                    item.completed = true
                    item.current = false
                }
                if(index === this.current){
                    item.completed = false
                    item.current = true
                }
                if(index > this.current){
                    item.completed = false
                    item.current = false
                }
                return item
            })
        }
    },
    methods: {
        /**
         * Setea el width mayor para el último label en una variable custom property
         */
        setBiggerLabelWidth(){
            let root = document.documentElement;
            let biggerElement = ''
            const labels = document.querySelectorAll('.step__label')
            labels.forEach(element => {
                const compStyles = window.getComputedStyle(element);
                if(compStyles.width > biggerElement){
                    biggerElement = compStyles.width
                }

                root.style.setProperty('--element-width', compStyles.width);
            })
        },
        /**
         * Configura los datos iniciales del componente
         */
        configComponent(){
            this.setBiggerLabelWidth()
        }
    },
    mounted(){
        this.configComponent()
    }
}
</script>

<style>
</style>