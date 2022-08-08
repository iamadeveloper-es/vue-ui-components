<template>
    <div class="ui-image-demo">
        <div
        v-for="(data, index) in dummyData"
        :key="index"
        >
            <p>{{data.definition}}</p>
            <ui-image 
            :imgData="data" 
            >
            </ui-image>
        </div>
    </div>
</template>

<script>
import UiImage from '../index.vue'
export default {
  components: { UiImage },
    name: 'ui-image-demo',
    data () {
        return{
            dummyData : [
                {
                    src: 'dummy-image.jpg',
                    alt: 'Text image 1',
                    class: 'fluid',
                    definition: 'Responsive image with class "fluid"'
                },
                {
                    src: 'dummy-image.jpg',
                    alt: 'text image 2',
                    definition: 'Image with undefined size'
                },
                {
                    src: 'dummy-image.jpg',
                    alt: 'text image 3',
                    size: {
                        width: 300
                    },
                    definition: 'Image with fix width'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>