<template lang="pug">
  span.ui-money {{formatedNumber}}
</template>

<script>
import MoneyUtils from '../../../utils/moneyUtils'
export default {
    name: 'ui-money',
    props: {
        model:{
            type: Object,
            required: true
        },
        lang: {
            type: String,
            default: 'es-ES'
        }
    },
    data(){
        return {
            formatedNumber: undefined
        }
    },
    watch: {
        modelValue(){
            this.formatModel();
        }
    },
    computed: {
        modelValue(){
            return this.model.amount
        }
    },
    methods: {
        formatModel(){
            const result = MoneyUtils.numFormatFixToLocale(this.model.amount, this.lang, this.model.currency)

            this.formatedNumber = result
        },
        configComponent(){
            this.formatModel()
        }
        // configComponent(){
        //     const currency = this.model.currency ? this.model.currency : 'EUR'
        //     const formatter = new Intl.NumberFormat(this.lang, {
        //     style: 'currency',
        //     currency: currency
        //     });
        //     this.formatedNumber = formatter.format(this.model.amount)
        // }
    },
    mounted(){
        this.configComponent()
    }
}
</script>

<style>
</style>