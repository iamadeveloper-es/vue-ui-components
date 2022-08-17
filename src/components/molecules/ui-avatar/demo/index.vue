<template>
    <div class="ui-avatar-demo">
        <div class="flex-md">
            <div class="mr-3">
                <ui-avatar
                :avatarModel="avatarModel1"
                @avatarClicked="counter"
                ></ui-avatar>
                <p>Avatar with image</p>
            </div>
            <div>
                <ui-avatar
                :avatarModel="avatarModel2"
                ></ui-avatar>
                <p>Avatar with initials</p>
            </div>
        </div>
    </div>
</template>

<script>
import UiAvatar from '../../ui-avatar';
export default {
    name: 'ui-avatar-demo',
    components: {
        UiAvatar
    },
    data(){
        return{
            avatarModel1: {
                class: 'mx-auto',
                image: {
                    src: 'dummy-user.jpg',
                    alt: 'User',
                    class: 'ui-image--fluid'
                }
            },
            avatarModel2: {
                class: 'mx-auto',
                initials:{
                    name: 'Daniel verdú martinez',
                    color: 'white',
                    background: 'orange',
                }
            }
        }
    },
    methods: {
        counter(){
            console.log('Hi')
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-avatar';

$base: ('size': 50px, 'border': 2px solid var(--white));
$color-modifiers: ('white': var(--white));
$background-modifiers: ('orange': var(--orange));

.ui-avatar{
  @include avatar($base, $color-modifiers, $background-modifiers);
}
</style>