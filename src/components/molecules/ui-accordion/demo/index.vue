<template>
    <div class="ui-accordion-demo">
        <div class="mb-4">
            <h4 class="mb-2">Single item Accordion</h4>
            <ui-accordion
            :title="singleAccordionData.title"
            :selectedId="idSelected"
            @clicked="toggle($event)"
            
            >
                <template slot="content">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sed quibusdam, labore quidem pariatur repellat alias ipsa fugiat ad atque rem nesciunt accusamus illum cumque vitae quas est reiciendis iure.</p>
                </template>
            </ui-accordion>
        </div>
        <div>
            <h4 class="mb-2">Multiple items Accordion</h4>
            <ui-accordion
            v-for="(item, index) in multipleAcordionData"
            :key="index"
            :title="item.title"
            :isOpened="item.opened"
            :selectedId="idSelected"
            @clicked="toggle($event)"
            
            >
                <template slot="content">
                    <div class="flex-md flex-md--gap-20">
                        <ui-card
                        :elevation="8"
                        :cClass="'mb-2'"
                        v-for="(data, index) in item.cardContent"
                        :key="index"
                        >
                            <div slot="header">
                                <ui-image
                                :imgData="data.image"
                                ></ui-image>
                            </div>
                            <div slot="body">
                                <h3 class="mb-1">{{data.title}}</h3>
                                <h4>{{data.subtitle}}</h4>
                                <p>{{data.text}}</p>
                            </div>
                            <div slot="footer">
                                <p>{{data.footerText}}</p>
                            </div>
                        </ui-card>
                    </div>
                </template>
            </ui-accordion>
        </div>
    </div>
</template>

<script>
import UiAccordion from '../../ui-accordion'
import UiCard from '../../ui-card'
import UiImage from '../../../atoms/ui-image'
export default {
    name: 'ui-accordion-demo',
    components:{
        UiAccordion,
        UiCard,
        UiImage
    },
    data(){
        return{
            idSelected: null,
            singleAccordionData: {
                title: 'Single Accordion element'
            },
            multipleAcordionData: [
                {
                    title: 'Multiple Accordion Section 1',
                    cardContent: [
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 1',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 1',
                            subtitle: 'Card subtitle 1',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 1'
                        },
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 2',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 2',
                            subtitle: 'Card subtitle 2',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 2'
                        },
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 3',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 3',
                            subtitle: 'Card subtitle 3',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 3'
                        }
                    ]
                },
                {
                    title: 'Multiple Accordion Section 2',
                    opened: true,
                    cardContent: [
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 4',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 4',
                            subtitle: 'Card subtitle 4',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 4'
                        },
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 5',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 5',
                            subtitle: 'Card subtitle 5',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 5'
                        },
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 6',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 6',
                            subtitle: 'Card subtitle 6',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 6'
                        }
                    ]
                },
                {
                    title: 'Multiple Accordion Section 3',
                    cardContent: [
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 7',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 7',
                            subtitle: 'Card subtitle 7',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 7'
                        },
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 8',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 8',
                            subtitle: 'Card subtitle 8',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 8'
                        },
                        {
                            image: {
                                src: 'dummy-image.jpg',
                                alt: 'Text image 9',
                                class: 'ui-image--fluid'
                            },
                            title: 'Card title 9',
                            subtitle: 'Card subtitle 9',
                            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere ipsam laborum perferendis quas vero labore optio! Quae, porro.',
                            footerText: 'Card footer 9'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        toggle(id){
            this.idSelected !== id ? this.idSelected = id : this.idSelected = ''
        },
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-accordion';

$base: ();

.ui-accordion{
  @include accordion($base);
}
</style>