<template>
    <div class="ui-link-demo">
        <div
        class="mb-3"
        v-for="(data, index) in dummyData"
        :key="index"
        >
            <app-link
            :route="data.route"
            :label="data.label"
            :classes="['ui-link--underline', 'ui-link--icon-right']"
            :iconModel="data.iconModel"
            ></app-link>
            <div>
                <span>route: {{data.route}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import AppLink from '../../ui-link'
export default {
  components: { AppLink },
    name: 'ui-link-demo',
    data(){
        return{
            dummyData : [
                {
                    route: '/test',
                    label: 'Link 1'
                },
                {
                    route: { name: 'Ui-link'},
                    label: 'Link 2'
                },
                {
                    route: { name: 'Ui-link', params: { userId: '123' }},
                    label: 'Link 3'
                },
                {
                    route: { path: '/home' },
                    label: 'Link 4'
                },
                {
                    route: { path: '/register', query: { plan: 'private' }},
                    label: 'Link 5 (icon)',
                    iconModel: {
                        
                        icon: 'angle-right',
                        class: 'ml-2',
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-link';

$base : (
    'primary-text-color': var(--primary-blue)
    );

.ui-link{
    @include link($base);
}
</style>