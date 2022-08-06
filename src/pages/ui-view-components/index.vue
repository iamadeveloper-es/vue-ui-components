<template>
    <div>
        <div class="app-info-component mb-6">
            <h1 class="mb-4">Vue Ui Components</h1>
            <p>Component name:</p>
            <h3 class="mb-3">{{setComponentName}}</h3>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'ui-view-component',
    computed:{
        setComponentName(){
            const routeName = this.$route.name
            return routeName
        }
    }
}
</script>

<style>

</style>