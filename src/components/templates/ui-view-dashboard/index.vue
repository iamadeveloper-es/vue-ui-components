<template>
    <div class="ui-view-dashboard">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-8 gap-2">
                <div 
                id="app-nav"
                class="app-nav col-span-2 border-r-2 border-sky-500 px-3"
                >
                    <ul class="ui-menu">
                        <li
                        class="mt-2"
                        v-for="(route, index) in routes"
                        :key="index"
                        >
                        <span
                        class="cursor-pointer space-y-4"
                        @click="toggleChildRoutes($event)"
                        >{{route.name}}</span>
                        <ul class="ui-menu-children pl-2">
                            <li
                            class="mt-2"
                            v-for="child in route.children"
                            :key="child.name"
                            >
                                <router-link
                                :to="child.path">{{child.name}}</router-link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <div
                class="col-start-3 col-end-8 px-3"
                >
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {routes} from '@/router/index'
export default {
    name: 'ui-view-dashboard',
    data(){
        return{
            routes,
        }
    },
    methods:{
        toggleChildRoutes(ev){
            ev.target.nextSibling.classList.toggle('ui-menu-children-active')
        }
    }
}
</script>

<style lang="scss">
.ui-view-dashboard{
    padding: 50px 20px;
    min-height: 100vh;
}
.ui-menu{
    span{
        padding: 4px;
        background-color: var(--vue-green);
        border-radius: 3px;
    }
    .ui-menu-children{
        display: none;
        &.ui-menu-children-active{
        display: block;
        }
    }
}
</style>