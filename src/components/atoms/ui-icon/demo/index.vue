<template lang="pug">
    .ui-icon-demo
        p Iconos Solid (fas)
        .flex-md.flex-md--y-center.flex-md--gap-20(
            v-for="(icon, index) in icons.solid"
            :key="`${icon.type}-${icon.icon}`"
        )
            .text-center
                h5.mb-2 icono: {{icon.icon}}
                ui-icon(
                    :model="icon"
                    @iconClicked="icon.action(icon)"
                )
            .mt-2(
                v-if="icon.action"
            ) {{iconActionOutput}}
            .mt-2(
                v-else
            ) Icon without event
        p Iconos Regular (far)
        .flex-md.flex-md--y-center.flex-md--gap-20(
            v-for="(icon, index) in icons.regular"
            :key="`${icon.type}-${icon.icon}`"
        )
            .text-center
                h5.mb-2 icono: {{icon.icon}}
                ui-icon(
                    :model="icon"
                    @iconClicked="icon.action(icon)"
                )
            .mt-2(
                v-if="icon.action"
            ) {{iconActionOutput}}
            .mt-2(
                v-else
            ) Icon without event
        p Iconos Brands (fab)
        .flex-md.flex-md--y-center.flex-md--gap-20(
            v-for="(icon, index) in icons.brands"
            :key="`${icon.type}-${icon.icon}`"
        )
            .text-center
                h5.mb-2 icono: {{icon.icon}}
                ui-icon(
                    :model="icon"
                    @iconClicked="icon.action(icon)"
                )
            .mt-2(
                v-if="icon.action"
            ) {{iconActionOutput}}
            .mt-2(
                v-else
            ) Icon without event
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
            iconActionOutput: 'Con click!'
        }
    },
    computed: {
        icons() {
            return {
                solid: [
                    {
                        type: 'solid',
                        icon: 'heart',
                        class: 'mb-2',
                        action: this.action
                    },
                    {
                        type: 'solid',
                        icon: 'edit',
                        class: 'mb-2'
                    }
                ],
                regular: [
                    {
                        type: 'regular',
                        icon: 'heart',
                        class: 'mb-2',
                        action: this.action
                    },
                    {
                        type: 'regular',
                        icon: 'edit',
                        class: 'mb-2'
                    }
                ],
                brands: [
                    {
                        type: 'brands',
                        icon: 'linkedin',
                        class: 'mb-2',
                        action: this.action
                    },
                    {
                        type: 'brands',
                        icon: 'vuejs',
                        class: 'mb-2'
                    }
                ]
            }
        }
    },
    methods: {
        action(ev){
            this.iconActionOutput = `Click en icono ${ev.type} ${ev.icon} con clase ${ev.class}`
        }
    }
}
</script>

<style lang="scss">
@import '../../../../static/scss/_mixins.scss/_hover/hover-current-color';
@import '../mixins/ui-icon';

$icon-modifiers: ('medium': 18px, 'big': 20px);
$icon-colors: ('red': red, 'big': 20px);
$hover: ();

.ui-icon{
    @include icon($icon-modifiers, $icon-colors);
    @include hoverCurrentColor($hover);
}
</style>