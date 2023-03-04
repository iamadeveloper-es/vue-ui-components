<template lang="pug">
    .ui-badge(v-if="active")
        template(v-if="count")
            span.ui-badge__counter {{handleCounter}}
</template>

<script>
export default {
    name: 'ui-badge',
    props: {
        count: {
            type: Number
        },
        active: {
            type: Boolean,
            default: true
        },
        maxCount: {
            type: Number,
            default: 100
        }
    },
    /**
     * @Override
     */
    data(){
        return {
            
            
        }
    },
    computed: {
        handleCounter(){
            return this.count <= this.maxCount-1 ? this.count : `${this.maxCount}+`
        }
    },
    methods: {
        /**
         * Configuración inicial del componente
         */
        configComponent(){
            
        }
    },
    created(){
        this.configComponent()
    }
}
</script>

<style></style>