<template>
  <div class="ui-icon-demo">
    <div class="flex-md flex-md__between">
        <div
        class="text-center"
        v-for="(icon, index) in setIcons"
        :key="index"
        >
            <ui-icon
            :icon="icon"
            @iconClicked="icon.action(icon)"
            ></ui-icon>
            <div
            v-if="icon.action"
            class="mt-2"
            >{{iconActionOutput}}</div>
            <div
            v-else
            class="mt-2"
            >
                Icon without event
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import UiIcon from '@/components/atoms/ui-icon'
export default {
    name: 'ui-icon-demo',
    components: {
        UiIcon
    },
    data(){
        return {
            iconActionOutput: 'Click me!'
        }
    },
    computed: {
        setIcons() {
            return [
                {
                    class: 'fas fa-search',
                    action: this.action
                },
                {
                    class: 'fas fa-edit'
                },
                {
                    class: 'far fa-file'
                }
            ]
        }
    },
    methods: {
        action(ev){
            this.iconActionOutput = `Icon cliked with class ${ev.class}`
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-icon';

$base: ('size': 18px);

.ui-icon{
    @include icon($base);
}
</style>