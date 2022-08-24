<template>
  <div class="ui-card-demo">
    <div class="flex-md">
        <div>
            <ui-card
            :width="'95%'"
            :elevation="8"
            @cardClicked="action($event, 'Card')"
            >
                <div slot="header">
                    <ui-image
                    :imgData="imgModel1"
                    ></ui-image>
                </div>
                <div slot="body">
                    <h3 class="mb-1">Card title</h3>
                    <h4>Card subtitle</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.</p>
                </div>
                <div slot="footer">
                    <ui-button
                    :classes="['ui-button--regular']"
                    btnText="Action"
                    @clicked="action($event, 'Button')"
                    ></ui-button>
                </div>
            </ui-card>
        </div>
        <div>
            <ui-card
            :width="'95%'"
            :elevation="8"
            >
                <div slot="header">
                    <ui-image
                    :imgData="imgModel1"
                    ></ui-image>
                </div>
                <div slot="body">
                    <h3 class="mb-1">Card title</h3>
                    <h4>Card subtitle</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.</p>
                </div>
                <div slot="footer">
                    <ui-button
                    :classes="['ui-button--regular mr-2']"
                    btnText="Action"
                    @clicked="action($event, 'Button')"
                    ></ui-button>
                    <ui-button
                    :classes="['ui-button--regular']"
                    btnText="Action"
                    @clicked="action($event, 'Button')"
                    ></ui-button>
                </div>
            </ui-card>
        </div>
    </div>
    <p>{{outputAction}}</p>
  </div>
</template>

<script>
import UiButton from '../../ui-button'
import UiCard from '../../ui-card'
import UiImage from '../../../atoms/ui-image'
export default {
    name: 'ui-card-demo',
    components: {
        UiButton,
        UiCard,
        UiImage
    },
    data() {
        return {
            imgModel1: {
                src: 'dummy-image.jpg',
                alt: 'Text image 1',
                class: 'ui-image--fluid'
            },
            outputAction: ''
        }
    },
    methods: {
        action(ev, target){
            this.outputAction = `Action on ${target}`
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-card';

$base : (
    'width-border': 1px,
    'color-border': var(--tertiary-grey), 
    'style-border': solid,
    'radius': 3px,
    'body-padding': 10px 15px,
    'footer-padding': 10px 15px,
    );

.ui-card{
    @include card($base);
}
</style>