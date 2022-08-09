<template>
    <img 
    :class="hasClass ? imgData.class : ''"
    class="ui-image"
    :src="require(`@/assets/${imgData.src}`)"
    :alt="imgData.alt" 
    :style="[hasWidth ? {width: imgData.size.width} : {}, hasHeight ? {height: imgData.size.height} : {}]"
    :width="hasWidth ? imgData.size.width : ''"
    :height="hasHeight ? imgData.size.height : ''"
    >
</template>
<script>
export default {
    name: 'ui-image',
    props: {
        imgData: {
            type: Object
        },
        // Model:
        /* {
            src: 'dummy-image.jpg',
            alt: 'Text image 1',
            size: {
                width: 100,
                height: 100
            },
            class: 'fluid'
        } */
    },
    computed: {
        hasWidth(){
            return this.imgData.size && this.imgData.size.width
        },
        hasHeight(){
            return this.imgData.size && this.imgData.size.height
        },
        hasClass(){
            return this.imgData.class
        }
    }
}
</script>

<style></style>
