<template>
  <div class="ui-icon-demo">
    <div class="flex-md flex-md--between">
        <div
        class="text-center"
        v-for="(icon, index) in setIcons"
        :key="index"
        >
            <ui-icon
            :model="icon"
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
                    type: 'solid',
                    icon: 'search',
                    class: 'mb-2',
                    action: this.action
                },
                {
                    type: 'solid',
                    icon: 'edit',
                    class: 'mb-2'
                },
                {
                    type: 'regular',
                    icon: 'file',
                    class: 'mb-2'
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

$icon-modifiers: ('medium': 18px, 'big': 20px);
$icon-colors: ('red': red, 'big': 20px);

.ui-icon{
    @include icon($icon-modifiers, $icon-colors);
}
</style>